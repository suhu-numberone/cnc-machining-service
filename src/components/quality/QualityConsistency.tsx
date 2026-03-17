"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, GraduationCap, TrendingUp, Users } from "lucide-react";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  sectionTitle: "How We Ensure ",
  sectionTitleHighlight: "Consistent Quality",
  tabs: [
    {
      title: "Operator Quality Training",
      subtitle: "Ensuring skilled and empowered personnel",
      image: getImageUrl("quality/qc-training.png"),
      items: [
        "All operators must pass pre-job quality training and assessment before assignment",
        "Key process operators undergo periodic retraining to maintain competency",
        "Operators are authorized to immediately stop production upon detecting quality risks and initiate problem resolution protocols",
        "Regular quality awareness sessions and skill development workshops",
      ],
      footer: "Empowered operators are the first line of defense in quality assurance",
    },
    {
      title: "Continuous Improvement",
      subtitle: "Systematic approach to quality enhancement",
      image: getImageUrl("quality/qc-improvement.png"),
      items: [
        "Non-conformances are addressed through the PDCA (Plan-Do-Check-Act) cycle",
        "Each quality deviation triggers documentation, root cause analysis, and corrective actions",
        "Monthly review of key quality indicators (KQIs) for process optimization and stability enhancement",
        "Implementation of preventive actions based on trend analysis and risk assessment",
      ],
      footer: "Every deviation is an opportunity for systematic improvement",
    },
    {
      title: "Customer Quality Collaboration",
      subtitle: "Partnership-driven quality assurance",
      image: getImageUrl("quality/qc-team.png"),
      items: [
        "Dedicated quality engineers assigned to key accounts for personalized support",
        "Customer-specific quality requirements documented and tracked in our system",
        "Regular quality review meetings and performance reporting",
        "Rapid response protocols for any quality concerns or inquiries",
      ],
      footer: "Your quality standards become our quality standards",
    },
  ],
};

const tabIcons = [GraduationCap, TrendingUp, Users];

export function QualityConsistency() {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = DEFAULTS.tabs[activeTab];
  const Icon = tabIcons[activeTab];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "clamp(40px, 8vw, 80px) 0",
        background: "#000000",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 46px)",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="consistency.sectionTitle" defaultValue={DEFAULTS.sectionTitle} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="consistency.sectionTitleHighlight" defaultValue={DEFAULTS.sectionTitleHighlight} />
            </span>
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <div
          className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2 sm:gap-0 mb-8 sm:mb-12"
        >
          {DEFAULTS.tabs.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-stretch sm:items-center">
              <button
                onClick={() => setActiveTab(index)}
                className="w-full sm:w-auto"
                style={{
                  padding: "12px 16px",
                  background: activeTab === index ? "#D09947" : "transparent",
                  border: activeTab === index ? "1px solid #D09947" : "1px solid #7F4D0F",
                  color: activeTab === index ? "#000000" : "#EEC569",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <EditableText
                  path={`consistency.tabs.${index}.title`}
                  defaultValue={item.title}
                />
              </button>
              {/* Connector line between tabs - hidden on mobile */}
              {index < DEFAULTS.tabs.length - 1 && (
                <div
                  className="hidden sm:block"
                  style={{
                    width: "40px",
                    height: "2px",
                    backgroundColor: "#7F4D0F",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content Area - Two Column Layout */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6"
        >
          {/* Left - Image */}
          <div
            className="relative h-[250px] sm:h-[350px] lg:h-[480px] overflow-hidden"
            style={{
              border: "1px solid #EEC569",
            }}
          >
            <EditableImage
              path={`consistency.tabs.${activeTab}.image`}
              defaultSrc={activeItem.image}
              alt={activeItem.title}
              fill
            />
          </div>

          {/* Right - Content Panel */}
          <div
            style={{
              background: "#34312F",
              border: "1px solid #EEC569",
              padding: "clamp(20px, 4vw, 32px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Icon + Title Row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                marginBottom: "8px",
              }}
            >
              {/* Icon badge */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: "rgba(208,153,71,0.15)",
                  border: "1px solid #D09947",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon style={{ width: "24px", height: "24px", color: "#D09947" }} />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  <EditableText
                    path={`consistency.tabs.${activeTab}.title`}
                    defaultValue={activeItem.title}
                  />
                </h3>
                <p
                  style={{
                    color: "#C5C6C9",
                    fontSize: "15px",
                    margin: "4px 0 0 0",
                  }}
                >
                  <EditableText
                    path={`consistency.tabs.${activeTab}.subtitle`}
                    defaultValue={activeItem.subtitle}
                  />
                </p>
              </div>
            </div>

            {/* Checklist Items */}
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0", flex: 1 }}>
              {activeItem.items.map((listItem, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(208,153,71,0.15)",
                      border: "1px solid #D09947",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <Check
                      style={{
                        width: "12px",
                        height: "12px",
                        color: "#D09947",
                      }}
                    />
                  </div>
                  <span style={{ color: "#C5C6C9", fontSize: "15px", lineHeight: 1.6 }}>
                    <EditableText
                      path={`consistency.tabs.${activeTab}.items.${idx}`}
                      defaultValue={listItem}
                      multiline
                    />
                  </span>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div
              style={{
                paddingTop: "20px",
                borderTop: "1px solid rgba(208,153,71,0.3)",
              }}
            >
              <p style={{ color: "#EEC569", fontSize: "14px", fontStyle: "italic", margin: 0 }}>
                <EditableText
                  path={`consistency.tabs.${activeTab}.footer`}
                  defaultValue={activeItem.footer}
                />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
