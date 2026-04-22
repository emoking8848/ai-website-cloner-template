import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const [targetUrl, siteSlug = "site"] = process.argv.slice(2);

if (!targetUrl) {
  console.error("Usage: node scripts/inspect-site.mjs <url> [site-slug]");
  process.exit(1);
}

const rootDir = process.cwd();
const researchDir = path.join(rootDir, "docs", "research", siteSlug);
const referenceDir = path.join(rootDir, "docs", "design-references", siteSlug);

await fs.mkdir(researchDir, { recursive: true });
await fs.mkdir(referenceDir, { recursive: true });

const homepageHtmlPath = path.join(researchDir, "homepage.html");
const dataPath = path.join(researchDir, "inspection.json");
const behaviorsPath = path.join(researchDir, "BEHAVIORS.md");
const topologyPath = path.join(researchDir, "PAGE_TOPOLOGY.md");

function decode(value = "") {
  return value
    .replace(/\\u002F/g, "/")
    .replace(/\\u0026/g, "&")
    .replace(/\\u0027/g, "'")
    .replace(/\\u003A/g, ":")
    .replace(/\\u003D/g, "=")
    .replace(/\\u0020/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function blockMatch(html, startPattern, endPattern) {
  const regex = new RegExp(`${startPattern}[\\s\\S]*?${endPattern}`, "i");
  return html.match(regex)?.[0] ?? "";
}

function uniqueBy(items, keyGetter) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyGetter(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function extractImageCards(html) {
  return uniqueBy(
    [...html.matchAll(/<a href="([^"]+)" class="card-item-ImageCardItem_imageBlock[^"]*" aria-label="([^"]+) - Image - [^"]*"><div[\s\S]*?<img[^>]+src="([^"]+)"[^>]+alt="([^"]+)"/g)].map(
      ([, href, title, src, alt]) => ({
        title: decode(title),
        href: href.startsWith("http") ? href : `https://www.johnlewis.com${decode(href)}`,
        image: decode(src),
        alt: decode(alt),
      }),
    ),
    (item) => item.title,
  );
}

function extractOffers(html) {
  const block =
    html.match(
      /"name":"Always on - Homepage - Offer buttons"[\s\S]*?"theme":"default"/,
    )?.[0] ?? "";

  return [...block.matchAll(/"heading":"([^"]+)","subheading":"([^"]+)","linkUrl":"([^"]+)"/g)].map(
    ([, heading, subheading, linkUrl]) => ({
      heading: decode(heading),
      subheading: decode(subheading),
      href: `https://www.johnlewis.com${decode(linkUrl)}`,
    }),
  );
}

function extractLinkedCards(block) {
  return [...block.matchAll(/"linkText":"([^"]+)","linkUrl":"([^"]+)".*?"name":"([^"]+)".*?"defaultHost":"([^"]+)".*?"altImgText":"([^"]+)"/g)].map(
    ([, text, href, name, host, alt]) => ({
      title: decode(text),
      href: `https://www.johnlewis.com${decode(href)}`,
      image: `https://${decode(host)}/i/JohnLewis/${encodeURIComponent(decode(name))}?fmt=auto&wid=800&sm=aspect&aspect=1:1`,
      alt: decode(alt),
    }),
  );
}

function extractStories(html) {
  return [...html.matchAll(/<a href="([^"]+)" aria-label="([^"]+) - Image - ([^"]+) " class="content-block-contentBlock_imageBlock[\s\S]*?<img[^>]+src="([^"]+)"[^>]+alt="([^"]+)"[\s\S]*?<h3 class="content-block-contentBlock_heading[^"]*">([^<]+)<\/h3>[\s\S]*?<p class="content-block-contentBlock_subCopy[^>]*>([^<]+)<\/p>[\s\S]*?<a href="[^"]+"[^>]*>([^<]+)<\/a>/g)].map(
    ([, href, , , image, alt, heading, subCopy, cta]) => ({
      title: decode(heading),
      description: decode(subCopy),
      cta: decode(cta),
      href: `https://www.johnlewis.com${decode(href)}`,
      image: decode(image),
      alt: decode(alt),
    }),
  );
}

