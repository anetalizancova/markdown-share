"use client";

import { useState, useEffect } from "react";
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
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Sdílej tento markdown: ${title}`,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareUrl);
      // Could add toast notification here
    }
  };

  return (
    <div className="page">
      <header className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">{title}</h1>
          <a className="admin-link" href="/admin" title="Admin panel">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 8L8 10L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="page-toolbar">
          <CopyButton content={content} />
          <a className="btn btn-toolbar" href={`/markdowns/${slug}.md`} download={`${slug}.md`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 11L8 1M8 11L4 7M8 11L12 7M2 13L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download .md
          </a>
          <button className="btn btn-toolbar" onClick={handleShare} title="Sdílet link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M13 3L13 13M3 13L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Share
          </button>
        </div>
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
    </div>
  );
}
