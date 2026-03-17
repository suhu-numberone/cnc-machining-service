"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  titleWhiteLine1: "Excellent Parts We Made,",
  titleHighlightLine2: "Built for Real Applications",
  ctaText: "Ready to experience precision engineering?",
  ctaButton: "Get a Free Quote",
  portfolioItems: [
    {
      title: "CNC Machining",
      image: getImageUrl("home/5-Parts-display-CNC-Machined-Components.webp"),
      gridArea: "hero",
    },
    {
      title: "Die Casting",
      image: getImageUrl("home/5-Parts-display-die-casting-materials-copper-parts.webp"),
      gridArea: "small1",
    },
    {
      title: "Extrusion",
      image: getImageUrl("home/5-Parts-display-extrusion-parts-2.webp"),
      gridArea: "small2",
    },
    {
      title: "Sheet Metal",
      image: getImageUrl("home/5-Parts-display-sheet-metal.webp"),
      gridArea: "small3",
    },
    {
      title: "Injection Molding",
      image: getImageUrl("home/5-Parts-display-Injection-Molding.webp"),
      gridArea: "small4",
    },
    {
      title: "",
      image: getImageUrl("home/5-Parts-display-CNC06-1.webp"),
      gridArea: "small5",
    },
    {
      title: "",
      image: getImageUrl("home/5-Parts-display-CNC10-3.webp"),
      gridArea: "small6",
    },
    {
      title: "",
      image: getImageUrl("home/5-Parts-display-CNC21-1.webp"),
      gridArea: "small7",
    },
  ],
};

function PortfolioCard({
  index,
  isHero = false,
}: {
  index: number;
  isHero?: boolean;
}) {
  const item = DEFAULTS.portfolioItems[index];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      style={{
        borderRadius: "18px",
        minHeight: isHero ? "500px" : "230px",
      }}
    >
      <div className="relative w-full h-full" style={{ minHeight: isHero ? "500px" : "230px" }}>
        <EditableImage
          path={`portfolio.items.${index}.image`}
          defaultSrc={item.image}
          alt={item.title || `Portfolio item ${index + 1}`}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay - darker on hover */}
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.1) 60%)",
          }}
        />

        {/* Title */}
        {item.title && (
          <div className="absolute bottom-5 left-5 right-5">
            <h3
              className="text-white"
              style={{
                fontSize: isHero ? "22px" : "18px",
                fontWeight: 600,
              }}
            >
              <EditableText
                path={`portfolio.items.${index}.title`}
                defaultValue={item.title}
              />
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Home3Portfolio() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "96px 0",
        background: `
          radial-gradient(
            70% 50% at 50% 0%,
            rgba(249,235,188,0.10),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "60px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "4px",
            }}
          >
            <EditableText
              path="portfolio.titleWhiteLine1"
              defaultValue={DEFAULTS.titleWhiteLine1}
            />
          </h2>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#EEC569",
            }}
          >
            <EditableText
              path="portfolio.titleHighlightLine2"
              defaultValue={DEFAULTS.titleHighlightLine2}
            />
          </h2>
        </motion.div>

        {/* Portfolio Grid - Mobile: single column, Tablet: 2 columns, Desktop: asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 mb-16">
          {DEFAULTS.portfolioItems.slice(0, 6).map((_, index) => (
            <PortfolioCard key={index} index={index} />
          ))}
        </div>

        {/* Desktop Grid - Asymmetric editorial layout */}
        <div
          className="hidden lg:grid gap-6 mb-16"
          style={{
            gridTemplateColumns: "2fr 1fr 1fr",
            gridTemplateRows: "240px 240px",
            gridTemplateAreas: `
              "hero small1 small2"
              "hero small3 small4"
            `,
          }}
        >
          {/* Hero Card - spans 2 rows */}
          <div style={{ gridArea: "hero" }}>
            <PortfolioCard index={0} isHero />
          </div>

          {/* Small Cards */}
          <div style={{ gridArea: "small1" }}>
            <PortfolioCard index={1} />
          </div>
          <div style={{ gridArea: "small2" }}>
            <PortfolioCard index={2} />
          </div>
          <div style={{ gridArea: "small3" }}>
            <PortfolioCard index={3} />
          </div>
          <div style={{ gridArea: "small4" }}>
            <PortfolioCard index={4} />
          </div>
        </div>

        {/* Bottom row - 3 equal cards on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <PortfolioCard index={5} />
          <PortfolioCard index={6} />
          <PortfolioCard index={7} />
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div
            className="text-center min-h-[280px] flex flex-col items-center justify-center w-full max-w-3xl"
            style={{
              padding: "clamp(32px, 6vw, 64px) clamp(24px, 5vw, 48px)",
              borderRadius: "28px",
              border: "2px solid #7F4D0F",
              background: "linear-gradient(to bottom, #000000, #34312F)",
              boxShadow: "inset 0 0 0 1px rgba(208,153,71,0.15), 0 24px 60px rgba(0,0,0,0.6)",
            }}
          >
            <p
              className="mb-9"
              style={{
                color: "#D09947",
                fontSize: "clamp(20px, 3.5vw, 30px)",
                fontWeight: 500,
              }}
            >
              <EditableText
                path="portfolio.ctaText"
                defaultValue={DEFAULTS.ctaText}
              />
            </p>
            <Link
              href="https://app.apexbatch.com/"
              rel="nofollow"
              className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
            >
              <EditableText
                path="portfolio.ctaButton"
                defaultValue={DEFAULTS.ctaButton}
              />
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
