import { useEffect, useMemo, useState } from "react";
import ScrambleLine from "./ScrambleLine";
import { SKILL_CATEGORIES } from "./skills.data";
import Typewriter from "./Typewriter";

type Line =
  | { type: "command"; text: string }
  | { type: "output"; items: string[] };

const BASE_HEIGHT = 140; // initial terminal height
const LINE_HEIGHT = 28;

export default function Terminal() {
  const [history, setHistory] = useState<Line[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [phase, setPhase] = useState<"command" | "ls" | "idle" | "clear">(
    "command"
  );

  const current = SKILL_CATEGORIES[categoryIndex];

  /* -------------------------
     Dynamic Height Calculation
     ------------------------- */
  const totalLines =
    history.length +
    (phase === "command" || phase === "ls" || phase === "clear" ? 1 : 0) +
    2; // scramble lines

  const terminalHeight = useMemo(
    () => BASE_HEIGHT + totalLines * LINE_HEIGHT,
    [totalLines]
  );

  /* -------------------------
     Phase Controller
     ------------------------- */
  useEffect(() => {
    if (phase === "idle") {
      const timer = setTimeout(() => {
        if (categoryIndex === SKILL_CATEGORIES.length - 1) {
          setPhase("clear");
        } else {
          setCategoryIndex((i) => i + 1);
          setPhase("command");
        }
      }, 1600);

      return () => clearTimeout(timer);
    }

    if (phase === "clear") {
      // Let height animate first, then clear content
      const timer = setTimeout(() => {
        setHistory([]);
        setCategoryIndex(0);
        setPhase("command");
      }, 700); // slightly longer than CSS transition

      return () => clearTimeout(timer);
    }
  }, [phase, categoryIndex]);

  /* -------------------------
     Handlers
     ------------------------- */
  const handleCommandComplete = () => {
    setHistory((h) => [...h, { type: "command", text: "ls" }]);
    setPhase("ls");
  };

  const handleLsComplete = () => {
    setHistory((h) => [...h, { type: "output", items: current.items }]);
    setPhase("idle");
  };

  return (
    <div className="terminal" style={{ height: terminalHeight }}>
      <div className="terminal-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
      </div>

      <div className="terminal-body">
        {/* Background activity */}
        <ScrambleLine />
        <ScrambleLine />

        {/* History */}
        {history.map((line, i) =>
          line.type === "command" ? (
            <div key={i} className="terminal-line">
              <span className="prompt">dev@portfolio:~$</span> {line.text}
            </div>
          ) : (
            <div key={i} className="terminal-line output">
              {line.items.join("   ")}
            </div>
          )
        )}

        {/* Active Typing */}
        {phase === "command" && (
          <div className="terminal-line active">
            <span className="prompt">dev@portfolio:~$</span>
            <Typewriter
              text={` ${current.command}`}
              onComplete={() => {
                setHistory((h) => [
                  ...h,
                  { type: "command", text: current.command },
                ]);
                handleCommandComplete();
              }}
            />
            <span className="cursor">█</span>
          </div>
        )}

        {phase === "ls" && (
          <div className="terminal-line active">
            <span className="prompt">dev@portfolio:~$</span>
            <Typewriter text=" ls" onComplete={handleLsComplete} />
            <span className="cursor">█</span>
          </div>
        )}

        {phase === "clear" && (
          <div className="terminal-line active">
            <span className="prompt">dev@portfolio:~$</span>
            <Typewriter text=" clear" />
            <span className="cursor">█</span>
          </div>
        )}
      </div>
    </div>
  );
}
