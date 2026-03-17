"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Weight, Clock, Settings } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  title: "Die Casting Services",
  description:
    "As a leading die casting manufacturer based in China, we deliver high-quality die casting parts with short lead times. From high pressure die casting to gravity die casting — we turn your concepts into near‑net shape components.",
  heroImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
  ctaText: "Get Instant Quote",
  stats: [
    { icon: "weight", value: "160T – 3000T", label: "Machine tonnage" },
    { icon: "clock", value: "2 weeks", label: "Sample lead time" },
    { icon: "settings", value: "ISO 8062 / IATF 16949", label: "Quality standard" },
  ],
};

export function DCHero() {
  return (
    <section className="relative bg-[#000000] pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full" style={{ minHeight: "640px" }}>
        <EditableImage
          path="hero.image"
          defaultSrc={DEFAULTS.heroImage}
          alt="Die Casting Services"
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

            {/* Stats Bar */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center"
              style={{
                gap: "32px",
                marginBottom: "36px",
                background: "rgba(20, 20, 20, 0.85)",
                border: "1px solid rgba(208, 153, 71, 0.3)",
                borderRadius: "999px",
                padding: "16px 40px",
              }}
            >
              {DEFAULTS.stats.map((stat, index) => {
                const icons = { weight: Weight, clock: Clock, settings: Settings };
                const Icon = icons[stat.icon as keyof typeof icons];
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        border: "2px solid #D09947",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon style={{ width: "20px", height: "20px", color: "#D09947" }} />
                    </div>
                    <div>
                      <p style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
                        {stat.value}
                      </p>
                      <p style={{ fontSize: "13px", color: "#7A7A7C", lineHeight: 1.3 }}>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

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
