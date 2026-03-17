import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { upsertPageContent, getPageContent } from "@/lib/pageContent";
import { isUserAdmin } from "@/lib/admin";
import { verifyIdToken } from "@/lib/firebaseAdmin";

// Simple schema validation for CMS content
function validateContent(content: unknown): { valid: boolean; error?: string } {
  if (!content || typeof content !== "object") {
    return { valid: false, error: "Content must be a non-null object" };
  }

  // Check for reasonable size (prevent abuse)
  const json = JSON.stringify(content);
  if (json.length > 1_000_000) {
    return { valid: false, error: "Content too large (max 1MB)" };
  }

  // Check nesting depth (prevent deeply nested objects)
  function checkDepth(obj: unknown, depth: number): boolean {
    if (depth > 10) return false;
    if (obj && typeof obj === "object") {
      for (const value of Object.values(obj as Record<string, unknown>)) {
        if (!checkDepth(value, depth + 1)) return false;
      }
    }
    return true;
  }

  if (!checkDepth(content, 0)) {
    return { valid: false, error: "Content nesting too deep (max 10 levels)" };
  }

  return { valid: true };
}

/**
 * Get user email from Firebase auth token in cookie
 */
async function getUserEmailFromRequest(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("auth-session");

    if (!sessionCookie?.value) {
      return null;
    }

    const result = await verifyIdToken(sessionCookie.value);
    return result?.email || null;
  } catch (error) {
    console.error("Error getting user from token:", error);
    return null;
  }
}

/**
 * GET - Fetch page content
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pageSlug = searchParams.get("pageSlug");

  if (!pageSlug) {
    return NextResponse.json({ error: "Missing pageSlug parameter" }, { status: 400 });
  }

  try {
    const { content, version } = await getPageContent(pageSlug);
    return NextResponse.json({ content, version });
  } catch (error) {
    console.error("Error fetching page content:", error);
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 });
  }
}

/**
 * PUT - Update page content
 */
export async function PUT(request: NextRequest) {
  try {
    // Get user email from auth
    const userEmail = await getUserEmailFromRequest();

    if (!userEmail) {
      return NextResponse.json({ error: "Unauthorized - please log in" }, { status: 401 });
    }

    // Check if user is admin
    const adminStatus = await isUserAdmin(userEmail);
    if (!adminStatus) {
      return NextResponse.json({ error: "Forbidden - admin access required" }, { status: 403 });
    }

    // Parse request body
    const body = await request.json();
    const { pageSlug, content } = body;

    if (!pageSlug || typeof pageSlug !== "string") {
      return NextResponse.json({ error: "Missing or invalid pageSlug" }, { status: 400 });
    }

    // Validate content structure
    const validation = validateContent(content);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // Save content
    const result = await upsertPageContent(pageSlug, content, userEmail);

    if (!result.success) {
      return NextResponse.json({ error: result.error || "Failed to save" }, { status: 500 });
    }

    return NextResponse.json({ success: true, newVersion: result.version });
  } catch (error) {
    console.error("CMS update error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update content" },
      { status: 500 }
    );
  }
}
