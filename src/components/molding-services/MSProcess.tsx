"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "From CAD to Part",
  subheading:
    "A streamlined SOP ensuring every delivery meets your specifications.",
  ctaText: "Get Instant Quote",
  steps: [
    {
      number: "01",
      title: "Upload & Analyze",
      description:
        "Submit 3D/2D files. Our engineers perform a free DFM analysis to evaluate manufacturability and suggest optimizations.",
    },
    {
      number: "02",
      title: "Quote in 24h",
      description:
        "Receive a comprehensive quote including materials, processing, and shipping, backed by AI algorithms and engineer review.",
    },
    {
      number: "03",
      title: "Precision Production",
      description:
        "Production starts upon order confirmation. ISO-controlled processes, First Article Inspection (FAI), and real-time updates.",
    },
    {
      number: "04",
      title: "QC & Delivery",
      description:
        "100% inspection of critical dimensions. Material certs & CMM reports included. Global shipping via DHL/FedEx in as fast as 3 days.",
    },
  ],
};

export function MSProcess() {
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
