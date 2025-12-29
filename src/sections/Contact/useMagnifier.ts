import { useState } from "react";

export function useMagnifier() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return {
    pos,
    active,
    bind: {
      onMouseMove: onMove,
      onMouseEnter: () => setActive(true),
      onMouseLeave: () => setActive(false),
    },
  };
}
