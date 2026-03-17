"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Precision & Technical Standards",
  headingHighlight: "",
  footnote:
    "All tolerances are optimized for aluminum die casting and zinc die casting projects. We also support die casting vs injection molding consultations – our engineers help you choose the right process.",
  columns: ["Dimension / characteristic", "Standard", "ApexBatch capability", "Reference"],
  toleranceData: [
    {
      dimension: "Die casting linear tolerance",
      standard: "±0.1 ~ 0.2 mm",
      typical: "part-dependent",
      reference: "ISO 8062",
    },
    {
      dimension: "Hole position (as-cast)",
      standard: "±0.2 mm",
      typical: "±0.15 mm",
      reference: "—",
    },
    {
      dimension: "CNG post-machining",
      standard: "±0.05 mm",
      typical: "±0.03 mm",
      reference: "typical",
    },
    {
      dimension: "Flatness control",
      standard: "0.2 mm / 100 mm",
      typical: "0.15 mm / 100 mm",
      reference: "—",
    },
  ],
};

export function DCTolerance() {
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
          style={{ marginBottom: "48px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              marginBottom: "18px",
            }}
          >
            <EditableText path="tolerance.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="tolerance.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
        </motion.div>

        {/* Tolerance Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div
            style={{
              borderRadius: "16px",
              border: "2px solid #7F4D0F",
              boxShadow: "inset 0 0 0 1px rgba(208,153,71,0.15), 0 24px 48px rgba(0,0,0,0.6)",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {DEFAULTS.columns.map((col) => (
                    <th
                      key={col}
                      style={{
                        background: "rgba(208,153,71,0.15)",
                        borderBottom: "1px solid rgba(208,153,71,0.3)",
                        padding: "20px 28px",
                        textAlign: "left",
                        color: "#EEC569",
                        fontWeight: 700,
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEFAULTS.toleranceData.map((row, index) => (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", color: "#FFFFFF", fontWeight: 700, fontSize: "15px" }}>
                      <EditableText path={`tolerance.data.${index}.dimension`} defaultValue={row.dimension} />
                    </td>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", color: "#C5C6C9", fontSize: "15px" }}>
                      <EditableText path={`tolerance.data.${index}.standard`} defaultValue={row.standard} />
                    </td>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", color: "#C5C6C9", fontSize: "15px" }}>
                      <EditableText path={`tolerance.data.${index}.typical`} defaultValue={row.typical} />
                    </td>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", color: "#EEC569", fontSize: "15px" }}>
                      <EditableText path={`tolerance.data.${index}.reference`} defaultValue={row.reference} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-start gap-2"
          style={{ fontSize: "14px", color: "#7A7A7C", marginTop: "24px" }}
        >
          <span style={{ flexShrink: 0, marginTop: "2px", color: "#D09947", fontSize: "16px", fontWeight: 700 }}>✓</span>
          <p>
            <EditableText path="tolerance.footnote" defaultValue={DEFAULTS.footnote} />
          </p>
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
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider flex items-center justify-center gap-2 group"
          >
            Get Instant Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
