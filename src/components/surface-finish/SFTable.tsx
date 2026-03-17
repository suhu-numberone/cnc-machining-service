"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

interface ProcessRow {
  name: string;
  characteristics: string;
  colorOption: string;
  roughness: string;
  image: string;
}

interface AdvancedProcessRow {
  name: string;
  characteristics: string;
  colorOption: string;
  roughness: string;
  keyFunction: string;
  image: string;
}

const PROCESSES: ProcessRow[] = [
  {
    name: "Electroplating",
    characteristics: "Uniform metallic coating; adjustable gloss (matte / bright)",
    colorOption: "Partial colors available (color Zn, black Zn); fixed gold/silver",
    roughness: "Ra0.8, Ra1.6, Ra3.2 or per 2D drawing",
    image: "",
  },
  {
    name: "Surface Decoration Processes",
    characteristics: "Decorative patterns / logos; high-gloss or special texture coating",
    colorOption: "Fixed decorative colors (gold, silver)",
    roughness: "Ra0.8, Ra1.6, Ra3.2 or per 2D drawing",
    image: "",
  },
  {
    name: "Electrophoresis",
    characteristics: "Uniform corrosion-resistant organic coating; matte / semi-gloss / gloss",
    colorOption: "Yes (black, white, custom colors)",
    roughness: "Ra1.6, Ra3.2 or per 2D drawing",
    image: "",
  },
  {
    name: "Engraving / Marking",
    characteristics: "Permanent logos, patterns, text; engraved or color-changed",
    colorOption: "No (base material color or oxidation only)",
    roughness: "Ra0.8, Ra1.6, Ra3.2 or per 2D drawing",
    image: "",
  },
  {
    name: "Decorative Chrome Plating",
    characteristics: "High-reflection mirror/semi-bright silver; wear-resistant, durable",
    colorOption: "No (standard silver mirror)",
    roughness: "Ra0.8, Ra1.6, Ra3.2 or per 2D drawing",
    image: "",
  },
  {
    name: "Mechanical Polishing",
    characteristics: "Remove burrs, tool marks, oxide; uniform matte surface",
    colorOption: "No (base material color)",
    roughness: "Ra0.4 – Ra3.2 (process dependent)",
    image: "",
  },
  {
    name: "Blackening / Phosphating",
    characteristics: "Black/dark gray conversion coating; improved corrosion & adhesion",
    colorOption: "Blackening: fixed black; Phosphating: natural color",
    roughness: "Ra1.6, Ra3.2 or per 2D drawing",
    image: "",
  },
  {
    name: "As-Machined Surface Finish",
    characteristics: "Retain machining lines; only deburr & edge break",
    colorOption: "No (base material color)",
    roughness: "Standard Ra3.2; optional Ra1.6 / Ra0.4",
    image: "",
  },
  {
    name: "Brushing",
    characteristics: "Clear unidirectional texture; premium matte appearance",
    colorOption: "No (enhances base color)",
    roughness: "Standard Ra3.2; texture thickness optional",
    image: "",
  },
  {
    name: "Polishing",
    characteristics: "Smooth from matte to mirror; eliminates machining marks",
    colorOption: "No (boosts natural gloss & reflectivity)",
    roughness: "Custom: Ra1.6, Ra0.8, Ra0.4 (mirror)",
    image: "",
  },
  {
    name: "Sand Blasting",
    characteristics: "Uniform matte/frosted texture; clean & improve adhesion",
    colorOption: "No (retains base color)",
    roughness: "Standard Ra3.2 (related to grit size)",
    image: "",
  },
  {
    name: "Spray Painting",
    characteristics: "Rich colors, gloss (matte/semi-gloss/gloss), textures; decorative + protective",
    colorOption: "Yes (full custom colors & effects)",
    roughness: "Standard Ra3.2; gloss optional",
    image: "",
  },
  {
    name: "Powder Coating",
    characteristics: "Thick, uniform, wear-resistant; smooth/textured; excellent weatherability",
    colorOption: "Yes (custom colors & textures)",
    roughness: "Standard Ra3.2; gloss & texture optional",
    image: "",
  },
  {
    name: "Anodizing (Type II)",
    characteristics: "Hard corrosion-resistant oxide film; colorable; matte/semi-gloss/gloss",
    colorOption: "Yes (black, red, blue, green, natural)",
    roughness: "Ra0.8, Ra1.6, Ra3.2 or per 2D drawing",
    image: "",
  },
  {
    name: "Heat Treatment",
    characteristics: "Improves hardness, strength, wear resistance; may oxidize (except bright/vacuum)",
    colorOption: "No (no decorative color; oxide or natural)",
    roughness: "Ra0.8, Ra1.6, Ra3.2 or per 2D drawing",
    image: "",
  },
  {
    name: "Hard Anodizing (Type III)",
    characteristics: "Ultra-thick, hard, ceramic-like oxide; insulating, heat & wear resistant",
    colorOption: "Limited (dark gray, black, or sealed natural)",
    roughness: "Ra0.8, Ra1.6, Ra3.2 or per 2D drawing",
    image: "",
  },
  {
    name: "Vacuum Plating / PVD Coating",
    characteristics: "Ultra-thin, hard, wear-resistant film; metallic colors (gold, black)",
    colorOption: "Yes (TiN gold, MoS2 black, etc.)",
    roughness: "Ra0.4, Ra0.8, Ra1.6 or per 2D drawing",
    image: "",
  },
  {
    name: "Screen Printing / Pad Printing",
    characteristics: "Clear logos, patterns, text; strong adhesion",
    colorOption: "Yes (multi-color & custom graphics)",
    roughness: "Ra0.8, Ra1.6, Ra3.2 or per 2D drawing",
    image: "",
  },
  {
    name: "Special Functional Coating",
    characteristics: "Extreme performance: high hardness, low friction (DLC), biocompatibility",
    colorOption: "Fixed (DLC = black); function-oriented",
    roughness: "Per 2D drawing (high Ra base required)",
    image: "",
  },
  {
    name: "Electropolishing",
    characteristics: "Ultra-smooth mirror finish; removes micro-burrs; improves corrosion resistance",
    colorOption: "No (enhances metallic luster)",
    roughness: "Up to Ra0.8 or finer",
    image: "",
  },
  {
    name: "Quench-Polish-Quench (QPQ)",
    characteristics: "Matte black surface; extreme hardness, wear & corrosion resistance",
    colorOption: "Standard matte black",
    roughness: "Ra0.8, Ra1.6, Ra3.2 or per 2D drawing",
    image: "",
  },
  {
    name: "Teflon (PTFE) Coating",
    characteristics: "Smooth non-stick, low-friction, chemical resistant",
    colorOption: "Yes (black common)",
    roughness: "Standard Ra3.2",
    image: "",
  },
  {
    name: "Passivation & Alodine",
    characteristics: "Thin color/colorless conversion film; corrosion resistance; paint base",
    colorOption: "Alodine: color/clear; Passivation: clear",
    roughness: "Base Ra maintained (Ra0.4–Ra3.2)",
    image: "",
  },
];

