"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { EXHero } from "@/components/extrusion-services/EXHero";
import { EXSupplier } from "@/components/extrusion-services/EXSupplier";
import { EXServices } from "@/components/extrusion-services/EXServices";
import { EXParts } from "@/components/extrusion-services/EXParts";
import { EXWhyChoose } from "@/components/extrusion-services/EXWhyChoose";
import { EXProcess } from "@/components/extrusion-services/EXProcess";
import { EXTolerance } from "@/components/extrusion-services/EXTolerance";
import { EXMaterials } from "@/components/extrusion-services/EXMaterials";
import { EXSurfaceFinishes } from "@/components/extrusion-services/EXSurfaceFinishes";
import { EXCTA } from "@/components/extrusion-services/EXCTA";
import { Home3Certifications } from "@/components/home3/sections/Home3Certifications";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface EXPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function EXPageClient({ initialContent, initialVersion }: EXPageClientProps) {
  return (
    <CMSProvider pageSlug="/extrusion-services" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main>
        <EXHero />
        <EXServices />
        <EXSupplier />
        <EXTolerance />
        <EXParts />
        <EXProcess />
        <EXWhyChoose />
        <EXMaterials />
        <EXSurfaceFinishes />
        <Home3Certifications />
        <EXCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
