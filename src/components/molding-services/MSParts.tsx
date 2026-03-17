"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Molding Product ",
  headingHighlight: "Case Studies",
  subheading:
    "We provide precision molded parts for various industries, from electronics housings to automotive components, demonstrating our processing capabilities and craftsmanship.",
  parts: [
    {
      title: "Electronics & Appliances",
      description:
        "High-precision electronics housings, connectors, switch panels using ABS, PC engineering plastics with painting or plating finishes.",
      materials: "ABS, PC+ABS, PBT",
      process: "Precision Injection + Silk Screen + Painting",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/4-Medical-Fluid Connector.webp",
    },
    {
      title: "Automotive Components",
      description:
        "Automotive interior/exterior parts, functional components using PP, PA materials meeting weather, impact resistance and dimensional stability requirements.",
      materials: "PP, PA6, PA66+GF",
      process: "Injection Molding + Ultrasonic Welding + Spray Coating",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/4-Automotive Vent-Grille.webp",
    },
    {
      title: "Medical Equipment Parts",
      description:
        "Medical device housings, accessories, disposable consumables using medical-grade PP, PC materials meeting biocompatibility and sterilization requirements.",
      materials: "Medical-grade PP, PC, PE",
      process: "Clean Room Injection + Sterile Packaging",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/4-Wearable-Device Band.webp",
    },
  ],
};

export function MSParts() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "112px 0 120px", background: "#000000" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "64px" }}
        >
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: "18px" }}>
            <EditableText path="parts.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="parts.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", maxWidth: "700px" }}>
            <EditableText path="parts.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "28px" }}>
          {DEFAULTS.parts.map((part, index) => (
            <motion.div
              key={part.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ borderRadius: "12px", background: "#1A1A1A", border: "1px solid rgba(208,153,71,0.15)" }}
              onMouseEnter={(e) => { e.currentTarget.style.border = "1px solid rgba(208,153,71,0.4)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.45)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.border = "1px solid rgba(208,153,71,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <EditableImage path={`parts.items.${index}.image`} defaultSrc={part.image} alt={part.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>
                  <EditableText path={`parts.items.${index}.title`} defaultValue={part.title} />
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#7A7A7C", marginBottom: "16px" }}>
                  <EditableText path={`parts.items.${index}.description`} defaultValue={part.description} multiline />
                </p>
                <p style={{ fontSize: "14px", color: "#C5C6C9", marginBottom: "6px" }}>
                  <span style={{ fontWeight: 700, color: "#EEC569" }}>Materials: </span>
                  <EditableText path={`parts.items.${index}.materials`} defaultValue={part.materials} />
                </p>
                <p style={{ fontSize: "14px", color: "#C5C6C9" }}>
                  <span style={{ fontWeight: 700, color: "#EEC569" }}>Process: </span>
                  <EditableText path={`parts.items.${index}.process`} defaultValue={part.process} />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
