import fs from "node:fs";
import path from "node:path";

const MARKDOWN_DIR = path.join(process.cwd(), "public", "markdowns");

export type MarkdownFile = {
  slug: string;
  title: string;
  content: string;
};

export function getMarkdownSlugs(): string[] {
  if (!fs.existsSync(MARKDOWN_DIR)) {
    return [];
  }

  return fs
    .readdirSync(MARKDOWN_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getMarkdownBySlug(slug: string): MarkdownFile | null {
  if (!slug || typeof slug !== "string") {
    return null;
  }

  const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "");
  const filePath = path.join(MARKDOWN_DIR, `${safeSlug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, "utf8");
  const title = extractTitle(content) ?? safeSlug;

  return {
    slug: safeSlug,
    title,
    content,
  };
}

function extractTitle(content: string): string | null {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}
