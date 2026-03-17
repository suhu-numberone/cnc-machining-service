import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { PrivacyPolicyClient } from "./PrivacyPolicyClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/privacy-policy");
  return {
    title: meta.title ?? "Privacy Policy | Apex Batch",
    description:
      meta.description ??
      "Privacy policy for Apex Batch - learn how we collect, store, use, and share your information.",
    alternates: {
      canonical: "/privacy-policy",
    },
  };
}

export default async function PrivacyPolicyPage() {
  const { content, version } = await getPageContent("/privacy-policy");

  return (
    <PrivacyPolicyClient initialContent={content} initialVersion={version} />
  );
}
