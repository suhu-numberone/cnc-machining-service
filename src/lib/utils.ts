import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// S3 bucket URL for images
export const S3_URL = "https://apex-batch-images.s3.us-east-1.amazonaws.com";

// Helper to get S3 image URL from local path
export function getImageUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${S3_URL}/${cleanPath}`;
}