const ADVANCED_PROCESSES: AdvancedProcessRow[] = [
  {
    name: "Vapour Polishing",
    characteristics: "Glass-like smooth, clear, high-gloss surface",
    colorOption: "No",
    roughness: "Ultra-high finish",
    keyFunction: "Mirror finishing for plastic parts",
    image: "",
  },
  {
    name: "Microarc Oxidation (MAO)",
    characteristics: "Thick, hard, porous ceramic oxide; insulating, heat & wear resistant",
    colorOption: "Yes (colorable)",
    roughness: "Porous matte",
    keyFunction: "Ceramic conversion for light alloys",
    image: "",
  },
  {
    name: "Conductive Paint Spraying",
    characteristics: "Conductive surface for EMI shielding / ESD protection",
    colorOption: "Black / gray typical",
    roughness: "Per drawing",
    keyFunction: "Functional coating (non-decorative)",
    image: "",
  },
  {
    name: "Electroless Nickel Immersion Gold (ENIG)",
    characteristics: "Smooth, solderable, oxidation-resistant surface (thin Au layer)",
    colorOption: "Gold",
    roughness: "Ultra-flat",
    keyFunction: "Standard solderable finish for electronics",
    image: "",
  },
  {
    name: "Flocking",
    characteristics: "Velvet-like soft, matte texture",
    colorOption: "Yes (fiber color optional)",
    roughness: "Velvet surface",
    keyFunction: "Decorative & tactile finishing",
    image: "",
  },
  {
    name: "Glue Dispensing",
    characteristics: "Precise adhesive / sealant application for bonding, sealing, encapsulation",
    colorOption: "Adhesive color optional",
    roughness: "N/A",
    keyFunction: "Assembly & sealing process (not surface finish)",
    image: "",
  },
];

const PLACEHOLDER_IMAGE =
  "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Material-General-Plastics.webp";

