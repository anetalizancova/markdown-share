import type { Metadata } from "next";
import { notFound } from "next/navigation";

import MarkdownViewer from "@/components/MarkdownViewer";
import { getMarkdownBySlug, getMarkdownSlugs } from "@/lib/markdown";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getMarkdownSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const markdown = getMarkdownBySlug(params.slug);

  if (!markdown) {
    return { title: "Not found" };
  }

  return {
    title: markdown.title,
    description: `Markdown share: ${markdown.title}`,
  };
}

export default function MarkdownPage({ params }: PageProps) {
  const markdown = getMarkdownBySlug(params.slug);

  if (!markdown) {
    notFound();
  }

  return (
    <main className="container">
      <MarkdownViewer
        slug={markdown.slug}
        title={markdown.title}
        content={markdown.content}
      />
    </main>
  );
}
