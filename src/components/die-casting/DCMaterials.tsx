"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Die Casting ",
  headingHighlight: "Materials We Work With",
  materials: [
    {
      name: "Aluminum",
      icon: "✈️",
      grades: ["ADC12", "A380"],
      characteristics: [
        "Cost-effective, excellent fluidity, ideal for thin-wall aluminum die casting parts.",
      ],
      note: "Other alloys on request (including aluminum die casting suppliers grade 383, 360, etc.)",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Material-General-Plastics.webp",
    },
    {
      name: "Zinc",
      icon: "🔩",
      grades: ["ZAMAK 3", "ZAMAK 5"],
      characteristics: [
        "High strength, superior surface finish for small zinc die casting services.",
      ],
      note: "",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Engineering-Plastics.webp",
    },
  ],
};

export function DCMaterials() {
  const [activeTab, setActiveTab] = useState(0);

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
          className="text-center"
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

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: "40px" }}>
          {DEFAULTS.materials.map((material, index) => (
            <motion.button
              key={material.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveTab(index)}
              className="transition-all duration-300"
              style={{
                padding: "10px 24px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                border: activeTab === index ? "1px solid #D09947" : "1px solid rgba(208,153,71,0.3)",
                background: activeTab === index ? "rgba(208,153,71,0.15)" : "transparent",
                color: activeTab === index ? "#EEC569" : "#7A7A7C",
              }}
            >
              {material.name}
            </motion.button>
          ))}
        </div>

        {/* Content Panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "#1A1A1A",
            borderRadius: "16px",
            border: "1px solid rgba(208,153,71,0.15)",
            overflow: "hidden",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column - Content */}
            <div style={{ padding: "40px" }}>
              <div className="flex items-center gap-3" style={{ marginBottom: "24px" }}>
                <span style={{ fontSize: "24px" }}>{DEFAULTS.materials[activeTab].icon}</span>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF" }}>
                  <EditableText path={`materials.items.${activeTab}.name`} defaultValue={DEFAULTS.materials[activeTab].name} />
                </h3>
              </div>

              {/* Common Grades */}
              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#EEC569", marginBottom: "12px" }}>
                  Common Grades
                </p>
                <div className="flex flex-wrap gap-2">
                  {DEFAULTS.materials[activeTab].grades.map((grade, i) => (
                    <span
                      key={i}
                      style={{
                        display: "inline-block",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "6px",
                        padding: "6px 14px",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features & Applications */}
              <div>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#EEC569", marginBottom: "8px" }}>
                  Key features & applications
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {DEFAULTS.materials[activeTab].characteristics.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.7,
                        color: "#C5C6C9",
                        paddingLeft: "16px",
                        position: "relative",
                        marginBottom: "8px",
                      }}
                    >
                      <span style={{ position: "absolute", left: 0, color: "#7A7A7C" }}>&bull;</span>
                      <EditableText
                        path={`materials.items.${activeTab}.characteristics.${i}`}
                        defaultValue={item}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note */}
              {DEFAULTS.materials[activeTab].note && (
                <div style={{ marginTop: "24px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px" }}>
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: "14px", flexShrink: 0 }}>⚠️</span>
                    <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#7A7A7C" }}>
                      <EditableText path={`materials.items.${activeTab}.note`} defaultValue={DEFAULTS.materials[activeTab].note} />
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Image */}
            <div
              className="relative"
              style={{
                minHeight: "300px",
                borderRadius: "0 16px 16px 0",
                overflow: "hidden",
              }}
            >
              <EditableImage
                path={`materials.items.${activeTab}.image`}
                defaultSrc={DEFAULTS.materials[activeTab].image}
                alt={DEFAULTS.materials[activeTab].name}
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
