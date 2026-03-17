import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { SMPageClient } from "./SMPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/sheet-metal-fabrication");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/sheet-metal-fabrication",
    },
  };
}

export default async function SheetMetalFabricationPage() {
  const { content, version } = await getPageContent("/sheet-metal-fabrication");

  return (
    <SMPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
