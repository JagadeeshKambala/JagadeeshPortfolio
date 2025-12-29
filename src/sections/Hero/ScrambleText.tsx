import { type ReactNode, useRef } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type Variant = "pill" | "inline";

interface Props {
  text: string;
  className?: string;
  children?: ReactNode;
  variant?: Variant;
}

export default function ScrambleText({
  text,
  className = "",
  children,
  variant = "pill",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  const onHover = () => {
    let iteration = 0;
    const original = text;

    const interval = setInterval(() => {
      if (!ref.current) return;

      ref.current.innerText = original
        .split("")
        .map((_, index) => {
          if (index < iteration) return original[index];
          return LETTERS[Math.floor(Math.random() * LETTERS.length)];
        })
        .join("");

      if (iteration >= original.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  /** Preserved legacy styles */
  const baseStyles =
    variant === "pill"
      ? "text-xs uppercase tracking-widest text-white/70 hover:text-white"
      : "text-white/70";

  return (
    <span
      ref={ref}
      onMouseEnter={onHover}
      className={`
        relative
        cursor-default
        transition-colors
        ${baseStyles}
        ${className}
      `}
    >
      {/* Legacy light sweep (unchanged) */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      {children ?? text}
    </span>
  );
}
