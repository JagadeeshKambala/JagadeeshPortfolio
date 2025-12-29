import GlyphText from "./GlyphText";

interface DataItemProps {
  label: string;
  value: string;
  align?: "left" | "center" | "right";
}

export default function DataItem({
  label,
  value,
  align = "left",
}: DataItemProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {/* Label */}
      <span className="text-[10px] tracking-widest uppercase text-white/40">
        {label}
      </span>

      {/* Glyph-level animated value */}
      <GlyphText text={value} className="text-xs tracking-widest" />
    </div>
  );
}
