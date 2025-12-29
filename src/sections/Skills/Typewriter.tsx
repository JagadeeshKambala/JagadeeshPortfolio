import { useEffect, useState } from "react";

interface Props {
  text: string;
  speed?: number; // ms per character
  onComplete?: () => void;
}

export default function Typewriter({
  text,
  speed = 95, // DEFAULT: slower, realistic
  onComplete,
}: Props) {
  const [output, setOutput] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setOutput((prev) => prev + text[index]);
        setIndex((i) => i + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      onComplete?.();
    }
  }, [index, text, speed, onComplete]);

  return <span>{output}</span>;
}
