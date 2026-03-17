"use client";

import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: {
    prefix: "Professional ",
    highlight: "Capabilities",
  },
  subheading:
    "ApexBatch is a specialized manufacturing subsidiary of Rapid Direct, focusing on medium-to-large batch production for global clients requiring high-precision components and assemblies.",
  images: {
    left: {
      src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
      label: "PRECISION TECHNOLOGY",
    },
    right: {
      src: getImageUrl("about/2-Core-Manufacturing Capabilities.webp"),
      label: "ADVANCED MANUFACTURING",
    },
  },
  whoWeAre: {
    title: "Who We Are",
    paragraph1:
      "Building upon Rapid Direct's 11-year foundation in rapid prototyping, ApexBatch specializes in batch production and high-precision manufacturing solutions, ensuring reliable transition from prototype to volume production.",
    paragraph2:
      "Our advanced facilities in Shenzhen combine localized manufacturing excellence with international standards to serve demanding industries worldwide.",
    items: [
      {
        label: "SPECIALIZED INDUSTRIES",
        value: "Aerospace, Medical Devices, Automotive, Premium Consumer Electronics",
      },
      {
        label: "BATCH RANGE",
        value: "100-10,000 units medium-to-large batch production",
      },
      {
        label: "PRECISION STANDARDS",
        value: "Tolerance control up to +/-0.005mm",
      },
      {
        label: "MATERIAL PORTFOLIO",
        value: "300+ material options including metals, engineering plastics, and special alloys",
      },
    ],
  },
  coreCapabilities: {
    title: "Core Manufacturing Capabilities",
    description:
      "As a dedicated division, we elevate manufacturing partnerships through enhanced engineering support, dedicated project management, and tailored solutions.",
    items: [
      { label: "5-AXIS CNC MACHINING", value: "Complex geometry with high precision" },
      { label: "PRECISION INJECTION MOLDING", value: "Medium-to-large batch solutions" },
      { label: "SHEET METAL FABRICATION", value: "Prototype to production" },
      { label: "SURFACE TREATMENT", value: "Anodizing, powder coating, plating, etc." },
      { label: "QUALITY ASSURANCE", value: "Comprehensive quality control systems" },
    ],
  },
};

