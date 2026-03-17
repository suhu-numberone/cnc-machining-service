"use client";

import { motion } from "framer-motion";
import { Settings, TrendingUp, Zap, Users } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  clients: {
    heading: {
      prefix: "Our ",
      highlight: "Clients",
    },
    subheading: "Trusted by global industry leaders",
    logos: [
      { name: "EMERSON", logo: "EMERSON", color: "#4A90D9", textColor: "#FFFFFF" },
      { name: "Stryker", logo: "stryker", color: "transparent", textColor: "#CCCCCC" },
      { name: "Tesla", logo: "TESLA", color: "transparent", textColor: "#CCCCCC", hasIcon: true },
      { name: "Ford", logo: "Ford", color: "transparent", textColor: "#FFFFFF", hasFordLogo: true },
      { name: "Toyota", logo: "TOYOTA", color: "transparent", textColor: "#EB0A1E", hasToyotaLogo: true },
      { name: "Canon", logo: "Canon", color: "transparent", textColor: "#BC0024" },
      { name: "Nikon", logo: "Nikon", color: "transparent", textColor: "#FFD700" },
      { name: "ABB", logo: "ABB", color: "transparent", textColor: "#FF000D" },
    ],
  },
  advantages: {
    heading: {
      prefix: "Our ",
      highlight: "Advantages",
    },
    subheading: "Why leading global companies choose ApexBatch for their manufacturing needs",
    items: [
      {
        number: "01",
        title: "Free Technical\nServices",
        description: "DFM analysis, process selection, material testing, design optimization, and VR remote review at no additional cost.",
      },
      {
        number: "02",
        title: "End-to-End Service",
        description: "From design to batch production with visual quotation and order management systems for real-time progress tracking.",
      },
      {
        number: "03",
        title: "Fast Response\n& Delivery",
        description: "30-60 min response time, 1-2 hour quotations, and 1-3 day lead times with uncompromised precision.",
      },
      {
        number: "04",
        title: "Expert Team Support",
        description: "Dedicated sales and engineering teams providing customized risk analysis and optimization recommendations.",
      },
    ],
  },
};

const ADVANTAGE_ICONS = [Settings, TrendingUp, Zap, Users];

