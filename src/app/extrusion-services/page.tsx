import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { EXPageClient } from "./EXPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/extrusion-services");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/extrusion-services",
    },
  };
}

export default async function ExtrusionServicesPage() {
  const { content, version } = await getPageContent("/extrusion-services");

  return (
    <EXPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
