"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";
import { getImageUrl } from "@/lib/utils";

const DEFAULTS = {
  backgroundImage: getImageUrl("quality/servicebg.png"),
  titlePart1: "Precision ",
  titleHighlight: "Quality Assurance",
  titlePart2: " System",
  description:
    "At ApexBatch, quality is not just a department\u2014it\u2019s embedded in every stage of our manufacturing process. Our comprehensive three-phase quality assurance system ensures every component meets the highest standards of precision, reliability, and consistency.",
  stats: [
    { value: "\u00B10.01-0.05mm", label: "Tolerance Control" },
    { value: "100%", label: "Traceability" },
    { value: "ISO Certified", label: "Quality Management" },
  ],
};

export function QualityHero() {
  return (
    <section className="relative bg-[#000000] pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full" style={{ minHeight: "640px" }}>
        <EditableImage
          path="hero.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Quality background"
          fill
          style={{ objectFit: "cover" }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
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
            className="text-center w-full max-w-7xl flex flex-col items-center"
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
              <EditableText path="hero.titlePart1" defaultValue={DEFAULTS.titlePart1} />
              <span style={{ color: "#EEC569" }}>
                <EditableText path="hero.titleHighlight" defaultValue={DEFAULTS.titleHighlight} />
              </span>
              <EditableText path="hero.titlePart2" defaultValue={DEFAULTS.titlePart2} />
            </h1>

            <p
              className="text-white/90"
              style={{
                fontSize: "16px",
                lineHeight: 1.6,
                marginBottom: "36px",
                maxWidth: "700px",
              }}
            >
              <EditableText
                path="hero.description"
                defaultValue={DEFAULTS.description}
                multiline
              />
            </p>

            {/* Stats */}
            <div
              className="inline-flex flex-col sm:flex-row gap-4"
              style={{ borderTop: "1px solid #EEC569", paddingTop: "8px" }}
            >
              {DEFAULTS.stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1"
                  style={{
                    padding: "16px 24px",
                  }}
                >
                  <div
                    className="text-2xl lg:text-3xl font-bold"
                    style={{ color: "#EEC569" }}
                  >
                    <EditableText
                      path={`hero.stats.${index}.value`}
                      defaultValue={stat.value}
                    />
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "#FFFFFF", fontWeight: 500 }}
                  >
                    <EditableText
                      path={`hero.stats.${index}.label`}
                      defaultValue={stat.label}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
