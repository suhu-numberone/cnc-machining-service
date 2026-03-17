"use client";

import { motion } from "framer-motion";
import { Shield, Target, TrendingUp, CheckCircle, Award } from "lucide-react";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  badge: "Quality Assurance",
  titleWhiteLine1: "Your Trust,",
  titleHighlightLine2: "Verified by Data.",
  description:
    "We exceed standards with rigorous testing and verification for real-world applications.",
  metrics: [
    {
      value: "\u00B10.001",
      label: "Zeiss CMM Verification",
      description: "Every critical dimension verified by world-class metrology.",
    },
    {
      value: "2-Hr",
      label: "Dynamic IPQC",
      description: "In-process quality control every 2 hours for consistency.",
    },
    {
      value: "100%",
      label: "Full Documentation",
      description: "Digital OQC, Material Certs, and DFM reports included.",
    },
    {
      value: "0.2%",
      label: "ISO Certified",
      description: "ISO 9001:2015 & ISO 13485 & ISO 14001 standards backed.",
    },
  ],
  certificates: [
    {
      name: "ISO 9001",
      image: getImageUrl("home/6-quality-ISO9001.webp"),
    },
    {
      name: "ISO 13485",
      image: getImageUrl("home/6-quality-ISO13485.webp"),
    },
    {
      name: "ISO 14001",
      image: getImageUrl("home/6-quality-ISO14001.webp"),
    },
  ],
};

const metricIcons = [Target, TrendingUp, CheckCircle, Award];

export function Home3Certifications() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Two columns */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#D09947] rounded-full mb-8">
              <Shield className="w-4 h-4 text-[#D09947]" />
              <span className="text-[#D09947] text-xs font-medium tracking-[0.1em] uppercase">
                <EditableText
                  path="certifications.badge"
                  defaultValue={DEFAULTS.badge}
                />
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-2 tracking-[-0.02em]" style={{ fontWeight: 800 }}>
              <EditableText
                path="certifications.titleWhiteLine1"
                defaultValue={DEFAULTS.titleWhiteLine1}
              />
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#EEC569] mb-6 tracking-[-0.02em]" style={{ fontWeight: 800 }}>
              <EditableText
                path="certifications.titleHighlightLine2"
                defaultValue={DEFAULTS.titleHighlightLine2}
              />
            </h2>
            <p className="text-[#888888] text-base max-w-lg leading-relaxed">
              <EditableText
                path="certifications.description"
                defaultValue={DEFAULTS.description}
                multiline
              />
            </p>
          </motion.div>

          {/* Right - Certificate Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end items-center overflow-hidden"
          >
            <div className="flex gap-2 sm:gap-4">
              {DEFAULTS.certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative w-24 h-32 sm:w-32 sm:h-44 md:w-40 md:h-52 rounded-lg overflow-hidden shadow-2xl flex-shrink-0"
                  style={{
                    transform: `rotate(${index === 0 ? -3 : index === 2 ? 3 : 0}deg)`,
                  }}
                >
                  <EditableImage
                    path={`certifications.certificates.${index}.image`}
                    defaultSrc={cert.image}
                    alt={cert.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom - Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DEFAULTS.metrics.map((metric, index) => {
            const Icon = metricIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: `
                    radial-gradient(
                      60% 50% at 50% 0%,
                      rgba(249,235,188,0.08),
                      rgba(0,0,0,0) 65%
                    ),
                    #0D0D0D
                  `,
                  border: "1px solid rgba(208,153,71,0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "2px solid #D09947";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(208,153,71,0.25)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon and Value Row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#3A3A3A] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#D09947]" />
                  </div>
                  <span className="text-2xl font-bold text-white">
                    <EditableText
                      path={`certifications.metrics.${index}.value`}
                      defaultValue={metric.value}
                    />
                  </span>
                </div>

                {/* Label */}
                <h4 style={{ color: "#EEC569", fontWeight: 700, fontSize: "18px", marginBottom: "8px" }}>
                  <EditableText
                    path={`certifications.metrics.${index}.label`}
                    defaultValue={metric.label}
                  />
                </h4>

                {/* Description */}
                <p style={{ color: "#C5C6C9", fontSize: "14px", lineHeight: 1.5 }}>
                  <EditableText
                    path={`certifications.metrics.${index}.description`}
                    defaultValue={metric.description}
                    multiline
                  />
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
