"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactNextSteps } from "@/components/contact/ContactNextSteps";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface ContactPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function ContactPageClient({ initialContent, initialVersion }: ContactPageClientProps) {
  return (
    <CMSProvider
      pageSlug="/contact"
      initialContent={initialContent}
      initialVersion={initialVersion}
    >
      <Home3Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactNextSteps />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
