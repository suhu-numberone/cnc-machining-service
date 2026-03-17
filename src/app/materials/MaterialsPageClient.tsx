"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { MaterialsHero } from "@/components/materials/MaterialsHero";
import { MaterialsContent } from "@/components/materials/MaterialsContent";
import { MaterialsCTA } from "@/components/materials/MaterialsCTA";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface MaterialsPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function MaterialsPageClient({ initialContent, initialVersion }: MaterialsPageClientProps) {
  return (
    <CMSProvider
      pageSlug="/materials"
      initialContent={initialContent}
      initialVersion={initialVersion}
    >
      <Home3Header />
      <main className="bg-[#000000] min-h-screen">
        <MaterialsHero />
        <MaterialsContent />
        <MaterialsCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
