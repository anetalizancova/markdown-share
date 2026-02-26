import type { Metadata } from "next";
import { getMarkdownBySlug } from "@/lib/markdown";
import TabbedViewer from "@/components/TabbedViewer";

export const metadata: Metadata = {
  title: "B2B Lead Magnety — Aibility",
  description: "AI Adoption Playbook, SuperPowered Professionals, Data Report",
};

const DOCS = [
  {
    slug: "ai-adoption-playbook",
    shortTitle: "AI Adoption Playbook",
  },
  {
    slug: "superpowered-professionals",
    shortTitle: "SP Professionals",
  },
  {
    slug: "ai-adopce-ceske-firmy",
    shortTitle: "Data Report CZ",
  },
];

export default function LeadMagnetsPage() {
  const docs = DOCS.map((d) => {
    const md = getMarkdownBySlug(d.slug);
    return {
      slug: d.slug,
      title: md?.title ?? d.shortTitle,
      content: md?.content ?? "Soubor nenalezen.",
      shortTitle: d.shortTitle,
    };
  });

  return (
    <main className="container container-wide">
      <TabbedViewer docs={docs} />
    </main>
  );
}
