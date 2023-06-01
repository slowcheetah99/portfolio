import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useServer, useSize } from "../hooks";
import {
  NavIntro,
  NavFeatures,
  NavMilestones,
  NavConclusion,
} from "../components/NavEls";
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

const items = {
  initial: {
    y: 50,
    translateZ: -200,
    opacity: 0,
  },
  animate: {
    y: 0,
    translateZ: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
  exit: {
    y: 50,
    translateZ: 200,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const fadeInStagger = {
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Project({ inView, setInView }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { items } = useServer();
  const projects = items;
  const [show, setShow] = useState(false);
  const [width, height] = useSize();
  const scrollRef = useRef();
  const childRef = useRef();
  const size = useSize();

  function handleLoad(el) {
    el.scrollTo({
      top: el.getBoundingClientRect().height,
      left: 0,
      behavior: "smooth",
    });
  }

  const project =
    location?.state?.project ||
    JSON.parse(localStorage.getItem("CURRENT_PROJECT"));
  const nav = [
    {
      link: "intro",
      element: <NavIntro project={project} />,
    },
    {
      link: "features",
      element: <NavFeatures project={project} />,
    },
    {
      link: "milestones",
      element: <NavMilestones project={project} />,
    },
    {
      link: "conclusion",
      element: <NavConclusion project={project} />,
    },
  ];
  const [navItem, setNavItem] = useState(nav[0]);
  function handleView() {
    setInView((state) => !state);
  }

  return (
    <motion.div
      className={`absolute top-0 left-0 w-full md:w-[96.5vw] mx-0 md:mx-6 mt-0 lg:mt-6  max-h-[81.5svh] px-0 overflow-x-hidden border-2 border-secondary/50 sm:overflow-y-auto md:overflow-y-hidden`}
      initial="initial"
      animate="animate"
      exit="exit"
      // variants={fadeIn}
      style={{ backgroundColor: project?.background }}
    >
      <div className="relative z-50 w-full h-fit">
        {show && (
          <div
            className="w-full h-fit overflow-y-scroll overflow-x-hidden"
            style={{
              height: size[0] > 500 ? window.innerHeight * 4 : "fit-content",
            }}
            ref={scrollRef}
          >
            <div className="w-screen h-[81.5vh] overflow-x-hidden">
              <motion.img
                src={`/${project.image.lg}`}
                className="w-full h-full object-cover object-top-left"
                initial={{
                  scale: 1.25,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                onAnimationComplete={() => handleLoad(scrollRef.current)}
              />
            </div>
            <div
              className="flex flex-col lg:flex-row w-full h-full"
              id="scroller"
              ref={scrollRef}
            >
              <div className="flex flex-row lg:flex-col gap-x-3 lg:gap-y-4 2xl:gap-y-12 my-0 md:my-12 ml-4 w-full lg:w-1/6 border-r-4 border-secondary/20 2xl:pl-24 h-[10svh] items-center md:items-start">
                {nav.map((item, i) => {
                  const isActive = navItem.link === item.link;
                  return (
                    <div
                      key={i}
                      className="w-fit cursor-pointer"
                      onClick={() => setNavItem(item)}
                    >
                      <motion.p
                        className={`text-[${project?.color}] text-base uppercase font-showcase text-secondary 2xl:text-4xl`}
                        style={{ fontWeight: isActive ? "900" : "400" }}
                        transition={{ ease: "easeInOut", duration: 0.4 }}
                      >
                        {item.link}
                      </motion.p>
                      <motion.div
                        className="h-[2px]"
                        animate={{ width: isActive ? "100%" : "0%" }}
                        style={{
                          backgroundColor: project.color,
                        }}
                        transition={{ ease: "easeInOut" }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="lg:w-5/6 w-full sm:min-h-fit sm:mb-12 md:pb-0 md:h-[81.5vh]">
                {navItem.element}
              </div>
            </div>
          </div>
        )}
      </div>
      {size[0] >= 500 ? (
        <svg
          className="absolute w-[150vw] h-[150vh] -top-[50vh] -left-40 overflow-visible rotate-[20deg] stroke-secondary z-50 pointer-events-none"
          viewBox="0 0 1916 741"
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
      ) : (
        <>
          <motion.div
            className="absolute inset-0 w-full h-full bg-secondary z-50"
            initial={{
              clipPath: "inset(0% 0% 0% 0%)",
            }}
            animate={{
              clipPath: "inset(0% 0% 100% 0%)",
              transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.1,
              },
            }}
            exit={{
              clipPath: "inset(0% 0% 0% 0%)",
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
          />
          <motion.div
            className="absolute inset-0 w-full h-full bg-[#111] z-50"
            initial={{
              clipPath: "inset(0% 0% 0% 0%)",
            }}
            animate={{
              clipPath: "inset(0% 0% 100% 0%)",
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
            exit={{
              clipPath: "inset(0% 0% 0% 0%)",
              transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.1,
              },
            }}
            onAnimationStart={() => setShow(false)}
            onAnimationComplete={() => setShow(true)}
          />
        </>
      )}
      <p className="absolute -bottom-56 -right-52 text-[350px] text-secondary/10 z-0 font-showcase2 font-bold">
        Projects
      </p>
    </motion.div>
  );
}
