"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost, Category, Author } from "@/types/blog";
import { SanitizedHTML } from "./SanitizedHTML";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowRight,
  FileText,
  Zap,
} from "lucide-react";

function estimateReadTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function extractTocFromHTML(html: string): TocItem[] {
  const items: TocItem[] = [];
  const regex = /<h([2-3])[^>]*(?:id="([^"]*)")?[^>]*>(.*?)<\/h[2-3]>/gi;
  let match;
  let counter = 0;
  while ((match = regex.exec(html)) !== null) {
    counter++;
    const level = parseInt(match[1]);
    const existingId = match[2];
    const text = match[3].replace(/<[^>]*>/g, "").trim();
    const id = existingId || `heading-${counter}`;
    if (text) {
      items.push({ id, text, level });
    }
  }
  return items;
}

interface BlogPostContentProps {
  post: BlogPost;
  category: Category | null;
  author: Author | null;
  relatedPosts: BlogPost[];
  popularPosts: BlogPost[];
  categories: Category[];
}

export function BlogPostContent({
  post,
  category,
  author,
  relatedPosts,
  popularPosts,
  categories,
}: BlogPostContentProps) {
  const readTime = estimateReadTime(post.content);
  const tocItems = useMemo(() => extractTocFromHTML(post.content), [post.content]);

  // Inject IDs into headings for anchor links
  const contentWithIds = useMemo(() => {
    let counter = 0;
    return post.content.replace(
      /<h([2-3])([^>]*)>(.*?)<\/h[2-3]>/gi,
      (fullMatch, level, attrs, inner) => {
        counter++;
        const text = inner.replace(/<[^>]*>/g, "").trim();
        if (!text) return fullMatch;
        const hasId = /id="/.test(attrs);
        const id = hasId ? attrs.match(/id="([^"]*)"/)?.[1] : `heading-${counter}`;
        if (hasId) return fullMatch;
        return `<h${level} id="heading-${counter}"${attrs}>${inner}</h${level}>`;
      }
    );
  }, [post.content]);

  const getCategoryName = (categoryId: string | null) => {
    if (!categoryId) return null;
    return categories.find((c) => c.id === categoryId)?.name || null;
  };

  return (
    <>
      {/* Hero Section - 2-column layout */}
      <section style={{ paddingTop: "100px", background: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ paddingTop: "24px", paddingBottom: "40px" }}>
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              color: "#999",
              marginBottom: "28px",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ color: "#999", textDecoration: "none" }}>
              Home
            </Link>
            <ChevronRight size={14} style={{ color: "#555" }} />
            <Link href="/blog" style={{ color: "#D09947", textDecoration: "none" }}>
              Blog
            </Link>
            {category && (
              <>
                <ChevronRight size={14} style={{ color: "#555" }} />
                <span style={{ color: "#D09947" }}>{category.name}</span>
              </>
            )}
            <ChevronRight size={14} style={{ color: "#555" }} />
            <span style={{ color: "#FFFFFF", fontWeight: 500 }}>{post.title}</span>
          </nav>

          {/* 2-column hero: text left, image right */}
          <style>{`
            .blog-hero-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 40px;
              align-items: center;
            }
            @media (max-width: 768px) {
              .blog-hero-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
          <div className="blog-hero-grid">
            {/* Left: Text content */}
            <div>
              {/* Category Badge */}
              {category && (
                <span
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(135deg, #D09947, #EEC569)",
                    color: "#FFFFFF",
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "6px 16px",
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "16px",
                  }}
                >
                  {category.name}
                </span>
              )}

              {/* Title */}
              <h1
                style={{
                  fontSize: "clamp(26px, 3.5vw, 36px)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p
                  style={{
                    color: "#CCCCCC",
                    fontSize: "16px",
                    lineHeight: 1.6,
                    marginBottom: "28px",
                  }}
                >
                  {post.excerpt}
                </p>
              )}

              {/* Author & Meta */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                  paddingTop: "16px",
                  borderTop: "1px solid #333333",
                }}
              >
                {/* Author avatar + info */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {author?.avatarUrl ? (
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                      <Image
                        src={author.avatarUrl}
                        alt={author.name}
                        width={44}
                        height={44}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #D09947, #EEC569)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      {(author?.name?.[0] || post.authorEmail?.[0] || "A").toUpperCase()}
                    </div>
                  )}
                  <div>
                    <div style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "14px" }}>
                      {author?.name || post.authorEmail?.split("@")[0] || "Author"}
                    </div>
                    <div style={{ color: "#999", fontSize: "13px" }}>
                      {author?.bio
                        ? author.bio.replace(/<[^>]*>/g, "").substring(0, 50) + (author.bio.replace(/<[^>]*>/g, "").length > 50 ? "..." : "")
                        : "ApexBatch Team"}
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#D09947", fontSize: "14px" }}>
                  <Calendar size={14} />
                  {post.publishedAt?.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                {/* Read time */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#D09947", fontSize: "14px" }}>
                  <Clock size={14} />
                  {readTime} min read
                </div>
              </div>
            </div>

            {/* Right: Featured Image */}
            {post.featuredImage && (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(280px, 30vw, 400px)",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3-Column Layout: TOC | Content | Popular Posts */}
      <section style={{ background: "#FFFFFF", padding: "48px 0 80px" }}>
        <style>{`
          .blog-layout {
            display: grid;
            grid-template-columns: 240px 1fr 280px;
            gap: 40px;
          }
          .blog-sidebar-left, .blog-sidebar-right {
            position: sticky;
            top: 100px;
            align-self: start;
            max-height: calc(100vh - 120px);
            overflow-y: auto;
          }
          @media (max-width: 1024px) {
            .blog-layout {
              grid-template-columns: 1fr 280px;
            }
            .blog-sidebar-left {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .blog-layout {
              grid-template-columns: 1fr;
            }
            .blog-sidebar-right {
              position: static;
              max-height: none;
            }
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 blog-layout">
          {/* Left Sidebar: Table of Contents */}
          <aside className="blog-sidebar-left">
            {tocItems.length > 0 && (
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1E1E1E", marginBottom: "6px" }}>
                  Contents
                </h3>
                <div style={{ width: "40px", height: "3px", background: "#D09947", borderRadius: "2px", marginBottom: "20px" }} />

                <div style={{ display: "flex", flexDirection: "column" }}>
                  {tocItems.map((item, index) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start",
                        padding: "12px 0",
                        borderBottom: "1px solid #F0F0F0",
                        textDecoration: "none",
                        color: "#1E1E1E",
                        fontSize: "14px",
                        lineHeight: 1.4,
                        paddingLeft: item.level === 3 ? "16px" : "0",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#D09947";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#1E1E1E";
                      }}
                    >
                      <span style={{ color: "#D09947", fontWeight: 600, flexShrink: 0 }}>
                        {index + 1}
                      </span>
                      <span>{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Share this post */}
            <div style={{ marginTop: "28px" }}>
              <p style={{ color: "#888", fontSize: "13px", marginBottom: "12px" }}>Share this post</p>
              <div style={{ display: "flex", gap: "8px" }}>
                {[
                  { label: "X", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(post.title)}`, icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  )},
                  { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`, icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  )},
                  { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(post.title + " " + (typeof window !== "undefined" ? window.location.href : ""))}`, icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  )},
                  { label: "Reddit", href: `https://reddit.com/submit?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&title=${encodeURIComponent(post.title)}`, icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
                  )},
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "1px solid #E0E0E0",
                      color: "#666",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#D09947";
                      e.currentTarget.style.color = "#D09947";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E0E0E0";
                      e.currentTarget.style.color = "#666";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Center: Blog Content */}
          <div style={{ minWidth: 0 }}>
            <SanitizedHTML html={contentWithIds} className="blog-content" />

            <style>{`
              .blog-content {
                color: #333333;
                font-size: 17px;
                line-height: 1.8;
              }
              .blog-content > * + * {
                margin-top: 1.5em;
              }
              .blog-content h1 {
                font-size: 2em;
                font-weight: 700;
                color: #1E1E1E;
                margin-top: 2em;
              }
              .blog-content h2 {
                font-size: 1.5em;
                font-weight: 700;
                color: #1E1E1E;
                margin-top: 2em;
                padding-bottom: 8px;
                border-bottom: 2px solid #F0F0F0;
              }
              .blog-content h3 {
                font-size: 1.25em;
                font-weight: 600;
                color: #1E1E1E;
                margin-top: 1.5em;
              }
              .blog-content p {
                color: #333333;
              }
              .blog-content a {
                color: #D09947;
                text-decoration: underline;
              }
              .blog-content a:hover {
                color: #B07D2F;
              }
              .blog-content ul,
              .blog-content ol {
                padding-left: 1.5em;
              }
              .blog-content li {
                margin-top: 0.5em;
              }
              .blog-content li::marker {
                color: #D09947;
              }
              .blog-content blockquote {
                border-left: 4px solid #D09947;
                padding: 16px 20px;
                margin-left: 0;
                background: #FEFBF0;
                border-radius: 0 8px 8px 0;
                font-style: italic;
                color: #555;
              }
              .blog-content blockquote p {
                color: #555;
              }
              .blog-content code {
                background: #F5F5F5;
                padding: 0.2em 0.5em;
                border-radius: 4px;
                font-family: monospace;
                font-size: 0.9em;
                color: #D09947;
              }
              .blog-content pre {
                background: #1E1E1E;
                padding: 1.5em;
                border-radius: 12px;
                overflow-x: auto;
                color: #E0E0E0;
              }
              .blog-content pre code {
                background: none;
                padding: 0;
                color: #E0E0E0;
              }
              .blog-content img {
                max-width: 100%;
                height: auto;
                border-radius: 8px;
                margin: 2em auto;
                display: block;
              }
              .blog-content hr {
                border: none;
                border-top: 1px solid #E5E5E5;
                margin: 3em 0;
              }
              .blog-content strong {
                color: #1E1E1E;
                font-weight: 600;
              }
              .blog-content table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                margin: 1.5em 0;
                border-radius: 12px;
                overflow: hidden;
                border: 1px solid #E8E8E8;
                box-shadow: 0 1px 4px rgba(0,0,0,0.04);
              }
              .blog-content thead th {
                background: linear-gradient(135deg, #D09947, #E8C46A);
                color: #FFFFFF;
                font-weight: 700;
                text-align: left;
                padding: 18px 24px;
                font-size: 16px;
                letter-spacing: 0.2px;
                border-bottom: none;
              }
              .blog-content tbody td {
                padding: 20px 24px;
                border-bottom: 1px solid #EBEBEB;
                font-size: 15px;
                color: #6B6B6B;
              }
              .blog-content tbody tr:last-child td {
                border-bottom: none;
              }
              .blog-content tbody tr:nth-child(even) {
                background: #F7F9FB;
              }
              .blog-content tbody tr:hover {
                background: #FEF9F0;
              }
              .blog-content details {
                border: 1px solid #E8E8E8;
                border-radius: 12px;
                margin: 12px 0;
                background: #FFFFFF;
                transition: all 0.2s ease;
              }
              .blog-content details[open] {
                border-color: #E8C46A;
                background: #FFFDF7;
              }
              .blog-content details summary {
                padding: 20px 24px;
                font-weight: 600;
                font-size: 16px;
                color: #1E1E1E;
                cursor: pointer;
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 16px;
              }
              .blog-content details summary::-webkit-details-marker {
                display: none;
              }
              .blog-content details summary::after {
                content: "";
                width: 28px;
                height: 28px;
                min-width: 28px;
                border: 2px solid #999;
                border-radius: 50%;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: center;
                transition: transform 0.2s ease;
              }
              .blog-content details[open] summary::after {
                transform: rotate(180deg);
                border-color: #D09947;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23D09947' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
              }
              .blog-content details > :not(summary) {
                padding: 0 24px 20px;
                color: #6B6B6B;
                font-size: 15px;
                line-height: 1.7;
              }
              .blog-content details p:first-of-type {
                margin-top: 0;
              }
            `}</style>

            {/* Author Bio Box - inside content column */}
            {author && author.bio && (
              <div
                style={{
                  marginTop: "48px",
                  paddingTop: "40px",
                  borderTop: "1px solid #E5E5E5",
                }}
              >
                <div
                  style={{
                    background: "#FEFBF0",
                    padding: "32px",
                    borderRadius: "12px",
                    border: "1px solid #E8E8E8",
                  }}
                >
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1E1E1E", marginBottom: "20px" }}>
                    About {author.name}
                  </h3>
                  <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                    {author.avatarUrl ? (
                      <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                        <Image
                          src={author.avatarUrl}
                          alt={author.name}
                          width={80}
                          height={80}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #D09947, #EEC569)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#FFFFFF",
                          fontWeight: 700,
                          fontSize: "32px",
                          flexShrink: 0,
                        }}
                      >
                        {author.name[0]?.toUpperCase() || "A"}
                      </div>
                    )}
                    <div style={{ flex: 1 }}>
                      <SanitizedHTML html={author.bio} className="author-bio" />
                      <style>{`
                        .author-bio {
                          color: #333;
                          font-size: 15px;
                          line-height: 1.6;
                        }
                        .author-bio p {
                          margin-bottom: 12px;
                        }
                        .author-bio a {
                          color: #D09947;
                          text-decoration: underline;
                        }
                      `}</style>

                      {(author.website || author.socialTwitter || author.socialLinkedin) && (
                        <div style={{ display: "flex", gap: "8px", marginTop: "16px", alignItems: "center" }}>
                          {author.website && (
                            <a
                              href={author.website}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              title="Website"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                border: "1px solid #E0E0E0",
                                color: "#666",
                                textDecoration: "none",
                              }}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                            </a>
                          )}
                          {author.socialTwitter && (
                            <a
                              href={`https://twitter.com/${author.socialTwitter}`}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              title="X (Twitter)"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                border: "1px solid #E0E0E0",
                                color: "#666",
                                textDecoration: "none",
                              }}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                          )}
                          {author.socialLinkedin && (
                            <a
                              href={`https://linkedin.com/in/${author.socialLinkedin}`}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              title="LinkedIn"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                border: "1px solid #E0E0E0",
                                color: "#666",
                                textDecoration: "none",
                              }}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Related Articles - inside content column */}
            {relatedPosts.length > 0 && (
              <div style={{ marginTop: "48px", paddingTop: "40px", borderTop: "1px solid #E5E5E5" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#1E1E1E", marginBottom: "24px" }}>
                  Related Articles
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "20px",
                  }}
                >
                  {relatedPosts.slice(0, 4).map((rp) => {
                    const catName = getCategoryName(rp.categoryId);
                    const rpReadTime = estimateReadTime(rp.content);

                    return (
                      <article
                        key={rp.id}
                        className="group"
                        style={{
                          background: "#FFFFFF",
                          borderRadius: "10px",
                          overflow: "hidden",
                          border: "2px solid transparent",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                          transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-4px)";
                          e.currentTarget.style.boxShadow = "0 8px 30px rgba(208,153,71,0.25)";
                          e.currentTarget.style.borderColor = "#D09947";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                          e.currentTarget.style.borderColor = "transparent";
                        }}
                      >
                        <Link href={`/blog/${rp.slug}`} style={{ textDecoration: "none" }}>
                          <div
                            style={{
                              position: "relative",
                              height: "140px",
                              background: "#F5F5F5",
                              overflow: "hidden",
                            }}
                          >
                            {rp.featuredImage ? (
                              <Image
                                src={rp.featuredImage}
                                alt={rp.title}
                                fill
                                style={{ objectFit: "cover", transition: "transform 0.5s" }}
                                className="group-hover:scale-105"
                              />
                            ) : (
                              <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <FileText size={36} style={{ color: "#D4D4D4" }} />
                              </div>
                            )}
                            {catName && (
                              <span
                                style={{
                                  position: "absolute",
                                  top: "10px",
                                  left: "10px",
                                  background: "linear-gradient(135deg, #D09947, #EEC569)",
                                  color: "#FFFFFF",
                                  fontSize: "10px",
                                  fontWeight: 700,
                                  padding: "4px 10px",
                                  borderRadius: "5px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                {catName}
                              </span>
                            )}
                          </div>

                          <div style={{ padding: "14px 16px 18px" }}>
                            <h3
                              style={{
                                color: "#1E1E1E",
                                fontSize: "14px",
                                fontWeight: 700,
                                marginBottom: "8px",
                                lineHeight: 1.4,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {rp.title}
                            </h3>

                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#B0960E", fontSize: "11px" }}>
                                <Calendar size={11} />
                                {rp.publishedAt?.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#B0960E", fontSize: "11px" }}>
                                <Clock size={11} />
                                {rpReadTime} min read
                              </div>
                            </div>
                          </div>
                        </Link>
                      </article>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Popular Posts + CTA */}
          <aside
            className="blog-sidebar-right"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Popular Posts */}
            <div
              style={{
                border: "1px solid #E8E8E8",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1E1E1E", marginBottom: "6px" }}>
                Popular Posts
              </h3>
              <div style={{ width: "32px", height: "3px", background: "#D09947", borderRadius: "2px", marginBottom: "16px" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {popularPosts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/blog/${p.slug}`}
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "52px",
                        borderRadius: "6px",
                        overflow: "hidden",
                        flexShrink: 0,
                        position: "relative",
                        background: "#F5F5F5",
                      }}
                    >
                      {p.featuredImage ? (
                        <Image src={p.featuredImage} alt={p.title} fill style={{ objectFit: "cover" }} />
                      ) : (
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <FileText size={16} style={{ color: "#D4D4D4" }} />
                        </div>
                      )}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4
                        style={{
                          color: "#1E1E1E",
                          fontSize: "13px",
                          fontWeight: 600,
                          lineHeight: 1.4,
                          marginBottom: "4px",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {p.title}
                      </h4>
                      <span style={{ color: "#D09947", fontSize: "12px" }}>
                        {p.publishedAt?.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Card - Instant Quote */}
            <div
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                border: "1px solid #E0E0E0",
                background: "#FFFFFF",
              }}
            >
              {/* Gold header */}
              <div
                style={{
                  background: "linear-gradient(180deg, #D09947 0%, #B8832E 100%)",
                  padding: "20px 20px 28px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <p style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 600, fontStyle: "italic", margin: 0, letterSpacing: "0.5px" }}>
                  GET AN INSTANT
                </p>
                <h3 style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: 800, fontStyle: "italic", margin: "2px 0 0", letterSpacing: "1px" }}>
                  QUOTE
                </h3>
                {/* Triangle pointer */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "14px solid transparent",
                    borderRight: "14px solid transparent",
                    borderTop: "14px solid #B8832E",
                  }}
                />
              </div>

              {/* White body with checklist */}
              <div style={{ padding: "28px 24px 20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                  {["Fast", "Free", "Easy!"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10.5L8 14.5L16 6.5" stroke="#D09947" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: "18px", fontWeight: 700, color: "#1E1E1E" }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Get Started button */}
                <Link
                  href="/contact"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px 20px",
                    background: "linear-gradient(180deg, #D09947 0%, #B8832E 100%)",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: 700,
                    textDecoration: "none",
                    cursor: "pointer",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  GET STARTED
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>


    </>
  );
}
