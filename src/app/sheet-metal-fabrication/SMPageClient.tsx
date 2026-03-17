"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { SMHero } from "@/components/sheet-metal/SMHero";
import { SMSupplier } from "@/components/sheet-metal/SMSupplier";
import { SMServices } from "@/components/sheet-metal/SMServices";
import { SMParts } from "@/components/sheet-metal/SMParts";
import { SMWhyChoose } from "@/components/sheet-metal/SMWhyChoose";
import { SMProcess } from "@/components/sheet-metal/SMProcess";
import { SMTolerance } from "@/components/sheet-metal/SMTolerance";
import { SMMaterials } from "@/components/sheet-metal/SMMaterials";
import { SMSurfaceFinishes } from "@/components/sheet-metal/SMSurfaceFinishes";
import { SMCTA } from "@/components/sheet-metal/SMCTA";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface SMPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function SMPageClient({ initialContent, initialVersion }: SMPageClientProps) {
  return (
    <CMSProvider pageSlug="/sheet-metal-fabrication" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main>
        <SMHero />
        <SMSupplier />
        <SMServices />
        <SMParts />
        <SMWhyChoose />
        <SMProcess />
        <SMTolerance />
        <SMMaterials />
        <SMSurfaceFinishes />
        <SMCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
