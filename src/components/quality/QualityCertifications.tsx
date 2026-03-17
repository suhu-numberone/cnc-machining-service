"use client";

import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  sectionTitle: "Quality ",
  sectionTitleHighlight: "Certifications",
  sectionDescription: "Our Certified systems ensure consistent quality, compliance, and traceability throughout production.",
  certifications: [
    { src: getImageUrl("home/6-quality-ISO9001.webp"), alt: "ISO 9001:2015 Certification" },
    { src: getImageUrl("home/6-quality-ISO13485.webp"), alt: "ISO 13485:2016 Certification" },
    { src: getImageUrl("home/6-quality-ISO14001.webp"), alt: "ISO 14001:2015 Certification" },
  ],
};

export function QualityCertifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden"
      style={{
        padding: "80px 0",
        background: `
          radial-gradient(
            70% 50% at 50% 50%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #4A4A48
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            style={{
              fontSize: "46px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="certifications.sectionTitle" defaultValue={DEFAULTS.sectionTitle} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="certifications.sectionTitleHighlight" defaultValue={DEFAULTS.sectionTitleHighlight} />
            </span>
          </h2>
          <p
            style={{
              color: "#C5C6C9",
              fontSize: "18px",
              lineHeight: 1.6,
              maxWidth: "720px",
              margin: "16px auto 0",
            }}
          >
            <EditableText
              path="certifications.sectionDescription"
              defaultValue={DEFAULTS.sectionDescription}
              multiline
            />
          </p>
        </motion.div>

        {/* Certifications Images */}
        <div className="grid md:grid-cols-3 gap-6">
          {DEFAULTS.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
              style={{ borderRadius: "18px", overflow: "hidden" }}
            >
              <EditableImage
                path={`certifications.items.${index}.image`}
                defaultSrc={cert.src}
                alt={cert.alt}
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
