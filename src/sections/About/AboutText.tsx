import { useRef } from "react";

const LINES = [
  "I simplify cloud complexity through learning and practice,",
  "combining AWS fundamentals, automation,",
  "and a focus on reliable systems.",
  "Cloud engineering is not just what I study,",
  "it’s what I enjoy building every day.",
];

export default function AboutText() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="max-w-5xl text-[clamp(2.6rem,4vw,4.2rem)] leading-[1.25] font-light space-y-2"
    >
      {LINES.map((line, index) => {
        const local = 0; // placeholder for future animation logic

        return (
          <div
            key={index}
            className="line-text"
            style={
              {
                "--p": local,
              } as React.CSSProperties
            }
          >
            {line}
          </div>
        );
      })}
    </div>
  );
}
