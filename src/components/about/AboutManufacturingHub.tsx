"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Building2, Settings, BarChart3, Users } from "lucide-react";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  hero: {
    headingHighlight: "Advanced",
    headingText: "Manufacturing Hub",
    paragraph1:
      "Our Shenzhen facility achieves vertical integration from raw material processing to final product delivery, including CNC machining, precision injection molding, sheet metal fabrication, and dedicated surface treatment and quality inspection lines.",
    paragraph2:
      "This integrated approach enables better quality control, shorter lead times, and reduced costs - particularly advantageous for medium-to-large batch production requirements.",
    paragraph3:
      "Each production shop is equipped with industry-leading machinery operated by experienced technicians, ensuring every production phase meets the highest standards. Our facilities comply with international quality management systems and are certified to ISO 9001:2015 and ISO 13485:2016.",
    certifications: ["ISO 9001:2015", "ISO 13485:2016"],
    images: {
      main: getImageUrl("about/5-Advanced-Manufacturing-Hub-1.webp"),
      small1: getImageUrl("about/5-Advanced-Manufacturing-Hub-2.webp"),
      small2: getImageUrl("about/5-Advanced-Manufacturing-Hub-3.webp"),
    },
  },
  facilityOverview: {
    label: "FACILITY OVERVIEW",
    stats: [
      {
        value: "50,000 m²",
        label: "Total Factory Area",
      },
      {
        value: "8",
        label: "Specialized Production Shops",
      },
      {
        value: "300+",
        label: "Advanced Equipment",
      },
      {
        value: "98%",
        label: "On-Time Delivery",
      },
    ],
  },
  equipmentGallery: {
    label: "ADVANCED EQUIPMENT GALLERY",
    items: [
      {
        number: "1",
        title: "CNC Machining Centers",
        description: "High-precision multi-axis CNC machining centers for complex parts",
        image: getImageUrl("about/6-CNC-Machining-Centers.webp"),
      },
      {
        number: "2",
        title: "Injection Molding Machines",
        description: "Advanced injection molding systems for plastic component production",
        image: getImageUrl("about/6-Injection-Molding-Machines.webp"),
      },
      {
        number: "3",
        title: "Laser Cutting Systems",
        description: "State-of-the-art laser cutting technology for precise material processing",
        image: getImageUrl("about/6-Laser-Cutting-Systems.webp"),
      },
      {
        number: "4",
        title: "Material Testing Laboratory",
        description: "Comprehensive material analysis and quality testing facilities",
        image: getImageUrl("about/6-Material-Testing-Laboratory.webp"),
      },
      {
        number: "5",
        title: "Surface Treatment Line",
        description: "Complete anodizing, plating, and powder coating capabilities",
        image: getImageUrl("about/6-Surface-Treatment-Line.webp"),
      },
      {
        number: "6",
        title: "Sheet Metal Fabrication",
        description: "Precision bending, welding, and forming equipment",
        image: getImageUrl("about/6-Sheet-Metal-Fabrication.webp"),
      },
      {
        number: "7",
        title: "Quality Control Lab",
        description: "CMM machines and optical inspection systems",
        image: getImageUrl("about/6-Quality-Control-Lab.webp"),
      },
      {
        number: "8",
        title: "Assembly Workshop",
        description: "Clean room assembly and packaging facilities",
        image: getImageUrl("about/6-Assembly-Workshop.webp"),
      },
    ],
  },
};

const STAT_ICONS = [Building2, Settings, BarChart3, Users];
const ITEMS_PER_PAGE = 4;

