"use client";

import Lottie from "lottie-react";
import celebrationAnimation from "./celebration.json";
import congratsAnimation from "./congrats.json";

export function WaitlistCelebration() {
  return (
    <div className="relative flex h-24 w-full max-w-[240px] items-center justify-center sm:h-28 sm:max-w-[280px] md:h-32 md:max-w-[320px]">
      {/* Confetti burst from the left */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 aspect-square w-[65%] -translate-y-1/2"
      >
        <Lottie animationData={celebrationAnimation} loop={false} style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Confetti burst from the right (mirrored so it reads as coming from that side) */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 aspect-square w-[65%] -translate-y-1/2 scale-x-[-1]"
      >
        <Lottie animationData={celebrationAnimation} loop={false} style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Medal — plays alongside the confetti from the start, then loops */}
      <div className="relative z-10 aspect-[5/3] w-28 sm:w-32 md:w-36">
        <Lottie animationData={congratsAnimation} loop style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}
