"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  headingHighlight: "Die Casting ",
  headingSuffix: "Factory",
  description1:
    "Located in Shenzhen's advanced manufacturing district, our 50,000 m² vertically integrated facility operates 8 specialized production shops and is equipped with 300+ advanced machines.",
  description2:
    "We support end-to-end manufacturing in one location, including die casting, CNC machining, sheet metal fabrication, 3D printing, as well as in-house surface treatment and quality inspection lines.",
  stats: [
    { value: "50,000 m²", label: "Total Factory Area" },
    { value: "8", label: "Specialized Production Shops" },
    { value: "300+", label: "Advanced Equipment" },
    { value: "98%", label: "On-time Delivery" },
  ],
  images: [
    {
      src: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/2-injection-molding-factory-workshop-1.webp",
      alt: "Die Casting Factory Workshop",
    },
    {
      src: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/2-plastic-injection-molding-production-line-2.webp",
      alt: "Die Casting Production Line",
    },
    {
      src: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/2-custom-injection-molding-manufacturing-facility-3.webp",
      alt: "Custom Die Casting Manufacturing Facility",
    },
    {
      src: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/2-injection-molding-machines-on-site-4.webp",
      alt: "Die Casting Machines On Site",
    },
    {
      src: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/2-plastic-injection-molding-factory-5.webp",
      alt: "Die Casting Factory",
    },
  ],
};

export function DCSupplier() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % DEFAULTS.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + DEFAULTS.images.length) % DEFAULTS.images.length);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `
          radial-gradient(
            60% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-bold"
              style={{
                fontSize: "46px",
                fontWeight: 700,
                letterSpacing: "-0.015em",
                lineHeight: 1.1,
                marginTop: "10px",
                marginBottom: "34px",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "#EEC569" }}>
                <EditableText path="supplier.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
              </span>
              <span style={{ color: "#FFFFFF" }}>
                <EditableText path="supplier.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
              </span>
            </h2>

            <div
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#C5C6C9",
                marginBottom: "32px",
              }}
            >
              <p>
                <EditableText path="supplier.description1" defaultValue={DEFAULTS.description1} multiline />
              </p>
              <br />
              <p>
                <EditableText path="supplier.description2" defaultValue={DEFAULTS.description2} multiline />
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {DEFAULTS.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    padding: "20px 16px",
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                    border: "1px solid rgba(208,153,71,0.3)",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#D09947",
                      lineHeight: 1.1,
                    }}
                  >
                    <EditableText path={`supplier.stats.${index}.value`} defaultValue={stat.value} />
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#7A7A7C",
                      marginTop: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    <EditableText path={`supplier.stats.${index}.label`} defaultValue={stat.label} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image with navigation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
            style={{ marginTop: "80px" }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "16px",
                border: "2px solid #7F4D0F",
                boxShadow: "inset 0 0 0 1px rgba(208,153,71,0.15), 0 24px 48px rgba(0,0,0,0.6)",
              }}
            >
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 z-10" style={{ width: "24px", height: "24px", borderTop: "2px solid #7F4D0F", borderLeft: "2px solid #7F4D0F" }} />
              <div className="absolute top-3 right-3 z-10" style={{ width: "24px", height: "24px", borderTop: "2px solid #7F4D0F", borderRight: "2px solid #7F4D0F" }} />
              <div className="absolute bottom-3 left-3 z-10" style={{ width: "24px", height: "24px", borderBottom: "2px solid #7F4D0F", borderLeft: "2px solid #7F4D0F" }} />
              <div className="absolute bottom-3 right-3 z-10" style={{ width: "24px", height: "24px", borderBottom: "2px solid #7F4D0F", borderRight: "2px solid #7F4D0F" }} />

              <div className="relative aspect-[4/3]">
                <EditableImage
                  path={`supplier.images.${currentImage}.src`}
                  defaultSrc={DEFAULTS.images[currentImage].src}
                  alt={DEFAULTS.images[currentImage].alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                />

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)]"
                  style={{ width: "40px", height: "40px", borderRadius: "8px", background: "rgba(0,0,0,0.75)", border: "1px solid rgba(208,153,71,0.4)" }}
                >
                  <ChevronLeft className="w-5 h-5" style={{ color: "#D09947" }} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)]"
                  style={{ width: "40px", height: "40px", borderRadius: "8px", background: "rgba(0,0,0,0.75)", border: "1px solid rgba(208,153,71,0.4)" }}
                >
                  <ChevronRight className="w-5 h-5" style={{ color: "#D09947" }} />
                </button>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {DEFAULTS.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className="h-1 rounded-full transition-all"
                  style={{
                    width: index === currentImage ? "24px" : "12px",
                    background: index === currentImage ? "#D09947" : "#444444",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
