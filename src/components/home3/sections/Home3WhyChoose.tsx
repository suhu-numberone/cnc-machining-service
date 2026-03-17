"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Check, ArrowRight } from "lucide-react";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  titleWhite: "Why Engineers ",
  titleHighlight: "Choose ApexBatch",
  ctaText: "Get Free engineering review before production.",
  ctaButton: "Upload Your Design",
  slides: [
    {
      image: getImageUrl("home/4-why-choose-us-1.webp"),
      number: "01",
      title: "Comprehensive Free Services",
      description:
        "Full-spectrum support including DFM analysis, process optimization, design validation, and quality inspection. Reduce trial costs with free engineering verification.",
    },
    {
      image: getImageUrl("home/4-why-choose-us-2.webp"),
      number: "02",
      title: "Expert Engineering Team",
      description:
        "Our team of experienced engineers provides technical consultation and design optimization to ensure manufacturability and cost-effectiveness.",
    },
    {
      image: getImageUrl("home/4-why-choose-us-3.webp"),
      number: "03",
      title: "Quality Guaranteed",
      description:
        "ISO-certified processes with rigorous quality control at every stage. Full documentation and traceability for all production runs.",
    },
    {
      image: getImageUrl("home/4-why-choose-us-4.webp"),
      number: "04",
      title: "Fast Turnaround",
      description:
        "Rapid prototyping and efficient production scheduling. Get your parts delivered on time, every time with our streamlined processes.",
    },
  ],
};

export function Home3WhyChoose() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % DEFAULTS.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + DEFAULTS.slides.length) % DEFAULTS.slides.length);
  };

  return (
    <section
      id="capabilities"
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
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
            <EditableText
              path="whyChoose.titleWhite"
              defaultValue={DEFAULTS.titleWhite}
            />
            <span style={{ color: "#EEC569" }}>
              <EditableText
                path="whyChoose.titleHighlight"
                defaultValue={DEFAULTS.titleHighlight}
              />
            </span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Image Carousel with industrial framing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main image container with industrial framing */}
            <div
              className="relative"
              style={{
                borderRadius: "16px",
                border: "2px solid #7F4D0F",
                boxShadow: "inset 0 0 0 1px rgba(208,153,71,0.15), 0 24px 48px rgba(0,0,0,0.6)",
                overflow: "hidden",
              }}
            >
              {/* Corner brackets - precision tooling indicators */}
              <div
                className="absolute top-3 left-3 z-10"
                style={{
                  width: "24px",
                  height: "24px",
                  borderTop: "2px solid #7F4D0F",
                  borderLeft: "2px solid #7F4D0F",
                }}
              />
              <div
                className="absolute top-3 right-3 z-10"
                style={{
                  width: "24px",
                  height: "24px",
                  borderTop: "2px solid #7F4D0F",
                  borderRight: "2px solid #7F4D0F",
                }}
              />
              <div
                className="absolute bottom-3 left-3 z-10"
                style={{
                  width: "24px",
                  height: "24px",
                  borderBottom: "2px solid #7F4D0F",
                  borderLeft: "2px solid #7F4D0F",
                }}
              />
              <div
                className="absolute bottom-3 right-3 z-10"
                style={{
                  width: "24px",
                  height: "24px",
                  borderBottom: "2px solid #7F4D0F",
                  borderRight: "2px solid #7F4D0F",
                }}
              />

              {/* Image */}
              <div className="relative aspect-[4/3]">
                <EditableImage
                  path={`whyChoose.slides.${currentSlide}.image`}
                  defaultSrc={DEFAULTS.slides[currentSlide].image}
                  alt="Manufacturing facility"
                  fill
                  style={{ objectFit: "cover" }}
                />

                {/* Navigation Arrows - Industrial rectangular style */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)]"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "rgba(0,0,0,0.75)",
                    border: "1px solid rgba(208,153,71,0.4)",
                  }}
                >
                  <ChevronLeft className="w-5 h-5" style={{ color: "#D09947" }} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)]"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "rgba(0,0,0,0.75)",
                    border: "1px solid rgba(208,153,71,0.4)",
                  }}
                >
                  <ChevronRight className="w-5 h-5" style={{ color: "#D09947" }} />
                </button>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {DEFAULTS.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="h-1 rounded-full transition-all"
                  style={{
                    width: index === currentSlide ? "24px" : "12px",
                    background: index === currentSlide ? "#D09947" : "#444444",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Content Panel (Spec Sheet Style) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Content Panel with glass effect */}
            <div
              className="mb-6"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                borderRadius: "16px",
                border: "1px solid rgba(208,153,71,0.2)",
                padding: "32px",
              }}
            >
              {/* Section Number - structural anchor */}
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "rgba(208,153,71,0.35)",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                <EditableText
                  path={`whyChoose.slides.${currentSlide}.number`}
                  defaultValue={DEFAULTS.slides[currentSlide].number}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#D09947",
                  marginBottom: "16px",
                }}
              >
                <EditableText
                  path={`whyChoose.slides.${currentSlide}.title`}
                  defaultValue={DEFAULTS.slides[currentSlide].title}
                />
              </h3>

              {/* Checkbox with description */}
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center flex-shrink-0 mt-1"
                  style={{
                    width: "24px",
                    height: "24px",
                    border: "2px solid #D09947",
                    background: "rgba(208,153,71,0.1)",
                  }}
                >
                  <Check className="w-4 h-4" style={{ color: "#D09947" }} />
                </div>
                <p
                  style={{
                    fontSize: "15.5px",
                    lineHeight: 1.65,
                    color: "#C5C6C9",
                    maxWidth: "90%",
                  }}
                >
                  <EditableText
                    path={`whyChoose.slides.${currentSlide}.description`}
                    defaultValue={DEFAULTS.slides[currentSlide].description}
                    multiline
                  />
                </p>
              </div>
            </div>

            {/* Thumbnail Images - Dataset reference style */}
            <div className="grid grid-cols-4 gap-3">
              {DEFAULTS.slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="relative aspect-square overflow-hidden transition-all duration-300"
                  style={{
                    borderRadius: "8px",
                    border: index === currentSlide
                      ? "1px solid #D09947"
                      : "1px solid rgba(208,153,71,0.25)",
                    opacity: index === currentSlide ? 1 : 0.65,
                  }}
                >
                  <EditableImage
                    path={`whyChoose.slides.${index}.image`}
                    defaultSrc={slide.image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginTop: "48px" }}
        >
          <p
            className="mb-5"
            style={{
              fontSize: "25px",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            <EditableText
              path="whyChoose.ctaText"
              defaultValue={DEFAULTS.ctaText}
            />
          </p>
          <Link
            href="https://app.apexbatch.com/"
            rel="nofollow"
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
          >
            <EditableText
              path="whyChoose.ctaButton"
              defaultValue={DEFAULTS.ctaButton}
            />
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
