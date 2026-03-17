"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "CNC Parts ",
  headingHighlight: "Made By Us",
  subheading: "Precision components manufactured for various industries",
  parts: [
    {
      title: "UAV structural components",
      description: "5-axis machining of 7075 aluminum alloy, lightweight design, high strength-to-weight ratio",
      tags: ["Material: 7075 Aluminum", "Tolerance: \u00B10.05mm", "Process: 5-axis machining"],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/4-UAV-structural components.webp",
    },
    {
      title: "Medical Device Housing",
      description: "316 stainless steel with precision tolerance for surgical equipment, passivated for corrosion resistance",
      tags: ["Material: 316 Stainless", "Tolerance: \u00B10.015mm", "Finish: Passivation"],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/4-Medical-Device Housing.webp",
    },
    {
      title: "Automotive Sensor Mount",
      description: "6061 aluminum turned part with threaded features, anodized black for aesthetics and protection",
      tags: ["Material: 6061 Aluminum", "Tolerance: \u00B10.03mm", "Finish: Black Anodize"],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/4-Automotive Sensor Mount.webp",
    },
  ],
};

export function CNCParts() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "112px 0 120px", background: "#000000" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
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
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", marginTop: "18px" }}>
            <EditableText path="parts.subheading" defaultValue={DEFAULTS.subheading} />
          </p>
        </motion.div>

        {/* Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px" }}>
          {DEFAULTS.parts.map((part, index) => (
            <motion.div
              key={part.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #0D0D0D`,
                borderRadius: "18px",
                border: "2px solid rgba(208,153,71,0.35)",
                boxShadow: "0 14px 36px rgba(0,0,0,0.45)",
                overflow: "hidden",
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
              <div className="relative overflow-hidden" style={{ height: "190px" }}>
                <EditableImage
                  path={`parts.items.${index}.image`}
                  defaultSrc={part.image}
                  alt={part.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))" }} />
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF", marginBottom: "10px" }}>
                  <EditableText path={`parts.items.${index}.title`} defaultValue={part.title} />
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#C5C6C9", marginBottom: "16px" }}>
                  <EditableText path={`parts.items.${index}.description`} defaultValue={part.description} multiline />
                </p>
                <div className="flex flex-wrap gap-2">
                  {part.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      style={{
                        border: "1px solid rgba(238,197,105,0.5)",
                        color: "#F5D89A",
                        background: "transparent",
                        fontSize: "13px",
                        padding: "6px 10px",
                        borderRadius: "999px",
                      }}
                    >
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
