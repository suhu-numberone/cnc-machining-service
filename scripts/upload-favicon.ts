import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { readFileSync } from "fs";
import { join } from "path";

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET || "apex-batch-images";

async function uploadFavicon() {
  try {
    // Read the favicon file
    const faviconPath = join(process.cwd(), ".claude", "apexbatch-favicon.png");
    const fileBuffer = readFileSync(faviconPath);

    // Upload to S3
    const key = "favicon.png";
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: fileBuffer,
      ContentType: "image/png",
      CacheControl: "public, max-age=31536000, immutable",
    });

    await s3Client.send(command);

    const url = `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION || "us-east-1"}.amazonaws.com/${key}`;
    console.log("✅ Favicon uploaded successfully!");
    console.log("📍 URL:", url);

    return url;
  } catch (error) {
    console.error("❌ Error uploading favicon:", error);
    throw error;
  }
}

uploadFavicon();
