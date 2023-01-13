import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavContent({ screenshot, setOpen }) {
  const [scale, setScale] = useState(false);
  return (
    <Link
      to={screenshot.path}
      key={screenshot.label}
      className="w-3/4 h-12 relative p-8"
      onMouseOver={() => setScale(true)}
      onMouseOut={() => setScale(false)}
      onClick={() => setOpen(false)}
    >
      <p className="test-primary text-3xl font-showcase z-20 relative mix-blend-difference">
        {screenshot.label}
      </p>
      <img
        src={screenshot.image}
        alt={screenshot.label}
        className={`absolute top-0 left-0 w-full h-full object-cover object-center origin-bottom transition-all z-10 ${
          scale ? " scale-y-100" : " scale-y-0"
        }`}
      />
    </Link>
  );
}
