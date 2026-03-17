"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Extrusion ",
  headingHighlight: "Surface Finishes",
  subheading:
    "From corrosion protection to premium aesthetics \u2014 we offer 5 in\u2011house finishing lines with full process control. Custom colors, gloss levels, and MIL\u2011spec hard anodizing available.",
  finishes: [
    {
      name: "Anodizing",
      description: "Standard/Color: Clear / Black / Silver / Color",
      specLabel: "Film thickness",
      specValue: "5-25 \u03BCm",
      infoLabel: "Performance",
      infoValue: "Corrosion resistance, decorative",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIA(High-Gloss).webp",
    },
    {
      name: "Powder coating",
      description: "Standard/Color: RAL classic, metallic, textured, matte/gloss",
      specLabel: "Film thickness",
      specValue: "60-120 \u03BCm (custom up to 180 \u03BCm)",
      infoLabel: "Performance",
      infoValue: "Impact resistant, UV-stabilized, salt spray >1000h",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIB(Semi-Gloss).webp",
    },
    {
      name: "Brushed",
      description: "Pattern: Straight grain, random orbital, fine satin",
      specLabel: "Surface roughness",
      specValue: "Ra 0.3-0.8 \u03BCm achievable",
      infoLabel: "Property",
      infoValue: "Hides fingerprints, uniform decorative line",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIC(Fine Matte).webp",
    },
    {
      name: "Polishing",
      description: "Finish: Mirror (semi- to full gloss), satin matte",
      specLabel: "Reflectivity",
      specValue: "Up to 85% after mechanical polish",
      infoLabel: "Application",
      infoValue: "Decorative strips, lighting reflectors, luxury goods",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPID(Coarse-Matte-Sandblast).webp",
    },
    {
      name: "Sandblasting",
      description: "Appearance: Uniform matte, no directional scratches",
      specLabel: "Grit",
      specValue: "Fine (100-150 mesh) / Coarse (40-60 mesh)",
      infoLabel: "Function",
      infoValue: "Increases surface area for adhesive bonding, paint adhesion",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIA(High-Gloss).webp",
    },
  ],
};

export function EXSurfaceFinishes() {
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

        {/* Finishes Grid - 3 columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
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

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#7A7A7C",
                    marginBottom: "20px",
                  }}
                >
                  <EditableText path={`finishes.items.${index}.description`} defaultValue={finish.description} />
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

                {/* Spec highlight */}
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
                      <EditableText path={`finishes.items.${index}.specLabel`} defaultValue={finish.specLabel} />
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      <EditableText path={`finishes.items.${index}.specValue`} defaultValue={finish.specValue} />
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div
                style={{
                  padding: "16px 24px 24px 24px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    marginBottom: "4px",
                  }}
                >
                  <EditableText path={`finishes.items.${index}.infoLabel`} defaultValue={finish.infoLabel} />
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#C5C6C9",
                  }}
                >
                  <EditableText path={`finishes.items.${index}.infoValue`} defaultValue={finish.infoValue} multiline />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
