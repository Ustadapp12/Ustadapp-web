"use client";

import Image from "next/image";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import celebrationAnimation from "@/components/celebration.json";
import { DEFAULT_MOOD, MOODS, resolveMood, STAR_IMAGE, type Mood } from "@/lib/mood-config";
import { usePageTransition } from "@/components/page-transition";

type Sparkle = { left: string; top: string; size: string; duration: string; delay: string };
export type ConfettiPiece = { left: string; size: string; radius: string; color: string; duration: string; delay: string };

const CONFETTI_COLORS = ["#ffcf4d", "#ff8a65", "#4fd1a5", "#ffffff", "#7ec8ff"];
const STAR_COUNT = 16;

// How long the intro confetti stays fully visible before it fades out. The
// reveal below no longer waits on this — mascot/bubble/button launch
// immediately, at the same time the confetti burst starts.
const CONFETTI_HOLD_MS = 1100;
// Shared by the confetti fade-out (inline style below) and the .hello-zoom-in
// keyframe duration in globals.css — keep both in sync with this value.
const INTRO_TRANSITION_MS = 380;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createSparkles(count: number): Sparkle[] {
  return Array.from({ length: count }, () => ({
    left: `${randomBetween(0, 90)}%`,
    top: `${randomBetween(0, 80)}%`,
    size: `${randomBetween(12, 22)}px`,
    duration: `${randomBetween(1.8, 3.3)}s`,
    delay: `${randomBetween(0, 2)}s`,
  }));
}

function createConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, () => ({
    left: `${randomBetween(0, 100)}%`,
    size: `${randomBetween(6, 14)}px`,
    radius: Math.random() > 0.5 ? "50%" : "3px",
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    duration: `${randomBetween(1.1, 1.9)}s`,
    delay: `${randomBetween(0, 0.4)}s`,
  }));
}

export function HelloExperience() {
  const [mood, setMood] = useState<Mood>(DEFAULT_MOOD);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [confettiHidden, setConfettiHidden] = useState(false);
  const [launching, setLaunching] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  // The mood query param and the sparkle positions are only known/randomized
  // client-side, after mount — this is a static export (no server to read the
  // request URL from), so both are resolved here rather than causing a
  // hydration mismatch by reading them during render.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMood(resolveMood(new URLSearchParams(window.location.search).get("mood") ?? undefined));
    setSparkles(createSparkles(STAR_COUNT));
    // Mascot/bubble/button launch immediately, same time as the confetti burst.
    setRevealed(true);
    // The confetti burst itself still gets a moment to read as "huge" before
    // it fades out on its own timer, independent of the reveal above.
    const confettiTimer = setTimeout(() => setConfettiHidden(true), CONFETTI_HOLD_MS);
    return () => clearTimeout(confettiTimer);
  }, []);

  const { revealTransition } = usePageTransition();

  function handleGo() {
    if (launching) return;
    setLaunching(true);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const confettiPieces = reduceMotion ? [] : createConfetti(46);
    setConfetti(confettiPieces);
    // Confetti fall and the curtain-split reveal fire together, no wait between
    // them — the same piece configuration rides along in the snapshot so the
    // confetti keeps falling as the curtain splits apart, instead of getting
    // hidden the instant the curtain covers the live page.
    revealTransition("/", {
      image: MOODS[mood].image,
      headline: MOODS[mood].headline,
      message: MOODS[mood].message,
      button: MOODS[mood].button,
      confetti: confettiPieces,
    });
  }

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-6"
      style={{ background: "radial-gradient(circle at 50% 20%, #3fbf87 0%, #1f7a56 55%, #145a3f 100%)" }}
    >
      {sparkles.map((sparkle, i) => (
        <Image
          key={i}
          src={STAR_IMAGE}
          alt=""
          aria-hidden
          width={22}
          height={22}
          className="hello-twinkle pointer-events-none absolute drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
            animationDuration: sparkle.duration,
            animationDelay: sparkle.delay,
          }}
        />
      ))}

      {/* Huge intro confetti burst — launches together with the reveal below, then fades out on its own. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center ease-out"
        style={{ opacity: confettiHidden ? 0 : 1, transition: `opacity ${INTRO_TRANSITION_MS}ms` }}
      >
        <div className="aspect-square w-[95vmin]">
          <Lottie
            animationData={celebrationAnimation}
            loop={false}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {launching &&
        confetti.map((piece, i) => (
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

      {revealed && (
        <div className="relative z-10 flex w-full max-w-[420px] flex-col items-center text-center">
          <div className="hello-zoom-in relative mb-[18px] flex h-[240px] w-[240px] items-center justify-center">
            <div
              aria-hidden
              className="hello-glow-pulse absolute h-[210px] w-[210px] rounded-full blur-[28px]"
              style={{ background: "#ffe08a" }}
            />
            <Image
              src={MOODS[mood].image}
              alt="Lumo, the UstadApp mascot"
              width={220}
              height={220}
              priority
              className="hello-float relative h-[220px] w-[220px] object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
            />
          </div>

          <div className="hello-zoom-in relative mb-6 flex min-h-16 flex-col justify-center rounded-[20px] bg-white px-[22px] py-[18px] shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
            <div className="absolute left-1/2 top-[-9px] h-4 w-4 -translate-x-1/2 rotate-45 bg-white" />
            <div className="font-baloo text-[19px] font-extrabold leading-[1.3] text-[#1f7a56]">
              {MOODS[mood].headline}
            </div>
            <p className="mt-2 text-[14.5px] leading-[1.55] text-[#3a3a38]">{MOODS[mood].message}</p>
          </div>

          <button
            type="button"
            onClick={handleGo}
            className="hello-zoom-in font-baloo inline-flex items-center gap-2 rounded-full bg-[#ffcf4d] px-[34px] py-[14px] text-[17px] font-bold text-[#3a2a00] shadow-[0_8px_22px_rgba(0,0,0,0.18)] transition-transform duration-150 ease-out hover:scale-105 active:scale-[0.97]"
          >
            {launching ? "Taking you there…" : MOODS[mood].button}
          </button>
        </div>
      )}
    </div>
  );
}
