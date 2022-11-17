import me from "../assets/images/img2.jpg";
import { FiFigma as Figma } from "react-icons/fi";
import { FaReact as REACT } from "react-icons/fa";
import { AiOutlineHtml5 as HTML } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function AboutMe() {
  return (
    <div className="h-screen relative">
      <div className="flex gap-x-12 items-center">
        <div>
          <h4 className="absolute -left-[900px] -top-32 font-body text-stroke z-0 whitespace-nowrap">
            ABOUT ME
          </h4>
          <p className="w-fit mt-10 text-3xl font-bold bg-primary z-20">
            ABOUT ME
          </p>
        </div>
        <p className="w-1/2 mt-10 relative z-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          blanditiis fugiat. Sint aspernatur commodi necessitatibus amet
          doloremque totam alias! Nisi.
        </p>
      </div>
      <div className="w-[117.1%] -left-[10%] absolute bottom-0 h-2/3">
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-secondary/30 px-32 pt-32 flex justify-between">
          <Link
            to="/"
            className="flex flex-col justify-center items-center w-20 h-20 bg-primary rounded-2xl"
          >
            <Figma className="text-5xl stroke-1" />
          </Link>

          <Link
            to="/"
            className="flex flex-col justify-center items-center w-20 h-20 bg-primary rounded-2xl"
          >
            <REACT className="text-5xl stroke-1" />
          </Link>

          <Link
            to="/"
            className="flex flex-col justify-center items-center w-20 h-20 bg-primary rounded-2xl"
          >
            <HTML className="text-5xl stroke-1" />
          </Link>
        </div>
        <img
          src={me}
          alt="me.jpg"
          className="object-center w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
