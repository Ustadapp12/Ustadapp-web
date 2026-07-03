import Image from "next/image";
import lumo from "@/assets/lumo_transparent.png";
import { FloatingBlob } from "@/components/animations";

export type MascotProps = {
  size?: number;
  className?: string;
  withGlow?: boolean;
  priority?: boolean;
};

export function Mascot({ size = 220, className = "", withGlow = true, priority = false }: MascotProps) {
  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      {withGlow ? <FloatingBlob variant="mint" className="inset-0 opacity-70" /> : null}
      <Image
        src={lumo}
        alt="Lumo, the UstadApp mascot"
        fill
        sizes={`${size}px`}
        className="relative object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.25)]"
        priority={priority}
      />
    </div>
  );
}
