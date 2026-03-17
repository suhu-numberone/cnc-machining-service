"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";

interface MaterialCard {
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

interface MaterialSection {
  id: string;
  title: string;
  learnMoreHref: string;
  cards: MaterialCard[];
}

const SECTIONS: MaterialSection[] = [
  {
    id: "cnc-metals",
    title: "CNC Metals",
    learnMoreHref: "/cnc-machining",
    cards: [
      {
        name: "Stainless Steel Series",
        subtitle: "Corrosion-Resistant Alloy Steel (304/316/420/2205/17-4PH)",
        description:
          "We machine stainless steel into precision CNC parts for aerospace, medical, and marine applications. It offers strong corrosion resistance and stable dimensional accuracy, making it suitable for structural and load-bearing components.",
        image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Material-General-Plastics.webp",
      },
      {
        name: "Magnesium Alloy",
        subtitle: "Ultra-Lightweight Structural Metal (ZE62/AZ31B/AZ91D)",
        description:
          "Magnesium is ideal for ultra-lightweight CNC components where weight reduction is critical. It delivers high stiffness with minimal mass.",
        image: "",
      },
      {
        name: "Aluminum Alloy",
        subtitle: "Lightweight Non-Ferrous Metal (6061/7075/5052/2024)",
        description:
          "Aluminum CNC machining is widely used for lightweight, high-precision parts. Aluminum offers good strength, machinability, and heat dissipation.",
        image: "",
      },
      {
        name: "Titanium Alloy",
        subtitle: "High-Performance Lightweight Metal (TA2/TC4)",
        description:
          "Titanium CNC parts provide an exceptional strength-to-weight ratio and long-term durability. Titanium performs reliably under high stress and extreme environments.",
        image: "",
      },
      {
        name: "Copper & Alloys",
        subtitle: "Conductive/Heat-Conductive Metal (C110/H62/Beryllium Copper)",
        description:
          "Copper is selected for CNC machining when electrical conductivity and thermal transfer are critical. Ideal for connectors, heat sinks, and power components requiring precision tolerances.",
        image: "",
      },
      {
        name: "Nickel Alloys",
        subtitle: "High-Temp/Corrosion-Resistant Alloys (Inconel/Hastelloy/Incoloy)",
        description:
          "Nickel alloy CNC components are engineered for high-temperature and corrosive environments. Widely used in aerospace, energy, and chemical processing systems.",
        image: "",
      },
      {
        name: "Steel",
        subtitle: "Iron-Carbon Alloy (Q235/45#/4140/D2/H13)",
        description:
          "Steel CNC machining is ideal for structural parts, tooling, and automotive components. It provides high strength and durability for demanding mechanical applications.",
        image: "",
      },
      {
        name: "Zinc Alloys & Tungsten Alloys",
        subtitle: "Special Functional Metals (Die-Cast Zinc/W95 Tungsten Alloy)",
        description:
          "Zinc alloy enables economical production of complex CNC parts such as counterweights and precision balancing systems.",
        image: "",
      },
    ],
  },
  {
    id: "cnc-plastics",
    title: "CNC Plastics",
    learnMoreHref: "/cnc-machining",
    cards: [
      {
        name: "ABS Series Plastics",
        subtitle: "General Engineering Plastic (ABS/ABS+PC/Flame Retardant ABS)",
        description:
          "ABS CNC machining is ideal for cost-effective plastic housings and structural components. It offers stable dimensions and easy machinability, widely used in consumer electronics, automotive interiors, and industrial enclosures.",
        image: "",
      },
      {
        name: "PA (Nylon) Series",
        subtitle: "High-Performance Engineering Plastic (PA6/PA66/PAI/PA+GF)",
        description:
          "Nylon CNC parts provide high strength and wear resistance for mechanical applications. Reinforced grades improve rigidity and heat performance, making them suitable for gears, bearings, and load-bearing industrial components.",
        image: "",
      },
      {
        name: "PBT (Polybutylene Terephthalate)",
        subtitle: "Crystalline Engineering Plastic (Black/Natural PBT)",
        description:
          "PBT CNC machining is commonly used for electrical and automotive components requiring heat resistance and dimensional stability. It balances performance and cost for precision industrial parts.",
        image: "",
      },
      {
        name: "PC (Polycarbonate) Series",
        subtitle: "Transparent/Non-Transparent Engineering Plastic (PC/PC+GF30)",
        description:
          "Polycarbonate CNC parts combine high impact strength with optical transparency. Suitable for protective covers, optical components, and structural parts requiring flame-retardant or food-grade materials.",
        image: "",
      },
      {
        name: "PEEK (Polyether Ether Ketone) Series",
        subtitle: "Top-Grade Special Engineering Plastic (PEEK+CF/PEEK+GF)",
        description:
          "PEEK CNC machining is designed for extreme temperature and chemical environments. It is widely used in aerospace, medical, semiconductor, and oil & gas applications requiring long-term mechanical stability.",
        image: "",
      },
      {
        name: "PEI (Polyetherimide)",
        subtitle: "High-Performance Heat-Resistant Amorphous Plastic (ULTEM 1000)",
        description:
          "PEI CNC parts perform reliably in high-temperature environments. Common in aerospace interiors, medical devices, and sterilization-compatible equipment where strength and dimensional stability are critical.",
        image: "",
      },
      {
        name: "PET",
        subtitle: "Crystalline/Amorphous Thermoplastic (PET/PET+GF30/PET-G)",
        description:
          "PET CNC machining offers strong mechanical performance and good dimensional stability. It is used in packaging systems, electronics, automotive parts, and display structures.",
        image: "",
      },
      {
        name: "PE (Polyethylene) Series",
        subtitle: "General Polyolefin Plastic (HDPE/LDPE/UHMWPE)",
        description:
          "Polyethylene CNC parts provide excellent chemical resistance and low friction. Suitable for wear components, guides, containers, and low-load structural applications.",
        image: "",
      },
      {
        name: "PMMA (Acrylic)",
        subtitle: "Transparent/Colored Amorphous Plastic",
        description:
          "PMMA CNC machining delivers high optical clarity for transparent components. Widely used in signage, lighting covers, instrument panels, and display applications.",
        image: "",
      },
      {
        name: "POM (Polyoxymethylene)",
        subtitle: "High Crystalline Engineering Plastic (POM-H/POM-C/Derlin)",
        description:
          "POM CNC parts are ideal for precision mechanical components requiring low friction and wear resistance. Common applications include gears, bearings, bushings, and cams.",
        image: "",
      },
      {
        name: "PPS (Polyphenylene Sulfide)",
        subtitle: "High-Performance Heat-Resistant Special Plastic (PPS/PPS+GF30/PPSU)",
        description:
          "PPS CNC machining supports high-temperature and chemically aggressive environments. It is widely used in automotive engine components, electronics equipment, and chemical processing systems.",
        image: "",
      },
      {
        name: "PP (Polypropylene)",
        subtitle: "General/Semi-Aromatic Polyolefin Plastic (PP/PP+GF30/PPA)",
        description:
          "Polypropylene CNC parts provide lightweight and cost-effective chemical resistance. Suitable for packaging systems, containers, and low-load structural components.",
        image: "",
      },
      {
        name: "PVC (Polyvinyl Chloride)",
        subtitle: "General Non-Standard/Rigid Thermoplastic (UPVC/PVC)",
        description:
          "PVC CNC machining offers economical corrosion-resistant solutions for industrial and construction applications. Common uses include chemical equipment, structural profiles, and electrical enclosures.",
        image: "",
      },
      {
        name: "PCTFE (Fluoropolymer)",
        subtitle: "High-Performance Fluoropolymer (PTFE/PVDF/PCTFE)",
        description:
          "Fluoropolymer CNC parts such as PTFE and PCTFE provide extreme chemical resistance and low friction performance.",
        image: "",
      },
      {
        name: "Thermoset Laminates",
        subtitle: "Fiber-Reinforced Thermoset Composites (Phenolic/FR-4/G10)",
        description:
          "Thermoset laminate CNC machining is ideal for electrical insulation and structural stability. Common in PCB substrates, fixtures, and industrial insulation components.",
        image: "",
      },
      {
        name: "Nylon (PA) for Additive Manufacturing",
        subtitle: "3D Printing Special Engineering Plastic (PA12/PA12+GF)",
        description:
          "3D printed nylon combined with CNC finishing enables complex geometries with improved precision. Suitable for rapid prototyping, small-batch production, and lightweight structural components.",
        image: "",
      },
    ],
  },
  {
    id: "injection-molding-plastics",
    title: "Injection Molding Plastics",
    learnMoreHref: "/injection-molding",
    cards: [
      {
        name: "ABS Series Plastics",
        subtitle: "General Engineering Plastic (ABS/ABS+PC/Flame Retardant ABS)",
        description:
          "ABS injection molding is ideal for high-volume production of durable plastic housings and structural parts.",
        image: "",
      },
      {
        name: "PA (Nylon) Series",
        subtitle: "High-Performance Engineering Plastic (PA6/PA66/PA+GF)",
        description:
          "Nylon injection molding delivers strong, wear-resistant parts for mechanical applications. Common in automotive components, gears, and load-bearing structures requiring long-term durability.",
        image: "",
      },
      {
        name: "PBT (Polybutylene Terephthalate)",
        subtitle: "Crystalline Engineering Plastic (Black/Natural PBT)",
        description:
          "PBT injection molding supports high-volume production of heat-resistant and electrically insulating components. Frequently used in automotive systems, electronic parts, and industrial equipment.",
        image: "",
      },
      {
        name: "PC (Polycarbonate) Series",
        subtitle: "Transparent/Non-Transparent Engineering Plastic (PC/PC+GF30)",
        description:
          "Polycarbonate injection molding produces impact-resistant parts with excellent transparency. Suitable for safety equipment, optical components, and products requiring flame-retardant or food-grade compliance.",
        image: "",
      },
      {
        name: "PEEK (Polyether Ether Ketone) Series",
        subtitle: "Top-Grade Special Engineering Plastic (PEEK+CF/PEEK+GF)",
        description:
          "PEEK injection molding is designed for high-temperature and chemically aggressive environments.",
        image: "",
      },
      {
        name: "PP (Polypropylene)",
        subtitle: "General/Semi-Aromatic Polyolefin Plastic (PP/PP+GF30/PPA)",
        description:
          "Polypropylene injection molding offers cost-efficient production with good chemical resistance. Common in packaging, containers, automotive interiors, and consumer goods.",
        image: "",
      },
      {
        name: "PPS (Polyphenylene Sulfide)",
        subtitle: "High-Performance Heat-Resistant Special Plastic (PPS/PPS+GF30)",
        description:
          "PPS injection molding supports high-temperature and chemically demanding applications. Frequently used in automotive engine components, electronics equipment, and industrial processing systems.",
        image: "",
      },
    ],
  },
  {
    id: "sheet-metals",
    title: "Sheet Metals",
    learnMoreHref: "/sheet-metal-fabrication",
    cards: [
      {
        name: "Stainless Steel Sheet",
        subtitle: "Corrosion-Resistant Alloy Steel (304/316/420)",
        description:
          "Stainless steel sheet metal is widely used for corrosion-resistant structural and enclosure parts. Common applications include kitchen equipment, medical devices, architectural panels, and marine components where durability is critical.",
        image: "",
      },
      {
        name: "Aluminum Alloy Sheet",
        subtitle: "Lightweight Non-Ferrous Metal (6061/5052/2024)",
        description:
          "Aluminum sheet metal supports lightweight structural designs with strong formability. It is commonly used in aerospace panels, automotive body parts, electronics housings, and architectural structures.",
        image: "",
      },
      {
        name: "Steel Sheet",
        subtitle: "Iron-Carbon Alloy (Q235/SPCC/45#/4140)",
        description:
          "Steel sheet metal offers cost-effective strength for structural and industrial applications. Typical uses include automotive parts, frames, machinery components, and general fabrication projects.",
        image: "",
      },
      {
        name: "Copper & Alloy Sheet",
        subtitle: "Conductive/Heat-Conductive Metal (C110/H62/Beryllium Copper)",
        description:
          "Copper sheet metal is selected for applications requiring high electrical and thermal conductivity. It is widely used in electrical enclosures, heat dissipation systems, and industrial components.",
        image: "",
      },
      {
        name: "Titanium Alloy Sheet",
        subtitle: "High-Performance Lightweight Metal (TA2/TC4)",
        description:
          "Titanium sheet metal combines high strength with low weight and corrosion resistance. It is commonly used in aerospace structures, medical devices, marine systems, and high-performance industrial components.",
        image: "",
      },
    ],
  },
];

const PLACEHOLDER_IMAGE =
  "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/5-Injection-Molding-Material-General-Plastics.webp";

export function MaterialsContent() {
  const [activeSection, setActiveSection] = useState("cnc-metals");

  useEffect(() => {
    const handleScroll = () => {
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        padding: "80px 0 120px",
        background: "#000000",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
          {/* Left Sidebar - Jump Menu */}
          <div className="hidden lg:block">
            <div className="sticky" style={{ top: "100px" }}>
              <nav className="flex flex-col gap-2">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-left transition-all duration-200"
                    style={{
                      padding: "10px 16px",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: activeSection === section.id ? 700 : 500,
                      color: activeSection === section.id ? "#EEC569" : "#7A7A7C",
                      background:
                        activeSection === section.id
                          ? "rgba(208,153,71,0.1)"
                          : "transparent",
                      borderLeft:
                        activeSection === section.id
                          ? "3px solid #D09947"
                          : "3px solid transparent",
                    }}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-20">
            {SECTIONS.map((section, sectionIndex) => (
              <div key={section.id} id={section.id}>
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between"
                  style={{
                    marginBottom: "32px",
                    borderBottom: "2px solid rgba(208,153,71,0.3)",
                    paddingBottom: "16px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#EEC569",
                    }}
                  >
                    <EditableText
                      path={`sections.${sectionIndex}.title`}
                      defaultValue={section.title}
                    />
                  </h2>
                  <Link
                    href={section.learnMoreHref}
                    className="flex items-center gap-1 transition-all duration-200 hover:gap-2"
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* Cards Grid - 3 columns */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  style={{ gap: "24px" }}
                >
                  {section.cards.map((card, cardIndex) => (
                    <motion.div
                      key={card.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: cardIndex * 0.06 }}
                      className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "#1A1A1A",
                        borderRadius: "12px",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.border =
                          "2px solid #D09947";
                        e.currentTarget.style.boxShadow =
                          "0 0 30px rgba(208,153,71,0.4), 0 14px 36px rgba(0,0,0,0.45)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.border =
                          "1px solid rgba(255,255,255,0.08)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {/* Image */}
                      <div
                        className="relative"
                        style={{
                          width: "100%",
                          height: "180px",
                          overflow: "hidden",
                        }}
                      >
                        <EditableImage
                          path={`sections.${sectionIndex}.cards.${cardIndex}.image`}
                          defaultSrc={card.image || PLACEHOLDER_IMAGE}
                          alt={card.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div style={{ padding: "20px" }}>
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "#EEC569",
                            marginBottom: "6px",
                          }}
                        >
                          <EditableText
                            path={`sections.${sectionIndex}.cards.${cardIndex}.name`}
                            defaultValue={card.name}
                          />
                        </h3>
                        <p
                          style={{
                            fontSize: "13px",
                            color: "#7A7A7C",
                            marginBottom: "16px",
                          }}
                        >
                          <EditableText
                            path={`sections.${sectionIndex}.cards.${cardIndex}.subtitle`}
                            defaultValue={card.subtitle}
                          />
                        </p>
                        <div
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            borderRadius: "8px",
                            padding: "14px",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "14px",
                              lineHeight: 1.6,
                              color: "#C5C6C9",
                            }}
                          >
                            <EditableText
                              path={`sections.${sectionIndex}.cards.${cardIndex}.description`}
                              defaultValue={card.description}
                              multiline
                            />
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
