import { icons } from "../assets/icons/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/framerVariants";
import { GrFormNextLink as LinkArrow } from "react-icons/gr";
import { useState } from "react";

const strokeOut = {
  initial: { pathLength: 1, strokeWidth: 400, scale: 1.5 },
  animate: {
    pathLength: 0,
    strokeWidth: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.43, 0.13, 0.23, 0.96],
      scale: {
        delay: 1.25,
      },
    },
  },
  exit: {
    pathLength: 1,
    strokeWidth: 400,
    scale: 1.5,
    transition: {
      duration: 1.5,
      ease: [0.43, 0.13, 0.23, 0.96],
      strokeWidth: {
        delay: 0.25,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
  },
};

const staggerOut = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const skewTransition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const slideUp = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-100%",
    transition: { ...skewTransition },
  },
  exit: {
    y: 0,
    transition: { ...skewTransition },
  },
};

export default function About() {
  const [navId, setNavId] = useState(0);
  const [show, setShow] = useState(false);
  const nav = [
    {
      id: 0,
      label: "more",
    },
    {
      id: 1,
      label: "services",
    },
    {
      id: 2,
      label: "resume",
    },
    {
      id: 3,
      label: "contact me",
    },
  ];
  return (
    <motion.div
      className={`absolute top-0 left-0 mt-6 mb-0 border-2 border-secondary/50 mx-6 w-[96vw] h-[76.5vh] pt-20 bg-primary overflow-hidden`}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* div to hold contents that are not the svg */}
      <div className="relative z-50">
        {show && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
              ...skewTransition,
            }}
          >
            <div className="flex flex-col gap-y-4 w-fit ml-24">
              {nav.map((item) => (
                <NavEl
                  item={item}
                  key={item.id}
                  setNavId={setNavId}
                  navId={navId}
                />
              ))}
            </div>

            <div className="flex flex-col gap-y-2 w-fit ml-24 mt-8">
              {icons.map((icon, i) => (
                <a href={icon.path} className="py-2 flex" key={icon.label}>
                  <span className="uppercase font-medium text-secondary text-base font-showcase">
                    {icon.label}
                  </span>
                  <LinkArrow className="text-2xl text-primary -rotate-45" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <p className="absolute -bottom-56 -right-52 text-[350px] text-secondary/10 z-0 font-showcase2 font-bold">
        About
      </p>
      <svg
        className="absolute w-[150vw] h-[150vh] -top-[50vh] -left-40 overflow-visible rotate-[20deg] stroke-secondary -z-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M134.712 276.378C53.826 487.74 -59.2915 763.879 65.7117 695.878C292.713 540.879 508.713 51.5251 606.211 30.8777C737.213 17.3787 317.713 540.879 460.212 720.378C630.709 834.379 873.713 -75.6233 959.211 30.8777C1044.71 137.379 742.209 480.879 818.711 587.878C917.209 664.879 1158.71 -118.123 1254.71 30.8777C1350.71 179.878 1027.21 521.878 1119.21 645.878C1211.21 769.878 1547.21 -132.623 1604.71 30.8777C1662.21 194.378 1456.71 452.378 1549.71 521.878C1642.71 591.378 1905.71 16.8777 1905.71 16.8777"
          strokeLinecap="round"
          variants={strokeOut}
          onAnimationStart={() => setShow(false)}
          onAnimationComplete={() => setShow(true)}
        />
      </svg>
    </motion.div>
  );
}

function NavEl({ item, navId, setNavId }) {
  const isActive = item.id === navId;
  return (
    <a
      href="#"
      key={item.id}
      className="uppercase relative w-fit"
      onClick={() => setNavId(item.id)}
    >
      <span
        className="font-showcase text-base text-secondary"
        style={{ fontWeight: isActive ? "900" : "500" }}
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        {item.label}
      </span>
      <motion.div
        className="w-full h-[2px] bg-secondary"
        animate={
          isActive ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }
        }
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      />
    </a>
  );
}
