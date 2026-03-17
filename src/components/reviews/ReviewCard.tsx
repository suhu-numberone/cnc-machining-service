"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";

interface ReviewCardProps {
  index: number;
  name: string;
  initials: string;
  location: string;
  countryCode: string;
  rating: number;
  projectType: string;
  date: string;
  quote: string;
  tags: string[];
  productImage?: string;
}

const countryFlags: Record<string, string> = {
  DE: "\u{1F1E9}\u{1F1EA}",
  US: "\u{1F1FA}\u{1F1F8}",
  UK: "\u{1F1EC}\u{1F1E7}",
  FR: "\u{1F1EB}\u{1F1F7}",
  JP: "\u{1F1EF}\u{1F1F5}",
  CN: "\u{1F1E8}\u{1F1F3}",
  CA: "\u{1F1E8}\u{1F1E6}",
  AU: "\u{1F1E6}\u{1F1FA}",
  IT: "\u{1F1EE}\u{1F1F9}",
  NL: "\u{1F1F3}\u{1F1F1}",
  KR: "\u{1F1F0}\u{1F1F7}",
  CH: "\u{1F1E8}\u{1F1ED}",
};

export function ReviewCard({
  index,
  name,
  initials,
  location,
  countryCode,
  rating,
  projectType,
  date,
  quote,
  tags,
  productImage,
}: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = quote.length > 80;

  const basePath = `grid.reviews.${index}`;

  return (
    <div
      className="flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#1D1D1D",
        borderRadius: "0",
        padding: "24px",
        border: "1px solid rgba(208,153,71,0.18)",
        boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
      }}
    >
      {/* Product Image */}
      {productImage && (
        <div
          className="overflow-hidden aspect-video relative mb-5 rounded-lg"
          style={{ background: "#3A3A3A" }}
        >
          <EditableImage
            path={`${basePath}.productImage`}
            defaultSrc={productImage}
            alt="Product"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Header - Avatar and Name */}
      <div className="flex items-center gap-4 mb-5">
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #D09947, #7F4D0F)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "18px" }}>
            <EditableText path={`${basePath}.initials`} defaultValue={initials} />
          </span>
        </div>
        <div>
          <h3 style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "16px" }}>
            <EditableText path={`${basePath}.name`} defaultValue={name} />
          </h3>
          <p style={{ color: "#C5C6C9", fontSize: "14px", display: "flex", alignItems: "center", gap: "6px" }}>
            <span>{countryFlags[countryCode] || "\u{1F30D}"}</span>
            <span>
              <EditableText path={`${basePath}.location`} defaultValue={location} />
            </span>
          </p>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            style={{
              width: "18px",
              height: "18px",
              color: i < rating ? "#D09947" : "#3A3A3A",
              fill: i < rating ? "#D09947" : "transparent",
            }}
          />
        ))}
      </div>

      {/* Project Type and Date */}
      <div className="flex items-center justify-between mb-4">
        <span style={{ color: "#C5C6C9", fontSize: "14px" }}>
          <EditableText path={`${basePath}.projectType`} defaultValue={projectType} />
        </span>
        <span style={{ color: "#7A7A7C", fontSize: "13px" }}>
          <EditableText path={`${basePath}.date`} defaultValue={date} />
        </span>
      </div>

      {/* Quote */}
      <div className="flex-grow">
        <p
          style={{
            color: "#FFFFFF",
            fontStyle: "italic",
            fontSize: "14px",
            lineHeight: 1.6,
            ...(!isExpanded ? {
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical" as const,
              overflow: "hidden",
            } : {}),
          }}
        >
          &quot;<EditableText path={`${basePath}.quote`} defaultValue={quote} multiline />&quot;
        </p>

        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 transition-colors mt-3"
            style={{ color: "#D09947", fontSize: "14px", fontWeight: 500 }}
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp style={{ width: "16px", height: "16px" }} />
              </>
            ) : (
              <>
                Read More <ChevronDown style={{ width: "16px", height: "16px" }} />
              </>
            )}
          </button>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-5">
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "6px 12px",
              background: "rgba(238,197,105,0.1)",
              color: "#EEC569",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 500,
              border: "1px solid rgba(238,197,105,0.25)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}
