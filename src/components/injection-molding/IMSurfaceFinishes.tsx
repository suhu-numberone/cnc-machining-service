"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Injection Molding ",
  headingHighlight: "Surface Finishes",
  subheading:
    "Professional SPI surface finishes and texture options to meet aesthetic and functional requirements for your injection molded parts.",
  finishes: [
    {
      name: "SPI A (High Gloss)",
      compatibleMaterials: "high-gloss applications",
      spiGrade: "A1, A2, A3",
      roughness: "< 0.1",
      description:
        "Mirror-like surface with exceptional reflectivity, ideal for optical and decorative applications.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIA(High-Gloss).webp",
    },
    {
      name: "SPI B (Semi-Gloss)",
      compatibleMaterials: "general-purpose plastics",
      spiGrade: "B1, B2, B3",
      roughness: "0.1 - 0.4",
      description:
        "Soft satin finish that minimizes fingerprints while maintaining a professional appearance.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIB(Semi-Gloss).webp",
    },
    {
      name: "SPI C (Fine Matte)",
      compatibleMaterials: "matte-finish engineering plastics",
      spiGrade: "C1, C2, C3",
      roughness: "0.4 - 1.6",
      description:
        "Uniform non-glossy surface that effectively hides minor imperfections and mold lines.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIC(Fine Matte).webp",
    },
    {
      name: "SPI D (Coarse Matte/Sandblast)",
      compatibleMaterials: "textured/structural parts",
      spiGrade: "D1, D2, D3",
      roughness: "> 1.6",
      description:
        "Textured finish providing enhanced grip and masking of surface defects.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPID(Coarse-Matte-Sandblast).webp",
    },
  ],
};

export function IMSurfaceFinishes() {
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
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              marginBottom: "18px",
            }}
          >
            <EditableText path="finishes.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="finishes.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              maxWidth: "700px",
              marginBottom: "72px",
            }}
          >
            <EditableText path="finishes.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        {/* Finishes Grid - 2x2 */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: "32px",
          }}
        >
          {DEFAULTS.finishes.map((finish, index) => (
            <motion.div
              key={finish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#1A1A1A",
                borderRadius: "12px",
                border: "2px solid rgba(208,153,71,0.35)",
                boxShadow: "0 14px 36px rgba(0,0,0,0.45)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "3px solid #D09947";
                e.currentTarget.style.boxShadow =
                  "0 0 50px rgba(208,153,71,0.7), 0 14px 36px rgba(0,0,0,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border =
                  "2px solid rgba(208,153,71,0.35)";
                e.currentTarget.style.boxShadow =
                  "0 14px 36px rgba(0,0,0,0.45)";
              }}
            >
              {/* Top Content */}
              <div style={{ padding: "24px 24px 0 24px" }}>
                {/* Title */}
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  <EditableText path={`finishes.items.${index}.name`} defaultValue={finish.name} />
                </h3>

                {/* Compatible Materials */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#7A7A7C",
                    marginBottom: "20px",
                  }}
                >
                  Compatible Materials : <EditableText path={`finishes.items.${index}.compatibleMaterials`} defaultValue={finish.compatibleMaterials} />
                </p>

                {/* Image */}
                <div
                  className="relative"
                  style={{
                    width: "100%",
                    height: "180px",
                    marginBottom: "24px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <EditableImage
                    path={`finishes.items.${index}.image`}
                    defaultSrc={finish.image}
                    alt={finish.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* SPI Grade and Roughness */}
                <div
                  className="flex justify-between"
                  style={{ marginBottom: "20px" }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#EEC569",
                        marginBottom: "4px",
                      }}
                    >
                      SPI Grade
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      <EditableText path={`finishes.items.${index}.spiGrade`} defaultValue={finish.spiGrade} />
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#EEC569",
                        marginBottom: "4px",
                      }}
                    >
                      Roughness Ra (μm)
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      <EditableText path={`finishes.items.${index}.roughness`} defaultValue={finish.roughness} />
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Description */}
              <div
                style={{
                  padding: "16px 24px 24px 24px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#C5C6C9",
                  }}
                >
                  <EditableText path={`finishes.items.${index}.description`} defaultValue={finish.description} multiline />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
