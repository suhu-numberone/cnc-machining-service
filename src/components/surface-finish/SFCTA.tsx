"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage:
    "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=80",
  heading:
    "Need more surface treatment options? Contact us for custom solutions.",
  primaryCta: "Get a Custom Surface Finishing Quote",
  secondaryCta: "Contact Our Engineering Team",
};

export function SFCTA() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "120px 0" }}>
      <div className="absolute inset-0">
        <EditableImage
          path="cta.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Surface finishing CTA"
          fill
          style={{ objectFit: "cover" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.6) 100%)",
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
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "48px",
            }}
          >
            <EditableText path="cta.heading" defaultValue={DEFAULTS.heading} />
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
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
