// import { RiMenu4Fill as Menu } from "react-icons/ri";
// import { AiOutlineClose as Close } from "react-icons/ai";
import { motion } from "framer-motion";
import burger from "../assets/burger.svg";
import burger2 from "../assets/burger2.svg";
import { Link } from "react-router-dom";

import logoDark from "../assets/icons/logo.svg";
import logoLight from "../assets/icons/mini.svg";
export default function Navbar({ setOpen, inView }) {
  // const projects = window.location.pathname.indexOf("projects") > -1;
  const projects = window.location.pathname === "/projects";
  return (
    <motion.div
      className="w-full h-fit flex justify-between pb-4 items-center z-50 relative pl-3 pr-6"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      <Link to="/">
        <img
          src={!projects ? logoDark : inView ? logoLight : logoDark}
          alt="Logo"
          className="w-12 h-12"
        />
      </Link>

      <img
        src={projects ? burger2 : burger}
        className={`w-14 h-14 cursor-pointer border-2 ${
          projects ? " border-primary " : " border-accent "
        } rounded-full hover:scale-110 transition-all`}
        alt="burger"
        onClick={() => {
          setOpen((state) => !state);
        }}
      />

      <button className="bg-opaque font-body text-sm w-fit h-6 px-8 py-5 grid place-content-center rounded-sm font-bold text-accent hover:scale-105 transition-all">
        HIRE ME
      </button>
    </motion.div>
  );
}
