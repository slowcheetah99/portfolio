import { images } from "../assets/images/images";
import { Link } from "react-router-dom";
import { screenshots } from "../assets/screenshots/screenshots";
export default function Layout({ open, setOpen }) {
  function handleClick() {
    setOpen((state) => !state);
  }
  return (
    <div
      className={`w-full h-1/2 absolute left-0 ${
        open ? " top-1/2 " : " top-full "
      } bg-secondary flex justify-between px-20 items-center rounded-md transition-all z-50`}
    >
      {screenshots.map((screenshot, i) => (
        <Link to={screenshot.path} key={i} onClick={handleClick}>
          <p className="text-primary text-lg font-body mb-4 relative after:absolute after:left-0 after:h-1 after:content-[''] after:-bottom-1 after:w-6 after:rounded-full after:bg-primary">
            {screenshot.label}
          </p>
          <img
            src={screenshot.image}
            alt="link-image"
            className="w-64 h-42 rounded-md object-cover object-center"
          />
        </Link>
      ))}
    </div>
  );
}
