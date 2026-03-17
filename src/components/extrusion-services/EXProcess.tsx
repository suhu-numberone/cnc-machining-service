"use client";

import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Extrusion Process",
  subheading: "",
  steps: [
    {
      number: "01",
      title: "Design & Die Engineering",
      description:
        "Custom die design, FEA simulation, profile optimization for aluminum extrusion.",
    },
    {
      number: "02",
      title: "Billet Heating & Extrusion",
      description:
        "Precise temperature control, 6063/6061 alloys, indirect extrusion available.",
    },
    {
      number: "03",
      title: "Cooling & Stretching",
      description:
        "Controlled cooling, stretcher leveling to achieve straightness \u22640.8 mm/m.",
    },
    {
      number: "04",
      title: "Cutting & Post-Machining",
      description:
        "CNC saw \u00B10.2 mm, drilling, tapping, and surface finishing.",
    },
  ],
};

export function EXProcess() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: "#0A0A0A",
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
              fontWeight: 800,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="process.heading" defaultValue={DEFAULTS.heading} />
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              marginTop: "18px",
            }}
          >
            <EditableText path="process.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        {/* Steps Grid - 4 columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "24px" }}
        >
          {DEFAULTS.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center transition-all duration-300 hover:-translate-y-1 group"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "40px 28px 36px",
              }}
            >
              {/* Numbered Circle */}
              <div
                className="mx-auto flex items-center justify-center transition-all duration-300 group-hover:!border-[#D09947] group-hover:!bg-[rgba(208,153,71,0.08)]"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  border: "2px solid rgba(150,160,180,0.4)",
                  background: "rgba(150,160,180,0.06)",
                  marginBottom: "24px",
                }}
              >
                <span
                  className="transition-all duration-300 group-hover:!text-[#EEC569]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#8A90A0",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "14px",
                }}
              >
                <EditableText path={`process.steps.${index}.title`} defaultValue={step.title} />
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.65,
                  color: "#8A90A0",
                }}
              >
                <EditableText path={`process.steps.${index}.description`} defaultValue={step.description} multiline />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
