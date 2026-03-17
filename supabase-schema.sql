-- Blog Posts Table
-- Run this in your Supabase SQL Editor (Database > SQL Editor)

-- Create the blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL DEFAULT '',
  excerpt TEXT,
  featured_image TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  published_at TIMESTAMPTZ,
  author_id TEXT NOT NULL,
  author_email TEXT NOT NULL
);

-- Create index for faster slug lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- Create index for faster status filtering
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);

-- Create index for sorting by published_at
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to read published posts
CREATE POLICY "Allow public read access to published posts"
  ON blog_posts
  FOR SELECT
  USING (status = 'published');

-- Policy: Allow authenticated users to read all posts (including drafts)
CREATE POLICY "Allow authenticated read access to all posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to insert posts
CREATE POLICY "Allow authenticated insert"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Allow authenticated users to update posts
CREATE POLICY "Allow authenticated update"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Allow authenticated users to delete posts
CREATE POLICY "Allow authenticated delete"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);
