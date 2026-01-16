import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CopyButton from "./CopyButton";

type MarkdownViewerProps = {
  slug: string;
  title: string;
  content: string;
};

export default function MarkdownViewer({
  slug,
  title,
  content,
}: MarkdownViewerProps) {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1 className="page-title">{title}</h1>
        </div>
        <div className="page-actions">
          <CopyButton content={content} />
          <a className="btn btn-secondary" href={`/markdowns/${slug}.md`} download>
            Download .md
          </a>
        </div>
      </header>
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
