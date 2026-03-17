"use client";

import { useState } from "react";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReviewCard } from "./ReviewCard";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  sectionTitlePrefix: "Client ",
  sectionTitleHighlight: "Feedback",
  sectionTitleSuffix: " & Project Reviews",
  showMoreButton: "Show all comments",
  reviews: [
    {
      name: "Michael Jorgensen",
      initials: "MJ",
      location: "Stuttgart, Germany",
      countryCode: "DE",
      rating: 5,
      projectType: "CNC Machining Project",
      date: "Feb 2024",
      quote:
        "This project involved more than 500 titanium aerospace parts with tight tolerances and complex internal features. Some of the thin-wall areas were challenging, but the 5-axis machining capability handled them without issues. The engineering team shared useful DFM suggestions early in the process, which helped reduce machining time and lower overall part cost. Communication was consistent, and delivery stayed on schedule. The inspection reports were thorough and included full CMM data for all critical dimensions. After this project, we placed two more orders for other programs.",
      tags: ["Aerospace", "5-Axis CNC", "Titanium", "High Precision"],
      productImage: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
    },
    {
      name: "Sarah Reynolds",
      initials: "SR",
      location: "Detroit, USA",
      countryCode: "US",
      rating: 5,
      projectType: "Injection Molding",
      date: "Dec 2023",
      quote:
        "Our automotive sensor housing required a multi-cavity mold with very tight tolerances. The mold was delivered earlier than expected, and the team also recommended a material adjustment to improve chemical resistance. It has now run over 500,000 cycles with minimal maintenance. Quality has remained stable across production batches, with a defect rate below 0.1%. Pricing was transparent, with a clear breakdown between tooling and part costs, which we appreciated.",
      tags: ["Automotive", "Injection Molding", "PEEK Material", "High Volume"],
      productImage: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-machine-overview-1.webp",
    },
    {
      name: "Kenji Tanaka",
      initials: "KT",
      location: "Toronto, Canada",
      countryCode: "CA",
      rating: 5,
      projectType: "Sheet Metal Assembly",
      date: "Jan 2024",
      quote:
        "More than 2,000 sheet metal enclosures were produced for our industrial control system, including powder coating and silkscreen printing. The scope covered everything from prototyping to final assembly. Surface finish quality was clean, with no visible coating defects, and all mounting holes aligned correctly during assembly. There was a small shipping delay, but updates were provided daily. The consistent quality led us to place a follow-up order with minor design changes.",
      tags: ["Industrial", "Sheet Metal", "Powder Coating", "Assembly"],
      productImage: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-production-workshop-2.webp",
    },
    {
      name: "Alexei Ivanov",
      initials: "AI",
      location: "Tokyo, Japan",
      countryCode: "JP",
      rating: 5,
      projectType: "Medical Device Components",
      date: "Nov 2023",
      quote:
        "Compliance and traceability are critical requirements for our medical device projects. Full material certifications, first article inspection reports, and ISO 13485-aligned documentation were provided. Parts arrived with clean packaging, and all documentation met our FDA audit expectations. Internal validation testing passed without nonconformities. Although lead times were longer than standard commercial projects, this was clearly communicated in advance and aligned with regulatory requirements.",
      tags: ["Medical", "ISO 13485", "FDA Compliant", "Traceability"],
      productImage: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-factory-3.webp",
    },
    {
      name: "Emma Johnson",
      initials: "EJ",
      location: "Chicago, USA",
      countryCode: "US",
      rating: 5,
      projectType: "Robotics Components",
      date: "Mar 2024",
      quote:
        "For a collaborative robot arm, we needed anodized aluminum structural parts along with precision press-fit bearings. An interference issue in our CAD files was identified early, which would have caused assembly problems later. Addressing this upfront saved several weeks of rework. The hard-anodized finish was consistent in color and surface quality, and all bearing fits met the specified interference requirements. Project tracking and communication were also very efficient.",
      tags: ["Robotics", "CNC Machining", "Anodizing", "Press-Fit"],
      productImage: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
    },
    {
      name: "David Wagner",
      initials: "DW",
      location: "Munich, Germany",
      countryCode: "DE",
      rating: 5,
      projectType: "Prototype Development",
      date: "Jan 2024",
      quote:
        "Initial work focused on rapid prototypes for an energy storage system, starting with 3D-printed parts and transitioning into low-volume CNC production. Turnaround times were fast, which helped keep the project moving. Design feedback during prototyping was practical and helped reduce cost without affecting performance. Despite the time zone difference, communication remained smooth. Based on the prototype results, the project has now moved into medium-volume production.",
      tags: ["Energy", "Rapid Prototyping", "3D Printing", "CNC Production"],
      productImage: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-machine-overview-1.webp",
    },
  ],
};

export function ReviewsGrid() {
  const [visibleCount, setVisibleCount] = useState(6);

  const reviews = DEFAULTS.reviews;

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, reviews.length));
  };

  const hasMore = visibleCount < reviews.length;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "64px 0 80px",
        background: "#3E3E3E",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{
            fontSize: "46px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.015em",
            marginBottom: "48px",
          }}
        >
          <EditableText path="grid.sectionTitlePrefix" defaultValue={DEFAULTS.sectionTitlePrefix} />
          <span style={{ color: "#EEC569" }}>
            <EditableText path="grid.sectionTitleHighlight" defaultValue={DEFAULTS.sectionTitleHighlight} />
          </span>
          <EditableText path="grid.sectionTitleSuffix" defaultValue={DEFAULTS.sectionTitleSuffix} />
        </motion.h2>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, visibleCount).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
            >
              <ReviewCard index={index} {...review} />
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={showMore}
              className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                padding: "14px 28px",
                background: "#4A4A48",
                color: "#FFFFFF",
                borderRadius: "24px",
                border: "1px solid rgba(208,153,71,0.25)",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              <Image
                src={getImageUrl("reviews/lsicon_move-down-filled.png")}
                alt=""
                width={24}
                height={24}
              />
              <EditableText path="grid.showMoreButton" defaultValue={DEFAULTS.showMoreButton} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
