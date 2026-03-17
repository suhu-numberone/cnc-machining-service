"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { CNCHero } from "@/components/cnc/CNCHero";
import { CNCSupplier } from "@/components/cnc/CNCSupplier";
import { CNCServices } from "@/components/cnc/CNCServices";
import { CNCParts } from "@/components/cnc/CNCParts";
import { CNCWhyChoose } from "@/components/cnc/CNCWhyChoose";
import { CNCProcess } from "@/components/cnc/CNCProcess";
import { CNCTolerance } from "@/components/cnc/CNCTolerance";
import { CNCMaterials } from "@/components/cnc/CNCMaterials";
import { CNCSurfaceFinishes } from "@/components/cnc/CNCSurfaceFinishes";
import { CNCCTA } from "@/components/cnc/CNCCTA";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface CNCPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function CNCPageClient({ initialContent, initialVersion }: CNCPageClientProps) {
  return (
    <CMSProvider
      pageSlug="/cnc-machining"
      initialContent={initialContent}
      initialVersion={initialVersion}
    >
      <Home3Header />
      <main>
        <CNCHero />
        <CNCSupplier />
        <CNCServices />
        <CNCParts />
        <CNCWhyChoose />
        <CNCProcess />
        <CNCTolerance />
        <CNCMaterials />
        <CNCSurfaceFinishes />
        <CNCCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
