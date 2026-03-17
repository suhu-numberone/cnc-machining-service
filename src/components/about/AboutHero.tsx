"use client";

import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

// Default content - used when no DB content exists
const DEFAULTS = {
  headingPrefix: "Welcome to ",
  headingHighlight: "Apexbatch",
  tagline: "Inherited Expertise. Focused on Your Scale.",
  description:
    "From the world's pioneer in digital manufacturing comes a dedicated team focused on high-precision, medium-to-large batch production.",
  backgroundImage: getImageUrl("about/AboutApexBatch.gif"),
  images: [
    { src: getImageUrl("about/1-about-banner-1.webp"), alt: "CNC machining" },
    { src: getImageUrl("about/1-about-banner-2.webp"), alt: "Manufacturing" },
    { src: getImageUrl("about/1-about-banner-3.webp"), alt: "Precision parts" },
  ],
};

export function AboutHero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #1a1512 0%, #2d1f15 25%, #3d2a1a 50%, #4a3520 75%, #1a1512 100%)",
        padding: "clamp(40px, 6vw, 60px) clamp(16px, 4vw, 40px)",
        paddingTop: "clamp(80px, 12vw, 120px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated GIF background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <EditableImage
          path="hero.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.4,
          }}
        />
      </div>

      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Main card container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
          background: "rgba(13,13,13,0.25)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(208,153,71,0.15)",
          borderRadius: "18px",
          padding:
            "clamp(24px, 5vw, 60px) clamp(16px, 5vw, 60px) clamp(24px, 4vw, 50px)",
        }}
      >
        {/* Main heading */}
        <h1 className="text-center text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-[0.95] tracking-tight uppercase mb-6">
          <span className="text-white">
            <EditableText
              path="hero.headingPrefix"
              defaultValue={DEFAULTS.headingPrefix}
            />
          </span>
          <span className="text-[#D09947]">
            <EditableText
              path="hero.headingHighlight"
              defaultValue={DEFAULTS.headingHighlight}
            />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-center text-xl md:text-2xl mx-auto mb-10 leading-relaxed">
          <span className="text-[#D09947] font-semibold block">
            <EditableText
              path="hero.tagline"
              defaultValue={DEFAULTS.tagline}
            />
          </span>
          <span className="text-[#7A7A7C]">
            <EditableText
              path="hero.description"
              defaultValue={DEFAULTS.description}
              multiline
            />
          </span>
        </p>

        {/* Three images */}
        <div
          className="flex flex-col sm:flex-row"
          style={{
            gap: "clamp(12px, 2vw, 20px)",
          }}
        >
          {/* Image 1 */}
          <div
            style={{
              flex: 1,
              height: "clamp(150px, 20vw, 200px)",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(208,153,71,0.2)",
              position: "relative",
            }}
          >
            <EditableImage
              path="hero.image1"
              defaultSrc={DEFAULTS.images[0].src}
              alt={DEFAULTS.images[0].alt}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          {/* Image 2 */}
          <div
            style={{
              flex: 1,
              height: "clamp(150px, 20vw, 200px)",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(208,153,71,0.2)",
              position: "relative",
            }}
          >
            <EditableImage
              path="hero.image2"
              defaultSrc={DEFAULTS.images[1].src}
              alt={DEFAULTS.images[1].alt}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          {/* Image 3 */}
          <div
            className="hidden sm:block"
            style={{
              flex: 1,
              height: "clamp(150px, 20vw, 200px)",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(208,153,71,0.2)",
              position: "relative",
            }}
          >
            <EditableImage
              path="hero.image3"
              defaultSrc={DEFAULTS.images[2].src}
              alt={DEFAULTS.images[2].alt}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
