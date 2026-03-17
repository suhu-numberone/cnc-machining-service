"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { SFHero } from "@/components/surface-finish/SFHero";
import { SFTable } from "@/components/surface-finish/SFTable";
import { SFWhyChoose } from "@/components/surface-finish/SFWhyChoose";
import { SFCTA } from "@/components/surface-finish/SFCTA";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface SurfaceFinishPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function SurfaceFinishPageClient({ initialContent, initialVersion }: SurfaceFinishPageClientProps) {
  return (
    <CMSProvider
      pageSlug="/surface-finish"
      initialContent={initialContent}
      initialVersion={initialVersion}
    >
      <Home3Header />
      <main className="bg-[#000000] min-h-screen">
        <SFHero />
        <SFTable />
        <SFWhyChoose />
        <SFCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
