"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Extrusion ",
  headingHighlight: "Materials",
  title: "Aluminum alloys",
  image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Material-General-Plastics.webp",
  alloys: [
    {
      grade: "6063-T5 / 6060",
      description:
        "Excellent surface quality, ideal for anodizing. Architectural and decorative profiles.",
    },
    {
      grade: "6061-T6",
      description:
        "Higher strength, structural components, machinability. Suitable for load-bearing frames.",
    },
  ],
  notes: [
    {
      icon: "globe",
      text: "Material standards: GB / ASTM / EN / JIS \u2014 adaptable to customer specifications.",
    },
    {
      icon: "doc",
      text: "Full traceability\uFF1AAll aluminum billets certified to ASTM B221 / EN 755. Mill certificates available per batch.",
    },
  ],
};

export function EXMaterials() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: "#000000",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "48px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="materials.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="materials.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: "#1A1A1A",
            borderRadius: "16px",
            border: "1px solid rgba(59,130,246,0.3)",
            overflow: "hidden",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]">
            {/* Left Column - Content */}
            <div style={{ padding: "40px" }}>
              {/* Title with airplane icon */}
              <div className="flex items-center gap-3" style={{ marginBottom: "8px" }}>
                <span style={{ fontSize: "24px" }}>✈️</span>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#EEC569",
                  }}
                >
                  <EditableText path="materials.title" defaultValue={DEFAULTS.title} />
                </h2>
              </div>

              {/* Alloys */}
              <div style={{ marginTop: "20px" }}>
                {DEFAULTS.alloys.map((alloy, index) => (
                  <div key={index} style={{ marginBottom: index < DEFAULTS.alloys.length - 1 ? "24px" : "0" }}>
                    <span
                      style={{
                        display: "inline-block",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "6px",
                        padding: "6px 14px",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        marginBottom: "10px",
                      }}
                    >
                      <EditableText path={`materials.alloys.${index}.grade`} defaultValue={alloy.grade} />
                    </span>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "#EEC569",
                      }}
                    >
                      <EditableText path={`materials.alloys.${index}.description`} defaultValue={alloy.description} multiline />
                    </p>
                  </div>
                ))}
              </div>

              {/* Notes */}
              <div style={{ marginTop: "28px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
                {DEFAULTS.notes.map((note, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                    style={{
                      marginBottom: index < DEFAULTS.notes.length - 1 ? "16px" : "0",
                    }}
                  >
                    <span style={{ fontSize: "20px", flexShrink: 0 }}>
                      {note.icon === "globe" ? "🌐" : "📋"}
                    </span>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "#FFFFFF",
                        fontWeight: 600,
                      }}
                    >
                      <EditableText path={`materials.notes.${index}.text`} defaultValue={note.text} multiline />
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div
              className="relative"
              style={{
                minHeight: "300px",
              }}
            >
              <EditableImage
                path="materials.image"
                defaultSrc={DEFAULTS.image}
                alt="Aluminum alloys"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
