"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck, HeadsetIcon, DollarSign } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Why Choose ApexBatch Surface Finishing",
  features: [
    {
      icon: "layers",
      title: "Wide Range of Finishes",
      description:
        "From electrochemical treatments to specialized coatings, we offer diverse finishing options to meet exact specifications.",
    },
    {
      icon: "shield",
      title: "Quality Assurance",
      description:
        "Rigorous quality checks to ensure every part meets the required surface finish specifications.",
    },
    {
      icon: "headset",
      title: "Expert Support",
      description:
        "Technical guidance to help select the optimal surface treatment for your material and application.",
    },
    {
      icon: "dollar",
      title: "Transparent Pricing",
      description:
        "Clear pricing structure with multiple billing options (by weight or area) to suit your project needs.",
    },
  ],
};

const featureIcons = {
  layers: Layers,
  shield: ShieldCheck,
  headset: HeadsetIcon,
  dollar: DollarSign,
};

export function SFWhyChoose() {
  return (
    <section style={{ padding: "100px 0", background: "#000000" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "48px" }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#EEC569",
              paddingBottom: "16px",
              borderBottom: "2px solid rgba(208,153,71,0.3)",
            }}
          >
            <EditableText path="whyChoose.heading" defaultValue={DEFAULTS.heading} />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEFAULTS.features.map((feature, index) => {
            const Icon = featureIcons[feature.icon as keyof typeof featureIcons];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: "rgba(30,30,30,0.6)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "28px 24px",
                }}
              >
                <Icon
                  className="w-8 h-8"
                  style={{ color: "#D09947", marginBottom: "16px" }}
                />
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#EEC569",
                    marginBottom: "12px",
                  }}
                >
                  <EditableText
                    path={`whyChoose.features.${index}.title`}
                    defaultValue={feature.title}
                  />
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#9A9A9C",
                  }}
                >
                  <EditableText
                    path={`whyChoose.features.${index}.description`}
                    defaultValue={feature.description}
                    multiline
                  />
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
