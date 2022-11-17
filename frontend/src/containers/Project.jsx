import { images } from "../assets/images/images";
import { SideNav } from "../layout";
import { AiOutlineClose as Close } from "react-icons/ai";
import { BsChevronLeft as Left } from "react-icons/bs";
import { useState } from "react";

export default function Project() {
  const [inView, setInView] = useState(true);

  function handleView() {
    setInView((state) => !state);
  }
  return (
    <div className="h-screen w-full">
      <div
        className="absolute top-1/2 left-0 bg-primary w-10 h-fit py-2 z-50 grid place-items-center rounded-tr-2xl rounded-br-2xl cursor-pointer"
        onClick={handleView}
      >
        {inView ? (
          <Close className="text-lg" />
        ) : (
          <Left className="rotate-180 text-lg" />
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={images[3].url}
          alt={images[3].name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-secondary/40 z-10" />
      <div></div>
      <SideNav inView={inView} />
    </div>
  );
}
