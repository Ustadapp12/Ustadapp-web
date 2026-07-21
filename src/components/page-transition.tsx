"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type TransitionContextValue = {
  revealTransition: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("usePageTransition must be used within PageTransitionProvider");
  return ctx;
}

// Matches the /hello page's own backdrop so the curtain closing is invisible —
// it only becomes noticeable once it slides open over the destination route.
const CURTAIN_BG = "radial-gradient(circle at 50% 20%, #3fbf87 0%, #1f7a56 55%, #145a3f 100%)";
const OPEN_DURATION_MS = 620;

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "covering" | "opening">("idle");
  const pendingHref = useRef<string | null>(null);

  const revealTransition = useCallback(
    (href: string) => {
      pendingHref.current = href;
      setPhase("covering");
      // Paint the curtain fully closed before swapping routes underneath it.
      requestAnimationFrame(() => router.push(href));
    },
    [router],
  );

  useEffect(() => {
    if (phase === "covering" && pendingHref.current && pathname === pendingHref.current) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPhase("idle");
        return;
      }
      // Let the destination route paint one frame before opening the curtain over it.
      const id = requestAnimationFrame(() => setPhase("opening"));
      return () => cancelAnimationFrame(id);
    }
  }, [pathname, phase]);

  useEffect(() => {
    if (phase !== "opening") return;
    const t = setTimeout(() => setPhase("idle"), OPEN_DURATION_MS);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <TransitionContext.Provider value={{ revealTransition }}>
      {children}
      {phase !== "idle" && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[999] flex">
          <div
            className="h-full w-1/2"
            style={{
              background: CURTAIN_BG,
              backgroundSize: "200% 100%",
              backgroundPosition: "left center",
              transform: phase === "opening" ? "translateX(-100%)" : "translateX(0)",
              transition: `transform ${OPEN_DURATION_MS}ms cubic-bezier(0.65,0,0.35,1)`,
            }}
          />
          <div
            className="h-full w-1/2"
            style={{
              background: CURTAIN_BG,
              backgroundSize: "200% 100%",
              backgroundPosition: "right center",
              transform: phase === "opening" ? "translateX(100%)" : "translateX(0)",
              transition: `transform ${OPEN_DURATION_MS}ms cubic-bezier(0.65,0,0.35,1)`,
            }}
          />
        </div>
      )}
    </TransitionContext.Provider>
  );
}
