import fs from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const sourcePath = path.join(rootDir, "docs", "research", "johnlewis.com", "homepage.html");
const outputPath = path.join(rootDir, "public", "johnlewis-archive.html");
const siteOrigin = "https://www.johnlewis.com";

const html = await fs.readFile(sourcePath, "utf8");

const withoutScripts = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<script\b[^>]*\/>/gi, "");

const stylesheetMatches = [...withoutScripts.matchAll(/<link\b[^>]*rel=("|')stylesheet\1[^>]*href=("|')([^"']+)\2[^>]*>/gi)];
const stylesheetHrefs = [...new Set(stylesheetMatches.map((match) => new URL(match[3], siteOrigin).href))];

async function inlineStylesheet(href) {
  const response = await fetch(href);
  if (!response.ok) {
    throw new Error(`Failed to fetch stylesheet: ${href}`);
  }

  const css = await response.text();

  return css
    .replace(/url\((["']?)([^)"']+)\1\)/gi, (_match, quote, assetUrl) => {
      if (/^(data:|https?:|#)/i.test(assetUrl)) {
        return `url(${quote}${assetUrl}${quote})`;
      }

      const absoluteAssetUrl = new URL(assetUrl, href).href;
      return `url(${quote}${absoluteAssetUrl}${quote})`;
    })
    .replace(/@import\s+(url\()?["']([^"']+)["']\)?/gi, (_match, _urlFn, importUrl) => {
      const absoluteImportUrl = new URL(importUrl, href).href;
      return `@import url("${absoluteImportUrl}")`;
    });
}

const inlinedStyles = (
  await Promise.all(
    stylesheetHrefs.map(async (href) => {
      const css = await inlineStylesheet(href);
      return `/* ${href} */\n${css}`;
    }),
  )
).join("\n\n");

const withoutStylesheetLinks = withoutScripts.replace(
  /<link\b[^>]*rel=("|')stylesheet\1[^>]*>/gi,
  "",
);

const withBase = withoutStylesheetLinks.replace(
  /<head>/i,
  `<head>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      background: #ffffff;
    }

    iframe {
      border: 0;
    }

    #pecr-cookie-banner-wrapper,
    .overlay-message--cookies,
    .typeahead-overlay-bpTransparentOverlay--40e13,
    .typeahead-overlay-bpOverlay--875af {
      display: none !important;
    }

    .logo-container--2ea3f {
      height: 39px !important;
      width: 118.75px !important;
    }

    .logo-container--2ea3f > a {
      display: block !important;
      height: 39px !important;
      overflow: hidden !important;
      width: 118.75px !important;
    }

    .logo-logo--5b465 {
      display: block !important;
      height: 39px !important;
      max-height: none !important;
      max-width: none !important;
      width: 150.83px !important;
      transform: translateX(-32.32px) !important;
    }

    @media only screen and (max-width: 767px) {
      .logo-container--2ea3f {
        height: 32px !important;
        width: 97.25px !important;
      }

      .logo-container--2ea3f > a {
        height: 32px !important;
        width: 97.25px !important;
      }

      .logo-logo--5b465 {
        height: 32px !important;
        width: 123.76px !important;
        transform: translateX(-26.52px) !important;
      }
    }
  </style>
  <style data-archived-styles>
${inlinedStyles}
  </style>`,
);

const rewrittenPaths = withBase
  .replace(/\b(href|src|action|poster)=("|\')\/(?!\/)/gi, (_match, attr, quote) => {
    return `${attr}=${quote}${siteOrigin}/`;
  })
  .replace(/\bcontent=("|\')\/(?!\/)/gi, (_match, quote) => {
    return `content=${quote}${siteOrigin}/`;
  });

const normalized = rewrittenPaths
  .replace(/<meta http-equiv="X-UA-Compatible"[^>]*>/gi, "")
  .replace(/<meta name="viewport"[^>]*>\s*<meta name="viewport"[^>]*>/i, `<meta name="viewport" content="width=device-width, initial-scale=1">`)
  .replaceAll(
    `${siteOrigin}/header-ui-assets/static/images/john-lewis-partners-f6c40704.svg`,
    "/johnlewis-logo-custom.png",
  );

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, normalized, "utf8");

console.log(`Archive written to ${outputPath}`);
