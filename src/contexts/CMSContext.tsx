"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { useAuth } from "./AuthContext";
import { getNestedValue, setNestedValue } from "@/lib/pageContent";

interface PendingChange {
  path: string;
  value: unknown;
  timestamp: number;
}

interface CMSContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  pageContent: Record<string, unknown> | null;
  pendingChanges: Map<string, PendingChange>;
  updateContent: (path: string, value: unknown) => void;
  getContentValue: <T>(path: string, defaultValue: T) => T;
  saveAllChanges: () => Promise<void>;
  discardChanges: () => void;
  isSaving: boolean;
  hasUnsavedChanges: boolean;
  contentVersion: number;
  pageSlug: string;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

interface CMSProviderProps {
  children: ReactNode;
  initialContent: Record<string, unknown> | null;
  pageSlug: string;
  initialVersion?: number;
}

export function CMSProvider({
  children,
  initialContent,
  pageSlug,
  initialVersion = 1,
}: CMSProviderProps) {
  const { isAdmin, user } = useAuth();
  const [isEditMode, setIsEditMode] = useState(false);
  const [pageContent, setPageContent] = useState<Record<string, unknown> | null>(
    initialContent
  );
  const [pendingChanges, setPendingChanges] = useState<Map<string, PendingChange>>(
    new Map()
  );
  const [isSaving, setIsSaving] = useState(false);
  const [contentVersion, setContentVersion] = useState(initialVersion);

  const toggleEditMode = useCallback(() => {
    if (!isAdmin) return;
    setIsEditMode((prev) => {
      if (prev) {
        // Exiting edit mode - discard unsaved changes
        setPendingChanges(new Map());
      }
      return !prev;
    });
  }, [isAdmin]);

  const updateContent = useCallback((path: string, value: unknown) => {
    setPendingChanges((prev) => {
      const next = new Map(prev);
      next.set(path, { path, value, timestamp: Date.now() });
      return next;
    });
  }, []);

  const getContentValue = useCallback(
    <T,>(path: string, defaultValue: T): T => {
      // Check pending changes first
      const pending = pendingChanges.get(path);
      if (pending !== undefined) {
        return pending.value as T;
      }

      // Then check page content from DB
      const dbValue = getNestedValue(pageContent, path);
      if (dbValue !== undefined) {
        return dbValue as T;
      }

      // Fall back to default
      return defaultValue;
    },
    [pendingChanges, pageContent]
  );

  const saveAllChanges = useCallback(async () => {
    if (pendingChanges.size === 0 || !user?.email) return;

    setIsSaving(true);
    try {
      // Merge pending changes into current content
      const mergedContent: Record<string, unknown> = { ...(pageContent || {}) };
      pendingChanges.forEach((change) => {
        setNestedValue(mergedContent, change.path, change.value);
      });

      const response = await fetch("/api/cms/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pageSlug,
          content: mergedContent,
          version: contentVersion,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to save content");
      }

      // Update local state
      setPageContent(mergedContent);
      setContentVersion(result.newVersion);
      setPendingChanges(new Map());
    } catch (error) {
      console.error("Error saving changes:", error);
      alert(error instanceof Error ? error.message : "Failed to save changes");
    } finally {
      setIsSaving(false);
    }
  }, [pendingChanges, pageContent, pageSlug, contentVersion, user?.email]);

  const discardChanges = useCallback(() => {
    setPendingChanges(new Map());
  }, []);

  const value: CMSContextType = {
    isEditMode: isAdmin && isEditMode,
    toggleEditMode,
    pageContent,
    pendingChanges,
    updateContent,
    getContentValue,
    saveAllChanges,
    discardChanges,
    isSaving,
    hasUnsavedChanges: pendingChanges.size > 0,
    contentVersion,
    pageSlug,
  };

  return <CMSContext.Provider value={value}>{children}</CMSContext.Provider>;
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error("useCMS must be used within a CMSProvider");
  }
  return context;
}

/**
 * Hook to check if CMS is available (for components that might render outside CMSProvider)
 */
export function useCMSOptional() {
  return useContext(CMSContext);
}
