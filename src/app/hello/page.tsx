import type { Metadata } from "next";
import { HelloExperience } from "@/components/hello/hello-experience";

export const metadata: Metadata = {
  title: "Hey there!",
  robots: { index: false, follow: false },
};

// Static export (see next.config.ts: output: "export") means there is no
// server to read the request's search params from at render time — mood is
// resolved entirely client-side, inside HelloExperience.
export default function HelloPage() {
  return <HelloExperience />;
}
