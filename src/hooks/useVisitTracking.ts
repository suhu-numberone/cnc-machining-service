"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "apex_visit_tracking";

interface VisitData {
  landingPage: string;
  landingTime: string;
  referrer: string;
  visitPath: { page: string; timestamp: string }[];
}

export function useVisitTracking() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const now = new Date().toISOString();
    const stored = sessionStorage.getItem(STORAGE_KEY);

    if (!stored) {
      // First visit - set landing page
      const visitData: VisitData = {
        landingPage: pathname,
        landingTime: now,
        referrer: document.referrer || "Direct",
        visitPath: [{ page: pathname, timestamp: now }],
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(visitData));
    } else {
      // Subsequent visit - add to path
      const visitData: VisitData = JSON.parse(stored);
      const lastVisit = visitData.visitPath[visitData.visitPath.length - 1];

      // Only add if different from last page
      if (lastVisit?.page !== pathname) {
        visitData.visitPath.push({ page: pathname, timestamp: now });
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(visitData));
      }
    }
  }, [pathname]);
}

export function getVisitData(): VisitData | null {
  if (typeof window === "undefined") return null;

  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (!stored) return null;

  return JSON.parse(stored);
}
