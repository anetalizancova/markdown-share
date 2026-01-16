import type { Metadata } from "next";
import { notFound } from "next/navigation";

import MarkdownViewer from "@/components/MarkdownViewer";
import { getMarkdownBySlug, getMarkdownSlugs } from "@/lib/markdown";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

export function generateStaticParams() {
  try {
    return getMarkdownSlugs().map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

async function getParams(params: PageProps["params"]) {
  return await params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await getParams(params);
  const markdown = getMarkdownBySlug(slug);

  if (!markdown) {
    return { title: "Not found" };
  }

  return {
    title: markdown.title,
    description: `Markdown share: ${markdown.title}`,
  };
}

export default async function MarkdownPage({ params }: PageProps) {
  const { slug } = await getParams(params);
  const markdown = getMarkdownBySlug(slug);

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
