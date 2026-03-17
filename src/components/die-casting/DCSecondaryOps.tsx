"use client";

import { motion } from "framer-motion";
import { Cog, Wrench, BarChart3, Truck } from "lucide-react";
import { EditableText } from "@/components/cms";

const categoryIcons = [Cog, Wrench, BarChart3, Truck];

const DEFAULTS = {
  heading: "Comprehensive secondary & assembly operations",
  categories: [
    {
      icon: "⚙️",
      title: "Precision machining",
      items: [
        "Tapping, drilling, reaming",
        "Inserts / heat staking",
        "CNC milling & turning centers",
        "In-house CMM, optical comparators",
      ],
    },
    {
      icon: "🔩",
      title: "Assembly & value-add",
      items: [
        "Sub-assembly, riveting",
        "Laser marking / serialization",
        "Kitting & JIT delivery",
        "Full dimensional reports",
      ],
    },
    {
      icon: "📊",
      title: "Metrology & QA",
      items: [
        "CMM (Zeiss) & optical comparators",
        "Surface roughness testing",
        "X-ray for porosity check",
        "Material certification",
      ],
    },
    {
      icon: "🏭",
      title: "Logistics & supply chain",
      items: [
        "Kitting / sequenced delivery",
        "JIT / VMI programs",
        "Packaging & labeling",
        "EDI / ASN support",
      ],
    },
  ],
};

export function DCSecondaryOps() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: "#000000",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "64px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            <EditableText path="secondaryOps.heading" defaultValue={DEFAULTS.heading} />
          </h2>
        </motion.div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "24px" }}>
          {DEFAULTS.categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: "#1A1A1A",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "28px 24px",
              }}
            >
              {/* Title with icon */}
              <h3
                className="flex items-center gap-2"
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#EEC569",
                  marginBottom: "20px",
                  lineHeight: 1.4,
                }}
              >
                {(() => { const Icon = categoryIcons[index]; return <Icon className="w-5 h-5 shrink-0" style={{ color: "#D09947" }} />; })()}
                <EditableText path={`secondaryOps.categories.${index}.title`} defaultValue={category.title} />
              </h3>

              {/* Items list */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2"
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "#C5C6C9",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#D09947",
                        flexShrink: 0,
                        marginTop: "7px",
                      }}
                    />
                    <EditableText
                      path={`secondaryOps.categories.${index}.items.${itemIndex}`}
                      defaultValue={item}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
