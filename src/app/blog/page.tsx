import { Metadata } from "next";
import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { BlogArchive } from "@/components/blog/BlogArchive";
import { getPublishedPosts } from "@/lib/blog";
import { getAllCategories } from "@/lib/categories";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/blog");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/blog",
    },
  };
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getPublishedPosts(),
    getAllCategories(),
  ]);

  return (
    <>
      <Home3Header />
      <BlogArchive posts={posts} categories={categories} />
      <Home3Footer />
    </>
  );
}
