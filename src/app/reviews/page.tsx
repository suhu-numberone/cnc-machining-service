import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { ReviewsPageClient } from "./ReviewsPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/reviews");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/reviews",
    },
  };
}

export default async function ReviewsPage() {
  const { content, version } = await getPageContent("/reviews");

  return (
    <ReviewsPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
