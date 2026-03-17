import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { DCPageClient } from "./DCPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/die-casting");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/die-casting",
    },
  };
}

export default async function DieCastingPage() {
  const { content, version } = await getPageContent("/die-casting");

  return (
    <DCPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
