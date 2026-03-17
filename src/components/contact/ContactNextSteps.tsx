"use client";

import { EditableText } from "@/components/cms";

const DEFAULTS = {
  pillLabel: "NEXT STEPS",
  headingPrefix: "What Happens ",
  headingHighlight: "Next?",
  subheading:
    "Our streamlined process ensures you get the attention and results you deserve",
  // Card 1
  card1Title: "Quick Response",
  card1Description:
    "We review your inquiry and respond within 24 hours with initial feedback and next steps.",
  card1Time: "Within 24 hours",
  // Card 2
  card2Title: "Consultation Call",
  card2Description:
    "Schedule a detailed consultation with our experts to discuss your requirements and project scope.",
  card2Time: "2-3 business days",
  // Card 3
  card3Title: "Project Launch",
  card3Description:
    "Receive a customized proposal and timeline. Once approved, we kick off your project immediately.",
  card3Time: "1 week",
  // Bottom CTA
  ctaHeading:
    "Ready to get started? Fill out the form above and let's begin your journey to success.",
  ctaSubtext: "Our team is standing by to help bring your vision to life.",
};

export function ContactNextSteps() {
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
        padding: "clamp(40px, 8vw, 80px) 0 clamp(60px, 10vw, 100px) 0",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 40px)",
          overflowX: "hidden",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 24px",
              border: "1px solid #7F4D0F",
              backgroundColor: "transparent",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#D09947",
              }}
            />
            <span
              style={{
                color: "#EEC569",
                fontSize: "12px",
                fontWeight: "500",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              <EditableText
                path="nextSteps.pillLabel"
                defaultValue={DEFAULTS.pillLabel}
              />
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h2
          className="text-white"
          style={{
            textAlign: "center",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            margin: "0 0 16px 0",
            letterSpacing: "-0.015em",
          }}
        >
          <EditableText
            path="nextSteps.headingPrefix"
            defaultValue={DEFAULTS.headingPrefix}
          />
          <span style={{ color: "#EEC569" }}>
            <EditableText
              path="nextSteps.headingHighlight"
              defaultValue={DEFAULTS.headingHighlight}
            />
          </span>
        </h2>

        {/* Subheading */}
        <p
          style={{
            textAlign: "center",
            color: "#EEC569",
            fontSize: "clamp(16px, 2.5vw, 18px)",
            margin: "0 0 clamp(40px, 6vw, 60px) 0",
            fontWeight: 400,
          }}
        >
          <EditableText
            path="nextSteps.subheading"
            defaultValue={DEFAULTS.subheading}
            multiline
          />
        </p>

        {/* Cards container */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: "clamp(16px, 3vw, 24px)",
            position: "relative",
          }}
        >
          {/* Card 1 */}
          <div
            className="transition-all duration-300 hover:-translate-y-1"
            style={{
              background: `
                radial-gradient(
                  60% 50% at 50% 0%,
                  rgba(249,235,188,0.08),
                  rgba(0,0,0,0) 65%
                ),
                #0D0D0D
              `,
              border: "1px solid #EEC569",
              borderRadius: "0",
              padding: "32px 28px 28px 28px",
              position: "relative",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.border = "2px solid #D09947";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.border = "1px solid #EEC569";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Number badge - SQUARE */}
            <div
              style={{
                position: "absolute",
                top: "-1px",
                right: "-1px",
                width: "52px",
                height: "52px",
                backgroundColor: "#D09947",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                01
              </span>
            </div>

            {/* Connector line from card - hidden on mobile */}
            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                top: "50%",
                right: "-24px",
                width: "24px",
                height: "2px",
                backgroundColor: "#D09947",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#D09947",
                }}
              />
            </div>

            {/* Icon container */}
            <div
              style={{
                width: "64px",
                height: "64px",
                border: "1px solid #D09947",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D09947"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>

            {/* Title */}
            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "22px",
                fontWeight: 700,
                margin: "0 0 16px 0",
              }}
            >
              <EditableText
                path="nextSteps.card1Title"
                defaultValue={DEFAULTS.card1Title}
              />
            </h3>

            {/* Description */}
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15px",
                lineHeight: 1.6,
                margin: "0 0 24px 0",
              }}
            >
              <EditableText
                path="nextSteps.card1Description"
                defaultValue={DEFAULTS.card1Description}
                multiline
              />
            </p>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                backgroundColor: "#7F4D0F",
                margin: "0 0 20px 0",
              }}
            />

            {/* Time indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D09947"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <span
                style={{
                  color: "#D09947",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                <EditableText
                  path="nextSteps.card1Time"
                  defaultValue={DEFAULTS.card1Time}
                />
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="transition-all duration-300 hover:-translate-y-1"
            style={{
              background: `
                radial-gradient(
                  60% 50% at 50% 0%,
                  rgba(249,235,188,0.08),
                  rgba(0,0,0,0) 65%
                ),
                #0D0D0D
              `,
              border: "1px solid #EEC569",
              borderRadius: "0",
              padding: "32px 28px 28px 28px",
              position: "relative",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.border = "2px solid #D09947";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.border = "1px solid #EEC569";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Number badge - SQUARE */}
            <div
              style={{
                position: "absolute",
                top: "-1px",
                right: "-1px",
                width: "52px",
                height: "52px",
                backgroundColor: "#D09947",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                02
              </span>
            </div>

            {/* Connector line from card - hidden on mobile */}
            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                top: "50%",
                right: "-24px",
                width: "24px",
                height: "2px",
                backgroundColor: "#D09947",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#D09947",
                }}
              />
            </div>

            {/* Icon container */}
            <div
              style={{
                width: "64px",
                height: "64px",
                border: "1px solid #D09947",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D09947"
                strokeWidth="1.5"
              >
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0-3-3.85" />
              </svg>
            </div>

            {/* Title */}
            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "22px",
                fontWeight: 700,
                margin: "0 0 16px 0",
              }}
            >
              <EditableText
                path="nextSteps.card2Title"
                defaultValue={DEFAULTS.card2Title}
              />
            </h3>

            {/* Description */}
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15px",
                lineHeight: 1.6,
                margin: "0 0 24px 0",
              }}
            >
              <EditableText
                path="nextSteps.card2Description"
                defaultValue={DEFAULTS.card2Description}
                multiline
              />
            </p>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                backgroundColor: "#7F4D0F",
                margin: "0 0 20px 0",
              }}
            />

            {/* Time indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D09947"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <span
                style={{
                  color: "#D09947",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                <EditableText
                  path="nextSteps.card2Time"
                  defaultValue={DEFAULTS.card2Time}
                />
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="transition-all duration-300 hover:-translate-y-1"
            style={{
              background: `
                radial-gradient(
                  60% 50% at 50% 0%,
                  rgba(249,235,188,0.08),
                  rgba(0,0,0,0) 65%
                ),
                #0D0D0D
              `,
              border: "1px solid #EEC569",
              borderRadius: "0",
              padding: "32px 28px 28px 28px",
              position: "relative",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.border = "2px solid #D09947";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.border = "1px solid #EEC569";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Number badge - SQUARE */}
            <div
              style={{
                position: "absolute",
                top: "-1px",
                right: "-1px",
                width: "52px",
                height: "52px",
                backgroundColor: "#D09947",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                03
              </span>
            </div>

            {/* Icon container */}
            <div
              style={{
                width: "64px",
                height: "64px",
                border: "1px solid #D09947",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D09947"
                strokeWidth="1.5"
              >
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
                <path d="M5 19h14" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </div>

            {/* Title */}
            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "22px",
                fontWeight: 700,
                margin: "0 0 16px 0",
              }}
            >
              <EditableText
                path="nextSteps.card3Title"
                defaultValue={DEFAULTS.card3Title}
              />
            </h3>

            {/* Description */}
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15px",
                lineHeight: 1.6,
                margin: "0 0 24px 0",
              }}
            >
              <EditableText
                path="nextSteps.card3Description"
                defaultValue={DEFAULTS.card3Description}
                multiline
              />
            </p>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                backgroundColor: "#7F4D0F",
                margin: "0 0 20px 0",
              }}
            />

            {/* Time indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D09947"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <span
                style={{
                  color: "#D09947",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                <EditableText
                  path="nextSteps.card3Time"
                  defaultValue={DEFAULTS.card3Time}
                />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA box */}
        <div
          className="transition-all duration-300 hover:-translate-y-1"
          style={{
            marginTop: "60px",
            background: `
              radial-gradient(
                60% 50% at 50% 0%,
                rgba(249,235,188,0.08),
                rgba(0,0,0,0) 65%
              ),
              #0D0D0D
            `,
            border: "1px solid #EEC569",
            borderRadius: "0",
            padding: "clamp(24px, 4vw, 40px)",
            textAlign: "center",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.border = "2px solid #D09947";
            e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.border = "1px solid #EEC569";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <p
            style={{
              color: "#F9EBBC",
              fontSize: "21px",
              lineHeight: 1.6,
              margin: "0 0 12px 0",
              fontWeight: 500,
            }}
          >
            <EditableText
              path="nextSteps.ctaHeading"
              defaultValue={DEFAULTS.ctaHeading}
              multiline
            />
          </p>
          <p
            style={{
              color: "#C5C6C9",
              fontSize: "15px",
              margin: "0",
              fontWeight: 400,
            }}
          >
            <EditableText
              path="nextSteps.ctaSubtext"
              defaultValue={DEFAULTS.ctaSubtext}
              multiline
            />
          </p>
        </div>
      </div>
    </section>
  );
}
