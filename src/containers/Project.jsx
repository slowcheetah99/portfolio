import { SideNav } from "../layout";
import { AiOutlineClose as Close } from "react-icons/ai";
import { BsChevronLeft as Left } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useServer } from "../hooks";
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

  function handlePrev() {
    if (project.id !== projects[0].id) {
      const res = projects.filter((item, i) => item.id === project.id - 1);
      localStorage.setItem("CURRENT_PROJECT", JSON.stringify(res[0]));
      navigate(`/projects/${res[0].slug}`, {
        state: {
          project: res[0],
        },
      });
    }
  }

  function handleNext() {
    if (project.id !== projects[projects.length - 1].id) {
      const res = projects.filter((item, i) => item.id === project.id + 1);
      localStorage.setItem("CURRENT_PROJECT", JSON.stringify(res[0]));
      navigate(`/projects/${res[0].slug}`, {
        state: {
          project: res[0],
        },
      });
    }
  }

  return (
    <motion.div
      className={`absolute top-0 left-0 w-[96vw] mx-6 mt-6 h-[76.5vh] px-8 md:px-20 overflow-x-hidden border-2 border-secondary/50 overflow-y-hidden`}
      initial="initial"
      animate="animate"
      exit="exit"
      // variants={fadeIn}
      style={{ backgroundColor: project?.background }}
    >
      <div className="relative z-50 w-full h-[100%]">
        {show && (
          <motion.div
            className="lg:flex justify-between mt-4 md:mt-24 lg:mt-6 h-[90%] w-full relative overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              duration: 0.5,
              ease: [0.17, 0.55, 0.55, 1],
            }}
          >
            <div className="flex flex-col w-full items-start relative">
              <div className="w-full h-full">{navItem.element}</div>

              <div className="flex gap-x-2 w-full h-fit -mt-20 mb-6">
                {nav.map((item, i) => {
                  const isActive = item.link === navItem.link;
                  return (
                    <div
                      className="w-fit cursor-pointer p-2"
                      onClick={() => setNavItem(item)}
                      key={i}
                    >
                      <motion.p
                        className="font-showcase font-bold text-secondary uppercase text-base"
                        animate={{ opacity: isActive ? 1 : 0.5 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        {item.link}
                      </motion.p>
                      <motion.div
                        className="h-[2px] bg-secondary"
                        animate={{ width: isActive ? "100%" : "0%" }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="w-full flex justify-between">
                <motion.button
                  className="font-bold px-4 -ml-4 py-2 font-body text-lg relative disabled:opacity-75"
                  style={{ color: project?.color }}
                  onClick={handlePrev}
                  disabled={project?.id === 0}
                >
                  &larr; &nbsp; Previous Project
                </motion.button>
                <motion.button
                  className="font-bold -mr-4 px-4 py-2 font-body text-lg relative disabled:opacity-75"
                  style={{ color: project?.color }}
                  onClick={handleNext}
                  disabled={project?.id === projects?.length - 1}
                >
                  Next Project &nbsp; &rarr;
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
        <div
          className={`fixed top-1/2 left-0 w-10 h-fit py-2 z-50 grid place-items-center rounded-tr-2xl rounded-br-2xl cursor-pointer`}
          style={
            inView
              ? {
                  backgroundColor: "#F3EEE7",
                  color: project?.color,
                }
              : { backgroundColor: project?.color, color: "#F3EEE7" }
          }
          onClick={handleView}
        >
          {inView ? (
            <Close className="text-lg" />
          ) : (
            <Left className="rotate-180 text-lg" />
          )}
        </div>
        <SideNav inView={inView} project={project} />
      </div>
      <svg
        className="absolute w-[150vw] h-[150vh] -top-[50vh] -left-40 overflow-visible rotate-[20deg] stroke-secondary -z-0"
        viewBox="0 0 1916 741"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ stroke: project?.color }}
      >
        <motion.path
          d="M134.712 276.378C53.826 487.74 -59.2915 763.879 65.7117 695.878C292.713 540.879 508.713 51.5251 606.211 30.8777C737.213 17.3787 317.713 540.879 460.212 720.378C630.709 834.379 873.713 -75.6233 959.211 30.8777C1044.71 137.379 742.209 480.879 818.711 587.878C917.209 664.879 1158.71 -118.123 1254.71 30.8777C1350.71 179.878 1027.21 521.878 1119.21 645.878C1211.21 769.878 1547.21 -132.623 1604.71 30.8777C1662.21 194.378 1456.71 452.378 1549.71 521.878C1642.71 591.378 1905.71 16.8777 1905.71 16.8777"
          stroke-linecap="round"
          variants={strokeOut}
          onAnimationStart={() => setShow(false)}
          onAnimationComplete={() => setShow(true)}
        />
      </svg>
    </motion.div>
  );
}
