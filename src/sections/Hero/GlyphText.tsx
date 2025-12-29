import { useMemo } from "react";

interface GlyphTextProps {
  text: string;
  className?: string;
}

export default function GlyphText({ text, className = "" }: GlyphTextProps) {
  const glyphs = useMemo(
    () =>
      text.split("").map((char, i) => {
        const delay = Math.random() * 3;
        const duration = 2 + Math.random() * 2;

        return {
          char,
          key: `${char}-${i}`,
          style: {
            animation: `glyph-shine ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
          } as React.CSSProperties,
        };
      }),
    [text]
  );

  return (
    <span className={`inline-flex flex-wrap leading-relaxed ${className}`}>
      {glyphs.map(({ char, key, style }) => (
        <span key={key} style={style} className="inline-block text-white/70">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