export function SFTable() {
  return (
    <section style={{ padding: "80px 0", background: "#0A0A0A" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#EEC569",
            marginBottom: "32px",
          }}
        >
          <EditableText
            path="table.heading"
            defaultValue="Standard Surface Finishing Processes"
          />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: "0" }}>
            <thead>
              <tr
                style={{
                  background: "rgba(208,153,71,0.15)",
                }}
              >
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                    width: "200px",
                  }}
                >
                  Process
                </th>
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                  }}
                >
                  Surface Characteristics
                </th>
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                  }}
                >
                  Color Option
                </th>
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                    width: "220px",
                  }}
                >
                  Roughness
                </th>
              </tr>
            </thead>
            <tbody>
              {PROCESSES.map((process, index) => (
                <tr
                  key={index}
                  style={{
                    background: index % 2 === 0 ? "rgba(30,30,30,0.5)" : "rgba(20,20,20,0.5)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <td style={{ padding: "16px" }}>
                    <div className="flex items-center gap-3">
                      <div
                        className="shrink-0 relative overflow-hidden"
                        style={{
                          width: "60px",
                          height: "45px",
                          borderRadius: "6px",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <EditableImage
                          path={`table.processes.${index}.image`}
                          defaultSrc={process.image || PLACEHOLDER_IMAGE}
                          alt={process.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                        }}
                      >
                        <EditableText
                          path={`table.processes.${index}.name`}
                          defaultValue={process.name}
                        />
                      </span>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontSize: "13px",
                      color: "#C5C6C9",
                      lineHeight: 1.5,
                    }}
                  >
                    <EditableText
                      path={`table.processes.${index}.characteristics`}
                      defaultValue={process.characteristics}
                    />
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontSize: "13px",
                      color: "#C5C6C9",
                      lineHeight: 1.5,
                    }}
                  >
                    <EditableText
                      path={`table.processes.${index}.colorOption`}
                      defaultValue={process.colorOption}
                    />
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontSize: "13px",
                      color: "#C5C6C9",
                      lineHeight: 1.5,
                    }}
                  >
                    <EditableText
                      path={`table.processes.${index}.roughness`}
                      defaultValue={process.roughness}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Special & Advanced Processes */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#EEC569",
            marginTop: "64px",
            marginBottom: "32px",
          }}
        >
          <EditableText
            path="table.advancedHeading"
            defaultValue="Special & Advanced Processes"
          />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: "0" }}>
            <thead>
              <tr style={{ background: "rgba(208,153,71,0.15)" }}>
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                    width: "200px",
                  }}
                >
                  Process
                </th>
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                  }}
                >
                  Surface Characteristics
                </th>
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                  }}
                >
                  Color Option
                </th>
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                  }}
                >
                  Roughness
                </th>
                <th
                  style={{
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#EEC569",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                    width: "240px",
                  }}
                >
                  Key Function / Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {ADVANCED_PROCESSES.map((process, index) => (
                <tr
                  key={index}
                  style={{
                    background: index % 2 === 0 ? "rgba(30,30,30,0.5)" : "rgba(20,20,20,0.5)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <td style={{ padding: "16px" }}>
                    <div className="flex items-center gap-3">
                      <div
                        className="shrink-0 relative overflow-hidden"
                        style={{
                          width: "60px",
                          height: "45px",
                          borderRadius: "6px",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <EditableImage
                          path={`table.advanced.${index}.image`}
                          defaultSrc={process.image || PLACEHOLDER_IMAGE}
                          alt={process.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                        }}
                      >
                        <EditableText
                          path={`table.advanced.${index}.name`}
                          defaultValue={process.name}
                        />
                      </span>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontSize: "13px",
                      color: "#C5C6C9",
                      lineHeight: 1.5,
                    }}
                  >
                    <EditableText
                      path={`table.advanced.${index}.characteristics`}
                      defaultValue={process.characteristics}
                    />
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontSize: "13px",
                      color: "#C5C6C9",
                      lineHeight: 1.5,
                    }}
                  >
                    <EditableText
                      path={`table.advanced.${index}.colorOption`}
                      defaultValue={process.colorOption}
                    />
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontSize: "13px",
                      color: "#C5C6C9",
                      lineHeight: 1.5,
                    }}
                  >
                    <EditableText
                      path={`table.advanced.${index}.roughness`}
                      defaultValue={process.roughness}
                    />
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontSize: "13px",
                      color: "#C5C6C9",
                      lineHeight: 1.5,
                    }}
                  >
                    <EditableText
                      path={`table.advanced.${index}.keyFunction`}
                      defaultValue={process.keyFunction}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
