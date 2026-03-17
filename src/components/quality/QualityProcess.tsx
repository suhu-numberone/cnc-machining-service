"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  sectionTitle: "Quality Control ",
  sectionTitleHighlight: "System",
  sectionDescription: "Three-phase inspection system ensuring quality at every stage of production",
  ctaText: "Request Quality Package",
  stages: [
    {
      number: "01",
      title: "Incoming Material Inspection",
      subtitle: "Preventing non-conforming materials from entering production flow",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      keyProceduresTitle: "Key Procedures",
      keyProcedures: [
        "Supplier certification verification",
        "Material test reports review",
        "Incoming quality inspection",
        "Non-conforming material quarantine",
      ],
      coreParametersTitle: "Core Inspection Parameters",
      coreParameters: [
        "Material composition analysis",
        "Hardness testing",
        "Dimensional verification",
        "Surface quality check",
      ],
    },
    {
      number: "02",
      title: "In-Process Quality Control",
      subtitle: "Monitoring during manufacturing to catch issues early",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
      keyProceduresTitle: "Key Procedures",
      keyProcedures: [
        "First Article Inspection (FAI)",
        "Statistical Process Control (SPC)",
        "In-process dimension checks",
        "Process parameter monitoring",
      ],
      coreParametersTitle: "Core Inspection Parameters",
      coreParameters: [
        "Critical dimensions tracking",
        "Surface roughness measurement",
        "Geometric tolerances (GD&T)",
        "Tool wear monitoring",
      ],
    },
    {
      number: "03",
      title: "Final Inspection & Delivery",
      subtitle: "Comprehensive outgoing verification before shipment",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
      keyProceduresTitle: "Key Procedures",
      keyProcedures: [
        "100% final inspection",
        "Inspection report generation",
        "Certificate of Conformance",
        "Traceable packaging & labeling",
      ],
      coreParametersTitle: "Core Inspection Parameters",
      coreParameters: [
        "Full dimensional verification",
        "Surface finish validation",
        "Functional testing",
        "Visual inspection standards",
      ],
    },
  ],
};

export function QualityProcess() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "clamp(40px, 8vw, 80px) 0",
        background: "#34312F",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 46px)",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="process.sectionTitle" defaultValue={DEFAULTS.sectionTitle} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="process.sectionTitleHighlight" defaultValue={DEFAULTS.sectionTitleHighlight} />
            </span>
          </h2>
          <p
            style={{
              color: "#C5C6C9",
              fontSize: "18px",
              lineHeight: 1.6,
              maxWidth: "640px",
              margin: "16px auto 0",
            }}
          >
            <EditableText
              path="process.sectionDescription"
              defaultValue={DEFAULTS.sectionDescription}
              multiline
            />
          </p>
        </motion.div>

        {/* Process Cards - Vertical Stack */}
        <div className="space-y-12">
          {DEFAULTS.stages.map((stage, index) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
              style={{
                background: "#0D0D0D",
                border: "1px solid #EEC569",
                overflow: "hidden",
              }}
            >
              {/* Large Image at Top */}
              <div
                style={{
                  width: "100%",
                  height: "clamp(180px, 25vw, 280px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <EditableImage
                  path={`process.stages.${index}.image`}
                  defaultSrc={stage.image}
                  alt={stage.title}
                  fill
                />
                {/* Dark overlay on image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Content Area */}
              <div style={{ padding: "clamp(20px, 4vw, 32px) clamp(16px, 4vw, 40px) clamp(24px, 4vw, 40px)" }}>
                {/* Number Badge + Title Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginBottom: "12px",
                  }}
                >
                  {/* Circular Number Badge */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      backgroundColor: "#D09947",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        color: "#000000",
                        fontSize: "22px",
                        fontWeight: 700,
                      }}
                    >
                      <EditableText
                        path={`process.stages.${index}.number`}
                        defaultValue={stage.number}
                      />
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "clamp(20px, 3vw, 28px)",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    <EditableText
                      path={`process.stages.${index}.title`}
                      defaultValue={stage.title}
                    />
                  </h3>
                </div>

                {/* Subtitle */}
                <p
                  className="ml-0 sm:ml-[76px]"
                  style={{
                    color: "#EEC569",
                    fontSize: "clamp(14px, 2vw, 16px)",
                    marginBottom: "clamp(20px, 4vw, 32px)",
                  }}
                >
                  <EditableText
                    path={`process.stages.${index}.subtitle`}
                    defaultValue={stage.subtitle}
                  />
                </p>

                {/* Two Column Layout */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2"
                  style={{
                    gap: "clamp(20px, 4vw, 40px)",
                    background: "#34312F",
                    padding: "clamp(16px, 3vw, 24px) clamp(16px, 4vw, 40px) clamp(24px, 4vw, 40px)",
                    margin: "0 clamp(-16px, -4vw, -40px) clamp(-24px, -4vw, -40px)",
                  }}
                >
                  {/* Left Column - Key Procedures */}
                  <div>
                    <h4
                      style={{
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: 600,
                        marginBottom: "16px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      <EditableText
                        path={`process.stages.${index}.keyProceduresTitle`}
                        defaultValue={stage.keyProceduresTitle}
                      />
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {stage.keyProcedures.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              backgroundColor: "rgba(208,153,71,0.15)",
                              border: "1px solid #D09947",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Check
                              style={{
                                width: "12px",
                                height: "12px",
                                color: "#D09947",
                              }}
                            />
                          </div>
                          <span
                            style={{
                              color: "#C5C6C9",
                              fontSize: "15px",
                              lineHeight: 1.4,
                            }}
                          >
                            <EditableText
                              path={`process.stages.${index}.keyProcedures.${idx}`}
                              defaultValue={item}
                            />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Core Inspection Parameters */}
                  <div>
                    <h4
                      style={{
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: 600,
                        marginBottom: "16px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      <EditableText
                        path={`process.stages.${index}.coreParametersTitle`}
                        defaultValue={stage.coreParametersTitle}
                      />
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {stage.coreParameters.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              backgroundColor: "rgba(208,153,71,0.15)",
                              border: "1px solid #D09947",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Check
                              style={{
                                width: "12px",
                                height: "12px",
                                color: "#D09947",
                              }}
                            />
                          </div>
                          <span
                            style={{
                              color: "#C5C6C9",
                              fontSize: "15px",
                              lineHeight: 1.4,
                            }}
                          >
                            <EditableText
                              path={`process.stages.${index}.coreParameters.${idx}`}
                              defaultValue={item}
                            />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginTop: "60px" }}
        >
          <Link
            href="/contact"
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
          >
            <EditableText path="process.ctaText" defaultValue={DEFAULTS.ctaText} />
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
