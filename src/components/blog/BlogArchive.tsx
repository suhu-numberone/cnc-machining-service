"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost, Category } from "@/types/blog";
import {
  Calendar,
  ArrowRight,
  FileText,
  Clock,
  Search,
  ChevronDown,
} from "lucide-react";
import { getImageUrl } from "@/lib/utils";

function estimateReadTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
}

interface BlogArchiveProps {
  posts: BlogPost[];
  categories: Category[];
}

export function BlogArchive({ posts, categories }: BlogArchiveProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        !selectedCategory || post.categoryId === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const selectedCategoryName =
    categories.find((c) => c.id === selectedCategory)?.name || "All Categories";

  const getCategoryName = (categoryId: string | null) => {
    if (!categoryId) return null;
    return categories.find((c) => c.id === categoryId)?.name || null;
  };

  // Count posts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    posts.forEach((post) => {
      if (post.categoryId) {
        counts[post.categoryId] = (counts[post.categoryId] || 0) + 1;
      }
    });
    return counts;
  }, [posts]);

  const isFiltering = Boolean(searchQuery || selectedCategory);
  const featuredPost = isFiltering ? null : filteredPosts[0];
  const popularPosts = posts.slice(0, 3);
  const gridPosts = isFiltering ? filteredPosts : filteredPosts.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          paddingTop: "120px",
          paddingBottom: "80px",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src={getImageUrl("home/3-our-services-cnc-machining.webp")}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(15,13,13,0.75), rgba(15,13,13,0.85))",
            }}
          />
        </div>

        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.3,
                marginBottom: "16px",
              }}
            >
              Expert Insights
              <br className="hidden sm:block" />
              {" "}Practical Techniques
              <br className="hidden sm:block" />
              {" "}Industry Trends
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "16px",
                lineHeight: 1.6,
                maxWidth: "520px",
                margin: "0 auto 32px",
              }}
            >
              Created for Manufacturing Professionals, actionable knowledge you
              can apply directly.
            </p>

            {/* Search Bar */}
            <div style={{ position: "relative", maxWidth: "480px", margin: "0 auto" }}>
              <Search
                size={18}
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#999",
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                style={{
                  width: "100%",
                  padding: "14px 16px 14px 44px",
                  background: "#FFFFFF",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "15px",
                  color: "#1E1E1E",
                  outline: "none",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Row 1: Filter Bar + Featured Post + Sidebar */}
      <section style={{ background: "#FFFFFF", padding: "0 0 48px" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "28px 0 20px",
              borderBottom: "1px solid #E5E5E5",
              marginBottom: "32px",
            }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#1E1E1E" }}>
              Latest Articles
              <span style={{ color: "#999", fontWeight: 400, marginLeft: "8px" }}>
                ({filteredPosts.length})
              </span>
            </h2>

            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  background: "#FFFFFF",
                  border: "1px solid #D4D4D4",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#1E1E1E",
                  cursor: "pointer",
                }}
              >
                {selectedCategoryName}
                <ChevronDown
                  size={16}
                  style={{
                    transition: "transform 0.2s",
                    transform: showCategoryDropdown ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {showCategoryDropdown && (
                <>
                  <div
                    style={{ position: "fixed", inset: 0, zIndex: 40 }}
                    onClick={() => setShowCategoryDropdown(false)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 4px)",
                      right: 0,
                      minWidth: "200px",
                      background: "#FFFFFF",
                      border: "1px solid #E5E5E5",
                      borderRadius: "10px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      zIndex: 50,
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => { setSelectedCategory(""); setShowCategoryDropdown(false); }}
                      style={{
                        display: "block", width: "100%", padding: "10px 16px", textAlign: "left",
                        background: selectedCategory === "" ? "#F5F5F5" : "transparent",
                        border: "none", fontSize: "14px", color: "#1E1E1E", cursor: "pointer",
                        fontWeight: selectedCategory === "" ? 600 : 400,
                      }}
                    >
                      All Categories
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { setSelectedCategory(cat.id); setShowCategoryDropdown(false); }}
                        style={{
                          display: "block", width: "100%", padding: "10px 16px", textAlign: "left",
                          background: selectedCategory === cat.id ? "#F5F5F5" : "transparent",
                          border: "none", fontSize: "14px", color: "#1E1E1E", cursor: "pointer",
                          fontWeight: selectedCategory === cat.id ? 600 : 400,
                        }}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Featured Post + Sidebar (only when NOT filtering) */}
          {!isFiltering && filteredPosts.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <FileText size={48} style={{ color: "#D4D4D4", margin: "0 auto 16px" }} />
              <h3 style={{ color: "#1E1E1E", fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}>
                No posts yet
              </h3>
              <p style={{ color: "#888", fontSize: "15px" }}>
                Check back soon for updates!
              </p>
            </div>
          )}

          {!isFiltering && featuredPost && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 320px",
                gap: "32px",
              }}
              className="lg:!grid-cols-[1fr_320px] grid-cols-1"
            >
              {/* Featured Post - Large Card */}
              <article
                className="group"
                style={{
                  borderRadius: "12px", overflow: "hidden",
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
                <Link href={`/blog/${featuredPost.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ position: "relative", height: "340px", background: "#F5F5F5", overflow: "hidden" }}>
                    {featuredPost.featuredImage ? (
                      <Image
                        src={featuredPost.featuredImage}
                        alt={featuredPost.title}
                        fill
                        style={{ objectFit: "cover", transition: "transform 0.5s" }}
                        className="group-hover:scale-105"
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FileText size={64} style={{ color: "#D4D4D4" }} />
                      </div>
                    )}
                    {getCategoryName(featuredPost.categoryId) && (
                      <span style={{
                        position: "absolute", top: "16px", left: "16px",
                        background: "linear-gradient(135deg, #D09947, #EEC569)",
                        color: "#FFFFFF", fontSize: "12px", fontWeight: 700,
                        padding: "6px 14px", borderRadius: "6px",
                        textTransform: "uppercase", letterSpacing: "0.5px",
                      }}>
                        {getCategoryName(featuredPost.categoryId)}
                      </span>
                    )}
                  </div>

                  <div style={{ padding: "24px 28px 28px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "14px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#B0960E", fontSize: "13px" }}>
                        <Calendar size={13} />
                        {featuredPost.publishedAt?.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#B0960E", fontSize: "13px" }}>
                        <Clock size={13} />
                        {estimateReadTime(featuredPost.content)} min read
                      </div>
                    </div>

                    <h2 style={{ color: "#1E1E1E", fontSize: "24px", fontWeight: 700, marginBottom: "12px", lineHeight: 1.3 }}>
                      {featuredPost.title}
                    </h2>

                    {featuredPost.excerpt && (
                      <p style={{
                        color: "#666", fontSize: "15px", lineHeight: 1.7,
                        marginBottom: "20px",
                        display: "-webkit-box", WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical", overflow: "hidden",
                      }}>
                        {featuredPost.excerpt}
                      </p>
                    )}

                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#D09947", fontSize: "14px", fontWeight: 600 }}>
                      Read More
                      <ArrowRight size={15} className="group-hover:translate-x-1" style={{ transition: "transform 0.2s" }} />
                    </div>
                  </div>
                </Link>
              </article>

              {/* Right Sidebar: Popular Posts + Newsletter */}
              <aside style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Popular Posts */}
                <div style={{
                  border: "1px solid #E8E8E8", borderRadius: "12px",
                  padding: "24px",
                }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1E1E1E", marginBottom: "6px" }}>
                    Popular Posts
                  </h3>
                  <div style={{ width: "40px", height: "3px", background: "#2979C1", borderRadius: "2px", marginBottom: "20px" }} />

                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {popularPosts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          gap: "12px",
                          alignItems: "flex-start",
                        }}
                      >
                        <div style={{
                          width: "64px", height: "52px", borderRadius: "6px",
                          overflow: "hidden", flexShrink: 0, position: "relative",
                          background: "#F5F5F5",
                        }}>
                          {post.featuredImage ? (
                            <Image src={post.featuredImage} alt={post.title} fill style={{ objectFit: "cover" }} />
                          ) : (
                            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <FileText size={16} style={{ color: "#D4D4D4" }} />
                            </div>
                          )}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h4 style={{
                            color: "#1E1E1E", fontSize: "14px", fontWeight: 600,
                            lineHeight: 1.4, marginBottom: "4px",
                            display: "-webkit-box", WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical", overflow: "hidden",
                          }}>
                            {post.title}
                          </h4>
                          <span style={{ color: "#999", fontSize: "12px" }}>
                            {post.publishedAt?.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Subscribe */}
                <div style={{
                  border: "1px solid #E8E8E8", borderRadius: "12px",
                  padding: "24px",
                }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1E1E1E", marginBottom: "6px" }}>
                    Subscribe to Newsletter
                  </h3>
                  <div style={{ width: "40px", height: "3px", background: "#D09947", borderRadius: "2px", marginBottom: "16px" }} />
                  <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6, marginBottom: "16px" }}>
                    Get the latest manufacturing insights delivered to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    style={{
                      width: "100%", padding: "11px 14px",
                      border: "1px solid #D4D4D4", borderRadius: "8px",
                      fontSize: "14px", color: "#1E1E1E", outline: "none",
                      marginBottom: "10px",
                    }}
                  />
                  <button
                    style={{
                      width: "100%", padding: "11px",
                      background: "linear-gradient(135deg, #D09947, #EEC569)",
                      color: "#FFFFFF", border: "none", borderRadius: "8px",
                      fontSize: "14px", fontWeight: 600, cursor: "pointer",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      {/* Row 2: Categories Sidebar + All Articles Grid (always shown when there are posts or when filtering) */}
      {(gridPosts.length > 0 || isFiltering) && (
        <section style={{ background: "#FFFFFF", paddingBottom: "80px" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <h2 style={{
              fontSize: "28px", fontWeight: 700, color: "#1E1E1E",
              textAlign: "center", marginBottom: "32px",
              textDecoration: "underline", textUnderlineOffset: "8px",
              textDecorationColor: "#E5E5E5",
            }}>
              {isFiltering ? `Search Results (${filteredPosts.length})` : `All articles (${filteredPosts.length})`}
            </h2>

            <div
              style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "32px" }}
              className="lg:!grid-cols-[220px_1fr] grid-cols-1"
            >
              {/* Categories Sidebar */}
              <aside>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1E1E1E", marginBottom: "6px" }}>
                  Categories
                </h3>
                <div style={{ width: "32px", height: "3px", background: "#D09947", borderRadius: "2px", marginBottom: "16px" }} />

                <div style={{ display: "flex", flexDirection: "column" }}>
                  {[
                    { id: "", name: "All Posts", count: posts.length },
                    ...categories.map((cat) => ({
                      id: cat.id,
                      name: cat.name,
                      count: categoryCounts[cat.id] || 0,
                    })),
                  ].map((item) => {
                    const isActive = selectedCategory === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() =>
                          setSelectedCategory(isActive && item.id !== "" ? "" : item.id)
                        }
                        className="category-sidebar-btn"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px 0",
                          background: "none",
                          border: "none",
                          borderBottom: "1px solid #F0F0F0",
                          cursor: "pointer",
                          textAlign: "left",
                          color: isActive ? "#D09947" : "#1E1E1E",
                          fontWeight: isActive ? 600 : 400,
                          fontSize: "14px",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.color = "#D09947";
                            e.currentTarget.style.fontWeight = "600";
                            const line = e.currentTarget.querySelector<HTMLElement>("[data-line]");
                            if (line) line.style.borderLeftColor = "#D09947";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.color = "#1E1E1E";
                            e.currentTarget.style.fontWeight = "400";
                            const line = e.currentTarget.querySelector<HTMLElement>("[data-line]");
                            if (line) line.style.borderLeftColor = "transparent";
                          }
                        }}
                      >
                        <span
                          data-line=""
                          style={{
                            borderLeft: isActive
                              ? "3px solid #D09947"
                              : "3px solid transparent",
                            paddingLeft: "10px",
                            transition: "border-color 0.2s",
                          }}
                        >
                          {item.name}
                        </span>
                        <span style={{ color: "#999", fontSize: "13px" }}>
                          {item.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Posts Grid - 3 columns */}
              {gridPosts.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 20px" }}>
                  <FileText size={48} style={{ color: "#D4D4D4", margin: "0 auto 16px" }} />
                  <h3 style={{ color: "#1E1E1E", fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}>
                    No results found
                  </h3>
                  <p style={{ color: "#888", fontSize: "15px" }}>
                    Try adjusting your search or category filter.
                  </p>
                  <button
                    onClick={() => { setSearchQuery(""); setSelectedCategory(""); }}
                    style={{
                      marginTop: "20px", padding: "10px 24px", background: "#1E1E1E",
                      color: "#FFFFFF", border: "none", borderRadius: "8px",
                      fontSize: "14px", fontWeight: 500, cursor: "pointer",
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "24px",
                }}
                className="lg:!grid-cols-3 md:!grid-cols-2 grid-cols-1"
              >
                {gridPosts.map((post) => {
                  const categoryName = getCategoryName(post.categoryId);
                  const readTime = estimateReadTime(post.content);

                  return (
                    <article
                      key={post.id}
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
                      <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                        <div style={{
                          position: "relative", height: "170px",
                          background: "#F5F5F5", overflow: "hidden",
                        }}>
                          {post.featuredImage ? (
                            <Image
                              src={post.featuredImage}
                              alt={post.title}
                              fill
                              style={{ objectFit: "cover", transition: "transform 0.5s" }}
                              className="group-hover:scale-105"
                            />
                          ) : (
                            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <FileText size={36} style={{ color: "#D4D4D4" }} />
                            </div>
                          )}
                          {categoryName && (
                            <span style={{
                              position: "absolute", top: "10px", left: "10px",
                              background: "linear-gradient(135deg, #D09947, #EEC569)",
                              color: "#FFFFFF", fontSize: "10px", fontWeight: 700,
                              padding: "4px 10px", borderRadius: "5px",
                              textTransform: "uppercase", letterSpacing: "0.5px",
                            }}>
                              {categoryName}
                            </span>
                          )}
                        </div>

                        <div style={{ padding: "16px 18px 20px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#B0960E", fontSize: "12px" }}>
                              <Calendar size={12} />
                              {post.publishedAt?.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#B0960E", fontSize: "12px" }}>
                              <Clock size={12} />
                              {readTime} min read
                            </div>
                          </div>

                          <h3 style={{
                            color: "#1E1E1E", fontSize: "15px", fontWeight: 700,
                            marginBottom: "8px", lineHeight: 1.4,
                            display: "-webkit-box", WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical", overflow: "hidden",
                          }}>
                            {post.title}
                          </h3>

                          {post.excerpt && (
                            <p style={{
                              color: "#666", fontSize: "13px", lineHeight: 1.6,
                              marginBottom: "12px",
                              display: "-webkit-box", WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical", overflow: "hidden",
                            }}>
                              {post.excerpt}
                            </p>
                          )}

                          <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#D09947", fontSize: "13px", fontWeight: 600 }}>
                            Read More
                            <ArrowRight size={14} className="group-hover:translate-x-1" style={{ transition: "transform 0.2s" }} />
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
