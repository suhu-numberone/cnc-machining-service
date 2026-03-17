"use client";

import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

interface SanitizedHTMLProps {
  html: string;
  className?: string;
}

export function SanitizedHTML({ html, className }: SanitizedHTMLProps) {
  const [sanitizedHTML, setSanitizedHTML] = useState("");

  useEffect(() => {
    // Configure DOMPurify to allow safe tags only
    const clean = DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [
        "h1", "h2", "h3", "h4", "h5", "h6",
        "p", "br", "hr",
        "ul", "ol", "li",
        "strong", "em", "b", "i", "u", "s",
        "a", "img",
        "blockquote", "pre", "code",
        "table", "caption", "thead", "tbody", "tr", "th", "td",
        "div", "span",
        "details", "summary",
      ],
      ALLOWED_ATTR: [
        "href", "src", "alt", "title", "class", "id",
        "target", "rel", "width", "height",
        "open", "colspan", "rowspan",
      ],
      ALLOW_DATA_ATTR: false,
      ADD_ATTR: ["target"], // Allow target attribute for links
      FORBID_TAGS: ["script", "style", "iframe", "form", "input", "button"],
      FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover"],
    });
    setSanitizedHTML(clean);
  }, [html]);

  return (
    <article
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
}
