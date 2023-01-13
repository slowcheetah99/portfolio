import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { GrFormNextLink as LinkArrow } from "react-icons/gr";
export default function Navbar({ open, setOpen }) {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const nav = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/projects",
      label: "Projects",
    },
  ];
  return (
    <motion.div
      className={`w-full z-40 absolute bottom-6 left-0 pl-12 md:pl-28 pr-2 md:pr-16 text-[#1e1e1e]`}
      animate={{
        translateY: open ? "3.5rem" : 0,
        transition: {
          duration: 0.25,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }}
    >
      {/* <BottomNav setOpen={setOpen} /> */}
      <div className="w-full h-fit flex justify-between pb-2 pt-6 md:py-4 items-center font-bold">
        <Link to="/" className="hover:scale-105 transition-all">
          <span className="text-md font-base uppercase font-polaroid text-3xl">
            Robert Okusi
          </span>
        </Link>

        <div className="w-fit flex gap-x-8 items-center">
          {nav.map((item) => (
            <NavEl item={item} pathname={pathname} key={item.label} />
          ))}
        </div>

        <motion.button
          className="transition-all relative text-md w-fit h-6 px-8 overflow-hidden py-6 items-center flex  rounded-sm text-3xl text-secondary font-base font-polaroid 
          "
          onMouseEnter={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          whileHover={{
            y: -4,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          HIRE ME
          <LinkArrow className="text-4xl text-secondary -rotate-45" />
        </motion.button>
      </div>
    </motion.div>
  );
}

function NavEl({ item, pathname }) {
  const isActive = item.path === pathname;
  return (
    <Link
      to={item.path}
      key={item.label}
      className="relative w-full h-fit text-secondary font-polaroid text-3xl"
    >
      {item.label}
      <svg
        viewBox="0 0 1372 293"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M145.361 110.122C57.5684 190.158 -65.2085 294.722 70.4691 268.972C316.855 210.28 551.3 24.9777 657.124 17.1592C799.312 12.0476 343.99 210.28 498.656 278.25C683.713 321.418 947.468 -23.1691 1040.27 17.1592C1133.07 57.4876 804.734 187.56 887.769 228.076C994.678 257.234 1256.8 -39.2623 1361 17.1592"
          stroke="#ED23E5"
          stroke-width="20"
          strokeLinecap="round"
          strokeWidth="50"
          className="stroke-secondary w-12 h-4"
          animate={{
            pathLength: isActive ? 1 : 0,
            height: isActive ? "100%" : 0,
          }}
          transition={{
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        />
      </svg>
    </Link>
  );
}
