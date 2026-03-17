"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
  heading: "Precision Surface Finishing for High-Performance Parts",
  description:
    "Custom surface treatment solutions to enhance durability, appearance, and functionality of your production parts.",
  cta: "Get a Custom Surface Finishing Quote",
};

export function SFHero() {
  return (
    <section className="relative bg-[#000000] pt-16 overflow-hidden">
      <div className="relative w-full" style={{ minHeight: "640px" }}>
        <EditableImage
          path="hero.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Surface finishing hero background"
          fill
          style={{ objectFit: "cover" }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />

        <div
          className="relative flex flex-col justify-center px-6"
          style={{ minHeight: "640px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[1200px] mx-auto"
          >
            <div style={{ maxWidth: "850px" }}>
              <h1
                className="font-extrabold tracking-tight"
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  lineHeight: 1.1,
                  marginBottom: "20px",
                  color: "#EEC569",
                }}
              >
                <EditableText path="hero.heading" defaultValue={DEFAULTS.heading} />
              </h1>

              <p
                className="text-white/90"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  marginBottom: "36px",
                  maxWidth: "640px",
                }}
              >
                <EditableText path="hero.description" defaultValue={DEFAULTS.description} multiline />
              </p>

              <Link
                href="/contact"
                className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
              >
                <EditableText path="hero.cta" defaultValue={DEFAULTS.cta} />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
