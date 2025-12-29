import HeroBackground from "./HeroBackground";
import HeroDataStrip from "./HeroDataStrip";
import HeroHeadline from "./HeroHeadline";
import PillNav from "./PillNav";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <HeroBackground />

      {/* Main hero content */}
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <div className="-mt-20 flex flex-col items-center gap-10">
          <HeroHeadline />
          <PillNav />
        </div>
      </div>

      {/* Bottom copy – moved higher */}
      <div className="absolute bottom-48 w-full text-center z-10">
        <p className="text-sm text-white/70">
          <span className="text-white">Cloud Native.</span> Engineered for scale
          and reliability.
        </p>
      </div>

      {/* Separation / data strip */}
      <HeroDataStrip />
    </section>
  );
}
