import { NextRequest, NextResponse } from "next/server";
import { uploadToS3 } from "@/lib/s3";

// Allowed file extensions for contact form attachments
const ALLOWED_EXTENSIONS = [
  ".stp", ".step", ".stl", ".igs", ".iges", ".sldprt", ".x_t",
  ".jpg", ".jpeg", ".png", ".pdf", ".zip", ".rar"
];

// MIME type mappings
const MIME_TYPES: Record<string, string> = {
  ".stp": "application/stp",
  ".step": "application/step",
  ".stl": "model/stl",
  ".igs": "model/iges",
  ".iges": "model/iges",
  ".sldprt": "application/sldworks",
  ".x_t": "application/x-parasolid",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".pdf": "application/pdf",
  ".zip": "application/zip",
  ".rar": "application/x-rar-compressed",
};

// Sanitize filename
function sanitizeFilename(filename: string): string {
  const basename = filename.split(/[/\\]/).pop() || "file";
  return basename.replace(/[^a-zA-Z0-9._-]/g, "_");
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Get file extension
    const ext = "." + file.name.split(".").pop()?.toLowerCase();

    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return NextResponse.json(
        { error: `File type ${ext} not allowed. Allowed types: ${ALLOWED_EXTENSIONS.join(", ")}` },
        { status: 400 }
      );
    }

    // Validate file size (max 25MB per file)
    const maxSize = 25 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 25MB." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const safeFilename = sanitizeFilename(file.name);
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    const url = await uploadToS3(buffer, safeFilename, contentType, "contact-attachments");

    return NextResponse.json({
      url,
      filename: safeFilename,
    });
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
