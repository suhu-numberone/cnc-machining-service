"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Sheet Metal Parts ",
  headingHighlight: "Made By Us",
  parts: [
    {
      title: "Enclosure & Chassis",
      description:
        "Precision-formed enclosures with tight tolerances for electronics, telecom, and industrial equipment.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/4-Medical-Fluid Connector.webp",
      tags: ["Aluminum", "powder coating", "EMI shielding"],
    },
    {
      title: "Bracket & Mounting Plate",
      description:
        "Custom brackets and mounting hardware with laser-cut precision and CNC-formed bends.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/4-Automotive Vent-Grille.webp",
      tags: ["Stainless steel", "zinc plating", "structural", "Sample"],
    },
    {
      title: "Heat Sink & Cover Panel",
      description:
        "Lightweight heat management components and decorative panels with fine surface finishes.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/4-Wearable-Device Band.webp",
      tags: ["Copper", "anodizing", "thermal management"],
    },
  ],
};

export function SMParts() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "112px 0 120px", background: "#000000" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "64px" }}
        >
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em" }}>
            <EditableText path="parts.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="parts.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "28px" }}>
          {DEFAULTS.parts.map((part, index) => (
            <motion.div
              key={part.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ borderRadius: "12px", background: "#1A1A1A", border: "1px solid rgba(208,153,71,0.15)" }}
              onMouseEnter={(e) => { e.currentTarget.style.border = "1px solid rgba(208,153,71,0.4)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.45)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.border = "1px solid rgba(208,153,71,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <EditableImage path={`parts.items.${index}.image`} defaultSrc={part.image} alt={part.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>
                  <EditableText path={`parts.items.${index}.title`} defaultValue={part.title} />
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#7A7A7C", marginBottom: "16px" }}>
                  <EditableText path={`parts.items.${index}.description`} defaultValue={part.description} multiline />
                </p>
                <div className="flex flex-wrap gap-2">
                  {part.tags.map((tag, tagIndex) => (
                    <span key={tag} style={{ border: "1px solid rgba(238,197,105,0.5)", color: "#F5D89A", background: "transparent", fontSize: "13px", padding: "6px 10px", borderRadius: "999px" }}>
                      <EditableText path={`parts.items.${index}.tags.${tagIndex}`} defaultValue={tag} />
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
