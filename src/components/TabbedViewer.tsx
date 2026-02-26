"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Doc = {
  slug: string;
  title: string;
  content: string;
  shortTitle: string;
};

type Comment = {
  id: string;
  docSlug: string;
  text: string;
  sectionRef: string;
  timestamp: number;
  resolved: boolean;
};

type TocItem = {
  level: number;
  text: string;
  id: string;
};

const STORAGE_KEY = "lead-magnets-comments";

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
  const regex = /^(#{2,4})\s+(.+)$/gm;
  let match;
  while ((match = regex.exec(content)) !== null) {
    items.push({
      level: match[1].length,
      text: match[2].trim(),
      id: slugify(match[2].trim()),
    });
  }
  return items;
}

function downloadFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function CopiedToast({ show }: { show: boolean }) {
  if (!show) return null;
  return <span className="copied-toast">Zkopírováno!</span>;
}

export default function TabbedViewer({ docs }: { docs: Doc[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [inlineSection, setInlineSection] = useState<string | null>(null);
  const [inlineText, setInlineText] = useState("");
  const [showPanel, setShowPanel] = useState(false);
  const [copied, setCopied] = useState(false);
  const inlineRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setComments(JSON.parse(stored)); } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  }, [comments]);

  const activeDoc = docs[activeTab];
  const toc = extractToc(activeDoc.content);
  const docComments = comments.filter(
    (c) => c.docSlug === activeDoc.slug && !c.resolved
  );
  const allActiveComments = comments.filter((c) => !c.resolved);

  const addComment = useCallback(
    (sectionRef: string, text: string) => {
      if (!text.trim()) return;
      setComments((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          docSlug: activeDoc.slug,
          text: text.trim(),
          sectionRef,
          timestamp: Date.now(),
          resolved: false,
        },
      ]);
    },
    [activeDoc.slug]
  );

  const resolveComment = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, resolved: true } : c))
    );
  };

  const deleteComment = (id: string) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  const formatTime = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleDateString("cs-CZ", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const docForSlug = (slug: string) => docs.find((d) => d.slug === slug);

  const commentsForSection = (section: string) =>
    docComments.filter((c) => c.sectionRef === section);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openInlineComment = (section: string) => {
    setInlineSection(section);
    setInlineText("");
    setTimeout(() => inlineRef.current?.focus(), 50);
  };

  const submitInlineComment = () => {
    if (inlineSection !== null) {
      addComment(inlineSection, inlineText);
      setInlineSection(null);
      setInlineText("");
    }
  };

  const allContent = docs.map((d) => `# ${d.title}\n\n${d.content}`).join("\n\n---\n\n");

  const SectionHeading = ({
    level,
    id,
    text,
    children,
    ...props
  }: {
    level: 2 | 3 | 4;
    id: string;
    text: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    const Tag = `h${level}` as const;
    const sectionComments = commentsForSection(text);
    const isOpen = inlineSection === text;

    return (
      <>
        <div className="section-heading-row">
          <Tag id={id} {...props}>
            {children}
          </Tag>
          <button
            className={`section-comment-btn ${sectionComments.length > 0 ? "has-comments" : ""}`}
            onClick={() => (isOpen ? setInlineSection(null) : openInlineComment(text))}
            title="Přidat komentář k této sekci"
          >
            {sectionComments.length > 0 ? (
              <span className="section-comment-count">{sectionComments.length}</span>
            ) : (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {sectionComments.length > 0 && !isOpen && (
          <div className="inline-comments-preview">
            {sectionComments.map((c) => (
              <div key={c.id} className="inline-comment-chip">
                <span className="inline-comment-chip-text">{c.text}</span>
                <button
                  className="inline-comment-chip-resolve"
                  onClick={() => resolveComment(c.id)}
                  title="Vyřešit"
                >
                  ✓
                </button>
                <button
                  className="inline-comment-chip-delete"
                  onClick={() => deleteComment(c.id)}
                  title="Smazat"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {isOpen && (
          <div className="inline-comment-form">
            <textarea
              ref={inlineRef}
              value={inlineText}
              onChange={(e) => setInlineText(e.target.value)}
              placeholder={`Komentář k "${text}"...`}
              className="comment-textarea"
              rows={2}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.metaKey) submitInlineComment();
                if (e.key === "Escape") setInlineSection(null);
              }}
            />
            <div className="inline-comment-form-actions">
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setInlineSection(null)}
              >
                Zrušit
              </button>
              <button className="btn btn-primary btn-sm" onClick={submitInlineComment}>
                Uložit
              </button>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="tabbed-page">
      <header className="tabbed-header">
        <div className="tabbed-header-top">
          <div>
            <p className="tabbed-eyebrow">B2B Lead Magnety — Aibility</p>
            <h1 className="tabbed-title">Lead Magnety pro review</h1>
          </div>
          <div className="tabbed-header-actions">
            <div className="dropdown-wrap">
              <button className="btn btn-toolbar dropdown-trigger">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 11L8 1M8 11L4 7M8 11L12 7M2 13L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Stáhnout ▾
              </button>
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={() => downloadFile(`${activeDoc.slug}.md`, activeDoc.content)}
                >
                  Stáhnout aktuální tab (.md)
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => downloadFile("lead-magnety-vsechny.md", allContent)}
                >
                  Stáhnout všechny 3 (.md)
                </button>
              </div>
            </div>

            <div className="dropdown-wrap">
              <button className="btn btn-toolbar dropdown-trigger">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 11L3 3C3 2.44772 3.44772 2 4 2L10 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Kopírovat ▾
                <CopiedToast show={copied} />
              </button>
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={() => handleCopy(activeDoc.content)}
                >
                  Kopírovat aktuální tab
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCopy(allContent)}
                >
                  Kopírovat všechny 3
                </button>
              </div>
            </div>

            <button
              className={`btn btn-toolbar ${showPanel ? "btn-toolbar-active" : ""}`}
              onClick={() => setShowPanel(!showPanel)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4H14M2 8H14M2 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Komentáře{" "}
              {allActiveComments.length > 0 && (
                <span className="comment-badge">{allActiveComments.length}</span>
              )}
            </button>
          </div>
        </div>
        <nav className="tab-bar">
          {docs.map((doc, i) => (
            <button
              key={doc.slug}
              className={`tab-btn ${i === activeTab ? "tab-active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              <span className="tab-number">{i + 1}</span>
              {doc.shortTitle}
              {comments.filter((c) => c.docSlug === doc.slug && !c.resolved)
                .length > 0 && (
                <span className="tab-comment-dot" />
              )}
            </button>
          ))}
        </nav>
      </header>

      <div className={`tabbed-layout ${showPanel ? "with-panel" : ""}`}>
        <aside className="toc">
          <p className="toc-title">Obsah</p>
          {toc.length === 0 ? (
            <p className="toc-empty">Žádné nadpisy</p>
          ) : (
            <ul>
              {toc.map((item) => (
                <li key={item.id} className={`toc-item level-${item.level}`}>
                  <a href={`#${item.id}`}>{item.text}</a>
                  {commentsForSection(item.text).length > 0 && (
                    <span className="toc-comment-indicator">
                      {commentsForSection(item.text).length}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </aside>

        <div className="markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2({ children }) {
                const text = String(children);
                const id = slugify(text);
                return <SectionHeading level={2} id={id} text={text}>{children}</SectionHeading>;
              },
              h3({ children }) {
                const text = String(children);
                const id = slugify(text);
                return <SectionHeading level={3} id={id} text={text}>{children}</SectionHeading>;
              },
              h4({ children }) {
                const text = String(children);
                const id = slugify(text);
                return <SectionHeading level={4} id={id} text={text}>{children}</SectionHeading>;
              },
            }}
          >
            {activeDoc.content}
          </ReactMarkdown>
        </div>

        {showPanel && (
          <aside className="comment-panel">
            <div className="comment-panel-header">
              <h3>Všechny komentáře</h3>
            </div>

            <div className="comment-list">
              {allActiveComments.length === 0 && (
                <p className="comment-empty">
                  Zatím žádné komentáře. Klikni na &quot;+&quot; u nadpisu sekce.
                </p>
              )}
              {allActiveComments.map((c) => {
                const doc = docForSlug(c.docSlug);
                const isCurrent = c.docSlug === activeDoc.slug;
                return (
                  <div
                    key={c.id}
                    className={`comment-card ${!isCurrent ? "comment-card-muted" : ""}`}
                  >
                    {!isCurrent && (
                      <p className="comment-doc-label">{doc?.shortTitle}</p>
                    )}
                    {c.sectionRef && (
                      <p className="comment-section">📌 {c.sectionRef}</p>
                    )}
                    <p className="comment-text">{c.text}</p>
                    <div className="comment-meta">
                      <span className="comment-time">{formatTime(c.timestamp)}</span>
                      <div className="comment-actions">
                        <button
                          className="comment-action-btn"
                          onClick={() => resolveComment(c.id)}
                          title="Vyřešeno"
                        >
                          ✓
                        </button>
                        <button
                          className="comment-action-btn comment-action-delete"
                          onClick={() => deleteComment(c.id)}
                          title="Smazat"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
