"use client";

import { motion } from "framer-motion";

import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
  headingLine1: "ApexBatch",
  headingLine2: "Materials Library",
  description:
    "Comprehensive selection of metals, plastics, and special alloys for CNC machining, injection molding, sheet metal fabrication, and 3D printing. Find the perfect material for your manufacturing needs.",
  stats: [
    { value: "24", label: "Material Types" },
    { value: "15+", label: "Material Categories" },
    { value: "50+", label: "Surface Treatments" },
    { value: "10+", label: "Manufacturing Processes" },
  ],
};

export function MaterialsHero() {
  return (
    <section className="relative bg-[#000000] pt-16 overflow-hidden">
      <div className="relative w-full" style={{ minHeight: "640px" }}>
        <EditableImage
          path="hero.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Materials library hero background"
          fill
          style={{ objectFit: "cover" }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        />

        <div
          className="relative flex flex-col items-center justify-center px-6"
          style={{ minHeight: "640px" }}
        >
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
              <EditableText path="hero.headingLine1" defaultValue={DEFAULTS.headingLine1} />{" "}
              <span style={{ color: "#EEC569" }}>
                <EditableText path="hero.headingLine2" defaultValue={DEFAULTS.headingLine2} />
              </span>
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
              <EditableText path="hero.description" defaultValue={DEFAULTS.description} multiline />
            </p>

            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              style={{
                background: "rgba(30, 30, 30, 0.7)",
                padding: "24px 32px",
                borderRadius: "6px",
                width: "100%",
                maxWidth: "900px",
              }}
            >
              {DEFAULTS.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#EEC569",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    <EditableText path={`hero.stats.${index}.value`} defaultValue={stat.value} />
                  </span>
                  <span style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 500 }}>
                    <EditableText path={`hero.stats.${index}.label`} defaultValue={stat.label} />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
