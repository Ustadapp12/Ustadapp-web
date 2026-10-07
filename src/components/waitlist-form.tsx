"use client";

import { useState } from "react";
import { WaitlistCelebration } from "@/components/waitlist-celebration";
import { useWaitlistResult } from "@/components/waitlist-context";

const WAITLIST_URL = "https://ustad-app-backend-git-main-ustadapp.vercel.app/api/v1/waitlist";

// Android already shipped (live on Google Play), so this form only ever
// signs people up for the iOS waitlist — no platform picker needed.
const PLATFORM = "ios";

type Status = "idle" | "success" | "duplicate" | "invalid_email" | "missing_email";

export function WaitlistForm({
  celebrateInline = true,
  align = "center",
}: {
  // The final-CTA instance shows the confetti/medal celebration in place.
  // Other instances (e.g. the hero) hand the "done" signal to that instance
  // via WaitlistContext and scroll the page down to it instead.
  celebrateInline?: boolean;
  // Row alignment for the chip/email/button rows — "left" centers on mobile
  // and left-aligns at the lg breakpoint, matching hero copy alignment.
  align?: "center" | "left";
} = {}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const { result, complete } = useWaitlistResult();
  const displayStatus: Status = celebrateInline && result !== "idle" ? result : status;
  const rowJustify = align === "left" ? "justify-center lg:justify-start" : "justify-center";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

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
    if (celebrateInline) {
      setStatus("success");
    } else {
      // The hero instance never shows the celebration itself — reset back to
      // a blank form and send the visitor down to where it's shown instead.
      setStatus("idle");
      setEmail("");
      document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    complete("success");

    fetch(WAITLIST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, app_type: PLATFORM }),
    })
      .then((res) => {
        if (res.status === 409) {
          if (celebrateInline) setStatus("duplicate");
          complete("duplicate");
        }
      })
      .catch(() => {
        // Swallow network errors — the user already sees success and the
        // client-side format check already ruled out the common failure case.
      });
  }

  // ── Success ──────────────────────────────────────────
  if (displayStatus === "success") {
    return (
      <div className="reveal-split mt-7 flex w-full flex-col items-center gap-1 py-2">
        <WaitlistCelebration />
        <p className="text-base font-semibold text-white">You&apos;re on the list!</p>
        <p className="text-sm text-white/60">We&apos;ll be in touch when UstadApp launches.</p>
      </div>
    );
  }

  // ── Already registered ───────────────────────────────
  if (displayStatus === "duplicate") {
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
      {/* Email Input */}
      <div className={`mt-7 flex flex-wrap items-center gap-3 ${rowJustify}`}>
        <div className="min-w-[220px] max-w-xs flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Enter your email"
            required
            suppressHydrationWarning
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
          suppressHydrationWarning
          className="gradient-btn cta-sheen flex shrink-0 items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white active:scale-[0.97] transition-all"
        >
          Join the waitlist for iOS
        </button>
      </div>
      <p className="mt-4 text-xs text-white/50">Start your learning journey today</p>
    </form>
  );
}
