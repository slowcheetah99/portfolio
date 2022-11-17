import { useState, useEffect } from "react";
export default function CustomCursor() {
  const projects = window.location.pathname.indexOf("projects") > -1;

  const [cursorPosition, setCursorPosition] = useState({
    x: 400,
    y: 400,
  });

  function handleMouseMove(e) {
    const { pageX: x, pageY: y } = e;
    setCursorPosition({ x, y });
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 w-16 h-16 border-4 ${
        projects ? " border-primary " : " border-tertiary "
      } rounded-full -translate-1/2 transition-['all .1s cubic-bezier(0.43, 0.13, 0.23, 0.96)'] transition-[width, height, border] will-change-[width, height, transform, border] pointer-events-none z-[9999]`}
      style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
    />
  );
}
