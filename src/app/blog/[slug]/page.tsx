import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { getAllCategories } from "@/lib/categories";
import { getAuthorById } from "@/lib/authors";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all published posts
export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.status !== "published") {
    return {
      title: "Post Not Found",
    };
  }

  const title = post.metaTitle || `${post.title} | ApexBatch Blog`;
  const description = post.metaDescription || post.excerpt || post.title;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const [post, allPosts, categories] = await Promise.all([
    getPostBySlug(slug),
    getPublishedPosts(),
    getAllCategories(),
  ]);

  if (!post || post.status !== "published") {
    notFound();
  }

  // Find the category for this post
  const category = post.categoryId
    ? categories.find((c) => c.id === post.categoryId) || null
    : null;

  // Get related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && p.categoryId === post.categoryId && post.categoryId)
    .slice(0, 4);

  // If not enough related posts from same category, fill with recent posts
  if (relatedPosts.length < 4) {
    const additionalPosts = allPosts
      .filter((p) => p.id !== post.id && !relatedPosts.find((rp) => rp.id === p.id))
      .slice(0, 4 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  // Popular posts (top 3 most recent, excluding current)
  const popularPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // Fetch author if post has an author reference
  const author = post.authorRef ? await getAuthorById(post.authorRef) : null;

  return (
    <>
      <Home3Header />
      <BlogPostContent
        post={post}
        category={category}
        author={author}
        relatedPosts={relatedPosts}
        popularPosts={popularPosts}
        categories={categories}
      />
      <Home3Footer />
    </>
  );
}
