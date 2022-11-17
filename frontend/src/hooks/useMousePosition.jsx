import { useState, useEffect } from "react";
export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function updateMousePosition(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", updateMousePosition);
    //cleanup function
    return () => removeEventListener("mousemove", updateMousePosition);
  }, []);
  return mousePosition;
}
