"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutCapabilities } from "@/components/about/AboutCapabilities";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutLeadership } from "@/components/about/AboutLeadership";
import { AboutTeamStructure } from "@/components/about/AboutTeamStructure";
import { AboutManufacturingHub } from "@/components/about/AboutManufacturingHub";
import { AboutClientsAdvantages } from "@/components/about/AboutClientsAdvantages";
import { AboutCTA } from "@/components/about/AboutCTA";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface AboutPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function AboutPageClient({ initialContent, initialVersion }: AboutPageClientProps) {
  return (
    <CMSProvider
      pageSlug="/about"
      initialContent={initialContent}
      initialVersion={initialVersion}
    >
      <Home3Header />
      <main>
        <AboutHero />
        <AboutCapabilities />
        <AboutJourney />
        <AboutLeadership />
        <AboutTeamStructure />
        <AboutManufacturingHub />
        <AboutClientsAdvantages />
        <AboutCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
