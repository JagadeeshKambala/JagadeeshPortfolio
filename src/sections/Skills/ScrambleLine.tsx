import { useEffect, useState } from "react";

const CHARS = "!@#$%^&*()_+-=<>?/{}[]abcdefghijklmnopqrstuvwxyz0123456789";

interface ScrambleLineProps {
  prefix?: string;
}

export default function ScrambleLine({ prefix = "" }: ScrambleLineProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let scrambled = "";
      for (let i = 0; i < 28; i++) {
        scrambled += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setText(scrambled);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-line scramble">
      {prefix && <span className="prompt">{prefix}</span>}
      <span className="scramble-text">{text}</span>
    </div>
  );
}
