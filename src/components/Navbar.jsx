import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose as Close } from "react-icons/ai";
import { GrFormNextLink as LinkArrow } from "react-icons/gr";
export default function Navbar({ open, setOpen, showNav, setShowNav }) {
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
      className={`w-full absolute bottom-0 h-[18.5vh] left-0 text-[#1e1e1e] z-50 bg-white md:bg-transparent`}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 1,
      }}
    >
      <div className="w-full h-full flex justify-between items-center font-bold pl-6 mt-8 md:mt-0">
        <Link to="/" className="hover:scale-105 transition-all">
          <span className="text-md font-base uppercase font-polaroid text-lg md:text-xl lg:text-2xl 2xl:text-5xl">
            Robert Okusi
          </span>
        </Link>

        <motion.div className="absolute ml-[5%]  rounded-full w-[90%] h-fit md:hidden justify-between flex left-0 top-0 z-40 overflow-hidden bg-[#1e1e1e] p-2">
          {nav.map((item) => (
            <NavEl
              item={item}
              pathname={pathname}
              key={item.label}
              small={true}
            />
          ))}
        </motion.div>

        <div className="w-fit md:flex gap-x-8 items-center hidden">
          {nav.map((item) => (
            <NavEl
              item={item}
              pathname={pathname}
              key={item.label}
              setShowNav={setShowNav}
            />
          ))}
        </div>

        <motion.a
          className="transition-all relative text-md w-fit h-6 px-8 overflow-hidden py-6 items-center flex  rounded-sm text-lg md:text-xl lg:text-2xl 2xl:text-5xl text-secondary font-base font-polaroid 
          "
          onMouseEnter={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          href="mailto:rgaronerdev@gmail.com"
          target="_blank"
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
        </motion.a>
      </div>
    </motion.div>
  );
}

function NavEl({ item, pathname, small, setShowNav }) {
  const isActive = item.path === pathname;
  return (
    <Link
      to={item.path}
      key={item.label}
      className={`relative w-full h-fit ${
        small ? " text-primary " : " text-secondary "
      } font-polaroid rounded-full`}
    >
      <motion.p
        className="w-full h-full text-center text-lg md:text-xl lg:text-2xl 2xl:text-5xl py-2 rounded-full"
        style={{
          backgroundColor: small ? (isActive ? "#333439" : "") : "",
          color: small ? (isActive ? "#f3eee7" : "") : "",
        }}
      >
        {item.label}
      </motion.p>
      {small && <div className="w-full h-[1px] bg-secondary/50" />}
      <svg
        viewBox="0 0 1372 293"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block"
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
