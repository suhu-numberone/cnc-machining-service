"use client";

import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: {
    prefix: "A Journey of ",
    highlight: "Continuous Excellence",
  },
  timelineItems: [
    {
      year: "2009",
      description:
        "Established the first self-owned factory in Shenzhen, building the bedrock of our manufacturing capabilities",
      side: "right" as const,
    },
    {
      year: "2014",
      description:
        "Global expansion. Officially launched international trade business, supporting engineers worldwide.",
      side: "left" as const,
    },
    {
      year: "2019",
      description:
        "Launched the RapidDirect online quoting platform, integrating AI into the manufacturing workflow.",
      side: "right" as const,
    },
    {
      year: "2020-2022",
      description:
        "Achieved ISO 9001:2015 and ISO 13485:2016 certifications. The manufacturing network expanded to include exclusive surface treatment lines and medical-grade inspection labs.",
      side: "left" as const,
    },
  ],
  finalYear: "2025",
  bottomCard:
    "ApexBatch Brand Established A dedicated division is born. ApexBatch focuses on high-precision parts and turnkey solutions for mid-to-large volume production, offering a higher level of specialization for elite global industries.",
};

export function AboutJourney() {
  return (
    <section
      className="px-4 sm:px-6 md:px-[10%] lg:px-[20%]"
      style={{
        backgroundColor: "#000000",
        backgroundImage: `url('${getImageUrl("about/journey-bg.png")}')`,
        backgroundSize: "100% auto",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        paddingTop: "clamp(40px, 8vw, 80px)",
        paddingBottom: "clamp(40px, 8vw, 80px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
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
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            margin: "0 0 clamp(30px, 5vw, 50px) 0",
            letterSpacing: "-0.015em",
          }}
        >
          <EditableText path="journey.heading.prefix" defaultValue={DEFAULTS.heading.prefix} />
          <span style={{ color: "#EEC569" }}>
            <EditableText path="journey.heading.highlight" defaultValue={DEFAULTS.heading.highlight} />
          </span>
        </motion.h2>

        {/* Timeline container */}
        <div
          style={{
            position: "relative",
          }}
        >
          {/* Vertical timeline line - left on mobile, center on desktop */}
          <div
            className="left-4 md:left-1/2"
            style={{
              position: "absolute",
              top: "5px",
              bottom: "80px",
              width: "1px",
              backgroundColor: "#5A5A5A",
            }}
          />

          {/* Timeline items */}
          {DEFAULTS.timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.side === "right" ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mb-10"
            >
              {/* Mobile layout (always left-aligned) */}
              <div className="md:hidden flex">
                {/* Dot - on left */}
                <div
                  style={{
                    position: "absolute",
                    left: "16px",
                    top: "5px",
                    width: "9px",
                    height: "9px",
                    backgroundColor: "#EEC569",
                    borderRadius: "50%",
                    transform: "translateX(-50%)",
                    boxShadow:
                      "0 0 12px rgba(238,197,105,0.8), 0 0 24px rgba(238,197,105,0.4)",
                  }}
                />
                {/* Content - to the right of line */}
                <div style={{ paddingLeft: "40px" }}>
                  <div
                    style={{
                      color: "#EEC569",
                      fontSize: "22px",
                      fontWeight: 600,
                      marginBottom: "5px",
                    }}
                  >
                    <EditableText path={`journey.timelineItems.${index}.year`} defaultValue={item.year} />
                  </div>
                  <div
                    style={{
                      color: "#C5C6C9",
                      fontSize: "15px",
                      lineHeight: 1.7,
                    }}
                  >
                    <EditableText path={`journey.timelineItems.${index}.description`} defaultValue={item.description} multiline />
                  </div>
                </div>
              </div>

              {/* Desktop layout (alternating) */}
              <div
                className="hidden md:flex"
                style={{
                  justifyContent:
                    item.side === "left" ? "flex-start" : "flex-end",
                }}
              >
                {/* Dot - centered */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "5px",
                    width: "9px",
                    height: "9px",
                    backgroundColor: "#EEC569",
                    borderRadius: "50%",
                    transform: "translateX(-50%)",
                    boxShadow:
                      "0 0 12px rgba(238,197,105,0.8), 0 0 24px rgba(238,197,105,0.4)",
                  }}
                />

                {/* Content container */}
                <div
                  style={{
                    width: "50%",
                    paddingLeft: item.side === "right" ? "30px" : "0",
                    paddingRight: item.side === "left" ? "30px" : "0",
                    textAlign: item.side === "left" ? "right" : "left",
                  }}
                >
                  <div
                    style={{
                      color: "#EEC569",
                      fontSize: "28px",
                      fontWeight: 600,
                      marginBottom: "5px",
                    }}
                  >
                    <EditableText path={`journey.timelineItems.${index}.year`} defaultValue={item.year} />
                  </div>
                  <div
                    style={{
                      color: "#C5C6C9",
                      fontSize: "15.5px",
                      lineHeight: 1.7,
                    }}
                  >
                    <EditableText path={`journey.timelineItems.${index}.description`} defaultValue={item.description} multiline />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* 2025 - Final year */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              marginBottom: "25px",
            }}
          >
            {/* Dot - left on mobile, center on desktop */}
            <div
              className="left-4 md:left-1/2"
              style={{
                position: "absolute",
                top: "0",
                width: "11px",
                height: "11px",
                backgroundColor: "#EEC569",
                borderRadius: "50%",
                transform: "translateX(-50%)",
                boxShadow:
                  "0 0 15px rgba(238,197,105,0.8), 0 0 30px rgba(238,197,105,0.4)",
              }}
            />

            {/* Mobile: left-aligned, Desktop: centered */}
            <div
              className="pl-10 md:pl-0 md:text-center"
              style={{
                color: "#EEC569",
                fontSize: "clamp(36px, 6vw, 52px)",
                fontWeight: 700,
                marginTop: "25px",
              }}
            >
              <EditableText path="journey.finalYear" defaultValue={DEFAULTS.finalYear} />
            </div>
          </motion.div>
        </div>

        {/* Bottom card - glass effect with warm tint and glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            position: "relative",
            background: `
              radial-gradient(
                60% 50% at 50% 0%,
                rgba(249,235,188,0.05),
                rgba(0,0,0,0) 65%
              ),
              rgba(13, 13, 13, 0.3)
            `,
            border: "2px solid #D09947",
            borderRadius: "18px",
            padding: "clamp(16px, 3vw, 26px) clamp(16px, 4vw, 32px)",
            textAlign: "center",
            marginTop: "25px",
            boxShadow:
              "0 0 50px rgba(208,153,71,0.6), 0 0 100px rgba(208,153,71,0.3)",
          }}
        >
          <p
            style={{
              color: "#F9EBBC",
              fontSize: "clamp(16px, 3vw, 22px)",
              lineHeight: 1.5,
              margin: 0,
              fontWeight: 500,
            }}
          >
            <EditableText path="journey.bottomCard" defaultValue={DEFAULTS.bottomCard} multiline />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
