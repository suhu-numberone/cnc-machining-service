"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Molding ",
  headingHighlight: "Solutions",
  headingSuffix: "",
  subheading:
    "We provide comprehensive molding services fabrication services with advanced equipment and strict quality control systems to ensure every part meets the highest standards.",
  services: [
    {
      title: "Injection Molding",
      description:
        "High-precision plastic injection molding services, from 50-ton to 2000-ton injection machines, meeting production needs from small precision parts to large structural components.",
      specs: [
        "Clamping Force/Injection Volume/Injection Pressure/Plasticizing Capacity",
        "Time/Position/Speed/Pressure/Temperature Control",
        "Max Mold Weight: 20T-50T",
        "CNC Machining Accuracy: \u00B10.005mm-\u00B10.01mm",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
    {
      title: "Extrusion Molding",
      description:
        "Professional extrusion molding services, producing various plastic profiles, pipes, sheets, and films, meeting construction, industrial, and packaging needs.",
      specs: [
        "Temperature/Speed/Pressure/Extrusion Ratio Control",
        "Hot/Cold Extrusion Processes",
        "Extrusion Die Life: 5,000 - 50,000 meters",
        "Steel: H13/SKD61",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-high-volume-injection-molding-production.webp",
    },
    {
      title: "Die Casting",
      description:
        "Precision die casting services, producing high-quality zinc, aluminum, magnesium alloy die castings, suitable for automotive, electronics, and consumer goods industries.",
      specs: [
        "Pressure/Speed/Temperature/Time Control",
        "Injection Force/Injection Ratio/Fill Rate Optimization",
        "Die Casting Mold Life: 80,000 - 200,000 cycles",
        "Steel: H13/8407/2344",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-custom-injection-molding-solutions.webp",
    },
  ],
};

export function MSServices() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "104px 0 112px",
        background: "#34312F",
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
              maxWidth: "700px",
              marginTop: "18px",
            }}
          >
            <EditableText path="services.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        {/* Services Grid - 3 columns */}
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
            {DEFAULTS.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden"
                style={{ background: "#1A1A1A" }}
              >
                <div className="relative" style={{ height: "200px" }}>
                  <EditableImage
                    path={`services.items.${index}.image`}
                    defaultSrc={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>
                    <EditableText path={`services.items.${index}.title`} defaultValue={service.title} />
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#C5C6C9", marginBottom: "20px" }}>
                    <EditableText path={`services.items.${index}.description`} defaultValue={service.description} multiline />
                  </p>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#EEC569", marginBottom: "12px" }}>Key Parameters:</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {service.specs.map((spec, specIndex) => (
                      <li key={spec} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#C5C6C9", fontSize: "14px", marginBottom: "8px" }}>
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
      </div>
    </section>
  );
}
