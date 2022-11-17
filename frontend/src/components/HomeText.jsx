import { FaQuoteRight } from "react-icons/fa";
import { useEffect } from "react";
import { HomeImage } from "./";

export default function HomeText({ item, i, setActive, visible, x, y }) {
  return (
    <div className="ml-32 even:text-right even:pr-4 mb-12 bg-blend-difference relative odd:after:right-0 after:absolute after:content-[''] even:after:left-0 after:bottom-0 after:w-12 after:bg-blend-difference after:h-0.5  after:rounded-full after:bg-secondary">
      <p
        className="text-8xl font-showcase font-bold relative bg-blend-difference"
        onMouseEnter={() => setActive(i)}
        onMouseLeave={() => setActive(-1)}
      >
        {i === 0 && (
          <FaQuoteRight className="absolute text-4xl right-[350px] rotate-180 top-0" />
        )}

        {i === 2 && (
          <FaQuoteRight className="absolute text-4xl -right-14 top-0" />
        )}
        <HomeImage visible={visible} item={item} x={x} y={y} />
        {item.label}
      </p>
    </div>
  );
}
