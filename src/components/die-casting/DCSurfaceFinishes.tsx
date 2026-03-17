"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Die Casting ",
  headingHighlight: "Surface Finishes",
  subheading:
    "From corrosion protection to premium aesthetics — we offer in-house finishing lines with full process control. Custom colors, textures, and functional coatings available.",
  finishes: [
    {
      name: "As-cast",
      description: "",
      specLabel: "Standard / raw",
      specValue: "",
      infoLabel: "",
      infoValue: "Native die cast surface, cost-effective, slight texture.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIA(High-Gloss).webp",
    },
    {
      name: "Polishing",
      description: "",
      specLabel: "Glossy / decorative",
      specValue: "",
      infoLabel: "",
      infoValue: "Mirror / brushed finish for high aesthetic demand.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIB(Semi-Gloss).webp",
    },
    {
      name: "Powder coating",
      description: "",
      specLabel: "Corrosion resistant, available in a variety of colors",
      specValue: "",
      infoLabel: "",
      infoValue: "RAL series, durable, corrosion resistant, color variety.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIC(Fine Matte).webp",
    },
    {
      name: "Painting",
      description: "",
      specLabel: "Custom colors",
      specValue: "",
      infoLabel: "",
      infoValue: "Solid or metallic paint, decorative & protective.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPID(Coarse-Matte-Sandblast).webp",
    },
    {
      name: "Plating",
      description: "",
      specLabel: "Wear-resistant and corrosion-resistant",
      specValue: "",
      infoLabel: "",
      infoValue: "Nickel / chrome / zinc plating for wear & anti-corrosion.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIA(High-Gloss).webp",
    },
    {
      name: "Anodizing",
      description: "",
      specLabel: "Class II / III",
      specValue: "",
      infoLabel: "",
      infoValue: "Only for aluminum, increases hardness & corrosion resistance.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIB(Semi-Gloss).webp",
    },
  ],
};

export function DCSurfaceFinishes() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "104px 0 112px",
        background: "#34312F",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              marginBottom: "18px",
            }}
          >
            <EditableText path="finishes.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="finishes.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              maxWidth: "700px",
              marginBottom: "72px",
            }}
          >
            <EditableText path="finishes.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        {/* Finishes Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px" }}>
          {DEFAULTS.finishes.map((finish, index) => (
            <motion.div
              key={finish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#1A1A1A",
                borderRadius: "12px",
                border: "2px solid rgba(208,153,71,0.35)",
                boxShadow: "0 14px 36px rgba(0,0,0,0.45)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "3px solid #D09947";
                e.currentTarget.style.boxShadow = "0 0 50px rgba(208,153,71,0.7), 0 14px 36px rgba(0,0,0,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid rgba(208,153,71,0.35)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.45)";
              }}
            >
              <div style={{ padding: "24px 24px 0 24px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF", marginBottom: "8px" }}>
                  <EditableText path={`finishes.items.${index}.name`} defaultValue={finish.name} />
                </h3>
                <p style={{ fontSize: "14px", color: "#7A7A7C", marginBottom: "20px" }}>
                  <EditableText path={`finishes.items.${index}.description`} defaultValue={finish.description} />
                </p>
                <div className="relative" style={{ width: "100%", height: "180px", marginBottom: "24px", borderRadius: "8px", overflow: "hidden" }}>
                  <EditableImage path={`finishes.items.${index}.image`} defaultSrc={finish.image} alt={finish.name} fill className="object-cover" />
                </div>
                <div className="flex justify-between" style={{ marginBottom: "20px" }}>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "#EEC569", marginBottom: "4px" }}>
                      <EditableText path={`finishes.items.${index}.specLabel`} defaultValue={finish.specLabel} />
                    </p>
                    <p style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF" }}>
                      <EditableText path={`finishes.items.${index}.specValue`} defaultValue={finish.specValue} />
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ padding: "16px 24px 24px 24px" }}>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#EEC569", marginBottom: "4px" }}>
                  <EditableText path={`finishes.items.${index}.infoLabel`} defaultValue={finish.infoLabel} />
                </p>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#C5C6C9" }}>
                  <EditableText path={`finishes.items.${index}.infoValue`} defaultValue={finish.infoValue} multiline />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
