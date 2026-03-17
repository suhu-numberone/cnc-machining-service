import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { MaterialsPageClient } from "./MaterialsPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/materials");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/materials",
    },
  };
}

export default async function MaterialsPage() {
  const { content, version } = await getPageContent("/materials");

  return (
    <MaterialsPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
