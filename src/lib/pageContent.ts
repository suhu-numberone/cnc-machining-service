import { supabase, isSupabaseConfigured } from "./supabase";

const TABLE_NAME = "page_content";

export interface PageContentRecord {
  id: string;
  page_slug: string;
  content: Record<string, unknown>;
  version: number;
  created_at: string;
  updated_at: string;
  updated_by: string | null;
}

/**
 * Fetch page content by slug
 */
export async function getPageContent<T = Record<string, unknown>>(
  pageSlug: string
): Promise<{ content: T | null; version: number }> {
  if (!isSupabaseConfigured || !supabase) {
    return { content: null, version: 1 };
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("content, version")
    .eq("page_slug", pageSlug)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // No rows returned - page has no content yet
      return { content: null, version: 1 };
    }
    console.error("Error fetching page content:", error);
    return { content: null, version: 1 };
  }

  return {
    content: data?.content as T,
    version: data?.version || 1,
  };
}

/**
 * Update page content with optimistic locking
 */
export async function updatePageContent<T = Record<string, unknown>>(
  pageSlug: string,
  content: T,
  updatedBy: string,
  currentVersion: number
): Promise<{ success: boolean; newVersion: number; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, newVersion: currentVersion, error: "Supabase not configured" };
  }

  const now = new Date().toISOString();
  const newVersion = currentVersion + 1;

  // Try to update with version check
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update({
      content,
      version: newVersion,
      updated_at: now,
      updated_by: updatedBy,
    })
    .eq("page_slug", pageSlug)
    .eq("version", currentVersion)
    .select("version")
    .single();

  if (error) {
    // Check if it's a "no rows" error (version mismatch)
    if (error.code === "PGRST116") {
      return {
        success: false,
        newVersion: currentVersion,
        error: "Content was modified by another user. Please refresh the page.",
      };
    }
    console.error("Error updating page content:", error);
    return { success: false, newVersion: currentVersion, error: error.message };
  }

  return { success: true, newVersion: data?.version || newVersion };
}

/**
 * Upsert page content (create or update)
 */
export async function upsertPageContent<T = Record<string, unknown>>(
  pageSlug: string,
  content: T,
  updatedBy: string
): Promise<{ success: boolean; version: number; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, version: 1, error: "Supabase not configured" };
  }

  const now = new Date().toISOString();

  // First try to get existing record
  const { data: existing } = await supabase
    .from(TABLE_NAME)
    .select("version")
    .eq("page_slug", pageSlug)
    .single();

  const newVersion = (existing?.version || 0) + 1;

  const { error } = await supabase.from(TABLE_NAME).upsert(
    {
      page_slug: pageSlug,
      content,
      version: newVersion,
      updated_at: now,
      updated_by: updatedBy,
    },
    {
      onConflict: "page_slug",
    }
  );

  if (error) {
    console.error("Error upserting page content:", error);
    return { success: false, version: existing?.version || 1, error: error.message };
  }

  return { success: true, version: newVersion };
}

/**
 * Get nested value from object by dot-notation path
 */
export function getNestedValue(
  obj: Record<string, unknown> | null | undefined,
  path: string
): unknown {
  if (!obj) return undefined;

  const keys = path.split(".");
  let current: unknown = obj;

  for (const key of keys) {
    if (current === null || current === undefined) return undefined;
    if (typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }

  return current;
}

/**
 * Set nested value in object by dot-notation path
 */
export function setNestedValue(
  obj: Record<string, unknown>,
  path: string,
  value: unknown
): void {
  const keys = path.split(".");
  let current: Record<string, unknown> = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current) || typeof current[key] !== "object") {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }

  current[keys[keys.length - 1]] = value;
}
