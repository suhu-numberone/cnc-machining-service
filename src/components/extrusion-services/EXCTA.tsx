"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/injection-molding-footer.webp",
  heading: "Start Your Extrusion Project Today",
  description: "Upload your design files and get a detailed quote and free DFM analysis within 24 hours",
  primaryCta: "Upload files for an instant quote",
  secondaryCta: "Contact our engineers",
};

export function EXCTA() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "120px 0" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <EditableImage
          path="cta.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Extrusion Manufacturing"
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
          className="max-w-2xl mx-auto text-center"
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
            <EditableText path="cta.description" defaultValue={DEFAULTS.description} multiline />
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://app.apexbatch.com/"
              rel="nofollow"
              className="inline-flex items-center gap-2 bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider group"
            >
              <EditableText path="cta.primaryCta" defaultValue={DEFAULTS.primaryCta} />
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#4A4A48] hover:border-[#D09947] text-white hover:text-[#D09947] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider"
            >
              <EditableText path="cta.secondaryCta" defaultValue={DEFAULTS.secondaryCta} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
