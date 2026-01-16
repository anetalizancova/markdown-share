import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CopyButton from "./CopyButton";

type MarkdownViewerProps = {
  slug: string;
  title: string;
  content: string;
};

type TocItem = {
  level: number;
  text: string;
  id: string;
};

const headingRegex = /^(#{2,4})\s+(.+)$/gm;

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function extractToc(content: string): TocItem[] {
  const items: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = slugify(text);
    items.push({ level, text, id });
  }

  return items;
}

export default function MarkdownViewer({
  slug,
  title,
  content,
}: MarkdownViewerProps) {
  const toc = extractToc(content);

  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">{title}</h1>
      </header>
      <div className="reader-layout">
        <aside className="toc">
          <p className="toc-title">Obsah</p>
          {toc.length === 0 ? (
            <p className="toc-empty">Žádné nadpisy</p>
          ) : (
            <ul>
              {toc.map((item) => (
                <li key={item.id} className={`toc-item level-${item.level}`}>
                  <a href={`#${item.id}`}>{item.text}</a>
                </li>
              ))}
            </ul>
          )}
        </aside>
        <div className="markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2({ children, ...props }) {
                const text = String(children);
                const id = slugify(text);
                return (
                  <h2 id={id} {...props}>
                    {children}
                  </h2>
                );
              },
              h3({ children, ...props }) {
                const text = String(children);
                const id = slugify(text);
                return (
                  <h3 id={id} {...props}>
                    {children}
                  </h3>
                );
              },
              h4({ children, ...props }) {
                const text = String(children);
                const id = slugify(text);
                return (
                  <h4 id={id} {...props}>
                    {children}
                  </h4>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
      <div className="floating-actions">
        <CopyButton content={content} />
        <a className="btn btn-secondary" href={`/markdowns/${slug}.md`} download>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 11L8 1M8 11L4 7M8 11L12 7M2 13L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download
        </a>
      </div>
    </div>
  );
}
