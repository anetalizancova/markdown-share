"use client";

import { useState, useEffect, useRef } from "react";
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

export default function TabbedViewer({ docs }: { docs: Doc[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [newSection, setNewSection] = useState("");
  const [showPanel, setShowPanel] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setComments(JSON.parse(stored));
      } catch {}
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

  const addComment = () => {
    if (!newComment.trim()) return;
    const comment: Comment = {
      id: crypto.randomUUID(),
      docSlug: activeDoc.slug,
      text: newComment.trim(),
      sectionRef: newSection,
      timestamp: Date.now(),
      resolved: false,
    };
    setComments((prev) => [...prev, comment]);
    setNewComment("");
    setNewSection("");
    setShowCommentForm(false);
  };

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

  return (
    <div className="tabbed-page">
      <header className="tabbed-header">
        <div className="tabbed-header-top">
          <div>
            <p className="tabbed-eyebrow">B2B Lead Magnety — Aibility</p>
            <h1 className="tabbed-title">Lead Magnety pro review</h1>
          </div>
          <div className="tabbed-header-actions">
            <button
              className="btn btn-toolbar"
              onClick={() => setShowPanel(!showPanel)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4H14M2 8H14M2 12H8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
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
            {activeDoc.content}
          </ReactMarkdown>
        </div>

        {showPanel && (
          <aside className="comment-panel">
            <div className="comment-panel-header">
              <h3>Komentáře</h3>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setShowCommentForm(true);
                  setTimeout(() => textareaRef.current?.focus(), 100);
                }}
              >
                + Přidat
              </button>
            </div>

            {showCommentForm && (
              <div className="comment-form">
                <select
                  value={newSection}
                  onChange={(e) => setNewSection(e.target.value)}
                  className="comment-select"
                >
                  <option value="">Obecný komentář</option>
                  {toc.map((item) => (
                    <option key={item.id} value={item.text}>
                      {"—".repeat(item.level - 2)} {item.text}
                    </option>
                  ))}
                </select>
                <textarea
                  ref={textareaRef}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Napiš komentář..."
                  className="comment-textarea"
                  rows={3}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.metaKey) addComment();
                  }}
                />
                <div className="comment-form-actions">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      setShowCommentForm(false);
                      setNewComment("");
                      setNewSection("");
                    }}
                  >
                    Zrušit
                  </button>
                  <button className="btn btn-primary btn-sm" onClick={addComment}>
                    Uložit (⌘↵)
                  </button>
                </div>
              </div>
            )}

            <div className="comment-list">
              {docComments.length === 0 && !showCommentForm && (
                <p className="comment-empty">
                  Zatím žádné komentáře k tomuto dokumentu.
                </p>
              )}
              {docComments.map((c) => (
                <div key={c.id} className="comment-card">
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
              ))}
            </div>

            {allActiveComments.filter((c) => c.docSlug !== activeDoc.slug)
              .length > 0 && (
              <div className="comment-other-docs">
                <p className="comment-other-title">Komentáře u dalších dokumentů</p>
                {allActiveComments
                  .filter((c) => c.docSlug !== activeDoc.slug)
                  .map((c) => (
                    <div key={c.id} className="comment-card comment-card-muted">
                      <p className="comment-doc-label">
                        {docForSlug(c.docSlug)?.shortTitle}
                      </p>
                      {c.sectionRef && (
                        <p className="comment-section">📌 {c.sectionRef}</p>
                      )}
                      <p className="comment-text">{c.text}</p>
                      <div className="comment-meta">
                        <span className="comment-time">
                          {formatTime(c.timestamp)}
                        </span>
                        <div className="comment-actions">
                          <button
                            className="comment-action-btn"
                            onClick={() => resolveComment(c.id)}
                          >
                            ✓
                          </button>
                          <button
                            className="comment-action-btn comment-action-delete"
                            onClick={() => deleteComment(c.id)}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}
