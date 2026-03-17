"use client";

import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  logos: [
    { name: "Microsoft" },
    { name: "EMERSON" },
    { name: "Nikon" },
    { name: "TOYOTA" },
    { name: "FESTO" },
  ],
};

export function Home3TrustedLogos() {
  return (
    <section className="py-10 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-8 md:gap-12"
        >
          {/* Microsoft */}
          <div className="flex items-center gap-2 text-[#888888] hover:text-[#AAAAAA] transition-colors">
            <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
              <div className="bg-current" />
              <div className="bg-current" />
              <div className="bg-current" />
              <div className="bg-current" />
            </div>
            <span className="text-lg font-semibold tracking-wide">
              <EditableText
                path="trustedLogos.items.0.name"
                defaultValue={DEFAULTS.logos[0].name}
              />
            </span>
          </div>

          {/* Emerson */}
          <div className="text-[#888888] hover:text-[#AAAAAA] transition-colors">
            <span className="text-xl font-bold tracking-wider" style={{ fontFamily: 'serif' }}>
              <EditableText
                path="trustedLogos.items.1.name"
                defaultValue={DEFAULTS.logos[1].name}
              />
            </span>
          </div>

          {/* Nikon */}
          <div className="text-[#888888] hover:text-[#AAAAAA] transition-colors">
            <span className="text-2xl font-bold italic tracking-tight" style={{ fontFamily: 'serif' }}>
              <EditableText
                path="trustedLogos.items.2.name"
                defaultValue={DEFAULTS.logos[2].name}
              />
            </span>
          </div>

          {/* Toyota */}
          <div className="flex items-center gap-2 text-[#888888] hover:text-[#AAAAAA] transition-colors">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <ellipse cx="12" cy="12" rx="10" ry="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="10" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="text-lg font-bold tracking-widest">
              <EditableText
                path="trustedLogos.items.3.name"
                defaultValue={DEFAULTS.logos[3].name}
              />
            </span>
          </div>

          {/* Festo */}
          <div className="text-[#888888] hover:text-[#AAAAAA] transition-colors">
            <span className="text-xl font-bold tracking-widest">
              <EditableText
                path="trustedLogos.items.4.name"
                defaultValue={DEFAULTS.logos[4].name}
              />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
