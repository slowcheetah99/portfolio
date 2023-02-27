import { useState } from "react";
import { text } from "../assets/homepage/homeText";
import { useMousePosition } from "../hooks";
import { motion } from "framer-motion";
import { useSize } from "../hooks";

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

const fadeUp = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const skewTransition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export default function Header({ pointers, setPointers }) {
  const [active, setActive] = useState(-1);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const { x, y } = useMousePosition();
  function handleComplete() {
    const timer = setTimeout(() => {
      setPointers(true);
    }, 1200);

    return () => clearTimeout(timer);
  }

  return (
    <motion.div
      className={`absolute top-0 left-0 m-0 lg:pb-20 2xl:pt-40 lg:mt-6 mb-0 md:border-2 border-secondary/50 lg:mx-6 w-full lg:w-[95.5vw] 2xl:w-[98vw] h-screen overflow-auto pb-[18.5vh] md:pb-0 md:h-[81.5vh] lg:pt-0 md:overflow-hidden flex flex-col lg:flex-row lg:justify-between bg-primary pt-0 lg:px-24`}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ transformOrigin: "center center" }}
      onAnimationComplete={handleComplete}
    >
      <div className="w-full md:w-full lg:w-fit pt-12 h-fit text-secondary flex flex-col lg:justify-start gap-y-2 lg:gap-y-4 md:mb-0">
        <motion.div
          className="w-full h-full lg:w-fit text-left pl-8 lg:pl-0"
          initial="initial"
          animate="animate"
          variants={staggerOut}
        >
          <motion.p
            className="text-lg md:text-xl lg:text-3xl 2xl:text-5xl lg:ml-6 mb-2 md:mb-4 lg:mb-8 2xl:mb-12 font-polaroid"
            variants={fadeUp}
          >
            Hi, I'm{" "}
            <span className="font-bold relative">
              Robert
              <svg
                viewBox="0 0 1372 293"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block w-12 h-4 absolute -bottom-2 left-0"
              >
                <motion.path
                  d="M145.361 110.122C57.5684 190.158 -65.2085 294.722 70.4691 268.972C316.855 210.28 551.3 24.9777 657.124 17.1592C799.312 12.0476 343.99 210.28 498.656 278.25C683.713 321.418 947.468 -23.1691 1040.27 17.1592C1133.07 57.4876 804.734 187.56 887.769 228.076C994.678 257.234 1256.8 -39.2623 1361 17.1592"
                  stroke="#ED23E5"
                  stroke-width="20"
                  strokeLinecap="round"
                  strokeWidth="50"
                  className="stroke-secondary"
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                />
              </svg>
            </span>
          </motion.p>
          <div className="w-full lg:1/2 flex flex-col md:flex-row lg:flex-col xs:gap-y-0 sm:gap-y-6 lg:gap-y-10 2xl:gap-y-16 lg:justify-start">
            {text.map((item, i) => {
              const isActive = active === i;
              const xPos = x;
              const yPos = y;
              return (
                <HomeText
                  item={item}
                  i={i}
                  setActive={setActive}
                  setVisible={setVisible}
                  isActive={isActive}
                  active={active}
                  key={item.label}
                  x={xPos}
                  y={yPos}
                  fadeUp={fadeUp}
                />
              );
            })}
          </div>
          <div className="w-full h-[2px] bg-[#111]/20 hidden md:block lg:hidden md:my-6 lg:my-0" />
        </motion.div>
      </div>

      <motion.div
        className="h-fit w-full md:w-full lg:w-1/2 lg:mt-12 mt-2 md:mt-0 ml-0 flex flex-col justify-center lg:items-center md:justify-start md:pl-0 pt-4 md:pt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <p className="w-full pl-8 pr-8 md:px-6 lg:px-0 md:w-full lg:w-9/12 2xl:w-full font-showcase2 border-b-[1px] border-secondary pb-4 md:text-lg lg:text-base 2xl:text-3xl 2xl:pb-12">
          I'm a big enthusiast when it comes to giving life to user interfaces
          through simple, yet technical designs. Outside of "code", you'd find
          me admiring eye catching website concepts on Twitter under the
          hashtags #threejs and #webgl.
        </p>
        <div className="flex md:text-lg lg:text-base 2xl:text-3xl pl-8 pr-8 md:px-6 lg:px-0 justify-between font-showcase2 mt-4 border-b-[1px] border-secondary pb-4 w-full lg:w-9/12 2xl:w-full">
          <p>Email</p>
          <p>rgaronderdev@gmail.com</p>
        </div>

        <div className="flex pl-8 pr-8 2xl:text-3xl md:px-6 lg:px-0 justify-between font-showcase2 mt-4 border-b-[1px] border-secondary pb-4 w-full lg:w-9/12 md:text-lg lg:text-base 2xl:w-full">
          <p>Phone</p>
          <p>+254792636357</p>
        </div>
      </motion.div>
      <p className="hidden md:absolute -bottom-56 -right-52 text-[350px] text-secondary/10 z-0 font-showcase2 font-bold">
        Home
      </p>

      <svg
        className="absolute h-[150vh] w-[150vw] -top-[50vh] -left-40 overflow-visible rotate-[20deg] stroke-secondary -z-0"
        viewBox="0 0 1916 741"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // style={{ fill: show ? "orange" : "red", width: show ? "0%" : "100%" }}
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

function HomeText({
  item,
  i,
  setActive,
  isActive,
  active,
  setVisible,
  x,
  y,
  fadeUp,
}) {
  return (
    <motion.div
      className="md:mr-6 lg:mr-0 lg:ml-6 lg:mb-0 relative after:none md:after:absolute after:content-[''] after:bottom-0 after:w-12 after:bg-blend-difference after:h-0.5  after:rounded-full after:bg-secondary w-full"
      variants={fadeUp}
      onMouseEnter={() => {
        setActive(i);
        setVisible(true);
      }}
      onMouseOut={() => {
        setActive(-1);
        setVisible(false);
      }}
    >
      <div>
        {[...item.label].map((item, i) => (
          <motion.span
            key={i}
            className="text-secondary text-[2.75rem] md:text-4xl lg:text-6xl 2xl:text-9xl font-showcase font-light relative bg-blend-difference md:whitespace-nowrap
      overflow-hidden"
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              ease: [0.43, 0.13, 0.23, 0.96],
              duration: 0.25,
              delay: i * 0.1,
            }}
          >
            {item}
          </motion.span>
        ))}
        {/* <HomeImage isActive={isActive} item={item} x={x} y={y} /> */}
      </div>
    </motion.div>
  );
}

function HomeImage({ isActive, item, x }) {
  const [ref, { width }] = useSize();
  return (
    <img
      src={item.image}
      alt={item.alt}
      className={`w-32 h-52 rounded-sm absolute -top-1/2 -z-10 transition-all pointer-events-none hidden lg:block ${
        isActive ? " opacity-50" : " opacity-0"
      }`}
      ref={ref}
      style={{
        transform: `translateX(${x - width / 2}px) rotate(${
          isActive ? "20deg" : "0deg"
        })`,
      }}
    />
  );
}
