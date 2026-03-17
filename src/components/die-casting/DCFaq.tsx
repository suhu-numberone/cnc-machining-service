"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Frequently asked questions",
  faqs: [
    {
      question: "What is die casting?",
      answer:
        "Die casting is a metal casting process where molten metal is injected into a reusable steel mold (die) under high pressure. It is commonly used for aluminum die casting and zinc die casting to produce complex, high-volume parts with excellent dimensional accuracy.",
    },
    {
      question: "Die casting vs injection molding — what's the difference?",
      answer:
        "Die casting uses molten metal (aluminum, zinc) injected under high pressure into steel dies, while injection molding uses polymers (plastics). Both produce complex geometries at high volume, but metal die casting delivers superior strength, thermal conductivity, and EMI shielding.",
    },
    {
      question: "How do you control porosity in aluminum die casting?",
      answer:
        "We use vacuum-assisted high pressure die casting, optimized gating and venting, controlled fill speeds, and real-time process monitoring to minimize porosity. X-ray inspection and density checks are performed per our die casting quality standards.",
    },
    {
      question:
        "What is the minimum wall thickness for zinc die casting?",
      answer:
        "Zinc die casting (Zamak 3/5) supports wall thicknesses as thin as 0.5 mm, while aluminum die casting typically requires a minimum of 1.2 mm. Our engineering team provides DFM guidance to optimize wall thickness for your specific die casting parts.",
    },
    {
      question: "Can you provide DFM analysis before tooling?",
      answer:
        "Yes. Every project begins with a comprehensive DFM (Design for Manufacturability) review. Our engineers evaluate part geometry, draft angles, wall thickness, and gating strategy to optimize your die casting design before committing to tooling.",
    },
    {
      question: "Do you offer low pressure or gravity die casting?",
      answer:
        "Our core capability is high pressure die casting (HPDC), which is ideal for high-volume, precision parts. For projects requiring low pressure or gravity die casting, we can evaluate feasibility and recommend the best process for your application.",
    },
  ],
};

export function DCFaq() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

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
          <div
            style={{
              borderLeft: "4px solid #D09947",
              paddingLeft: "20px",
            }}
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
              <EditableText
                path="faq.heading"
                defaultValue={DEFAULTS.heading}
              />
            </h2>
          </div>
        </motion.div>

        {/* FAQ Grid - 2 columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "20px" }}
        >
          {DEFAULTS.faqs.map((faq, index) => {
            const isOpen = openItems.has(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                style={{
                  background: "#1A1A1A",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left flex items-center justify-between"
                  style={{
                    padding: "24px",
                    cursor: "pointer",
                    background: "transparent",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#EEC569",
                      lineHeight: 1.4,
                      paddingRight: "16px",
                    }}
                  >
                    <EditableText
                      path={`faq.items.${index}.question`}
                      defaultValue={faq.question}
                    />
                  </span>
                  <ChevronDown
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#D09947",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <div
                  className="transition-all duration-300 overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    style={{
                      padding: "0 24px 24px 24px",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "#C5C6C9",
                    }}
                  >
                    <EditableText
                      path={`faq.items.${index}.answer`}
                      defaultValue={faq.answer}
                      multiline
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
