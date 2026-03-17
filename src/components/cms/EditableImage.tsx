"use client";

import { useState, useRef, CSSProperties } from "react";
import Image from "next/image";
import { Upload, Loader2 } from "lucide-react";
import { useCMS } from "@/contexts/CMSContext";

interface EditableImageProps {
  path: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}

export function EditableImage({
  path,
  defaultSrc,
  alt,
  className,
  containerClassName,
  style,
  width,
  height,
  fill,
  priority,
}: EditableImageProps) {
  const { isEditMode, getContentValue, updateContent } = useCMS();
  const [isUploading, setIsUploading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentSrc = getContentValue(path, defaultSrc);

  const handleUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Upload failed");
      }

      const { url } = await response.json();
      updateContent(path, url);
    } catch (error) {
      console.error("Upload error:", error);
      alert(error instanceof Error ? error.message : "Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file);
    }
    // Reset input so same file can be selected again
    e.target.value = "";
  };

  // Determine if we need to use <img> for external URLs
  const isExternal = currentSrc.startsWith("http") || currentSrc.includes(".gif");

  // Image props for Next/Image
  const imageProps = fill
    ? { fill: true as const, style: { objectFit: "cover" as const, ...style } }
    : { width: width || 400, height: height || 300, style };

  // Non-edit mode - render image normally (no wrapper div)
  if (!isEditMode) {
    if (isExternal) {
      const imgStyle: CSSProperties = fill
        ? { position: "absolute" as const, width: "100%", height: "100%", objectFit: "cover", ...style }
        : style || {};
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={currentSrc}
          alt={alt}
          className={className}
          style={imgStyle}
        />
      );
    }

    return (
      <Image
        src={currentSrc}
        alt={alt}
        className={className}
        priority={priority}
        {...imageProps}
      />
    );
  }

  // Edit mode - wrap in a container for the upload overlay
  return (
    <div
      className={containerClassName}
      style={{
        position: "relative",
        display: fill ? "block" : "inline-block",
        width: fill ? "100%" : width,
        height: fill ? "100%" : height,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      {isExternal ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={currentSrc}
          alt={alt}
          className={className}
          style={{ width: "100%", height: "100%", objectFit: "cover", ...style }}
        />
      ) : (
        <Image
          src={currentSrc}
          alt={alt}
          className={className}
          priority={priority}
          {...imageProps}
        />
      )}

      {/* Edit overlay */}
      {(isHovered || isUploading) && (
        <div
          onClick={() => !isUploading && inputRef.current?.click()}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: isUploading ? "wait" : "pointer",
            transition: "opacity 0.2s",
            zIndex: 10,
            borderRadius: "inherit",
          }}
        >
          {isUploading ? (
            <>
              <Loader2
                size={32}
                color="#D09947"
                className="animate-spin"
              />
              <span style={{ color: "#D09947", fontSize: "12px", marginTop: "8px" }}>
                Uploading...
              </span>
            </>
          ) : (
            <>
              <Upload size={32} color="#D09947" />
              <span style={{ color: "#D09947", fontSize: "12px", marginTop: "8px" }}>
                Click to replace
              </span>
            </>
          )}
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
}
