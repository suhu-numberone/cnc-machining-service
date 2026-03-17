import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { SurfaceFinishPageClient } from "./SurfaceFinishPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/surface-finish");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/surface-finish",
    },
  };
}

export default async function SurfaceFinishPage() {
  const { content, version } = await getPageContent("/surface-finish");

  return (
    <SurfaceFinishPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
