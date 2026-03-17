"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Injection Molding ",
  headingHighlight: "Material",
  materials: [
    {
      name: "General Purpose Plastics",
      icon: "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
      grades: ["ABS", "PP", "HDPE", "GPPS"],
      benefits: "Cost-effective, excellent flow properties, easy processing",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Material-General-Plastics.webp",
    },
    {
      name: "Engineering Plastics",
      icon: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z",
      grades: ["PA (Nylon)", "PC", "POM", "PBT"],
      benefits: "High strength, heat resistance, dimensional stability",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Engineering-Plastics.webp",
    },
    {
      name: "High-Performance Plastics",
      icon: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
      grades: ["PEEK", "PEI", "PPS", "LCP"],
      benefits: "Extreme temperature resistance, chemical resistance, superior mechanical properties",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-High-Performance-Plastics.webp",
    },
    {
      name: "Elastomers/TPE",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
      grades: ["TPE", "TPU", "LSR", "Silicone"],
      benefits: "Flexibility, soft-touch feel, overmolding compatibility",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Elastomers_TPE.webp",
    },
  ],
};

export function IMMaterials() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `
          radial-gradient(
            60% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
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
                border: activeTab === index
                  ? "1px solid #D09947"
                  : "1px solid rgba(208,153,71,0.3)",
                background: activeTab === index
                  ? "rgba(208,153,71,0.15)"
                  : "transparent",
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
            padding: "40px",
            border: "1px solid rgba(208,153,71,0.15)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center gap-3" style={{ marginBottom: "24px" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#D09947">
                  <path d={DEFAULTS.materials[activeTab].icon} />
                </svg>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}
                >
                  <EditableText path={`materials.items.${activeTab}.name`} defaultValue={DEFAULTS.materials[activeTab].name} />
                </h3>
              </div>

              {/* Grades */}
              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#EEC569", marginBottom: "12px" }}>
                  Common Grades
                </p>
                <div className="flex flex-wrap gap-2">
                  {DEFAULTS.materials[activeTab].grades.map((grade) => (
                    <span
                      key={grade}
                      style={{
                        border: "1px solid rgba(238,197,105,0.5)",
                        color: "#F5D89A",
                        background: "transparent",
                        fontSize: "13px",
                        padding: "6px 12px",
                        borderRadius: "999px",
                      }}
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#EEC569", marginBottom: "8px" }}>
                  Key Benefits
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#C5C6C9" }}>
                  <EditableText path={`materials.items.${activeTab}.description`} defaultValue={DEFAULTS.materials[activeTab].benefits} multiline />
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div
              className="relative"
              style={{
                minHeight: "280px",
                borderRadius: "12px",
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
          style={{ marginTop: "48px" }}
        >
          <Link
            href="https://app.apexbatch.com/"
            rel="nofollow"
            className="inline-flex items-center gap-2 bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider group"
          >
            Get Instant Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
