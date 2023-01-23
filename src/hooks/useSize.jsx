import { useState, useEffect } from "react";

export default function useSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    function handleResize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
