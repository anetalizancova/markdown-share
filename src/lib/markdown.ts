import fs from "node:fs";
import path from "node:path";

const MARKDOWN_DIR = path.join(process.cwd(), "public", "markdowns");

export type MarkdownFile = {
  slug: string;
  title: string;
  content: string;
};

export type MarkdownFileInfo = {
  slug: string;
  filename: string;
  title: string;
  url: string;
  date: string;
  time: string;
  size: number;
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
    console.error(`Markdown file not found: ${filePath}`);
    console.error(`Looking for slug: ${slug} -> safeSlug: ${safeSlug}`);
    console.error(`Markdown directory: ${MARKDOWN_DIR}`);
    if (fs.existsSync(MARKDOWN_DIR)) {
      const availableFiles = fs.readdirSync(MARKDOWN_DIR);
      console.error(`Available files:`, availableFiles);
    }
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

export function getAllMarkdownFiles(): MarkdownFileInfo[] {
  if (!fs.existsSync(MARKDOWN_DIR)) {
    console.error(`Markdown directory not found: ${MARKDOWN_DIR}`);
    console.error(`Current working directory: ${process.cwd()}`);
    return [];
  }

  const files = fs
    .readdirSync(MARKDOWN_DIR)
    .filter((file) => file.endsWith(".md"));
  
  console.log(`Found ${files.length} markdown files in ${MARKDOWN_DIR}:`, files);

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(MARKDOWN_DIR, filename);
      const stats = fs.statSync(filePath);
      const content = fs.readFileSync(filePath, "utf8");
      const title = extractTitle(content) ?? slug;

      const date = stats.mtime;
      const dateStr = date.toLocaleDateString("cs-CZ", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
      });
      const timeStr = date.toLocaleTimeString("cs-CZ", {
        hour: "2-digit",
        minute: "2-digit",
      });

      return {
        slug,
        filename,
        title,
        url: `/${slug}`,
        date: dateStr,
        time: timeStr,
        size: stats.size,
      };
    })
    .sort((a, b) => {
      // Sort by date, newest first
      const filePathA = path.join(MARKDOWN_DIR, a.filename);
      const filePathB = path.join(MARKDOWN_DIR, b.filename);
      const statsA = fs.statSync(filePathA);
      const statsB = fs.statSync(filePathB);
      return statsB.mtime.getTime() - statsA.mtime.getTime();
    });
}

export function deleteMarkdownFile(slug: string): boolean {
  const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "");
  const filePath = path.join(MARKDOWN_DIR, `${safeSlug}.md`);

  if (!fs.existsSync(filePath)) {
    return false;
  }

  try {
    fs.unlinkSync(filePath);
    return true;
  } catch {
    return false;
  }
}

function extractTitle(content: string): string | null {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}
