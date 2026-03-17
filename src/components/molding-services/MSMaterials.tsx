"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Mold Steel ",
  headingHighlight: "Materials",
  materials: [
    {
      name: "P20 / 718H",
      hardness: "Pre-hardened 28-34",
      suitableMolds: "Large plastic injection molds, appliance housings, blow molds",
      properties:
        "Good polishability and photo-etching performance; excellent machinability; high purity and uniformity",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Material-General-Plastics.webp",
    },
    {
      name: "S136 (Mirror)",
      hardness: "Hardened 48-52",
      suitableMolds: "Medical equipment, transparent plastic products, food-grade molds, precision mechanical parts",
      properties:
        "Corrosion resistance to water vapor, weak acids and nitrates; mirror polishability for optical products; thermal stability maintains precision at 250\u00B0C",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Engineering-Plastics.webp",
    },
    {
      name: "H13 (Premium)",
      hardness: "Hardened 55",
      suitableMolds: "Forging dies with impact loads, hot extrusion dies, precision forging dies; aluminum/copper alloy die casting",
      properties:
        "High hardenability and thermal crack resistance; good wear resistance; excellent comprehensive mechanical properties and tempering stability",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-High-Performance-Plastics.webp",
    },
    {
      name: "D2 / SKD11",
      hardness: "Hardened 58-62",
      suitableMolds: "Aluminum/zinc die casting molds; hot work applications",
      properties:
        "Good high-temperature strength and toughness, excellent wear resistance, easy machining; high strength, toughness, and thermal balance",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Elastomers_TPE.webp",
    },
    {
      name: "Beryllium Copper",
      hardness: "HRB:78-88, HV:160-185",
      suitableMolds: "Inserts and cores in injection molds; molds requiring rapid uniform cooling",
      properties:
        "Excellent thermal conductivity; good weldability, corrosion resistance, polishability, wear resistance, anti-adhesion properties",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Material-General-Plastics.webp",
    },
  ],
};

export function MSMaterials() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #000000`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center" style={{ marginBottom: "48px" }}>
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em" }}>
            <EditableText path="materials.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}><EditableText path="materials.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: "40px" }}>
          {DEFAULTS.materials.map((material, index) => (
            <motion.button key={material.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} onClick={() => setActiveTab(index)} className="transition-all duration-300" style={{ padding: "10px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, border: activeTab === index ? "1px solid #D09947" : "1px solid rgba(208,153,71,0.3)", background: activeTab === index ? "rgba(208,153,71,0.15)" : "transparent", color: activeTab === index ? "#EEC569" : "#7A7A7C" }}>
              {material.name}
            </motion.button>
          ))}
        </div>

        {/* Active material card */}
        <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{ background: "#1A1A1A", borderRadius: "16px", padding: "40px", border: "1px solid rgba(208,153,71,0.15)" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side */}
            <div>
              <div className="flex items-center gap-3" style={{ marginBottom: "16px" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#D09947"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF" }}>
                  <EditableText path={`materials.items.${activeTab}.name`} defaultValue={DEFAULTS.materials[activeTab].name} />
                </h3>
              </div>

              <p style={{ fontSize: "14px", fontWeight: 600, color: "#EEC569", marginBottom: "8px" }}>Hardness (HRC)</p>
              <span style={{ display: "inline-block", border: "1px solid rgba(238,197,105,0.5)", color: "#F5D89A", fontSize: "13px", padding: "6px 12px", borderRadius: "999px", marginBottom: "24px" }}>
                {DEFAULTS.materials[activeTab].hardness}
              </span>

              <div style={{ marginBottom: "20px" }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#EEC569", marginBottom: "8px" }}>Suitable Mold Types :</p>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#C5C6C9" }}>
                  <EditableText path={`materials.items.${activeTab}.suitableMolds`} defaultValue={DEFAULTS.materials[activeTab].suitableMolds} multiline />
                </p>
              </div>

              <div>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>Properties:</p>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#C5C6C9" }}>
                  <EditableText path={`materials.items.${activeTab}.properties`} defaultValue={DEFAULTS.materials[activeTab].properties} multiline />
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative" style={{ minHeight: "280px", borderRadius: "12px", overflow: "hidden" }}>
              <EditableImage path={`materials.items.${activeTab}.image`} defaultSrc={DEFAULTS.materials[activeTab].image} alt={DEFAULTS.materials[activeTab].name} fill className="object-cover" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center" style={{ marginTop: "48px" }}>
          <Link href="https://app.apexbatch.com/" rel="nofollow" className="inline-flex items-center gap-2 bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider group">
            Get Instant Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
