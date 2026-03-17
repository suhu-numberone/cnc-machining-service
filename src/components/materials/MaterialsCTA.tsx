"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wrench, ClipboardCheck, Lightbulb } from "lucide-react";
import Link from "next/link";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage:
    "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=80",
  heading: "Need Custom Materials or Expert Guidance?",
  description:
    "Our material science experts can help you select, customize, or develop materials for your specific application requirements. Whether you need specialized formulations, custom composites, or technical consultation, we provide tailored solutions for manufacturing challenges.",
  primaryCta: "Request Material Consultation",
  secondaryCta: "Explore Custom Material Solutions",
  features: [
    {
      title: "Custom Formulation & Compounding",
      icon: "wrench",
    },
    {
      title: "Material Testing & Validation",
      icon: "clipboard",
    },
    {
      title: "Application-Specific Solutions",
      icon: "lightbulb",
    },
  ],
};

const featureIcons = {
  wrench: Wrench,
  clipboard: ClipboardCheck,
  lightbulb: Lightbulb,
};

export function MaterialsCTA() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "120px 0" }}>
      <div className="absolute inset-0">
        <EditableImage
          path="cta.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Custom Materials"
          fill
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
              marginBottom: "18px",
            }}
          >
            <EditableText path="cta.heading" defaultValue={DEFAULTS.heading} />
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#C5C6C9",
              marginBottom: "36px",
            }}
          >
            <EditableText
              path="cta.description"
              defaultValue={DEFAULTS.description}
              multiline
            />
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider group"
            >
              <EditableText
                path="cta.primaryCta"
                defaultValue={DEFAULTS.primaryCta}
              />
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[#4A4A48] hover:border-[#D09947] text-white hover:text-[#D09947] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider"
            >
              <EditableText
                path="cta.secondaryCta"
                defaultValue={DEFAULTS.secondaryCta}
              />
            </Link>
          </div>
        </motion.div>

        {/* Feature boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
          style={{ marginTop: "64px" }}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-12"
            style={{
              background: "rgba(30, 30, 30, 0.7)",
              border: "1px solid rgba(208,153,71,0.2)",
              borderRadius: "10px",
              padding: "32px 56px",
            }}
          >
            {DEFAULTS.features.map((feature, index) => {
              const Icon = featureIcons[feature.icon as keyof typeof featureIcons];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                  style={{ gap: "12px", maxWidth: "140px", margin: "0 auto" }}
                >
                  <Icon className="w-7 h-7 shrink-0" style={{ color: "#D09947" }} />
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#C5C6C9",
                      lineHeight: 1.4,
                    }}
                  >
                    <EditableText
                      path={`cta.features.${index}.title`}
                      defaultValue={feature.title}
                    />
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
