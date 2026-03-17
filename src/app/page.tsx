import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { HomePageClient } from "./HomePageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/",
    },
  };
}

export default async function Home() {
  // Fetch page content server-side
  const { content, version } = await getPageContent("/");

  return (
    <HomePageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
