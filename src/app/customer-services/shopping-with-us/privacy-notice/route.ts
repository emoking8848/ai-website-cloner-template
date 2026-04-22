import fs from "node:fs/promises";
import path from "node:path";

const archivePath = path.join(process.cwd(), "public", "johnlewis-privacy-notice-archive.html");

async function loadArchive() {
  return fs.readFile(archivePath, "utf8");
}

export async function GET() {
  const html = await loadArchive();

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

export async function HEAD() {
  await fs.access(archivePath);

  return new Response(null, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}