function CornerBrackets({ color = "rgba(255,255,255,0.15)" }: { color?: string }) {
  return (
    <>
      {/* Top-left */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          width: "20px",
          height: "20px",
          borderTop: `2px solid ${color}`,
          borderLeft: `2px solid ${color}`,
        }}
      />
      {/* Top-right */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          width: "20px",
          height: "20px",
          borderTop: `2px solid ${color}`,
          borderRight: `2px solid ${color}`,
        }}
      />
      {/* Bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "12px",
          width: "20px",
          height: "20px",
          borderBottom: `2px solid ${color}`,
          borderLeft: `2px solid ${color}`,
        }}
      />
      {/* Bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          right: "12px",
          width: "20px",
          height: "20px",
          borderBottom: `2px solid ${color}`,
          borderRight: `2px solid ${color}`,
        }}
      />
    </>
  );
}

export function AboutClientsAdvantages() {
  return (
    <>
      {/* Our Clients Section */}
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
          padding: "clamp(40px, 8vw, 80px) clamp(16px, 4vw, 40px) clamp(40px, 6vw, 60px)",
          position: "relative",
        }}
      >

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                margin: "0 0 16px 0",
                letterSpacing: "-0.015em",
              }}
            >
              <EditableText path="clientsAdvantages.clients.heading.prefix" defaultValue={DEFAULTS.clients.heading.prefix} />
              <span style={{ color: "#EEC569" }}>
                <EditableText path="clientsAdvantages.clients.heading.highlight" defaultValue={DEFAULTS.clients.heading.highlight} />
              </span>
            </h2>
            <p
              style={{
                color: "#7A7A7C",
                fontSize: "18px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <EditableText path="clientsAdvantages.clients.subheading" defaultValue={DEFAULTS.clients.subheading} />
            </p>
          </motion.div>

          {/* Logo Grid - responsive */}
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{
              gap: "clamp(12px, 2vw, 22px)",
            }}
          >
            {DEFAULTS.clients.logos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="client-logo-card"
                style={{
                  position: "relative",
                  background: "#1C1917",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #C4944A 0%, #8B6914 100%)";
                  e.currentTarget.style.border = "2px solid #D09947";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#1C1917";
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <CornerBrackets color="rgba(255,255,255,0.15)" />

                {/* Logo content */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  {/* Special handling for different logos */}
                  {client.name === "EMERSON" && (
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          margin: "0 auto 8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg viewBox="0 0 40 40" width="40" height="40">
                          <path
                            d="M20 5 L35 15 L35 25 L20 35 L5 25 L5 15 Z"
                            fill="none"
                            stroke="#4A90D9"
                            strokeWidth="2"
                          />
                          <path
                            d="M20 10 L30 17 L30 23 L20 30 L10 23 L10 17 Z"
                            fill="#4A90D9"
                            opacity="0.5"
                          />
                        </svg>
                      </div>
                      <span
                        style={{
                          color: "#FFFFFF",
                          fontSize: "18px",
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                        }}
                      >
                        EMERSON
                      </span>
                    </div>
                  )}

                  {client.name === "Stryker" && (
                    <span
                      style={{
                        color: "#CCCCCC",
                        fontSize: "28px",
                        fontWeight: 300,
                        letterSpacing: "0.02em",
                      }}
                    >
                      stryker
                    </span>
                  )}

                  {client.name === "Tesla" && (
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "48px",
                          color: "#CCCCCC",
                          lineHeight: 1,
                          marginBottom: "4px",
                        }}
                      >
                        ⊤
                      </div>
                      <span
                        style={{
                          color: "#CCCCCC",
                          fontSize: "12px",
                          letterSpacing: "0.3em",
                        }}
                      >
                        TESLA
                      </span>
                    </div>
                  )}

                  {client.name === "Ford" && (
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          width: "80px",
                          height: "32px",
                          background: "#1E3A8A",
                          borderRadius: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <span
                          style={{
                            color: "#FFFFFF",
                            fontSize: "16px",
                            fontStyle: "italic",
                            fontFamily: "serif",
                          }}
                        >
                          Ford
                        </span>
                      </div>
                      <span
                        style={{
                          color: "#FFFFFF",
                          fontSize: "11px",
                          letterSpacing: "0.25em",
                        }}
                      >
                        FORD
                      </span>
                    </div>
                  )}

                  {client.name === "Toyota" && (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg viewBox="0 0 36 24" width="36" height="24">
                          <ellipse cx="18" cy="12" rx="16" ry="10" fill="none" stroke="#EB0A1E" strokeWidth="2" />
                          <ellipse cx="18" cy="12" rx="8" ry="5" fill="none" stroke="#EB0A1E" strokeWidth="2" />
                        </svg>
                      </div>
                      <span
                        style={{
                          color: "#EB0A1E",
                          fontSize: "20px",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                        }}
                      >
                        TOYOTA
                      </span>
                    </div>
                  )}

                  {client.name === "Canon" && (
                    <span
                      style={{
                        color: "#BC0024",
                        fontSize: "32px",
                        fontWeight: 700,
                        fontFamily: "serif",
                      }}
                    >
                      Canon
                    </span>
                  )}

                  {client.name === "Nikon" && (
                    <span
                      style={{
                        color: "#FFD700",
                        fontSize: "32px",
                        fontWeight: 700,
                        fontStyle: "italic",
                      }}
                    >
                      Nikon
                    </span>
                  )}

                  {client.name === "ABB" && (
                    <span
                      style={{
                        color: "#FF000D",
                        fontSize: "48px",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                      }}
                    >
                      ABB
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
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
              marginBottom: "56px",
            }}
          >
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                margin: "0 0 16px 0",
                letterSpacing: "-0.015em",
              }}
            >
              <EditableText path="clientsAdvantages.advantages.heading.prefix" defaultValue={DEFAULTS.advantages.heading.prefix} />
              <span style={{ color: "#EEC569" }}>
                <EditableText path="clientsAdvantages.advantages.heading.highlight" defaultValue={DEFAULTS.advantages.heading.highlight} />
              </span>
            </h2>
            <p
              style={{
                color: "#7A7A7C",
                fontSize: "18px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <EditableText path="clientsAdvantages.advantages.subheading" defaultValue={DEFAULTS.advantages.subheading} multiline />
            </p>
          </motion.div>

          {/* Advantages Grid - responsive */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{
              gap: "clamp(16px, 2vw, 22px)",
            }}
          >
            {DEFAULTS.advantages.items.map((advantage, index) => {
              const Icon = ADVANTAGE_ICONS[index];
              return (
                <motion.div
                  key={advantage.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="transition-all duration-300 hover:-translate-y-1"
                  style={{
                    position: "relative",
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
                    padding: "24px",
                    overflow: "hidden",
                    minHeight: "280px",
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
                  {/* Top-left corner bracket */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      width: "20px",
                      height: "20px",
                      borderTop: "2px solid rgba(208,153,71,0.3)",
                      borderLeft: "2px solid rgba(208,153,71,0.3)",
                    }}
                  />

                  {/* Top-right corner dashes */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "2px",
                        background: "rgba(208,153,71,0.5)",
                      }}
                    />
                    <div
                      style={{
                        width: "16px",
                        height: "2px",
                        background: "rgba(208,153,71,0.5)",
                      }}
                    />
                  </div>

                  {/* Large background number */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      right: "10px",
                      fontSize: "90px",
                      fontWeight: 700,
                      color: "rgba(208,153,71,0.12)",
                      lineHeight: 1,
                      pointerEvents: "none",
                    }}
                  >
                    <EditableText path={`clientsAdvantages.advantages.items.${index}.number`} defaultValue={advantage.number} />
                  </span>

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 1 }}>
                    {/* Icon container */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "rgba(208,153,71,0.1)",
                        border: "1px solid rgba(208,153,71,0.3)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <Icon
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "#D09947",
                        }}
                      />
                    </div>

                    {/* Title */}
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
                      <EditableText path={`clientsAdvantages.advantages.items.${index}.title`} defaultValue={advantage.title} multiline />
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: "#C5C6C9",
                        fontSize: "15.5px",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      <EditableText path={`clientsAdvantages.advantages.items.${index}.description`} defaultValue={advantage.description} multiline />
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
