import GlyphText from "../Hero/GlyphText";
import ScrambleText from "../Hero/ScrambleText";

export default function ProjectIntro() {
  return (
    <div className="grid grid-cols-12 gap-8 items-start">
      {/* Left */}
      <div className="col-span-6">
        <ScrambleText
          text="Cloud Foundations"
          className="text-xs tracking-widest"
        />

        <h2 className="mt-4 text-4xl leading-tight font-light text-white">
          Projects shaped <br />
          through practice
        </h2>
      </div>

      {/* Right */}
      <div className="col-span-4 col-start-9">
        <p className="text-sm leading-relaxed">
          <GlyphText
            text="Each project explores how modern cloud platforms are designed, deployed, and maintained with a focus on stability and scalability."
            className="text-white/60"
          />
        </p>
      </div>
    </div>
  );
}
