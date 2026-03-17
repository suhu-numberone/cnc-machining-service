import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { MSPageClient } from "./MSPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/molding-services");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/molding-services",
    },
  };
}

export default async function MoldingServicesPage() {
  const { content, version } = await getPageContent("/molding-services");

  return (
    <MSPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
