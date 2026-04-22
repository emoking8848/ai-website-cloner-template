import fs from "node:fs/promises";
import path from "node:path";

const targetUrl = "https://www.johnlewis.com/customer-services/contact-us?dt=deliveryQueries";
const siteOrigin = "https://www.johnlewis.com";
const rootDir = process.cwd();
const researchDir = path.join(rootDir, "docs", "research", "johnlewis.com");
const sourcePath = path.join(researchDir, "contact-us-delivery.html");
const outputPath = path.join(rootDir, "public", "johnlewis-contact-us-delivery-archive.html");

async function fetchSourceHtml() {
  const response = await fetch(targetUrl, {
    headers: {
      "accept-language": "en-GB,en;q=0.9",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${targetUrl}: ${response.status}`);
  }

  return response.text();
}

function rewriteCssUrls(css, href) {
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

function rewriteSrcsetValue(value) {
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const parts = entry.split(/\s+/);
      const [url, descriptor] = parts;

      if (!url || /^(data:|https?:)/i.test(url)) {
        return entry;
      }

      const rewritten = new URL(url, siteOrigin).href;
      return descriptor ? `${rewritten} ${descriptor}` : rewritten;
    })
    .join(", ");
}

const html = await fetchSourceHtml();
await fs.mkdir(researchDir, { recursive: true });
await fs.writeFile(sourcePath, html, "utf8");

const withoutScripts = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<script\b[^>]*\/>/gi, "");

const stylesheetMatches = [
  ...withoutScripts.matchAll(/<link\b[^>]*rel=("|')stylesheet\1[^>]*href=("|')([^"']+)\2[^>]*>/gi),
];
const stylesheetHrefs = [...new Set(stylesheetMatches.map((match) => new URL(match[3], siteOrigin).href))];

const inlinedStyles = (
  await Promise.all(
    stylesheetHrefs.map(async (href) => {
      const response = await fetch(href, {
        headers: {
          "accept-language": "en-GB,en;q=0.9",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch stylesheet: ${href}`);
      }

      const css = await response.text();
      return `/* ${href} */\n${rewriteCssUrls(css, href)}`;
    }),
  )
).join("\n\n");

const withoutStylesheetLinks = withoutScripts.replace(/<link\b[^>]*rel=("|')stylesheet\1[^>]*>/gi, "");

const withArchiveStyles = withoutStylesheetLinks.replace(
  /<head>/i,
  `<head>
  <style>
    html,
    body {
      margin: 0;
      min-height: 100%;
      padding: 0;
      background: #ffffff;
    }

    iframe {
      border: 0;
    }

    #pecr-cookie-banner-wrapper,
    #chat-snap-in-widget,
    #minibasket,
    .overlay-message--cookies,
    .typeahead-overlay-bpTransparentOverlay--40e13,
    .typeahead-overlay-bpOverlay--875af,
    .faq_faq__spinner__ZcCvu,
    .spinner_spinnerContainer__BaTtg,
    [class*="LoadingSpinner_loading-spinner__"],
    jl-rvi {
      display: none !important;
    }
  </style>
  <style data-archived-styles>
${inlinedStyles}
  </style>`,
);

const rewrittenPaths = withArchiveStyles
  .replace(/\b(href|src|action|poster)=("|\')\/(?!\/)/gi, (_match, attr, quote) => `${attr}=${quote}${siteOrigin}/`)
  .replace(/\bcontent=("|\')\/(?!\/)/gi, (_match, quote) => `content=${quote}${siteOrigin}/`)
  .replace(/\bsrcset=("|\')([^"']+)\1/gi, (_match, quote, value) => `srcset=${quote}${rewriteSrcsetValue(value)}${quote}`)
  .replace(/url\((["']?)\/(?!\/)/gi, (_match, quote) => `url(${quote}${siteOrigin}/`);

const normalized = rewrittenPaths
  .replace(/<meta http-equiv="X-UA-Compatible"[^>]*>/gi, "")
  .replace(
    /<meta name="viewport"[^>]*>\s*<meta name="viewport"[^>]*>/i,
    `<meta name="viewport" content="width=device-width, initial-scale=1">`,
  );

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, normalized, "utf8");

console.log(`Archive written to ${outputPath}`);
