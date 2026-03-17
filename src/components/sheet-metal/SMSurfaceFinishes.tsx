"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Sheet Metal ",
  headingHighlight: "Surface Finishes",
  subheading:
    "Professional surface finishing options to meet aesthetic and functional requirements for your sheet metal parts.",
  finishes: [
    {
      name: "Powder Coating",
      standard: "RAL / Pantone Color Cards",
      stats: [
        { label: "Coating", value: "60-100\u03BCm" },
        { label: "Adhesion", value: "Class 0" },
        { label: "Salt Spray", value: ">500h" },
      ],
      application:
        "Custom color sheet metal fabrication, outdoor weathering surface treatment",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIA(High-Gloss).webp",
    },
    {
      name: "Anodizing",
      standard: "Natural / Black / RAL Colors",
      stats: [
        { label: "Coating", value: "5-25\u03BCm" },
        { label: "Hardness", value: "HV>300" },
        { label: "Salt Spray", value: ">48h" },
      ],
      application: "Aluminum anodizing, hard anodizing processing",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIB(Semi-Gloss).webp",
    },
    {
      name: "Brushed/Polish",
      standard: "Straight/Random Grain/Mirror",
      stats: [
        { label: "Roughness", value: "Ra 0.4-1.6" },
        { label: "Finish", value: "As required" },
      ],
      application:
        "Stainless steel brushed panels, metal mirror polishing",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIC(Fine Matte).webp",
    },
    {
      name: "Electropolish",
      standard: "Mirror/Matte",
      stats: [
        { label: "Surface", value: "Micro-smooth" },
        { label: "Corrosion", value: "Improved" },
      ],
      application:
        "Medical-grade stainless steel polishing, food equipment surface treatment",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPID(Coarse-Matte-Sandblast).webp",
    },
    {
      name: "E-Coating",
      standard: "Black/Gray",
      stats: [
        { label: "Coating", value: "15-25\u03BCm" },
        { label: "Salt Spray", value: ">240h" },
      ],
      application: "Automotive e-coating, uniform anti-rust coating",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIA(High-Gloss).webp",
    },
    {
      name: "Plating",
      standard: "White/Blue/Black/Color Zinc/Nickel",
      stats: [
        { label: "White Zinc", value: ">72h" },
        { label: "Blue Zinc", value: ">96h" },
      ],
      application:
        "Environmental blue zinc fasteners, hardware nickel plating",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIB(Semi-Gloss).webp",
    },
    {
      name: "Passivation",
      standard: "Natural",
      stats: [
        { label: "Film", value: "High density" },
        { label: "Corrosion", value: "Enhanced" },
      ],
      application:
        "Stainless steel pickling passivation, enhanced corrosion resistance",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIC(Fine Matte).webp",
    },
    {
      name: "Laser Etching",
      standard: "Natural/Black",
      stats: [
        { label: "Depth", value: "0.01-0.5mm" },
        { label: "Marking", value: "Permanent" },
      ],
      application:
        "Product serial number marking, logo laser engraving",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPID(Coarse-Matte-Sandblast).webp",
    },
  ],
};

export function SMSurfaceFinishes() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "104px 0 112px", background: "#34312F" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: "18px" }}>
            <EditableText path="finishes.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}><EditableText path="finishes.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", maxWidth: "700px", marginBottom: "72px" }}>
            <EditableText path="finishes.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "32px" }}>
          {DEFAULTS.finishes.map((finish, index) => (
            <motion.div
              key={finish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: "#1A1A1A", borderRadius: "12px", border: "2px solid rgba(208,153,71,0.35)", boxShadow: "0 14px 36px rgba(0,0,0,0.45)" }}
              onMouseEnter={(e) => { e.currentTarget.style.border = "3px solid #D09947"; e.currentTarget.style.boxShadow = "0 0 50px rgba(208,153,71,0.7), 0 14px 36px rgba(0,0,0,0.45)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.border = "2px solid rgba(208,153,71,0.35)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.45)"; }}
            >
              <div style={{ padding: "24px 24px 0 24px" }}>
                {/* Finish Name */}
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF", marginBottom: "8px" }}>
                  <EditableText path={`finishes.items.${index}.name`} defaultValue={finish.name} />
                </h3>
                <p style={{ fontSize: "14px", color: "#7A7A7C", marginBottom: "20px" }}>
                  Compatible: <EditableText path={`finishes.items.${index}.standard`} defaultValue={finish.standard} />
                </p>

                {/* Image */}
                <div className="relative" style={{ width: "100%", height: "180px", marginBottom: "24px", borderRadius: "8px", overflow: "hidden" }}>
                  <EditableImage path={`finishes.items.${index}.image`} defaultSrc={finish.image} alt={finish.name} fill className="object-cover" />
                </div>

                {/* Stats row */}
                <div className="flex justify-between" style={{ marginBottom: "20px" }}>
                  {finish.stats.map((stat, si) => (
                    <div key={si} className={si === finish.stats.length - 1 ? "text-right" : ""}>
                      <p style={{ fontSize: "14px", fontWeight: 700, color: "#EEC569", marginBottom: "4px" }}>
                        {stat.label}
                      </p>
                      <p style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF" }}>
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div style={{ padding: "16px 24px 24px 24px" }}>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#C5C6C9" }}>
                  <EditableText path={`finishes.items.${index}.application`} defaultValue={finish.application} multiline />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
