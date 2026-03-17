"use client";

import {
  useState,
  useRef,
  useEffect,
  CSSProperties,
  ElementType,
  KeyboardEvent,
} from "react";
import { useCMS } from "@/contexts/CMSContext";

interface EditableTextProps {
  path: string;
  defaultValue: string;
  as?: ElementType;
  multiline?: boolean;
  className?: string;
  style?: CSSProperties;
  deletable?: boolean;
  onDelete?: () => void;
}

export function EditableText({
  path,
  defaultValue,
  as: Component = "span",
  multiline = false,
  className,
  style,
  deletable = true,
  onDelete,
}: EditableTextProps) {
  const { isEditMode, getContentValue, updateContent } = useCMS();
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const currentValue = getContentValue(path, defaultValue);
  const isDeleted = currentValue === "" || currentValue === "__deleted__";

  const handleDelete = () => {
    updateContent(path, "__deleted__");
    onDelete?.();
  };

  const handleRestore = () => {
    updateContent(path, defaultValue);
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Select all text
      if (inputRef.current instanceof HTMLInputElement) {
        inputRef.current.select();
      } else if (inputRef.current instanceof HTMLTextAreaElement) {
        inputRef.current.setSelectionRange(0, inputRef.current.value.length);
      }
    }
  }, [isEditing]);

  // Non-edit mode - render normally (hide deleted items)
  if (!isEditMode) {
    if (isDeleted) return null;
    return (
      <Component className={className} style={style}>
        {currentValue}
      </Component>
    );
  }

  // Edit mode - show deleted state with restore button
  if (isDeleted && deletable) {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
        <span style={{ fontSize: "12px", color: "#6B7280", fontStyle: "italic", textDecoration: "line-through" }}>
          {defaultValue}
        </span>
        <button
          onClick={handleRestore}
          title="Restore"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", display: "inline-flex", alignItems: "center" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
        </button>
      </span>
    );
  }

  // Edit mode - actively editing
  if (isEditing) {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsEditing(false);
      }
      if (e.key === "Enter" && !multiline) {
        setIsEditing(false);
      }
    };

    const inputStyle: CSSProperties = {
      ...style,
      background: "rgba(208, 153, 71, 0.15)",
      border: "2px solid #D09947",
      borderRadius: "4px",
      outline: "none",
      padding: "4px 8px",
      width: "100%",
      minWidth: "100px",
      font: "inherit",
      color: "inherit",
      resize: multiline ? "vertical" : "none",
    };

    if (multiline) {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={currentValue}
          onChange={(e) => updateContent(path, e.target.value)}
          onBlur={() => setIsEditing(false)}
          onKeyDown={handleKeyDown}
          className={className}
          style={{ ...inputStyle, minHeight: "80px" }}
          rows={3}
        />
      );
    }

    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={currentValue}
        onChange={(e) => updateContent(path, e.target.value)}
        onBlur={() => setIsEditing(false)}
        onKeyDown={handleKeyDown}
        className={className}
        style={inputStyle}
      />
    );
  }

  // Edit mode - not actively editing, show clickable state
  const editableStyle: CSSProperties = {
    ...style,
    cursor: "pointer",
    outline: "2px dashed rgba(208, 153, 71, 0.4)",
    outlineOffset: "2px",
    borderRadius: "2px",
    transition: "outline-color 0.2s",
  };

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
      <Component
        className={className}
        style={editableStyle}
        onClick={() => setIsEditing(true)}
        onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
          e.currentTarget.style.outlineColor = "#D09947";
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
          e.currentTarget.style.outlineColor = "rgba(208, 153, 71, 0.4)";
        }}
        title="Click to edit"
      >
        {currentValue}
      </Component>
      {deletable && (
        <button
          onClick={(e) => { e.stopPropagation(); handleDelete(); }}
          title="Delete"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", display: "inline-flex", alignItems: "center", flexShrink: 0 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      )}
    </span>
  );
}
