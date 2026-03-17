"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Mold Types and Standards",
  subheading:
    "We offer various mold type options, from rapid prototyping molds to precision production molds, meeting different production requirements.",
  toleranceData: [
    {
      dimension: "Rapid Prototyping Mold",
      industryStandard: "S50C/Aluminum (7075/6061)",
      apexPrecision: "100 - 1,000 cycles",
      reference: "Prototype verification, urgent delivery, very low volume",
    },
    {
      dimension: "Soft Steel Production Mold",
      industryStandard: "Steel (P20/718H)",
      apexPrecision: "10,000 - 50,000 cycles",
      reference: "Small batch production, short lifecycle products",
    },
    {
      dimension: "Hardened Production Mold",
      industryStandard: "Steel (S136/8407)",
      apexPrecision: "300,000 - 1,000,000+ cycles",
      reference: "High-volume production, high-precision products",
    },
    {
      dimension: "Die Casting Mold",
      industryStandard: "Steel (H13/8407/2344)",
      apexPrecision: "80,000 - 200,000 cycles (Aluminum)",
      reference: "Aluminum, zinc alloy die casting production",
    },
    {
      dimension: "Extrusion Dies",
      industryStandard: "Steel (H13/SKD61)",
      apexPrecision: "5,000 - 50,000 meters (material dependent)",
      reference: "Continuous production of aluminum/plastic profiles",
    },
    {
      dimension: "Progressive Stamping Die",
      industryStandard: "Steel (SKD11/DC53)",
      apexPrecision: "500,000 - 5,000,000 cycles",
      reference: "High-volume precision metal stamping",
    },
  ],
};

const HEADERS = ["Mold Category", "Core/Cavity Material", "Expected Life (Cycles)", "Best For"];

export function MSTolerance() {
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
