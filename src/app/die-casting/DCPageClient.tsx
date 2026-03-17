"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { DCHero } from "@/components/die-casting/DCHero";
import { DCSupplier } from "@/components/die-casting/DCSupplier";
import { DCServices } from "@/components/die-casting/DCServices";
import { DCParts } from "@/components/die-casting/DCParts";
import { DCWhyChoose } from "@/components/die-casting/DCWhyChoose";

import { DCTolerance } from "@/components/die-casting/DCTolerance";
import { DCMaterials } from "@/components/die-casting/DCMaterials";
import { DCSurfaceFinishes } from "@/components/die-casting/DCSurfaceFinishes";
import { DCSecondaryOps } from "@/components/die-casting/DCSecondaryOps";
import { DCCTA } from "@/components/die-casting/DCCTA";
import { DCFaq } from "@/components/die-casting/DCFaq";
import { Home3Certifications } from "@/components/home3/sections/Home3Certifications";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface DCPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function DCPageClient({ initialContent, initialVersion }: DCPageClientProps) {
  return (
    <CMSProvider pageSlug="/die-casting" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main>
        <DCHero />
        <DCServices />
        <DCSupplier />
        <DCTolerance />
        <DCParts />

        <DCWhyChoose />
        <DCMaterials />
        <DCSurfaceFinishes />
        <DCSecondaryOps />
        <Home3Certifications />
        <DCFaq />
        <DCCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
