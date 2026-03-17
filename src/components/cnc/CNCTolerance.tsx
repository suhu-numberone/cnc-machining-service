"use client";

import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Precision ",
  headingHighlight: "Machining Tolerance",
  subheading: "Our CNC machining services ensure consistent accuracy for all machined parts, allowing each component to integrate perfectly. We adhere to strict industry standards with capabilities for both standard and precision tolerances.",
  toleranceData: [
    { specification: "General Tolerance", capability: "Metals ISO 2768-f\nPlastics ISO 2768-m", standard: "Standard machining tolerance" },
    { specification: "Precision Tolerance", capability: "\u00B10.001 inches\n(\u00B10.025mm)", standard: "Tighter tolerances per drawing specifications" },
    { specification: "Minimum Wall Thickness", capability: "0.5mm", standard: "For metals and plastics" },
    { specification: "Minimum End Mill Size", capability: "0.5mm", standard: "Smallest cutting tool diameter" },
    { specification: "Minimum Drill Size", capability: "0.2mm", standard: "Smallest drill diameter" },
    { specification: "Maximum Part Size", capability: "Milling 6000\u00D72000\u00D7600mm\nTurning 800\u00D72000mm", standard: "XYZ machining envelope\nDiameter \u00D7 length" },
    { specification: "Production Volume", capability: "1 - 10,000+ pcs", standard: "From prototyping to volume production" },
    { specification: "Lead Time", capability: "1 - 5 business days", standard: "Most projects delivered within 5 days" },
  ],
};

export function CNCTolerance() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #000000`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "48px" }}
        >
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: "18px" }}>
            <EditableText path="tolerance.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="tolerance.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", maxWidth: "700px" }}>
            <EditableText path="tolerance.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

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
              maxWidth: "100%",
              width: "100%",
            }}
          >
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["Specification", "Capability", "Standard"].map((header) => (
                    <th
                      key={header}
                      style={{
                        background: "rgba(208,153,71,0.15)",
                        borderBottom: "1px solid rgba(208,153,71,0.3)",
                        padding: "20px 28px",
                        textAlign: "center",
                        color: "#EEC569",
                        fontWeight: 700,
                        fontSize: "20px",
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEFAULTS.toleranceData.map((row, index) => (
                  <tr key={index} style={{ background: index % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)" }}>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", textAlign: "center", color: "#FFFFFF", fontWeight: 700, fontSize: "16px" }}>
                      <EditableText path={`tolerance.data.${index}.specification`} defaultValue={row.specification} />
                    </td>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", textAlign: "center", color: "#FFFFFF", fontWeight: 700, fontSize: "16px", whiteSpace: "pre-line" }}>
                      <EditableText path={`tolerance.data.${index}.capability`} defaultValue={row.capability} multiline />
                    </td>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", textAlign: "center", color: "#FFFFFF", fontWeight: 700, fontSize: "16px", whiteSpace: "pre-line" }}>
                      <EditableText path={`tolerance.data.${index}.standard`} defaultValue={row.standard} multiline />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
