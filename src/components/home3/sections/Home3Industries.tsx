"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  titleWhite: "Industries ",
  titleHighlight: "We Serve",
  subtitle:
    "Supporting medium-to-large batch production across industries with strict performance, compliance, and delivery requirements.",
  industries: [
    {
      title: "Medical Devices",
      description:
        "ISO 13485 compliant precision components for life-critical applications. Full traceability and documentation for regulatory compliance.",
      image: getImageUrl("home/5-industries-medical.webp"),
    },
    {
      title: "Aerospace",
      description:
        "AS9100 certified high-performance parts with full traceability. Meeting the strictest quality and safety standards for aviation.",
      image: getImageUrl("home/5-industries-aerospace.webp"),
    },
    {
      title: "Automotive",
      description:
        "IATF 16949 quality management for OEM and aftermarket components. High-volume production with consistent precision.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
    },
    {
      title: "Consumer Electronics",
      description:
        "Production of precision metal and plastic components for enclosures, internal frames, and functional assemblies in consumer electronics.",
      image: getImageUrl("home/5-industries-consumer-electronics.webp"),
    },
  ],
};

export function Home3Industries() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="industries"
      className="relative overflow-hidden"
      style={{
        padding: "76px 0 104px",
        background: `
          radial-gradient(
            70% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText
              path="industries.titleWhite"
              defaultValue={DEFAULTS.titleWhite}
            />
            <span style={{ color: "#EEC569" }}>
              <EditableText
                path="industries.titleHighlight"
                defaultValue={DEFAULTS.titleHighlight}
              />
            </span>
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              maxWidth: "820px",
              marginTop: "18px",
            }}
          >
            <EditableText
              path="industries.subtitle"
              defaultValue={DEFAULTS.subtitle}
              multiline
            />
          </p>
        </motion.div>

        {/* Industries Grid - 2x2 */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: "32px",
            marginTop: "64px",
          }}
        >
          {DEFAULTS.industries.map((industry, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: "#000000",
                  borderRadius: "18px",
                  border: "1px solid rgba(208,153,71,0.18)",
                  overflow: "hidden",
                  minHeight: "300px",
                }}
                onClick={() => toggleExpand(index)}
              >
                {/* Background image */}
                <div className="relative w-full h-full" style={{ minHeight: "300px" }}>
                  <EditableImage
                    path={`industries.items.${index}.image`}
                    defaultSrc={industry.image}
                    alt={industry.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.15) 65%)",
                    }}
                  />

                  {/* Title - bottom left */}
                  <div
                    className="absolute bottom-0 left-0 right-0"
                    style={{ padding: "24px" }}
                  >
                    <h3
                      className="text-white"
                      style={{
                        fontSize: "22px",
                        fontWeight: 600,
                      }}
                    >
                      <EditableText
                        path={`industries.items.${index}.title`}
                        defaultValue={industry.title}
                      />
                    </h3>
                  </div>

                  {/* Expand/Collapse Button - engineered style */}
                  <button
                    className="absolute top-5 right-5 flex items-center justify-center transition-all duration-300 hover:brightness-95"
                    style={{
                      width: "43px",
                      height: "43px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      border: "none",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(index);
                    }}
                  >
                    <ChevronDown
                      className="w-6 h-6 transition-transform duration-300"
                      style={{
                        color: "#D09947",
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>

                  {/* Expanded Description Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-0 left-0 right-0"
                        style={{
                          background: "rgba(0,0,0,0.75)",
                          backdropFilter: "blur(6px)",
                          padding: "20px 24px",
                          borderTop: "1px solid rgba(208,153,71,0.25)",
                        }}
                      >
                        <h3
                          className="text-white mb-3"
                          style={{
                            fontSize: "20px",
                            fontWeight: 600,
                          }}
                        >
                          <EditableText
                            path={`industries.items.${index}.title`}
                            defaultValue={industry.title}
                          />
                        </h3>
                        <p
                          style={{
                            fontSize: "15px",
                            lineHeight: 1.65,
                            color: "#C5C6C9",
                            maxWidth: "90%",
                          }}
                        >
                          <EditableText
                            path={`industries.items.${index}.description`}
                            defaultValue={industry.description}
                            multiline
                          />
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
