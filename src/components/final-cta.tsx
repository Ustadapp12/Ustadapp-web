import { AnimatedSection, FloatingBlob } from "@/components/animations";
import { Mascot } from "@/components/mascot";
import { TrustBadges } from "@/components/trust-badges";
import { WaitlistForm } from "@/components/waitlist-form";

export function FinalCta() {
  return (
    <AnimatedSection id="waitlist" className="relative overflow-hidden bg-gradient-to-b from-[#3E8E54] to-[#2C7A48] px-6 py-14 text-center md:px-16 md:py-20">
      <FloatingBlob className="pointer-events-none absolute -left-10 top-0 h-48 w-48 blur-3xl opacity-15" variant="mint" />
      <FloatingBlob className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 blur-3xl opacity-12 [animation-delay:2s]" variant="gold" />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center">
        <Mascot size={140} />
        <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">Ready to Start Your Quran Journey?</h2>
        <p className="mt-3 text-sm text-white/70">
          Be the first to experience it. Join the waitlist and get early access.
        </p>
        <div className="w-full">
          <WaitlistForm />
        </div>
        <TrustBadges />
      </div>
    </AnimatedSection>
  );
}
