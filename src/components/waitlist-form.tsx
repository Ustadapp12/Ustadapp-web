"use client";

import { useState } from "react";

const WAITLIST_URL = "https://ustad-app-backend-git-main-ustadapp.vercel.app/api/v1/waitlist";

type Status = "idle" | "loading" | "success" | "duplicate" | "invalid_email" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Client-side guard before hitting the network
    if (!email.includes("@") || !email.includes(".")) {
      setStatus("invalid_email");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(WAITLIST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.status === 201) setStatus("success");
      else if (res.status === 409) setStatus("duplicate");
      else if (res.status === 400) setStatus("invalid_email");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  // ── Success ──────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="mt-7 flex flex-col items-center gap-3 py-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/30">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 text-emerald-300" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-base font-semibold text-white">You&apos;re on the list!</p>
        <p className="text-sm text-white/60">We&apos;ll be in touch when Ustad launches.</p>
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
        <p className="text-sm text-white/60">We&apos;ll reach out when Ustad launches.</p>
      </div>
    );
  }

  // ── Form ─────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <div className="w-full max-w-xs">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Enter your email"
            required
            disabled={status === "loading"}
            className={`w-full rounded-lg bg-white px-4 py-3 text-sm text-[#0d1b2a] outline-none ring-2 transition-all placeholder:text-gray-400 disabled:opacity-60 ${
              status === "invalid_email" ? "ring-red-400" : "ring-transparent focus:ring-[#05966A]"
            }`}
          />
          {status === "invalid_email" && (
            <p className="mt-1.5 text-left text-xs text-red-300">Please enter a valid email address.</p>
          )}
          {status === "error" && (
            <p className="mt-1.5 text-left text-xs text-red-300">Something went wrong — please try again.</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="gradient-btn cta-sheen flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Joining…
            </>
          ) : (
            "Join the waitlist"
          )}
        </button>
      </div>
      <p className="mt-4 text-xs text-white/50">No spam, ever. Unsubscribe at any time.</p>
    </form>
  );
}
