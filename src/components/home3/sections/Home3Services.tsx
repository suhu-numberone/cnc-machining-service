"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getImageUrl } from "@/lib/utils";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  titleWhite: "Our ",
  titleHighlight: "Services",
  subtitle: "Everything You Need to Move from Design to Production",
  ctaText: "Need a custom solution?",
  ctaButton: "Get Instant Quote",
  services: [
    {
      title: "CNC Machining",
      description: "Precision machining for complex geometries and tight tolerances.",
      image: getImageUrl("home/3-our-services-cnc-machining.webp"),
      tags: ["3/4/5-Axis Machining", "Tight Tolerances", "Material Variety"],
      href: "/cnc-machining",
    },
    {
      title: "Sheet Metal",
      description: "Custom sheet metal fabrication for enclosures and structures.",
      image: getImageUrl("home/3-our-services-sheet-metal.webp"),
      tags: ["Laser Cutting", "CNC Bending", "Welding & Assembly"],
    },
    {
      title: "Injection Molding",
      description: "Optimized for low to medium volume plastic parts production.",
      image: getImageUrl("home/3-our-services-injection-molding.webp"),
      tags: ["Rapid Prototyping", "High Volume", "Multi-Cavity Molds"],
      href: "/injection-molding",
    },
    {
      title: "Extrusion",
      description: "Custom profile extrusion in plastic and metal.",
      image: getImageUrl("home/3-our-services-extrusion.webp"),
      tags: ["Custom Profiles", "Aluminum & Plastic", "Long Lengths"],
    },
    {
      title: "Die Casting",
      description: "High-quality aluminum and zinc die casting.",
      image: getImageUrl("home/3-our-services-die-casting.webp"),
      tags: ["Aluminum & Zinc", "High Productivity", "Thin Walls"],
    },
    {
      title: "Surface Finishing",
      description: "Professional surface treatment for enhanced durability.",
      image: getImageUrl("home/3-our-services-surface-finishing.webp"),
      tags: ["Anodizing", "Powder Coating", "Electroplating"],
    },
  ],
};

export function Home3Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{
        padding: "76px 0 112px",
        background: "#34312F",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
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
              path="services.titleWhite"
              defaultValue={DEFAULTS.titleWhite}
            />
            <span style={{ color: "#EEC569" }}>
              <EditableText
                path="services.titleHighlight"
                defaultValue={DEFAULTS.titleHighlight}
              />
            </span>
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              maxWidth: "760px",
              marginTop: "18px",
            }}
          >
            <EditableText
              path="services.subtitle"
              defaultValue={DEFAULTS.subtitle}
            />
          </p>
        </motion.div>

        {/* Services Grid - 3x2 */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: "32px",
            marginTop: "72px",
          }}
        >
          {DEFAULTS.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: `
                  radial-gradient(
                    60% 50% at 50% 0%,
                    rgba(249,235,188,0.08),
                    rgba(0,0,0,0) 65%
                  ),
                  #0D0D0D
                `,
                borderRadius: "18px",
                border: "2px solid rgba(208,153,71,0.35)",
                boxShadow: "0 14px 36px rgba(0,0,0,0.45)",
                overflow: "hidden",
                minHeight: "440px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "3px solid #D09947";
                e.currentTarget.style.boxShadow = "0 0 50px rgba(208,153,71,0.7), 0 14px 36px rgba(0,0,0,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid rgba(208,153,71,0.35)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.45)";
              }}
            >
              {/* Image with fade overlay */}
              <div className="relative overflow-hidden" style={{ height: "190px" }}>
                <EditableImage
                  path={`services.items.${index}.image`}
                  defaultSrc={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                {/* Bottom fade overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                {/* Title */}
                <h3
                  style={{
                    fontSize: "21px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginTop: "4px",
                  }}
                >
                  <EditableText
                    path={`services.items.${index}.title`}
                    defaultValue={service.title}
                  />
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "#C5C6C9",
                    marginTop: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <EditableText
                    path={`services.items.${index}.description`}
                    defaultValue={service.description}
                    multiline
                  />
                </p>

                {/* Capability Pills - outline style */}
                <div className="flex flex-wrap gap-2" style={{ marginBottom: "20px" }}>
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{
                        border: "1px solid rgba(238,197,105,0.5)",
                        color: "#F5D89A",
                        background: "transparent",
                        fontSize: "13px",
                        padding: "6px 10px",
                        borderRadius: "999px",
                      }}
                    >
                      <EditableText
                        path={`services.items.${index}.tags.${tagIndex}`}
                        defaultValue={tag}
                      />
                    </span>
                  ))}
                </div>

                {/* Learn More Link - subtle */}
                {service.href ? (
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F5D89A]"
                    style={{
                      marginTop: "4px",
                      fontWeight: 500,
                      color: "#EEC569",
                      fontSize: "14px",
                    }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F5D89A]"
                    style={{
                      marginTop: "4px",
                      fontWeight: 500,
                      color: "#EEC569",
                      fontSize: "14px",
                    }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginTop: "64px" }}
        >
          <p
            style={{
              color: "#7A7A7C",
              fontSize: "15px",
              marginBottom: "16px",
            }}
          >
            <EditableText
              path="services.ctaText"
              defaultValue={DEFAULTS.ctaText}
            />
          </p>
          <Link
            href="https://app.apexbatch.com/"
            rel="nofollow"
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
          >
            <EditableText
              path="services.ctaButton"
              defaultValue={DEFAULTS.ctaButton}
            />
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
