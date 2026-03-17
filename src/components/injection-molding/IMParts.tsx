"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Molding Parts ",
  headingHighlight: "Made By Us",
  parts: [
    {
      title: "Medical Fluid Connector",
      description:
        "Ultrasonically welded and leak-tested after molding for guaranteed sterile fluid paths.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/4-Medical-Fluid Connector.webp",
      tags: ["PC", "ultrasonic welding", "leak-proof"],
    },
    {
      title: "Automotive Vent Grille",
      description:
        "Molded with precise, deep textures to achieve a consistent matte appearance across complex surfaces.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/4-Automotive Vent-Grille.webp",
      tags: ["ABS", "texture molding", "SPI-D", "automotive interior"],
    },
    {
      title: "Wearable Device Band",
      description:
        "Soft-touch overmolding on a rigid core for durable and comfortable skin contact.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/4-Wearable-Device Band.webp",
      tags: ["two-shot", "TPE overmolding", "wearable"],
    },
  ],
};

export function IMParts() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: "#000000",
      }}
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
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="parts.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="parts.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
        </motion.div>

        {/* Parts Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "28px" }}
        >
          {DEFAULTS.parts.map((part, index) => (
            <motion.div
              key={part.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                borderRadius: "12px",
                background: "#1A1A1A",
                border: "1px solid rgba(208,153,71,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid rgba(208,153,71,0.4)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid rgba(208,153,71,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <EditableImage
                  path={`parts.items.${index}.image`}
                  defaultSrc={part.image}
                  alt={part.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  <EditableText path={`parts.items.${index}.title`} defaultValue={part.title} />
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#7A7A7C",
                    marginBottom: "16px",
                  }}
                >
                  <EditableText path={`parts.items.${index}.description`} defaultValue={part.description} multiline />
                </p>

                {/* Tags */}
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
