import { useState, useEffect } from "react";
export default function CustomCursor() {
  const projects = window.location.pathname === "projects";

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
      className={`absolute top-0 left-0 w-5 h-5 border-4 ${
        projects ? " border-primary " : " bg-secondary "
      } rounded-full -translate-1/2 transition-['all .1s cubic-bezier(0.43, 0.13, 0.23, 0.96)'] transition-[width, height, border] will-change-[width, height, transform, border] pointer-events-none z-[9999]`}
      style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
    />
  );
}
