"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  sectionTitle: "Advanced Quality Control ",
  sectionTitleHighlight: "Equipment",
  sectionDescription: "State-of-the-art inspection technology ensuring precision at every measurement",
  equipment: [
    {
      name: "ZEISS CMM",
      description: "Measures complex surfaces and geometric profiles to ensure precise component fit and assembly accuracy.",
      image: getImageUrl("quality/qc-equipment-1.png"),
    },
    {
      name: "2.5D Image Measuring",
      description: "Performs non-contact optical inspection, ideal for delicate or reflective components requiring accurate measurement without surface contact.",
      image: getImageUrl("quality/qc-equipment-2.png"),
    },
    {
      name: "Spectrometer",
      description: "Identifies material alloy composition within seconds, preventing material mix-up and ensuring correct material specifications.",
      image: getImageUrl("quality/qc-equipment-2.png"),
    },
    {
      name: "Roughness Tester",
      description: "Quantifies surface finish characteristics critical for friction, wear resistance, and sealing performance in moving components.",
      image: getImageUrl("quality/qc-equipment-2.png"),
    },
  ],
};

export function QualityEquipment() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "80px 0",
        background: `
          radial-gradient(
            70% 50% at 50% 0%,
            rgba(249,235,188,0.06),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            style={{
              fontSize: "46px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="equipment.sectionTitle" defaultValue={DEFAULTS.sectionTitle} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="equipment.sectionTitleHighlight" defaultValue={DEFAULTS.sectionTitleHighlight} />
            </span>
          </h2>
          <p
            style={{
              color: "#C5C6C9",
              fontSize: "18px",
              lineHeight: 1.6,
              maxWidth: "640px",
              margin: "16px auto 0",
            }}
          >
            <EditableText
              path="equipment.sectionDescription"
              defaultValue={DEFAULTS.sectionDescription}
              multiline
            />
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEFAULTS.equipment.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: "#4A4A48",
                borderRadius: "18px",
                overflow: "hidden",
                border: hoveredIndex === index ? "2px solid #D09947" : "1px solid rgba(208,153,71,0.18)",
                boxShadow: hoveredIndex === index ? "0 0 30px rgba(208,153,71,0.5)" : "0 12px 32px rgba(0,0,0,0.45)",
                transition: "border 0.3s ease, box-shadow 0.3s ease",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden" style={{ background: "#3A3A3A" }}>
                <EditableImage
                  path={`equipment.items.${index}.image`}
                  defaultSrc={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#34312F] to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Content */}
              <div style={{ padding: "20px", background: "#34312F", flex: 1 }}>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  <EditableText
                    path={`equipment.items.${index}.name`}
                    defaultValue={item.name}
                  />
                </h3>
                <p style={{ color: "#C5C6C9", fontSize: "14px", lineHeight: 1.6 }}>
                  <EditableText
                    path={`equipment.items.${index}.description`}
                    defaultValue={item.description}
                    multiline
                  />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
