"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { MSHero } from "@/components/molding-services/MSHero";
import { MSSupplier } from "@/components/molding-services/MSSupplier";
import { MSServices } from "@/components/molding-services/MSServices";
import { MSParts } from "@/components/molding-services/MSParts";
import { MSWhyChoose } from "@/components/molding-services/MSWhyChoose";
import { MSProcess } from "@/components/molding-services/MSProcess";
import { MSTolerance } from "@/components/molding-services/MSTolerance";
import { MSMaterials } from "@/components/molding-services/MSMaterials";
import { MSSurfaceFinishes } from "@/components/molding-services/MSSurfaceFinishes";
import { MSCTA } from "@/components/molding-services/MSCTA";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface MSPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function MSPageClient({ initialContent, initialVersion }: MSPageClientProps) {
  return (
    <CMSProvider pageSlug="/molding-services" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main>
        <MSHero />
        <MSSupplier />
        <MSServices />
        <MSParts />
        <MSWhyChoose />
        <MSProcess />
        <MSTolerance />
        <MSMaterials />
        <MSSurfaceFinishes />
        <MSCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
