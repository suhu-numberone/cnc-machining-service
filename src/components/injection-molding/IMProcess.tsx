"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Our Injection Molding ",
  headingHighlight: "Process",
  subheading:
    "Our comprehensive injection molding workflow ensures precision, quality, and consistency from design to final part delivery.",
  ctaText: "Get Instant Quote",
  steps: [
    {
      number: "01",
      title: "Design & DFM",
      description:
        "3D model analysis and Design for Manufacturability feedback to optimize part design.",
      iconPath: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z",
    },
    {
      number: "02",
      title: "Tooling & Mold Making",
      description:
        "Precision mold fabrication using CNC machining, EDM, and polishing to create injection molds.",
      iconPath: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",
    },
    {
      number: "03",
      title: "Material Preparation & Injection",
      description:
        "Material drying and plasticizing, followed by injection into mold under controlled conditions.",
      iconPath: "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z",
    },
    {
      number: "04",
      title: "Cooling & Ejection",
      description:
        "Controlled cooling cycle followed by part ejection, then secondary operations as needed.",
      iconPath: "M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 9.93 20 11 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 14.07 4 13 4c-4.42 0-8 3.58-8 8H2l4 4 4-4H6z",
    },
    {
      number: "05",
      title: "Quality Control & Shipping",
      description:
        "Dimensional inspection, visual checks, and packaging for shipment to customer.",
      iconPath: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",
    },
  ],
};

export function IMProcess() {
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
            <EditableText path="process.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="process.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
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

        {/* Steps Grid - 5 columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
          style={{ gap: "24px" }}
        >
          {DEFAULTS.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div
                className="mx-auto flex items-center justify-center"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  border: "2px solid rgba(208,153,71,0.3)",
                  background: "rgba(255,255,255,0.03)",
                  marginBottom: "20px",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#D09947">
                  <path d={step.iconPath} />
                </svg>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "12px",
                }}
              >
                {index + 1}. <EditableText path={`process.steps.${index}.title`} defaultValue={step.title} />
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "#C5C6C9",
                }}
              >
                <EditableText path={`process.steps.${index}.description`} defaultValue={step.description} multiline />
              </p>

              {/* Connector line (except last) */}
              {index < DEFAULTS.steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 -right-3 w-6 h-[2px]"
                  style={{
                    background: "linear-gradient(to right, #D09947, transparent)",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

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
            <EditableText path="process.ctaText" defaultValue={DEFAULTS.ctaText} />
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
