import Image from "next/image";
import bell from "@/assets/circles/bell.svg";
import bell2 from "@/assets/circles/bell2.svg";
import bell3 from "@/assets/circles/bell3.svg";
import { Mascot } from "@/components/mascot";
import { WaitlistForm } from "@/components/waitlist-form";

export function FinalCta() {
  return (
    <section id="waitlist" className="relative overflow-hidden bg-gradient-to-b from-[#0F1B2A] via-[#05966A] to-[#0B1E18] px-6 py-14 text-center md:px-16 md:py-20">
      <Image src={bell2} alt="" aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2" />
      <Image src={bell} alt="" aria-hidden className="pointer-events-none absolute -right-16 bottom-0 h-[420px] w-[420px]" />
      <Image src={bell3} alt="" aria-hidden className="pointer-events-none absolute -left-16 top-0 h-72 w-72" />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center">
        <Mascot size={140} />
        <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">Ready to Start Your Quran Journey?</h2>
        <p className="mt-3 text-sm text-white/70">
          Be the first to experience it. Join the waitlist and get early access.
        </p>
        <div className="w-full">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
