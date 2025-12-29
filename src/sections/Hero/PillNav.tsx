import ScrambleText from "./ScrambleText";

const items = ["Architecture", "Automation", "Reliability", "Scale"];

export default function PillNav() {
  return (
    <div className="group relative flex justify-center">
      {/* Pill container */}
      <div className="relative flex gap-8 rounded-full bg-black/40 px-10 py-4 backdrop-blur-md border border-white/10 overflow-hidden">
        {/* Mirror sweep */}
        <span className="pointer-events-none absolute inset-0">
          <span className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[200%] transition-all duration-700 ease-out" />
        </span>

        {/* Nav items */}
        {items.map((item) => (
          <ScrambleText key={item} text={item} />
        ))}
      </div>
    </div>
  );
}
