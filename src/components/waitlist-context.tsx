"use client";

import { createContext, useContext, useState } from "react";

type WaitlistResult = "idle" | "success" | "duplicate";

const WaitlistContext = createContext<{
  result: WaitlistResult;
  complete: (result: "success" | "duplicate") => void;
} | null>(null);

// Lets any WaitlistForm instance on the page (hero, final CTA, ...) report a
// completed signup. The final-CTA instance is the only one that renders the
// celebration, so a signup from the hero form still needs to land there.
export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [result, setResult] = useState<WaitlistResult>("idle");
  return (
    <WaitlistContext.Provider value={{ result, complete: setResult }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlistResult() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) throw new Error("useWaitlistResult must be used within a WaitlistProvider");
  return ctx;
}
