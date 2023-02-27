import { icons } from "../assets/icons/icons";
import { motion } from "framer-motion";
import { GrFormNextLink as LinkArrow } from "react-icons/gr";
import { useState } from "react";
import { FiFigma as Figma } from "react-icons/fi";
import { SiAdobexd as XD } from "react-icons/si";
import { FaReact as React } from "react-icons/fa";
import { BsInfo as Info } from "react-icons/bs";
import { VscTools as Tools } from "react-icons/vsc";
import { GrDocumentPdf as PDF } from "react-icons/gr";
import { GrContact as Contact } from "react-icons/gr";
import JsFileDownloader from "js-file-downloader";

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

  const services = [
    {
      tool: <Figma />,
      work: "UI Design",
    },
    {
      tool: <XD />,
      work: "UX Design",
    },
    {
      tool: <React />,
      work: "Frontend Development",
    },
  ];

  return (
    <motion.div
      className={`absolute top-0 left-0 mt-0 lg:mt-6 mb-0 border-2 border-secondary/50 mx-0 lg:mx-6 w-full lg:w-[96.5vw] 2xl:w-[98vw] h-[81.5vh] bg-primary overflow-hidden`}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* div to hold contents that are not the svg */}
      <div className="relative z-50 h-full">
        {show && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
              ...skewTransition,
            }}
            className="h-full flex flex-col lg:flex-row"
          >
            <div className="flex flex-row lg:flex-col justify-between lg:gap-y-4 2xl:gap-y-12 w-full lg:w-1/6 h-fit lg:justify-center ml-0 lg:ml-24 lg:mt-12 p-4 md:p-8 lg:p-0 border-2 border-secondary/20 lg:border-none">
              {nav.map((item) => (
                <NavEl
                  item={item}
                  key={item.id}
                  setNavId={setNavId}
                  navId={navId}
                />
              ))}
            </div>
            <div className="sm:w-full lg:w-5/6 h-full flex flex-col md:flex-row md:flex-wrap">
              <div className="h-1/4 md:h-1/2 lg:h-full w-full md:w-1/2 lg:w-1/4 relative border-b-2 border-secondary/20 lg:border-none bg-primary">
                <div className="initial__visible absolute top-0 left-0 w-full h-full overflow-hidden border-x-2 border-secondary/20">
                  <p className="absolute top-20 uppercase font-showcase font-black -right-36 lg:-right-10/12 -rotate-90 text-9xl text-secondary/10">
                    {nav[0].label}
                    <div className="absolute top-0 w-56 h-56 bg-primary rounded-full -z-10 bg-secondary/20" />
                  </p>
                  <Info className="absolute -bottom-12 -left-12 text-9xl fill-secondary/10 border-2 border-secondary/10 rounded-full" />
                </div>
                {navId === 0 && (
                  <motion.div
                    className="animate__visible absolute top-0 md:top-2 lg:top-10 xl:top-1/4 border-t-2 border-l-2 border-secondary/30 rounded-t-lg px-3 pt-4 lg:pt-20 left-0 w-full h-full bg-primary"
                    initial={{ y: "200%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-200%" }}
                    transition={{
                      duration: 0.4,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    <p className="font-body font-light text-sm lg:text-base 2xl:text-3xl lg:px-4">
                      Robert Gardner is a front-end developer and all-around
                      design enthusiast. He believes in coding best practices,
                      standards and accessibility conscience design, crafting
                      cohesive and intuitive user experiences along the way.
                    </p>
                  </motion.div>
                )}
              </div>
              <div className="h-1/4 md:h-1/2 lg:h-full w-full md:w-1/2 lg:w-1/4 relative bg-primary lg:border-r-2 border-b-2 border-secondary/20 lg:border-b-none">
                <div className="initial__visible absolute top-0 left-0 w-full h-full overflow-hidden border-x-2 border-secondary/20">
                  <p className="absolute top-0 uppercase font-showcase font-black lg:-left-1/2 -right-64  -rotate-90 text-9xl text-secondary/10">
                    {nav[1].label}
                    <div className="absolute top-0 w-56 h-56 bg-primary rounded-full -z-10 bg-secondary/20" />
                  </p>
                  <Tools className="absolute -bottom-12 -left-12 text-9xl p-4 fill-secondary/10 border-2 border-secondary/10 rounded-full" />
                </div>
                {navId === 1 && (
                  <motion.div
                    className="animate__visible absolute top-0 md:top-2 lg:top-10 xl:top-1/4 border-t-2 border-secondary/30 rounded-t-lg pt-0 md:pt-4 lg:pt-20 left-0 w-full h-full bg-primary lg:px-4"
                    initial={{ y: "200%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-200%" }}
                    transition={{
                      duration: 0.4,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    {services.map((service, i) => (
                      <div
                        className="flex gap-x-4 items-center border-b-2 border-secondary mx-1 lg:mx-4 mb-1 lg:mb-4 pb-2"
                        key={service.work}
                      >
                        <span className="text-xl 2xl:text-5xl text-secondary">
                          {service.tool}
                        </span>
                        <p
                          className="py-2 uppercase font-medium text-secondary text-base 2xl:text-3xl lg:px-4 font-body"
                          key={i}
                        >
                          {service.work}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
              <div className="h-1/4 md:h-1/2 lg:h-full w-full md:w-1/2 lg:w-1/4 relative bg-primary lg:border-r-2 border-b-2 border-secondary/20 lg:border-b-none">
                <div className="initial__visible absolute top-0 left-0 w-full h-full overflow-hidden border-r-2 border-secondary/20 bg-primary">
                  <p className="absolute top-0 uppercase font-showcase font-black -right-56 -rotate-90 text-9xl text-secondary/10">
                    {nav[2].label}
                    <div className="absolute top-0 w-56 h-56 bg-secondary/20 rounded-full -z-10" />
                  </p>
                  <PDF className="absolute -bottom-12 -left-12 text-9xl opacity-10" />
                </div>
                {navId === 2 && (
                  <motion.div
                    className="animate__visible absolute bottom-0 left-0 w-full h-fit bg-primary"
                    initial={{ y: "200%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-200%" }}
                    transition={{
                      duration: 0.4,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    <a
                      href="https://flowcv.com/resume/w186gtk5l2"
                      rel="link"
                      target="_blank"
                      className="w-full grid place-items-center bg-secondary text-primary font-showcase uppercase lg:py-4 2xl:py-8 2xl:text-3xl "
                    >
                      Resume
                    </a>
                  </motion.div>
                )}
              </div>
              <div className="h-1/4 md:h-1/2 lg:h-full w-full md:w-1/2 lg:w-1/4 relative bg-primary lg:border-r-2 border-secondary/20">
                <div className="initial__visible absolute top-0 left-0 w-full h-full">
                  <div className="initial__visible absolute top-0 left-0 w-full h-full overflow-hidden">
                    <p className="absolute top-0 uppercase font-showcase font-black -right-[23rem] lg:-left-1/4 -rotate-90 text-9xl text-secondary/10">
                      {nav[3].label}
                      <div className="absolute top-0 w-56 h-56 bg-secondary/20 rounded-full -z-10" />
                    </p>
                    <Contact className="absolute -bottom-12 -left-12 text-9xl opacity-10" />
                  </div>
                </div>
                {navId === 3 && (
                  <motion.div
                    className="animate__visible absolute top-0 md:top-2 lg:top-10 xl:top-1/4 border-t-2 border-secondary/30 rounded-t-lg pl-10 pt-6 lg:pt-20 left-0 w-full h-full bg-primary flex justify-between md:block flex-wrap"
                    initial={{ y: "200%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-200%" }}
                    transition={{
                      duration: 0.4,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    {icons.map((icon, i) => (
                      <a
                        href={icon.path}
                        className="py-2 flex w-1/2 lg:w-full lg:mb-4 2xl:mb-8"
                        key={icon.label}
                      >
                        <span className="uppercase font-medium text-secondary text-base lg:text-lg 2xl:text-3xl font-showcase">
                          {icon.label}
                        </span>
                        <LinkArrow className="text-2xl text-primary -rotate-45" />
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <p className="absolute -bottom-56 -right-52 text-[350px] text-secondary/10 z-0 font-showcase2 font-bold">
        About
      </p>
      <svg
        className="absolute w-[150vw] h-[150vh] -top-[50vh] -left-40 overflow-visible rotate-[20deg] stroke-secondary -z-0"
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
        className="font-showcase text-base text-secondary 2xl:text-4xl"
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