function extractFeatured(html) {
  return [...html.matchAll(/<article class="product-card[\s\S]*?<a aria-hidden="true"[^>]+href="([^"]+)"[^>]*><img alt="([^"]+)"[^>]+src="([^"]+)"[\s\S]*?<p aria-label="The price is ([^"]+)"/g)].map(
    ([, href, title, image, price]) => ({
      title: decode(title),
      price: decode(price),
      href: `https://www.johnlewis.com${decode(href)}`,
      image: decode(image).startsWith("//")
        ? `https:${decode(image)}`
        : decode(image),
    }),
  );
}

function extractFooterColumns(html) {
  const columns = [...html.matchAll(/<h3 class="footer-links-section-name"[^>]*>[\s\S]*?<span class="title">([^<]+)<\/span>[\s\S]*?<div[^>]+class="footer-links-section-content"[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/g)].map(
    ([, heading, listHtml]) => ({
      heading: decode(heading),
      items: [...listHtml.matchAll(/<a[^>]*class="footer-link"[^>]*>([^<]+)<\/a>/g)]
        .map((match) => decode(match[1]))
        .filter(Boolean)
        .slice(0, 10),
    }),
  );

  return columns.filter((column) => column.heading && column.items.length);
}

const response = await fetch(targetUrl, {
  headers: {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
  },
});

if (!response.ok) {
  throw new Error(`Failed to fetch ${targetUrl}: ${response.status}`);
}

const html = await response.text();
await fs.writeFile(homepageHtmlPath, html, "utf8");

const title =
  decode(html.match(/<title>([^<]+)<\/title>/i)?.[1] ?? "") || "Website Clone";
const description = decode(
  html.match(/<meta name="description" content="([^"]+)"/i)?.[1] ?? "",
);
const ogImage = decode(
  html.match(/<meta property="og:image" content="([^"]+)"/i)?.[1] ?? "",
);
const canonical = decode(
  html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1] ?? targetUrl,
);
const logo = decode(
  html.match(/<img src="([^"]+john-lewis-partners[^"]+\.svg)" alt="John Lewis/i)?.[1] ??
    "",
);

const navLinks = [
  ...new Set(
    [...html.matchAll(/id="desktop-menu-item-[^"]+">([^<]+)</g)].map((match) =>
      decode(match[1]),
    ),
  ),
];

const heroHeading = decode(
  html.match(/<h1 class="hero-banner-[^"]+">([^<]+)<\/h1>/i)?.[1] ?? "",
);
const heroSubheading = decode(
  html.match(/hero-banner_subHeading[^>]*>([^<]+)</i)?.[1] ?? "",
);
const heroCta = decode(
  html.match(/content-underline-button-[^>]*>(Women&#x27;s Occasionwear|[^<]+)</i)?.[1] ??
    "",
);
const heroImage = decode(
  html.match(/hero-banner[\s\S]*?<img[^>]+src="([^"]+johnlewiscontent[^"]+)"/i)?.[1] ?? "",
);
const heroCards = extractImageCards(html).slice(0, 6);

const trendingBlock = blockMatch(html, '"heading":"Trending this week"', '"variant":"large"');

const stories = extractStories(html);
const featured = extractFeatured(html).slice(0, 10);

const inspection = {
  title,
  description,
  canonical,
  ogImage,
  logo,
  navLinks,
  hero: {
    heading: heroHeading,
    subheading: heroSubheading,
    cta: heroCta,
    image: heroImage,
    cards: heroCards,
  },
  offers: extractOffers(html),
  trending: extractLinkedCards(trendingBlock),
  stories,
  featured,
  promiseText: decode(
    html.match(/"content":"([^"]+never be knowingly undersold[^"]+)"/i)?.[1] ?? "",
  ),
  newsletter: {
    heading: "Be in the know",
    description: "Get inspiration, new arrivals and the latest offers to your inbox",
    cta: "Sign me up for emails",
  },
  footerColumns: extractFooterColumns(html),
  imagePool: uniqueBy(
    [...html.matchAll(/<img[^>]+src="([^"]+)"[^>]+alt="([^"]*)"/g)].map(
      ([, src, alt]) => ({
        src: decode(src),
        alt: decode(alt),
      }),
    ),
    (item) => item.src,
  ).filter((item) => item.src.includes("johnlewiscontent.com") || item.src.includes("john-lewis-partners")),
};

const topologyLines = [
  "# John Lewis Homepage Topology",
  "",
  `- Source URL: ${inspection.canonical}`,
  "- Page flow: utility strip -> search header -> department navigation -> editorial hero -> six linked hero promos -> offer chips -> trending cards -> featured products -> editorial stories -> brand promise -> newsletter -> footer columns",
  "- Layout character: neutral, editorial ecommerce layout with wide white space, crisp black typography, and image-led merchandising.",
  "- Interaction model: mostly static linked content cards with scroll-based reading flow and utility navigation at the top.",
];

const behaviorLines = [
  "# John Lewis Homepage Behaviors",
  "",
  "- Navigation is dominated by clickable header and department links.",
  "- Homepage merchandising is card-based: hero promos, trending tiles, product cards, and story cards are all primary click targets.",
  "- The page is content-led rather than animation-led; the main emphasis is on responsive card grids and large imagery.",
  "- This inspection was generated from fetched homepage HTML because this site rejected local headless browser capture in the current environment.",
];

await fs.writeFile(dataPath, `${JSON.stringify(inspection, null, 2)}\n`, "utf8");
await fs.writeFile(topologyPath, `${topologyLines.join("\n")}\n`, "utf8");
await fs.writeFile(behaviorsPath, `${behaviorLines.join("\n")}\n`, "utf8");

console.log(
  JSON.stringify(
    {
      title,
      canonical,
      dataPath,
      topologyPath,
      behaviorsPath,
      counts: {
        navLinks: inspection.navLinks.length,
        heroCards: inspection.hero.cards.length,
        offers: inspection.offers.length,
        trending: inspection.trending.length,
        featured: inspection.featured.length,
        stories: inspection.stories.length,
        footerColumns: inspection.footerColumns.length,
      },
    },
    null,
    2,
  ),
);
