"use client";

import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: {
    prefix: "Specialized Team ",
    highlight: "Structure",
  },
  subheading:
    "Professional departmental ensures every production phase meets the highest standards, with cross-department collaboration delivering one-stop manufacturing solutions",
  departments: [
    {
      number: "01",
      title: "Surface Treatment Department",
      description:
        "Dedicated surface finishing team providing anodizing, bead blasting, plating, powder coating and various surface treatment processes to meet aesthetic and functional requirements.",
      image: getImageUrl("about/4-team-structure-Surface-Treatment-Department.webp"),
    },
    {
      number: "02",
      title: "Quality Inspection Department",
      description:
        "Independent QC team equipped with advanced inspection equipment, implementing full-process quality control from raw materials to finished products.",
      image: getImageUrl("about/4-team-structure-Quality-Inspection-Department.webp"),
    },
    {
      number: "03",
      title: "Manual & Assembly Department",
      description:
        "Experienced manual team handling precision part deburring, finishing, assembly, and packaging to ensure perfect product delivery.",
      image: getImageUrl("about/4-team-structure-Manual-&-Assembly-Department.webp"),
    },
    {
      number: "04",
      title: "CNC Machining Department",
      description:
        "50+ multi-axis CNC machines ranging from 3-axis to 5-axis capabilities, handling complex geometries with high precision.",
      image: getImageUrl("about/4-team-structure-CNC-Machining-Department.webp"),
    },
    {
      number: "05",
      title: "Injection Molding Department",
      description:
        "Specializing in medium-to-large batch injection molding with machines ranging from 50 to 450 tons for various volume and material requirements.",
      image: getImageUrl("about/4-team-structure-Injection-Molding-Department.webp"),
    },
    {
      number: "06",
      title: "Project Management\n& Engineering",
      description:
        "Dedicated project management and engineering support team providing professional guidance from design optimization to volume production.",
      image: getImageUrl("about/4-team-structure-Project-Management-&-Engineering.webp"),
    },
  ],
};

export function AboutTeamStructure() {
  return (
    <section
      id="team-structure"
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
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              margin: "0 0 20px 0",
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="teamStructure.heading.prefix" defaultValue={DEFAULTS.heading.prefix} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="teamStructure.heading.highlight" defaultValue={DEFAULTS.heading.highlight} />
            </span>
          </h2>
          <p
            style={{
              color: "#7A7A7C",
              fontSize: "18px",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <EditableText path="teamStructure.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        {/* Cards Grid - 3 columns x 2 rows */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: "clamp(16px, 3vw, 28px)",
            rowGap: "clamp(24px, 4vw, 45px)",
          }}
        >
          {DEFAULTS.departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="team-card transition-all duration-300 hover:-translate-y-1"
              style={{
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
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
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
              {/* Image with number overlay */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <EditableImage
                  path={`teamStructure.departments.${index}.image`}
                  defaultSrc={dept.image}
                  alt={dept.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Large number overlay */}
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "16px",
                    fontSize: "90px",
                    fontWeight: 700,
                    color: "rgba(208,153,71,0.35)",
                    lineHeight: 1,
                    pointerEvents: "none",
                  }}
                >
                  <EditableText path={`teamStructure.departments.${index}.number`} defaultValue={dept.number} />
                </span>
              </div>

              {/* Divider line between image and text */}
              <div
                style={{
                  height: "1px",
                  backgroundColor: "rgba(208,153,71,0.3)",
                }}
              />

              {/* Text content */}
              <div
                style={{
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    color: "#EEC569",
                    fontSize: "18px",
                    fontWeight: 700,
                    margin: "0 0 12px 0",
                    lineHeight: 1.3,
                    whiteSpace: "pre-line",
                  }}
                >
                  <EditableText path={`teamStructure.departments.${index}.title`} defaultValue={dept.title} multiline />
                </h3>
                <p
                  style={{
                    color: "#C5C6C9",
                    fontSize: "15.5px",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <EditableText path={`teamStructure.departments.${index}.description`} defaultValue={dept.description} multiline />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
