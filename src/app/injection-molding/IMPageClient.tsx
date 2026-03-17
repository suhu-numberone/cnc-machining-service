"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { IMHero } from "@/components/injection-molding/IMHero";
import { IMSupplier } from "@/components/injection-molding/IMSupplier";
import { IMServices } from "@/components/injection-molding/IMServices";
import { IMParts } from "@/components/injection-molding/IMParts";
import { IMWhyChoose } from "@/components/injection-molding/IMWhyChoose";
import { IMProcess } from "@/components/injection-molding/IMProcess";
import { IMTolerance } from "@/components/injection-molding/IMTolerance";
import { IMMaterials } from "@/components/injection-molding/IMMaterials";
import { IMSurfaceFinishes } from "@/components/injection-molding/IMSurfaceFinishes";
import { IMCTA } from "@/components/injection-molding/IMCTA";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface IMPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function IMPageClient({ initialContent, initialVersion }: IMPageClientProps) {
  return (
    <CMSProvider pageSlug="/injection-molding" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main>
        <IMHero />
        <IMSupplier />
        <IMServices />
        <IMParts />
        <IMWhyChoose />
        <IMProcess />
        <IMTolerance />
        <IMMaterials />
        <IMSurfaceFinishes />
        <IMCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
