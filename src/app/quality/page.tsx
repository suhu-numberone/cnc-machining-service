import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { QualityPageClient } from "./QualityPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/quality");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/quality",
    },
  };
}

export default async function QualityPage() {
  const { content, version } = await getPageContent("/quality");

  return (
    <QualityPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
