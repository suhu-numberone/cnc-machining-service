"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Tolerance Standards",
  subheading:
    "We follow international tolerance standards while providing higher precision capabilities than industry standards.",
  toleranceData: [
    {
      dimension: "Cutting Linear Tolerance",
      industryStandard: "\u00B1 0.2 mm",
      apexPrecision: "\u00B1 0.1 mm",
      reference: "ISO 9013",
    },
    {
      dimension: "Bending Linear Tolerance",
      industryStandard: "\u00B1 0.3 mm",
      apexPrecision: "\u00B1 0.15 mm",
      reference: "ISO 2768",
    },
    {
      dimension: "Bend Angle Tolerance",
      industryStandard: "\u00B1 1.0\u00B0",
      apexPrecision: "\u00B1 0.5\u00B0",
      reference: "ISO 2768",
    },
    {
      dimension: "Hole to Edge Distance",
      industryStandard: "\u00B1 0.2 mm",
      apexPrecision: "\u00B1 0.1 mm",
      reference: "ISO 2768",
    },
    {
      dimension: "Welding Distortion Control",
      industryStandard: "Depending on size",
      apexPrecision: "Depending on product structure",
      reference: "Customer drawing requirements",
    },
  ],
};

const HEADERS = ["Dimension", "Industry Standard", "ApexBatch Precision Capability", "Reference Standard"];

export function SMTolerance() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: "#0F0F0F",
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
            style={{
              fontSize: "46px",
              fontWeight: 800,
              letterSpacing: "-0.015em",
              marginBottom: "18px",
              color: "#EEC569",
              fontStyle: "normal",
            }}
          >
            <EditableText path="tolerance.heading" defaultValue={DEFAULTS.heading} />
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              maxWidth: "700px",
            }}
          >
            <EditableText path="tolerance.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
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
              borderRadius: "12px",
              border: "1px solid rgba(208,153,71,0.25)",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {HEADERS.map((header) => (
                    <th
                      key={header}
                      style={{
                        background: "rgba(120,100,50,0.35)",
                        borderBottom: "1px solid rgba(208,153,71,0.3)",
                        padding: "20px 28px",
                        textAlign: "left",
                        color: "#EEC569",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEFAULTS.toleranceData.map((row, index) => (
                  <tr
                    key={index}
                    style={{
                      background:
                        index % 2 === 0
                          ? "rgba(255,255,255,0.02)"
                          : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <td
                      style={{
                        borderBottom:
                          index < DEFAULTS.toleranceData.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        padding: "20px 28px",
                        textAlign: "left",
                        color: "#C5C6C9",
                        fontSize: "15px",
                      }}
                    >
                      <EditableText path={`tolerance.data.${index}.dimension`} defaultValue={row.dimension} />
                    </td>
                    <td
                      style={{
                        borderBottom:
                          index < DEFAULTS.toleranceData.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        padding: "20px 28px",
                        textAlign: "left",
                        color: "#C5C6C9",
                        fontSize: "15px",
                      }}
                    >
                      <EditableText path={`tolerance.data.${index}.industryStandard`} defaultValue={row.industryStandard} />
                    </td>
                    <td
                      style={{
                        borderBottom:
                          index < DEFAULTS.toleranceData.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        padding: "20px 28px",
                        textAlign: "left",
                        color: "#EEC569",
                        fontWeight: 600,
                        fontSize: "15px",
                      }}
                    >
                      <EditableText path={`tolerance.data.${index}.apexPrecision`} defaultValue={row.apexPrecision} />
                    </td>
                    <td
                      style={{
                        borderBottom:
                          index < DEFAULTS.toleranceData.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        padding: "20px 28px",
                        textAlign: "left",
                        color: "#C5C6C9",
                        fontSize: "15px",
                      }}
                    >
                      <EditableText path={`tolerance.data.${index}.reference`} defaultValue={row.reference} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
