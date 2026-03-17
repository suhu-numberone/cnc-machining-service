import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { AboutPageClient } from "./AboutPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/about");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/about",
    },
  };
}

export default async function AboutPage() {
  // Fetch page content server-side
  const { content, version } = await getPageContent("/about");

  return (
    <AboutPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
