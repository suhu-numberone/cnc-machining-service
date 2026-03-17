import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { TermsAndConditionsClient } from "./TermsAndConditionsClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/terms-and-conditions");
  return {
    title: meta.title ?? "Terms and Conditions | Apex Batch",
    description:
      meta.description ??
      "Terms and conditions for using Apex Batch services.",
    alternates: {
      canonical: "/terms-and-conditions",
    },
  };
}

export default async function TermsAndConditionsPage() {
  const { content, version } = await getPageContent("/terms-and-conditions");

  return (
    <TermsAndConditionsClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
