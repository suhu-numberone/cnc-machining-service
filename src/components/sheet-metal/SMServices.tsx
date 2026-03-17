"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Sheet Metal Fabrication ",
  headingHighlight: "Services",
  headingSuffix: "",
  subheading:
    "We provide comprehensive sheet metal fabrication services with advanced equipment and strict quality control systems to ensure every part meets the highest standards.",
  services: [
    {
      title: "Laser Cutting",
      description:
        "High-precision laser cutting for complex geometries and tight tolerances. Ideal for prototyping and production runs.",
      specs: [
        "Fiber laser cutting up to 25mm thickness",
        "\u00B10.1mm precision on contours and holes",
        "Minimal heat-affected zone",
        "Nesting optimization for material efficiency",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
    {
      title: "Bending",
      description:
        "Precision bending with CNC press brakes for accurate angles and consistent results across production runs.",
      specs: [
        "CNC press brakes up to 300 tons",
        "\u00B10.5\u00B0 bending angle accuracy",
        "Multiple bend configurations",
        "Tooling for complex formed features",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-high-volume-injection-molding-production.webp",
    },
    {
      title: "Stamping",
      description:
        "High-volume production of stamped parts with consistent quality and rapid cycle times.",
      specs: [
        "Progressive and transfer die stamping",
        "Turret punching for hole patterns",
        "Embossing, coining, and forming",
        "Secondary operations: tapping, welding",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-custom-injection-molding-solutions.webp",
    },
  ],
};

export function SMServices() {
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
