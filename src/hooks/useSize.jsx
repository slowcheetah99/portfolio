import { useState, useCallback, useLayoutEffect } from "react";

function getDimensionObject(node) {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
  };
}
export default function useSize() {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      function measure() {
        setDimensions(getDimensionObject(node));
      }

      measure();
    }
  }, [node]);

  return [ref, dimensions];
}
