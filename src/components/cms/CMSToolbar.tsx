"use client";

import { Edit3, Save, X, Eye, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCMSOptional } from "@/contexts/CMSContext";

export function CMSToolbar() {
  const { isAdmin } = useAuth();
  const cms = useCMSOptional();

  // Don't render if not admin or no CMS context
  if (!isAdmin || !cms) return null;

  const {
    isEditMode,
    toggleEditMode,
    hasUnsavedChanges,
    saveAllChanges,
    discardChanges,
    isSaving,
  } = cms;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        display: "flex",
        gap: "8px",
        zIndex: 9999,
        background: "#1a1a1a",
        padding: "12px",
        borderRadius: "12px",
        border: "1px solid #333",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
      }}
    >
      {isEditMode ? (
        <>
          {/* Save button - only show if there are changes */}
          {hasUnsavedChanges && (
            <>
              <button
                onClick={saveAllChanges}
                disabled={isSaving}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 18px",
                  background: "#D09947",
                  color: "#000",
                  border: "none",
                  borderRadius: "8px",
                  cursor: isSaving ? "wait" : "pointer",
                  fontWeight: 600,
                  fontSize: "14px",
                  transition: "all 0.2s",
                }}
              >
                {isSaving ? (
                  <>
                    <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    Save Changes
                  </>
                )}
              </button>

              <button
                onClick={discardChanges}
                disabled={isSaving}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 18px",
                  background: "#333",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                <X size={16} />
                Discard
              </button>
            </>
          )}

          {/* Exit edit mode / Preview button */}
          <button
            onClick={toggleEditMode}
            disabled={isSaving}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "10px 18px",
              background: hasUnsavedChanges ? "#333" : "#D09947",
              color: hasUnsavedChanges ? "#fff" : "#000",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: hasUnsavedChanges ? 500 : 600,
              fontSize: "14px",
            }}
          >
            <Eye size={16} />
            {hasUnsavedChanges ? "Preview" : "Done Editing"}
          </button>
        </>
      ) : (
        // Enter edit mode button
        <button
          onClick={toggleEditMode}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "10px 18px",
            background: "#D09947",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "14px",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#EEC569";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#D09947";
          }}
        >
          <Edit3 size={16} />
          Edit Page
        </button>
      )}

      {/* Spin animation for loader */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
