"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { QualityHero } from "@/components/quality/QualityHero";
import { QualityProcess } from "@/components/quality/QualityProcess";
import { QualityConsistency } from "@/components/quality/QualityConsistency";
import { QualityEquipment } from "@/components/quality/QualityEquipment";
import { QualityCertifications } from "@/components/quality/QualityCertifications";
import { QualityCTA } from "@/components/quality/QualityCTA";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface QualityPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function QualityPageClient({ initialContent, initialVersion }: QualityPageClientProps) {
  return (
    <CMSProvider
      pageSlug="/quality"
      initialContent={initialContent}
      initialVersion={initialVersion}
    >
      <Home3Header />
      <main className="bg-[#000000] min-h-screen">
        <QualityHero />
        <QualityProcess />
        <QualityConsistency />
        <QualityEquipment />
        <QualityCertifications />
        <QualityCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
