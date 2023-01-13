// import { useRef, useState, useEffect } from "react";
// export default function Cursor() {
//   const mouseRef = useRef([]);
//   const [position, setPosition] = useState({ x: 400, y: 400 });
//   function handleMouseMove(e) {
//     const { pageX: x, pageY: y } = e;
//     setPosition({ x, y });

//     mouseRef.current.forEach((ref, i) => {
//       ref.x = x;
//       ref.y = y;

//       const next = ref[i + 1] || mouseRef.current[0];
//       x += (next.x - x) * 0.5;
//       y += (next.y - y) * 0.5;
//     });
//     // mouseRef.current.x = 400;
//     // mouseRef.current.y = 400;
//   }
//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <>
//       {new Array(8).fill(1).map((_, i) => (
//         <div
//           className="bg-secondary w-5 h-5 rounded-full absolute top-24 left-24 z-50"
//           style={{
//             left: `${position.x - i * 12}px`,
//             top: `${position.y - i * 12}px`,
//           }}
//           key={i}
//           ref={(ref) => mouseRef.current.push(ref)}
//         />
//       ))}
//     </>
//   );
// }
