"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "",
  headingHighlight: "Extrusion",
  headingSuffix: " Service",
  subheading: "",
  services: [
    {
      title: "Aluminum Extrusion",
      description:
        "Custom aluminum extrusion for precise cross-sections and scalable production.",
      specs: [
        "Custom aluminum extrusion profiles",
        "8020 & 80/20 aluminum extrusion",
        "Max size 300x200mm \u00B7 7m length",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
    {
      title: "Post Machining & Finishing",
      description:
        "Integrated post-machining and finishing for ready-to-assemble components.",
      specs: [
        "CNC finishing \u00B10.2 mm",
        "Anodizing (5\u201325 \u03BCm), powder coating (60\u2013120 \u03BCm)",
        "Surface: brushed, sandblasting, mirror polish",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-high-volume-injection-molding-production.webp",
    },
  ],
};

export function EXServices() {
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

        {/* Services Grid - 2 columns */}
        <div className="max-w-[1000px] mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "24px" }}
          >
            {DEFAULTS.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden"
                style={{
                  background: "#1A1A1A",
                  borderRadius: "12px",
                }}
              >
                {/* Image */}
                <div className="relative" style={{ height: "200px" }}>
                  <EditableImage
                    path={`services.items.${index}.image`}
                    defaultSrc={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "28px" }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "12px",
                    }}
                  >
                    <EditableText path={`services.items.${index}.title`} defaultValue={service.title} />
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "#C5C6C9",
                      marginBottom: "20px",
                    }}
                  >
                    <EditableText path={`services.items.${index}.description`} defaultValue={service.description} multiline />
                  </p>

                  {/* Specs as bullet points */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {service.specs.map((spec, specIndex) => (
                      <li
                        key={spec}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          color: "#C5C6C9",
                          fontSize: "14px",
                          marginBottom: "8px",
                        }}
                      >
                        <span
                          style={{
                            color: "#D09947",
                            flexShrink: 0,
                            fontSize: "16px",
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
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
