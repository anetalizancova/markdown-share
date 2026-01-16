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
      {copied ? "Copied" : "Copy Markdown"}
    </button>
  );
}
