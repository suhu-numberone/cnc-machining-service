"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80",
  heading: "Ready to Scale Your Production?",
  subheading: "Join 500+ global innovators who rely on ApexBatch for high-precision manufacturing solutions.",
  buttonText: "Request A Free Quote",
  buttonLink: "https://app.apexbatch.com/",
};

export function AboutCTA() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "340px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        <EditableImage
          path="cta.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Manufacturing background"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(15, 12, 8, 0.75)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          width: "100%",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <h2
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#EEC569",
              margin: "0 0 18px 0",
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="cta.heading" defaultValue={DEFAULTS.heading} />
          </h2>

          {/* Subheading */}
          <p
            style={{
              fontSize: "28px",
              color: "#FFFFFF",
              margin: "0 0 44px 0",
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            <EditableText path="cta.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>

          {/* CTA Button */}
          <Link
            href={DEFAULTS.buttonLink}
            rel="nofollow"
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
          >
            <EditableText path="cta.buttonText" defaultValue={DEFAULTS.buttonText} />
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
