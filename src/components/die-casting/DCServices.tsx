"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Our ",
  headingHighlight: "Die Casting",
  headingSuffix: " Services",
  subheading: "",
  services: [
    {
      title: "Aluminum die casting",
      description:
        "Custom aluminum extrusion for precise cross-sections and scalable production.",
      specs: [
        { label: "Max part size (L×W×H)", value: "1000 × 600 × 200 mm" },
        { label: "Min wall thickness", value: "1.2 mm" },
        { label: "Structural complexity", value: "Medium-high (threads/inserts)" },
        { label: "Production volume", value: "1,000 – 100,000 pcs/batch" },
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
    {
      title: "Zinc die casting",
      description:
        "Our zinc die casting services offer superior precision for small, complex parts requiring high impact strength and premium finishing.",
      specs: [
        { label: "Min wall thickness", value: "0.5 mm" },
        { label: "Part complexity", value: "High / intricate details" },
        { label: "Typical volume", value: "1,000 – 100,000 pcs" },
        { label: "Surface finish as-cast", value: "Excellent / smooth" },
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-high-volume-injection-molding-production.webp",
    },
  ],
};

export function DCServices() {
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

                  {/* Specs table */}
                  <div
                    style={{
                      border: "1px solid rgba(208,153,71,0.3)",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    {service.specs.map((spec, specIndex) => (
                      <div
                        key={spec.label}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "12px 16px",
                          borderBottom:
                            specIndex < service.specs.length - 1
                              ? "1px solid rgba(255,255,255,0.06)"
                              : "none",
                        }}
                      >
                        <span style={{ fontSize: "13px", color: "#C5C6C9" }}>
                          <EditableText path={`services.items.${index}.specs.${specIndex}.label`} defaultValue={spec.label} />
                        </span>
                        <span style={{ fontSize: "13px", color: "#EEC569", fontWeight: 600, textAlign: "right" }}>
                          <EditableText path={`services.items.${index}.specs.${specIndex}.value`} defaultValue={spec.value} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
