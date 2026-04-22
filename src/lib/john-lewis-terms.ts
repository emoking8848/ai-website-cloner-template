import { readFileSync } from "node:fs";
import path from "node:path";

export type TermsBlock =
  | {
      id: string;
      kind: "h2";
      text: string;
    }
  | {
      id: string;
      kind: "h3";
      text: string;
    }
  | {
      id: string;
      kind: "p";
      html: string;
    }
  | {
      id: string;
      kind: "ul";
      items: string[];
    };

const TERMS_FILE_PATH = path.join(
  process.cwd(),
  "docs",
  "research",
  "johnlewis.com",
  "terms-page.txt",
);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createSlug(text: string, slugCounts: Map<string, number>) {
  const baseSlug =
    text
      .toLowerCase()
      .replaceAll(/&/g, "and")
      .replaceAll(/[^a-z0-9]+/g, "-")
      .replaceAll(/^-+|-+$/g, "") || "section";

  const currentCount = slugCounts.get(baseSlug) ?? 0;
  slugCounts.set(baseSlug, currentCount + 1);

  return currentCount === 0 ? baseSlug : `${baseSlug}-${currentCount + 1}`;
}

function renderInlineMarkdown(text: string) {
  const matcher = /(\[([^\]]+)\]\((\S+?)(?:\s+"[^"]*")?\)|\*\*([^*]+)\*\*)/g;
  let html = "";
  let cursor = 0;

  for (const match of text.matchAll(matcher)) {
    const [fullMatch, , label, href, boldText] = match;
    const index = match.index ?? 0;

    html += escapeHtml(text.slice(cursor, index));

    if (label && href) {
      html += `<a href="${escapeAttribute(href)}">${escapeHtml(label)}</a>`;
    } else if (boldText) {
      html += `<strong>${escapeHtml(boldText)}</strong>`;
    } else {
      html += escapeHtml(fullMatch);
    }

    cursor = index + fullMatch.length;
  }

  html += escapeHtml(text.slice(cursor));

  return html;
}

export function getJohnLewisTermsBlocks(): TermsBlock[] {
  const rawText = readFileSync(TERMS_FILE_PATH, "utf8");
  const body = rawText.split("Markdown Content:")[1]?.trim();

  if (!body) {
    return [];
  }

  const lines = body.split(/\r?\n/);
  const blocks: TermsBlock[] = [];
  const slugCounts = new Map<string, number>();
  let paragraphLines: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (paragraphLines.length === 0) {
      return;
    }

    const text = paragraphLines.join(" ").replaceAll(/\s+/g, " ").trim();

    if (text) {
      blocks.push({
        id: `paragraph-${blocks.length + 1}`,
        kind: "p",
        html: renderInlineMarkdown(text),
      });
    }

    paragraphLines = [];
  };

  const flushList = () => {
    if (listItems.length === 0) {
      return;
    }

    blocks.push({
      id: `list-${blocks.length + 1}`,
      kind: "ul",
      items: listItems.map((item) => renderInlineMarkdown(item)),
    });
    listItems = [];
  };

  const pushHeading = (kind: "h2" | "h3", text: string) => {
    const headingText = text.trim();

    if (!headingText) {
      return;
    }

    blocks.push({
      id: createSlug(headingText, slugCounts),
      kind,
      text: headingText,
    });
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      pushHeading("h2", trimmed.replace(/^##\s+/, ""));
      continue;
    }

    if (/^\*\*[^*]+?\*\*$/.test(trimmed)) {
      flushParagraph();
      flushList();
      pushHeading("h3", trimmed.slice(2, -2));
      continue;
    }

    if (trimmed.startsWith("*")) {
      flushParagraph();
      listItems.push(trimmed.replace(/^\*\s+/, "").trim());
      continue;
    }

    flushList();
    paragraphLines.push(trimmed);
  }

  flushParagraph();
  flushList();

  return blocks;
}
