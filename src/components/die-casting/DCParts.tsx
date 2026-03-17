"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Die Casting Parts ",
  headingHighlight: "Made By Us",
  subtitle: "Real components, real applications – precision die cast and finished in our ISO 9001 facility.",
  parts: [
    {
      title: "Automotive Bracket",
      description:
        "Engine mount bracket, thin-wall design, as-cast + CNC drilled.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
    {
      title: "LED Housing",
      description:
        "Heat sink integrated, excellent surface finish, powder coated.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
    {
      title: "Gearbox Cover",
      description:
        "Complex geometry with bearing seats, machined on CNC centers.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
    {
      title: "Connector Shell",
      description:
        "High conductivity, nickel plated, used in industrial controls.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
    {
      title: "Pump Housing",
      description:
        "Pressure tight, vacuum die cast, leak tested.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
    {
      title: "Heat Sink",
      description:
        "High fin density, as-cast with minimal draft, excellent thermal performance.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
    {
      title: "Latch Mechanism",
      description:
        "Intricate moving parts, as-cast tolerances +0.1mm.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
    {
      title: "Structural Insert",
      description:
        "Lightweight, high strength, used in aerospace brackets.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
  ],
};

export function DCParts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 220;
    el.scrollBy({
      left: direction === "left" ? -cardWidth * 2 : cardWidth * 2,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: "#000000",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "64px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="parts.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="parts.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              marginTop: "18px",
            }}
          >
            <EditableText path="parts.subtitle" defaultValue={DEFAULTS.subtitle} />
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)]"
              style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(0,0,0,0.8)", border: "1px solid rgba(208,153,71,0.4)", marginLeft: "-4px" }}
            >
              <ChevronLeft className="w-5 h-5" style={{ color: "#D09947" }} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)]"
              style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(0,0,0,0.8)", border: "1px solid rgba(208,153,71,0.4)", marginRight: "-4px" }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: "#D09947" }} />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollSnapType: "x mandatory", paddingBottom: "8px" }}
          >
            {DEFAULTS.parts.map((part, index) => (
              <motion.div
                key={part.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex-shrink-0 group transition-all duration-300 hover:-translate-y-1"
                style={{ width: "200px", borderRadius: "12px", background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.08)", scrollSnapAlign: "start", padding: "20px", textAlign: "center" }}
                onMouseEnter={(e) => { e.currentTarget.style.border = "1px solid rgba(208,153,71,0.3)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div className="relative mx-auto overflow-hidden" style={{ width: "74px", height: "74px", borderRadius: "12px", background: "#2A2A2A", marginBottom: "16px" }}>
                  <EditableImage path={`parts.items.${index}.image`} defaultSrc={part.image} alt={part.title} fill className="object-cover" />
                </div>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "10px", lineHeight: 1.3 }}>
                  <EditableText path={`parts.items.${index}.title`} defaultValue={part.title} />
                </h3>
                <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#7A7A7C" }}>
                  <EditableText path={`parts.items.${index}.description`} defaultValue={part.description} multiline />
                </p>
              </motion.div>
            ))}
          </div>

          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
          style={{ marginTop: "48px" }}
        >
          <Link
            href="https://app.apexbatch.com/"
            rel="nofollow"
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider flex items-center justify-center gap-2 group"
          >
            Get Instant Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
