import { VscMenu as Menu } from "react-icons/vsc";
import { AiOutlineClose as Close } from "react-icons/ai";
export default function Burger({ open, setOpen }) {
  return (
    <div
      className={`w-fit h-fit p-3 cursor-pointer hover:scale-110 border-2 transition-all z-50 rounded-full absolute top-4 translate-x-1/2 md:translate-x-0 right-1/2 bg-secondary text-primary`}
      onClick={() => setOpen((state) => !state)}
    >
      {open ? <Close className="text-xl" /> : <Menu className="text-xl" />}
    </div>
  );
}
