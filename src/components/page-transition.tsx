"use client";

import Image from "next/image";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { ConfettiPiece } from "@/components/hello/hello-experience";

type HelloSnapshot = {
  image: string;
  headline: string;
  message: string;
  button: string;
  confetti: ConfettiPiece[];
};

type TransitionContextValue = {
  revealTransition: (href: string, snapshot: HelloSnapshot) => void;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("usePageTransition must be used within PageTransitionProvider");
  return ctx;
}

// Matches the /hello page's own backdrop so this replica is indistinguishable
// from the live page underneath at the instant the two halves start parting.
const BACKDROP = "radial-gradient(circle at 50% 20%, #3fbf87 0%, #1f7a56 55%, #145a3f 100%)";
const OPEN_DURATION_MS = 620;

// A frozen, non-interactive replica of the /hello content (mascot, speech
// bubble, button) — no looping animations, since this only needs to look
// right for the brief moment it's sliding off screen.
function HelloSnapshotVisual({ image, headline, message, button, confetti }: HelloSnapshot) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-6" style={{ background: BACKDROP }}>
      {confetti.map((piece, i) => (
        <div
          key={i}
          aria-hidden
          className="hello-confetti-fall pointer-events-none absolute top-0 z-30"
          style={{
            left: piece.left,
            width: piece.size,
            height: piece.size,
            background: piece.color,
            borderRadius: piece.radius,
            animationDuration: piece.duration,
            animationDelay: piece.delay,
          }}
        />
      ))}
      <div className="relative z-10 flex w-full max-w-[420px] flex-col items-center text-center">
        <div className="relative mb-[18px] flex h-[240px] w-[240px] items-center justify-center">
          <div aria-hidden className="absolute h-[210px] w-[210px] rounded-full blur-[28px]" style={{ background: "#ffe08a" }} />
          <Image
            src={image}
            alt=""
            aria-hidden
            width={220}
            height={220}
            className="relative h-[220px] w-[220px] object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
          />
        </div>
        <div className="relative mb-6 flex min-h-16 flex-col justify-center rounded-[20px] bg-white px-[22px] py-[18px] shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
          <div className="absolute left-1/2 top-[-9px] h-4 w-4 -translate-x-1/2 rotate-45 bg-white" />
          <div className="font-baloo text-[19px] font-extrabold leading-[1.3] text-[#1f7a56]">{headline}</div>
          <p className="mt-2 text-[14.5px] leading-[1.55] text-[#3a3a38]">{message}</p>
        </div>
        <div className="font-baloo inline-flex items-center gap-2 rounded-full bg-[#ffcf4d] px-[34px] py-[14px] text-[17px] font-bold text-[#3a2a00] shadow-[0_8px_22px_rgba(0,0,0,0.18)]">
          {button}
        </div>
      </div>
    </div>
  );
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "covering" | "opening">("idle");
  const [snapshot, setSnapshot] = useState<HelloSnapshot | null>(null);
  const pendingHref = useRef<string | null>(null);

  const revealTransition = useCallback(
    (href: string, nextSnapshot: HelloSnapshot) => {
      pendingHref.current = href;
      setSnapshot(nextSnapshot);
      setPhase("covering");
      // Paint the replica fully in place (matching the live page beneath) before swapping routes.
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
      // Let the destination route paint one frame before splitting the replica apart over it.
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
      {phase !== "idle" && snapshot && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[999]">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "inset(0 50% 0 0)",
              transform: phase === "opening" ? "translateX(-100%)" : "translateX(0)",
              transition: `transform ${OPEN_DURATION_MS}ms cubic-bezier(0.65,0,0.35,1)`,
            }}
          >
            <HelloSnapshotVisual {...snapshot} />
          </div>
          <div
            className="absolute inset-0"
            style={{
              clipPath: "inset(0 0 0 50%)",
              transform: phase === "opening" ? "translateX(100%)" : "translateX(0)",
              transition: `transform ${OPEN_DURATION_MS}ms cubic-bezier(0.65,0,0.35,1)`,
            }}
          >
            <HelloSnapshotVisual {...snapshot} />
          </div>
        </div>
      )}
    </TransitionContext.Provider>
  );
}
