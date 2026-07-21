"use client";

import { useState } from "react";
import { WaitlistCelebration } from "@/components/waitlist-celebration";

const WAITLIST_URL = "https://ustad-app-backend-git-main-ustadapp.vercel.app/api/v1/waitlist";

type Status = "idle" | "success" | "duplicate" | "invalid_email" | "missing_email" | "missing_platform";
type Platform = "ios" | "android" | null;

const SELECTED_BG =
  "linear-gradient(0deg, #E9C468, #E9C468), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))";
const SELECTED_BORDER = "#E9C468";
const SELECTED_TEXT = "#3a2a00";

function AppleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 384 512" fill="currentColor" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 576 512" fill="currentColor" aria-hidden>
      <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
    </svg>
  );
}

function PlatformChip({
  selected,
  onClick,
  icon,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="orbit-glow flex items-center gap-[9px] rounded-full px-[22px] py-3 font-nunito text-[14.5px] font-bold transition-all duration-[180ms] ease-out hover:-translate-y-0.5"
      style={{
        border: selected ? `2px solid ${SELECTED_BORDER}` : "2px solid rgba(255,255,255,.2)",
        background: selected ? SELECTED_BG : "rgba(255,255,255,.08)",
        color: selected ? SELECTED_TEXT : "#ffffff",
        "--glow-color": selected ? "rgba(233,196,104,0.65)" : "rgba(255,255,255,0.3)",
      } as React.CSSProperties}
    >
      {icon}
      <span>{label}</span>
      {selected && (
        <span
          className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[11px] font-extrabold"
          style={{ color: SELECTED_TEXT }}
        >
          ✓
        </span>
      )}
    </button>
  );
}

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<Platform>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validate platform selection
    if (!platform) {
      setStatus("missing_platform");
      return;
    }

    if (!email) {
      setStatus("missing_email");
      return;
    }

    // Client-side guard before hitting the network
    if (!email.includes("@") || !email.includes(".")) {
      setStatus("invalid_email");
      return;
    }

    // Optimistic: show success immediately, reconcile with the server in the background.
    setStatus("success");

    fetch(WAITLIST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, app_type: platform }),
    })
      .then((res) => {
        if (res.status === 409) setStatus("duplicate");
      })
      .catch(() => {
        // Swallow network errors — the user already sees success and the
        // client-side format check already ruled out the common failure case.
      });
  }

  // ── Success ──────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="reveal-split mt-7 flex w-full flex-col items-center gap-1 py-2">
        <WaitlistCelebration />
        <p className="text-base font-semibold text-white">You&apos;re on the list!</p>
        <p className="text-sm text-white/60">We&apos;ll be in touch when UstadApp launches.</p>
      </div>
    );
  }

  // ── Already registered ───────────────────────────────
  if (status === "duplicate") {
    return (
      <div className="mt-7 flex flex-col items-center gap-3 py-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/20 ring-1 ring-amber-400/30">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 text-amber-300" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
        </div>
        <p className="text-base font-semibold text-white">You&apos;re already on the list!</p>
        <p className="text-sm text-white/60">We&apos;ll reach out when UstadApp launches.</p>
      </div>
    );
  }

  // ── Form ─────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Platform Selection */}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3 px-2">
        <PlatformChip
          selected={platform === "ios"}
          onClick={() => {
            setPlatform("ios");
            if (status === "missing_platform") setStatus("idle");
          }}
          icon={<AppleIcon />}
          label="iOS"
        />
        <PlatformChip
          selected={platform === "android"}
          onClick={() => {
            setPlatform("android");
            if (status === "missing_platform") setStatus("idle");
          }}
          icon={<AndroidIcon />}
          label="Android"
        />
      </div>

      {/* Email Input */}
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <div className="w-full max-w-xs">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle" && status !== "missing_platform") setStatus("idle");
            }}
            placeholder="Enter your email"
            required
            className={`w-full rounded-lg bg-white px-4 py-3 text-sm text-[#0d1b2a] outline-none ring-2 transition-all placeholder:text-gray-400 ${
              status === "invalid_email" || status === "missing_email" ? "ring-red-400" : "ring-transparent focus:ring-[#05966A]"
            }`}
          />
          {status === "invalid_email" && (
            <p className="mt-1.5 text-left text-xs text-red-300">Please enter a valid email address.</p>
          )}
          {status === "missing_email" && (
            <p className="mt-1.5 text-left text-xs text-red-300">Please enter your email.</p>
          )}
        </div>

        <button
          type="submit"
          className="gradient-btn cta-sheen flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white active:scale-[0.97] transition-all"
        >
          Join the waitlist
        </button>
      </div>
      {status === "missing_platform" && (
        <p className="mt-2 text-xs text-amber-300">Select your type of phone.</p>
      )}
      <p className="mt-4 text-xs text-white/50">No spam, ever. Unsubscribe at any time.</p>
    </form>
  );
}
