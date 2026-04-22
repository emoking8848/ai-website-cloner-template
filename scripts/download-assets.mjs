import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const [inspectionFile, siteSlug = "site"] = process.argv.slice(2);

if (!inspectionFile) {
  console.error("Usage: node scripts/download-assets.mjs <inspection-json> [site-slug]");
  process.exit(1);
}

const rootDir = process.cwd();
const outputDir = path.join(rootDir, "public", "images", siteSlug);

await fs.mkdir(outputDir, { recursive: true });

const inspection = JSON.parse(await fs.readFile(inspectionFile, "utf8"));

const sections = ["offers", "trending", "whatsNew", "featured", "stories"];

const urls = [
  ...sections.flatMap((section) =>
    Array.isArray(inspection[section])
      ? inspection[section].map((item) => item.image).filter(Boolean)
      : [],
  ),
  ...inspection.images.slice(0, 24).map((item) => item.src).filter(Boolean),
];

const uniqueUrls = [...new Set(urls)].filter((url) => /^https?:\/\//.test(url));

async function download(url, index) {
  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }

  const urlObject = new URL(url);
  const extFromPath = path.extname(urlObject.pathname) || ".jpg";
  const safeName = `${String(index + 1).padStart(2, "0")}${extFromPath.split("?")[0]}`;
  const filePath = path.join(outputDir, safeName);
  const bytes = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(filePath, bytes);

  return {
    url,
    filePath,
    publicPath: `/images/${siteSlug}/${safeName}`,
  };
}

const manifest = [];

for (let index = 0; index < uniqueUrls.length; index += 1) {
  const url = uniqueUrls[index];
  try {
    manifest.push(await download(url, index));
  } catch (error) {
    manifest.push({
      url,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

const manifestPath = path.join(rootDir, "docs", "research", siteSlug, "assets.json");
await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.log(
  JSON.stringify(
    {
      count: manifest.filter((item) => item.publicPath).length,
      manifestPath,
      outputDir,
    },
    null,
    2,
  ),
);
