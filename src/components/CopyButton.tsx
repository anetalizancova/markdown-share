"use client";

import { useState } from "react";

type CopyButtonProps = {
  content: string;
};

export default function CopyButton({ content }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button className="btn btn-primary" type="button" onClick={handleCopy}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        {copied ? (
          <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        ) : (
          <>
            <rect x="5" y="5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3 11L3 3C3 2.44772 3.44772 2 4 2L10 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </>
        )}
      </svg>
      {copied ? "Copied!" : "Copy .md"}
    </button>
  );
}
