"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  title: "Custom Extrusion Services",
  description:
    "From prototype tooling to high-volume production, our extrusion services deliver cost-effective custom profiles with reliable dimensional accuracy.",
  heroImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/1-plastic-injection-molding-manufacturer-banner.webp",
  ctaText: "Get Instant Quote",
  bullets: [
    "Complex cross-sections supported",
    "Continuous extrusion up to 7m length",
    "Stable straightness control ≤0.8 mm/m",
    "Integrated quality inspection system",
  ],
};

export function EXHero() {
  return (
    <section className="relative bg-[#000000] pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full" style={{ minHeight: "640px" }}>
        <EditableImage
          path="hero.image"
          defaultSrc={DEFAULTS.heroImage}
          alt="Plastic Extrusion Services"
          fill
          style={{ objectFit: "cover" }}
        />

        {/* Content Overlay */}
        <div
          className="relative flex flex-col items-center justify-center px-6"
          style={{ minHeight: "640px" }}
        >
          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full max-w-[1200px] flex flex-col items-center"
            style={{
              background: "rgba(52, 49, 47, 0.5)",
              border: "1px solid rgba(238, 197, 105, 0.3)",
              borderRadius: "8px",
              padding: "48px 40px",
            }}
          >
            <h1
              className="text-white font-extrabold tracking-tight"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              <EditableText path="hero.title" defaultValue={DEFAULTS.title} />
            </h1>

            <p
              className="text-white/90"
              style={{
                fontSize: "16px",
                lineHeight: 1.6,
                marginBottom: "24px",
                maxWidth: "640px",
              }}
            >
              <EditableText
                path="hero.description"
                defaultValue={DEFAULTS.description}
                multiline
              />
            </p>

            {/* Bullet Points */}
            <ul
              className="text-left w-full max-w-[700px]"
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 36px 0",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px 32px",
              }}
            >
              {DEFAULTS.bullets.map((bullet, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#D09947",
                      flexShrink: 0,
                    }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="https://app.apexbatch.com/"
              rel="nofollow"
              className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider flex items-center justify-center gap-2 group"
            >
              <EditableText
                path="hero.ctaText"
                defaultValue={DEFAULTS.ctaText}
              />
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
