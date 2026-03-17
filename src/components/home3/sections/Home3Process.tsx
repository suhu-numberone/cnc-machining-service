"use client";

import { motion } from "framer-motion";
import { Upload, FileSearch, Settings, Truck } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  titleWhite: "How to Work ",
  titleHighlight: "With ApexBatch",
  subtitle:
    "A clear, guided process that takes you from design to delivery — without unnecessary complexity.",
  steps: [
    {
      number: "01",
      title: "Submit Your Design",
      description:
        "Upload your CAD files and basic requirements. Our team reviews your drawings, materials, tolerances, and application needs.",
      bullets: ["STEP, IGES, STL", "PDF Drawings", "3D Models"],
    },
    {
      number: "02",
      title: "Engineering Review & Quotation",
      description:
        "Within 24 hours, we provide a manufacturability review, process recommendations, pricing, and lead time options.",
      bullets: ["Automated Pricing", "DFM Analysis", "Material Selection"],
    },
    {
      number: "03",
      title: "Production & Quality Control",
      description:
        "Once confirmed, we start production with controlled processes and in-process inspections to ensure every part meets specifications.",
      bullets: ["CNC Machining", "Quality Control", "Progress Updates"],
    },
    {
      number: "04",
      title: "Delivery & Ongoing Support",
      description:
        "Parts are shipped with tracking and inspection records. Our team remains available for follow-up support and future production needs.",
      bullets: ["CMM Inspection", "Quality Certs", "Fast Shipping"],
    },
  ],
};

const stepIcons = [Upload, FileSearch, Settings, Truck];

export function Home3Process() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "76px 0 120px",
        background: "#34312F",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText
              path="process.titleWhite"
              defaultValue={DEFAULTS.titleWhite}
            />
            <span style={{ color: "#EEC569" }}>
              <EditableText
                path="process.titleHighlight"
                defaultValue={DEFAULTS.titleHighlight}
              />
            </span>
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              maxWidth: "760px",
              marginTop: "18px",
            }}
          >
            <EditableText
              path="process.subtitle"
              defaultValue={DEFAULTS.subtitle}
              multiline
            />
          </p>
        </motion.div>

        {/* Process Steps - 4 cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{
            gap: "32px",
            marginTop: "72px",
          }}
        >
          {DEFAULTS.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group transition-all duration-300 hover:-translate-y-1 hover:border-[#D09947]"
                style={{
                  background: "#4A4A48",
                  borderRadius: "18px",
                  border: "1px solid rgba(208,153,71,0.18)",
                  padding: "28px 26px",
                  minHeight: "340px",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
                }}
              >
                {/* Icon container */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(208,153,71,0.12)",
                    border: "1px solid rgba(208,153,71,0.35)",
                    marginBottom: "20px",
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#D09947" }} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "19px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginTop: "16px",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  <EditableText
                    path={`process.steps.${index}.title`}
                    defaultValue={step.title}
                  />
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#C5C6C9",
                    marginBottom: "16px",
                  }}
                >
                  <EditableText
                    path={`process.steps.${index}.description`}
                    defaultValue={step.description}
                    multiline
                  />
                </p>

                {/* Bullet Points */}
                <ul className="space-y-1.5">
                  {step.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center gap-2.5">
                      <div
                        className="flex-shrink-0"
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#EEC569",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "14.5px",
                          color: "#C5C6C9",
                        }}
                      >
                        <EditableText
                          path={`process.steps.${index}.bullets.${bulletIndex}`}
                          defaultValue={bullet}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
