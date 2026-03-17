import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { CNCPageClient } from "./CNCPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/cnc-machining");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/cnc-machining",
    },
  };
}

export default async function CNCMachiningPage() {
  const { content, version } = await getPageContent("/cnc-machining");

  return (
    <CNCPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