export function AboutCapabilities() {
  return (
    <section
      style={{
        background: `
          radial-gradient(
            70% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
        padding: "clamp(40px, 8vw, 80px) clamp(16px, 4vw, 40px)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white"
          style={{
            textAlign: "center",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            margin: "0 0 24px 0",
            letterSpacing: "-0.015em",
          }}
        >
          <EditableText path="capabilities.heading.prefix" defaultValue={DEFAULTS.heading.prefix} />
          <span style={{ color: "#EEC569" }}>
            <EditableText path="capabilities.heading.highlight" defaultValue={DEFAULTS.heading.highlight} />
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            color: "#7A7A7C",
            fontSize: "18px",
            lineHeight: 1.6,
            margin: "0 auto 50px auto",
            maxWidth: "800px",
          }}
        >
          <EditableText path="capabilities.subheading" defaultValue={DEFAULTS.subheading} multiline />
        </motion.p>

        {/* Two image cards */}
        <div
          className="flex flex-col md:flex-row"
          style={{
            gap: "clamp(16px, 2vw, 24px)",
            marginBottom: "clamp(16px, 2vw, 24px)",
          }}
        >
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              flex: 1,
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              height: "320px",
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(208,153,71,0.25)",
            }}
          >
            <EditableImage
              path="capabilities.images.left.src"
              defaultSrc={DEFAULTS.images.left.src}
              alt="Precision Technology"
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                padding: "40px 20px 20px",
              }}
            >
              <span
                style={{
                  color: "#EEC569",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                <EditableText path="capabilities.images.left.label" defaultValue={DEFAULTS.images.left.label} />
              </span>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              flex: 1,
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              height: "320px",
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(208,153,71,0.25)",
            }}
          >
            <EditableImage
              path="capabilities.images.right.src"
              defaultSrc={DEFAULTS.images.right.src}
              alt="Advanced Manufacturing"
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                padding: "40px 20px 20px",
              }}
            >
              <span
                style={{
                  color: "#EEC569",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                <EditableText path="capabilities.images.right.label" defaultValue={DEFAULTS.images.right.label} />
              </span>
            </div>
          </motion.div>
        </div>

        {/* Two content cards */}
        <div
          className="flex flex-col lg:flex-row"
          style={{
            gap: "clamp(16px, 2vw, 24px)",
          }}
        >
          {/* Left card - Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="transition-all duration-300 hover:-translate-y-1"
            style={{
              flex: 1,
              background: `
                radial-gradient(
                  60% 50% at 50% 0%,
                  rgba(249,235,188,0.08),
                  rgba(0,0,0,0) 65%
                ),
                #0D0D0D
              `,
              border: "1px solid rgba(208,153,71,0.25)",
              borderRadius: "18px",
              padding: "32px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "2px solid #D09947";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "1px solid rgba(208,153,71,0.25)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 style={{ color: "#EEC569", fontSize: "28px", fontWeight: 700, margin: "0 0 20px 0" }}>
              <EditableText path="capabilities.whoWeAre.title" defaultValue={DEFAULTS.whoWeAre.title} />
            </h3>

            <p style={{ color: "#C5C6C9", fontSize: "15.5px", lineHeight: 1.7, margin: "0 0 16px 0" }}>
              <EditableText path="capabilities.whoWeAre.paragraph1" defaultValue={DEFAULTS.whoWeAre.paragraph1} multiline />
            </p>

            <p style={{ color: "#C5C6C9", fontSize: "15.5px", lineHeight: 1.7, margin: "0 0 24px 0" }}>
              <EditableText path="capabilities.whoWeAre.paragraph2" defaultValue={DEFAULTS.whoWeAre.paragraph2} multiline />
            </p>

            {/* List items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {DEFAULTS.whoWeAre.items.map((item, index) => (
                <div key={index} style={{ display: "flex", gap: "12px" }}>
                  <div style={{ width: "3px", backgroundColor: "#D09947", flexShrink: 0 }} />
                  <div>
                    <div style={{ color: "#EEC569", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", marginBottom: "4px" }}>
                      <EditableText path={`capabilities.whoWeAre.items.${index}.label`} defaultValue={item.label} />
                    </div>
                    <div style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.5 }}>
                      <EditableText path={`capabilities.whoWeAre.items.${index}.value`} defaultValue={item.value} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right card - Core Manufacturing Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="transition-all duration-300 hover:-translate-y-1"
            style={{
              flex: 1,
              background: `
                radial-gradient(
                  60% 50% at 50% 0%,
                  rgba(249,235,188,0.08),
                  rgba(0,0,0,0) 65%
                ),
                #0D0D0D
              `,
              border: "1px solid rgba(208,153,71,0.25)",
              borderRadius: "18px",
              padding: "32px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "2px solid #D09947";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "1px solid rgba(208,153,71,0.25)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 style={{ color: "#EEC569", fontSize: "28px", fontWeight: 700, margin: "0 0 20px 0" }}>
              <EditableText path="capabilities.coreCapabilities.title" defaultValue={DEFAULTS.coreCapabilities.title} />
            </h3>

            <p style={{ color: "#C5C6C9", fontSize: "15.5px", lineHeight: 1.7, margin: "0 0 24px 0" }}>
              <EditableText path="capabilities.coreCapabilities.description" defaultValue={DEFAULTS.coreCapabilities.description} multiline />
            </p>

            {/* List items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {DEFAULTS.coreCapabilities.items.map((item, index) => (
                <div key={index} style={{ display: "flex", gap: "12px" }}>
                  <div style={{ width: "3px", backgroundColor: "#D09947", flexShrink: 0 }} />
                  <div>
                    <div style={{ color: "#EEC569", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", marginBottom: "4px" }}>
                      <EditableText path={`capabilities.coreCapabilities.items.${index}.label`} defaultValue={item.label} />
                    </div>
                    <div style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.5 }}>
                      <EditableText path={`capabilities.coreCapabilities.items.${index}.value`} defaultValue={item.value} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