export function AboutManufacturingHub() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(DEFAULTS.equipmentGallery.items.length / ITEMS_PER_PAGE);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Get visible items for current page
  const visibleItems = DEFAULTS.equipmentGallery.items.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section
      className="px-4 sm:px-6 md:px-10"
      style={{
        background: `
          radial-gradient(
            70% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
        paddingTop: "clamp(40px, 8vw, 80px)",
        paddingBottom: "clamp(40px, 8vw, 80px)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* SECTION 1: Hero Area */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{
            gap: "clamp(24px, 4vw, 40px)",
            marginBottom: "clamp(40px, 8vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              paddingLeft: "24px",
            }}
          >
            {/* Gold vertical line */}
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                width: "3px",
                height: "140px",
                backgroundColor: "#D09947",
              }}
            />

            {/* Heading */}
            <h2
              style={{
                margin: "0 0 clamp(20px, 3vw, 30px) 0",
                letterSpacing: "-0.015em",
                lineHeight: 1.05,
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#EEC569",
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 700,
                }}
              >
                <EditableText path="manufacturingHub.hero.headingHighlight" defaultValue={DEFAULTS.hero.headingHighlight} />
              </span>
              <span
                className="text-white"
                style={{
                  display: "block",
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 700,
                }}
              >
                <EditableText path="manufacturingHub.hero.headingText" defaultValue={DEFAULTS.hero.headingText} />
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15.5px",
                lineHeight: 1.7,
                margin: "0 0 16px 0",
              }}
            >
              <EditableText path="manufacturingHub.hero.paragraph1" defaultValue={DEFAULTS.hero.paragraph1} multiline />
            </p>

            {/* Paragraph 2 */}
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15.5px",
                lineHeight: 1.7,
                margin: "0 0 16px 0",
              }}
            >
              <EditableText path="manufacturingHub.hero.paragraph2" defaultValue={DEFAULTS.hero.paragraph2} multiline />
            </p>

            {/* Paragraph 3 */}
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15.5px",
                lineHeight: 1.7,
                margin: "0 0 24px 0",
              }}
            >
              <EditableText path="manufacturingHub.hero.paragraph3" defaultValue={DEFAULTS.hero.paragraph3} multiline />
            </p>

            {/* ISO Certification Buttons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {DEFAULTS.hero.certifications.map((cert, index) => (
                <button
                  key={index}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(208,153,71,0.4)",
                    borderRadius: "4px",
                    padding: "8px 16px",
                    color: "#D09947",
                    fontSize: "12px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  <EditableText path={`manufacturingHub.hero.certifications.${index}`} defaultValue={cert} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Large image */}
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <EditableImage
                path="manufacturingHub.hero.images.main"
                defaultSrc={DEFAULTS.hero.images.main}
                alt="Manufacturing facility"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Two smaller images */}
            <div style={{ display: "flex", gap: "16px" }}>
              <div
                style={{
                  flex: 1,
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <EditableImage
                  path="manufacturingHub.hero.images.small1"
                  defaultSrc={DEFAULTS.hero.images.small1}
                  alt="Industrial equipment"
                  style={{
                    width: "100%",
                    height: "140px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  flex: 1,
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <EditableImage
                  path="manufacturingHub.hero.images.small2"
                  defaultSrc={DEFAULTS.hero.images.small2}
                  alt="Precision machinery"
                  style={{
                    width: "100%",
                    height: "140px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION 2: Facility Overview */}
        <div style={{ marginBottom: "clamp(40px, 8vw, 80px)" }}>
          {/* Section Header with lines */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "rgba(208,153,71,0.3)",
              }}
            />
            <span
              style={{
                color: "#D09947",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              <EditableText path="manufacturingHub.facilityOverview.label" defaultValue={DEFAULTS.facilityOverview.label} />
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "rgba(208,153,71,0.3)",
              }}
            />
          </div>

          {/* Stats Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{
              gap: "clamp(12px, 2vw, 20px)",
            }}
          >
            {DEFAULTS.facilityOverview.stats.map((stat, index) => {
              const Icon = STAT_ICONS[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
                    border: "1px solid rgba(208,153,71,0.25)",
                    borderRadius: "18px",
                    padding: "24px",
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
                  {/* Icon */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid rgba(208,153,71,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Icon
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#D09947",
                      }}
                    />
                  </div>

                  {/* Value */}
                  <div
                    style={{
                      fontSize: "clamp(32px, 5vw, 48px)",
                      fontWeight: 700,
                      lineHeight: 1,
                      marginBottom: "8px",
                      color: "#D09947",
                    }}
                  >
                    <EditableText path={`manufacturingHub.facilityOverview.stats.${index}.value`} defaultValue={stat.value} />
                  </div>

                  {/* Label */}
                  <p
                    style={{
                      color: "#C5C6C9",
                      fontSize: "15.5px",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    <EditableText path={`manufacturingHub.facilityOverview.stats.${index}.label`} defaultValue={stat.label} />
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: Advanced Equipment Gallery */}
        <div>
          {/* Section Header with lines */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "rgba(208,153,71,0.3)",
              }}
            />
            <span
              style={{
                color: "#D09947",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              <EditableText path="manufacturingHub.equipmentGallery.label" defaultValue={DEFAULTS.equipmentGallery.label} />
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "rgba(208,153,71,0.3)",
              }}
            />
          </div>

          {/* Gallery with navigation */}
          <div style={{ position: "relative" }}>
            {/* Left Arrow - hidden on mobile */}
            <button
              onClick={prevSlide}
              className="hidden md:flex"
              style={{
                position: "absolute",
                left: "-24px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#1A1A1A",
                border: "1px solid rgba(208,153,71,0.4)",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <ChevronLeft style={{ width: "24px", height: "24px", color: "#D09947" }} />
            </button>

            {/* Right Arrow - hidden on mobile */}
            <button
              onClick={nextSlide}
              className="hidden md:flex"
              style={{
                position: "absolute",
                right: "-24px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#1A1A1A",
                border: "1px solid rgba(208,153,71,0.4)",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <ChevronRight style={{ width: "24px", height: "24px", color: "#D09947" }} />
            </button>

            {/* Gallery Grid with sliding animation */}
            <div
              style={{
                overflow: "hidden",
              }}
            >
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                style={{
                  gap: "16px",
                }}
              >
                {visibleItems.map((item, index) => {
                  const actualIndex = currentPage * ITEMS_PER_PAGE + index;
                  return (
                    <div
                      key={item.number}
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
                        border: "1px solid rgba(208,153,71,0.25)",
                        borderRadius: "18px",
                        overflow: "hidden",
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
                      {/* Image with number badge */}
                      <div style={{ position: "relative" }}>
                        <EditableImage
                          path={`manufacturingHub.equipmentGallery.items.${actualIndex}.image`}
                          defaultSrc={item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                        {/* Number badge */}
                        <span
                          style={{
                            position: "absolute",
                            top: "12px",
                            left: "12px",
                            background: "rgba(208,153,71,0.8)",
                            borderRadius: "4px",
                            padding: "4px 10px",
                            color: "#FFFFFF",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          <EditableText path={`manufacturingHub.equipmentGallery.items.${actualIndex}.number`} defaultValue={item.number} />
                        </span>
                      </div>

                      {/* Divider */}
                      <div
                        style={{
                          height: "1px",
                          backgroundColor: "rgba(208,153,71,0.3)",
                        }}
                      />

                      {/* Text content */}
                      <div style={{ padding: "16px" }}>
                        <h4
                          style={{
                            color: "#EEC569",
                            fontSize: "16px",
                            fontWeight: 700,
                            margin: "0 0 8px 0",
                          }}
                        >
                          <EditableText path={`manufacturingHub.equipmentGallery.items.${actualIndex}.title`} defaultValue={item.title} />
                        </h4>
                        <p
                          style={{
                            color: "#C5C6C9",
                            fontSize: "15.5px",
                            lineHeight: 1.7,
                            margin: 0,
                          }}
                        >
                          <EditableText path={`manufacturingHub.equipmentGallery.items.${actualIndex}.description`} defaultValue={item.description} multiline />
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Carousel Dots - one per page */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "32px",
            }}
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                style={{
                  width: index === currentPage ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: index === currentPage ? "#D09947" : "#333333",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
