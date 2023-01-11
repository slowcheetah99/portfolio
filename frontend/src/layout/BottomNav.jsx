import { Link } from "react-router-dom";
import { icons } from "../assets/icons/icons";
import { screenshots } from "../assets/screenshots/screenshots";
export default function Layout({ open, setOpen, pointers }) {
  return (
    <div className="w-full h-fit absolute bg-primary -top-14 left-0 px-20 py-4 text-secondary border-b-[1px] font-showcase flex justify-between shadow font-bold text-md">
      <div className="flex gap-x-12">
        {screenshots.map((screenshot, i) => (
          <Link
            to={screenshot.path}
            key={screenshot.label}
            className="text-md"
            onClick={() => setOpen(false)}
          >
            {screenshot.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-x-8">
        {icons.map((icon, i) => (
          <a href={icon.path} key={i}>
            {icon.label}
          </a>
        ))}
      </div>
    </div>
  );
}
