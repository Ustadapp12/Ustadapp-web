"use client";

import { useState } from "react";

const WAITLIST_URL = "https://ustad-app-backend.vercel.app/api/v1/waitlist";

type Status = "idle" | "loading" | "success" | "duplicate" | "invalid_email" | "error";

export function FooterSubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 py-1">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 text-emerald-600" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0d1b2a]">You&apos;re on the list!</p>
          <p className="text-xs text-gray-400">We&apos;ll be in touch when Ustad launches.</p>
        </div>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div className="flex items-center gap-3 py-1">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-50 ring-1 ring-amber-200">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 text-amber-500" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0d1b2a]">Already subscribed!</p>
          <p className="text-xs text-gray-400">We&apos;ll reach out when Ustad launches.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex gap-2">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Your email"
            required
            disabled={status === "loading"}
            className={`w-full rounded-lg border px-3 py-2.5 text-sm text-[#0d1b2a] outline-none placeholder:text-gray-400 transition disabled:opacity-60 ${
              status === "invalid_email"
                ? "border-red-300 bg-red-50 focus:ring-1 focus:ring-red-300"
                : "border-gray-200 bg-white focus:border-[#05966a] focus:ring-1 focus:ring-[#05966a]/30"
            }`}
          />
          {status === "invalid_email" && (
            <p className="mt-1 text-[10px] text-red-500">Enter a valid email address.</p>
          )}
          {status === "error" && (
            <p className="mt-1 text-[10px] text-red-500">Something went wrong — please try again.</p>
          )}
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="gradient-btn cta-sheen flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-bold text-white active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
      <p className="mt-1.5 text-[10px] text-gray-400">By subscribing you agree to our Privacy Policy.</p>
    </form>
  );
}
