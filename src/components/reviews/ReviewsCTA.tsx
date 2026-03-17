"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
  headingPrefix: "Join Industry Leaders Who ",
  headingHighlight: "Build with Precision",
  description:
    "Apexbatch delivers manufacturing solutions for engineering teams that demand quality, reliability, and technical partnership.",
  primaryButton: "Request a Quote",
  secondaryButton: "Contact Engineering Team",
};

export function ReviewsCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "80px 0 100px",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <EditableImage
          path="cta.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="CTA background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: "46px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.015em",
            marginBottom: "32px",
          }}
        >
          <EditableText path="cta.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
          <span style={{ color: "#EEC569" }}>
            <EditableText path="cta.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            color: "#C5C6C9",
            fontSize: "18px",
            lineHeight: 1.7,
            maxWidth: "700px",
            margin: "0 auto 48px",
          }}
        >
          <EditableText path="cta.description" defaultValue={DEFAULTS.description} multiline />
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="transition-all duration-300 hover:-translate-y-0.5"
            style={{
              padding: "18px 40px",
              background: "#D09947",
              color: "#000000",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "4px",
            }}
          >
            <EditableText path="cta.primaryButton" defaultValue={DEFAULTS.primaryButton} />
          </Link>
          <Link
            href="/contact"
            className="transition-all duration-300 hover:-translate-y-0.5"
            style={{
              padding: "18px 40px",
              background: "transparent",
              color: "#D09947",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "2px solid #D09947",
              borderRadius: "4px",
            }}
          >
            <EditableText path="cta.secondaryButton" defaultValue={DEFAULTS.secondaryButton} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
