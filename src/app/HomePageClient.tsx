"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { Home3Hero } from "@/components/home3/sections/Home3Hero";
import { Home3TrustedLogos } from "@/components/home3/sections/Home3TrustedLogos";
import { Home3Facilities } from "@/components/home3/sections/Home3Facilities";
import { Home3Services } from "@/components/home3/sections/Home3Services";
import { Home3Process } from "@/components/home3/sections/Home3Process";
import { Home3WhyChoose } from "@/components/home3/sections/Home3WhyChoose";
import { Home3Industries } from "@/components/home3/sections/Home3Industries";
import { Home3Portfolio } from "@/components/home3/sections/Home3Portfolio";
import { Home3Certifications } from "@/components/home3/sections/Home3Certifications";
import { Home3FAQ } from "@/components/home3/sections/Home3FAQ";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface HomePageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function HomePageClient({ initialContent, initialVersion }: HomePageClientProps) {
  return (
    <CMSProvider pageSlug="/" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main>
        <Home3Hero />
        <Home3TrustedLogos />
        <Home3Facilities />
        <Home3Services />
        <Home3Process />
        <Home3WhyChoose />
        <Home3Industries />
        <Home3Portfolio />
        <Home3Certifications />
        <Home3FAQ />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
