import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { ContactPageClient } from "./ContactPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/contact");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/contact",
    },
  };
}

export default async function ContactPage() {
  const { content, version } = await getPageContent("/contact");

  return (
    <ContactPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
