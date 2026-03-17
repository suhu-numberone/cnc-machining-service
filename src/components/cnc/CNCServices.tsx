"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Our CNC ",
  headingHighlight: "Machining",
  headingSuffix: " Services",
  subheading: "Comprehensive precision machining solutions for demanding applications",
  services: [
    {
      title: "CNC Milling (3/4/5-Axis)",
      description:
        "Ideal for complex geometries. Our 5-axis capabilities allow for multi-sided machining in a single setup, ensuring superior positional accuracy.",
      specs: ["Max Envelope: 1500mm", "Tolerance: \u00B10.01mm"],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/3-cnc-milling-machining-service.webp",
    },
    {
      title: "CNC Turning / Mill-Turn",
      description:
        "High-efficiency solutions for cylindrical parts. Swiss-style machining available for small, intricate components in high volumes.",
      specs: ["Roundness: 0.005mm", "Surface Finish: Ra 0.4"],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/cnc-turning.webp",
    },
  ],
};

export function CNCServices() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "104px 0 112px",
        background: "#34312F",
      }}
    >
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="services.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="services.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="services.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              maxWidth: "760px",
              marginTop: "18px",
            }}
          >
            <EditableText path="services.subheading" defaultValue={DEFAULTS.subheading} />
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "32px", marginTop: "72px" }}
        >
          {DEFAULTS.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
              style={{ background: "#1A1A1A", overflow: "hidden" }}
            >
              <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <EditableImage
                  path={`services.items.${index}.image`}
                  defaultSrc={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
                  <EditableText path={`services.items.${index}.title`} defaultValue={service.title} />
                </h3>
                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#C5C6C9", marginBottom: "24px" }}>
                  <EditableText path={`services.items.${index}.description`} defaultValue={service.description} multiline />
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {service.specs.map((spec, specIndex) => (
                    <li key={spec} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#C5C6C9", fontSize: "16px", marginBottom: "8px" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D09947", flexShrink: 0 }} />
                      <EditableText path={`services.items.${index}.specs.${specIndex}`} defaultValue={spec} />
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
