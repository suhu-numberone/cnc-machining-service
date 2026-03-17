import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { uploadToS3 } from "@/lib/s3";
import { verifyIdToken } from "@/lib/firebaseAdmin";
import { isUserAdmin } from "@/lib/admin";

// Magic numbers for file type verification
const FILE_SIGNATURES: Record<string, number[][]> = {
  "image/jpeg": [[0xff, 0xd8, 0xff]],
  "image/png": [[0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]],
  "image/gif": [
    [0x47, 0x49, 0x46, 0x38, 0x37, 0x61], // GIF87a
    [0x47, 0x49, 0x46, 0x38, 0x39, 0x61], // GIF89a
  ],
  "image/webp": [[0x52, 0x49, 0x46, 0x46]], // RIFF (WebP starts with RIFF)
};

// Verify file type by checking magic numbers
function verifyFileSignature(buffer: Buffer, mimeType: string): boolean {
  const signatures = FILE_SIGNATURES[mimeType];
  if (!signatures) return false;

  return signatures.some((signature) =>
    signature.every((byte, index) => buffer[index] === byte)
  );
}

// Generate safe filename with timestamp and random suffix
function generateSafeFilename(mimeType: string): string {
  const ext = mimeType.split("/")[1] === "jpeg" ? "jpg" : mimeType.split("/")[1];
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 10);
  return `${timestamp}-${random}.${ext}`;
}

export async function POST(request: NextRequest) {
  try {
    // Authenticate the request
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("auth-session");

    if (!sessionCookie?.value) {
      return NextResponse.json({ error: "Unauthorized - please log in" }, { status: 401 });
    }

    const user = await verifyIdToken(sessionCookie.value);
    if (!user?.email) {
      return NextResponse.json({ error: "Unauthorized - invalid session" }, { status: 401 });
    }

    const adminStatus = await isUserAdmin(user.email);
    if (!adminStatus) {
      return NextResponse.json({ error: "Forbidden - admin access required" }, { status: 403 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate MIME type
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed." },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 10MB." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Verify actual file type by checking magic numbers
    if (!verifyFileSignature(buffer, file.type)) {
      return NextResponse.json(
        { error: "File content does not match declared type." },
        { status: 400 }
      );
    }

    // Generate safe filename and upload to S3 cms folder
    const safeFilename = generateSafeFilename(file.type);
    const url = await uploadToS3(buffer, safeFilename, file.type, "cms");

    return NextResponse.json({ url });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Upload error:", error);
    }
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
