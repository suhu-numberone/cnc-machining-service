import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { IMPageClient } from "./IMPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/injection-molding");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/injection-molding",
    },
  };
}

export default async function InjectionMoldingPage() {
  const { content, version } = await getPageContent("/injection-molding");

  return (
    <IMPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
