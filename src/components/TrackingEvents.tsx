"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  GA_ID,
  META_PIXEL_ID,
  trackContactClick,
  trackPageView,
} from "@/lib/analytics";

/**
 * Site-wide listeners that no single component owns.
 *
 * - Phone, text and email taps are caught with one delegated listener rather
 *   than an onClick on every link: those links live in the nav, the footer,
 *   the hero, the town pages and the lead page, and new ones get added.
 * - Meta's pixel only records the first page view by itself. The App Router
 *   swaps pages without a reload, so later views are sent from here. GA4's
 *   enhanced measurement already follows history changes on its own.
 */
export function TrackingEvents() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (!GA_ID && !META_PIXEL_ID) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      const href = a?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) trackContactClick("phone");
      else if (href.startsWith("sms:")) trackContactClick("sms");
      else if (href.startsWith("mailto:")) trackContactClick("email");
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (META_PIXEL_ID) trackPageView();
  }, [pathname]);

  return null;
}
