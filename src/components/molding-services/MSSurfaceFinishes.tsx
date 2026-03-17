"use client";

import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Technical Capabilities ",
  headingHighlight: "& Equipment",
  subheading:
    "We have advanced design software, machining equipment, and inspection instruments to ensure mold and product quality.",
  boxes: [
    {
      title: "Design Software & Standards",
      iconPath: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z",
      specs: [
        { label: "Design Software", value: "UG/Pro/E/AutoCAD" },
        { label: "Mold Flow Analysis", value: "Moldflow" },
        { label: "Mold Standards", value: "GB/DME/HASCO/MISUMI" },
        { label: "Gating Systems", value: "Hot/Cold Runner" },
      ],
    },
    {
      title: "Machining Accuracy & Capacity",
      iconPath: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
      specs: [
        { label: "Max Mold Weight", value: "20T-50T" },
        { label: "CNC Machining Accuracy", value: "\u00B10.005mm-\u00B10.01mm" },
        { label: "EDM Precision", value: "\u00B10.005mm-\u00B10.01mm" },
        { label: "Injection Machine Tonnage", value: "50-2000 tons" },
      ],
    },
    {
      title: "Special Process Control",
      iconPath: "M7 5h10v2h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z",
      specs: [
        { label: "Injection Process", value: "Time/Position/Speed/Pressure/Temp" },
        { label: "Die Casting Process", value: "Pressure/Speed/Temperature/Time" },
        { label: "Extrusion Process", value: "Temp/Speed/Pressure/Extrusion Ratio" },
        { label: "Stamping Process", value: "Die Design & Structure Optimization" },
      ],
    },
  ],
};

export function MSSurfaceFinishes() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "104px 0 112px", background: "#34312F" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "64px" }}>
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: "18px" }}>
            <EditableText path="capabilities.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}><EditableText path="capabilities.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", maxWidth: "700px" }}>
            <EditableText path="capabilities.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "28px" }}>
          {DEFAULTS.boxes.map((box, index) => (
            <motion.div
              key={box.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="transition-all duration-300 hover:-translate-y-1"
              style={{ background: "#1A1A1A", borderRadius: "12px", padding: "36px 28px", border: "1px solid rgba(208,153,71,0.15)", borderLeft: "3px solid #D09947", minHeight: "320px" }}
              onMouseEnter={(e) => { e.currentTarget.style.border = "1px solid rgba(208,153,71,0.4)"; e.currentTarget.style.borderLeft = "3px solid #D09947"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.45)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.border = "1px solid rgba(208,153,71,0.15)"; e.currentTarget.style.borderLeft = "3px solid #D09947"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-center gap-3" style={{ marginBottom: "28px" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#D09947"><path d={box.iconPath} /></svg>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF" }}>
                  <EditableText path={`capabilities.boxes.${index}.title`} defaultValue={box.title} />
                </h3>
              </div>

              <div className="flex flex-col">
                {box.specs.map((spec, si) => (
                  <div key={si} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "14px 0", borderTop: si === 0 ? "none" : "1px solid rgba(255,255,255,0.08)", gap: "8px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#7A7A7C" }}>
                      <EditableText path={`capabilities.boxes.${index}.specs.${si}.label`} defaultValue={spec.label} />
                    </span>
                    <span style={{ fontSize: "13px", color: "#EEC569" }}>
                      <EditableText path={`capabilities.boxes.${index}.specs.${si}.value`} defaultValue={spec.value} />
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
