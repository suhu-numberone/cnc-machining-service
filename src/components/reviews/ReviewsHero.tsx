"use client";

import { motion } from "framer-motion";
import { CheckCircle, Building2, Globe } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
  headingLine1: "Trusted by",
  headingLine2: "Global Manufacturing Clients",
  subheading: "Real Reviews from Real Engineers",
  description:
    "From precision CNC machining to high-volume injection molding, Apexbatch delivers consistent quality for aerospace, automotive, and medical industries worldwide.",
  stat1: "Verified Client Reviews",
  stat2: "250+ Industrial Projects Delivered",
  stat3: "Serving North America, Europe & Asia",
};

export function ReviewsHero() {
  return (
    <section className="relative bg-[#000000] pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full" style={{ minHeight: "640px" }}>
        <EditableImage
          path="hero.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Reviews hero background"
          fill
          style={{ objectFit: "cover" }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        />

        {/* Content Overlay */}
        <div
          className="relative flex flex-col items-center justify-center px-6"
          style={{ minHeight: "640px" }}
        >
          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full max-w-7xl flex flex-col items-center"
            style={{
              background: "rgba(52, 49, 47, 0.5)",
              border: "1px solid rgba(238, 197, 105, 0.3)",
              borderRadius: "8px",
              padding: "48px 40px",
            }}
          >
            <h1
              className="text-white font-extrabold tracking-tight"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              <EditableText path="hero.headingLine1" defaultValue={DEFAULTS.headingLine1} />
              <br />
              <span style={{ color: "#EEC569" }}>
                <EditableText path="hero.headingLine2" defaultValue={DEFAULTS.headingLine2} />
              </span>
            </h1>

            <h2
              style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: "20px",
              }}
            >
              <EditableText path="hero.subheading" defaultValue={DEFAULTS.subheading} />
            </h2>

            <p
              className="text-white/90"
              style={{
                fontSize: "16px",
                lineHeight: 1.6,
                marginBottom: "36px",
                maxWidth: "700px",
              }}
            >
              <EditableText path="hero.description" defaultValue={DEFAULTS.description} multiline />
            </p>

            {/* Stats row */}
            <div
              className="inline-flex flex-col sm:flex-row flex-wrap justify-center gap-6"
              style={{
                background: "rgba(30, 30, 30, 0.7)",
                padding: "16px 24px",
                borderRadius: "6px",
              }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle
                  style={{ width: "18px", height: "18px", color: "#EEC569" }}
                />
                <span style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>
                  <EditableText path="hero.stat1" defaultValue={DEFAULTS.stat1} />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building2
                  style={{ width: "18px", height: "18px", color: "#EEC569" }}
                />
                <span style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>
                  <EditableText path="hero.stat2" defaultValue={DEFAULTS.stat2} />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe
                  style={{ width: "18px", height: "18px", color: "#EEC569" }}
                />
                <span style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>
                  <EditableText path="hero.stat3" defaultValue={DEFAULTS.stat3} />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
