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
  const { x, y } = useMousePosition();
  function handleComplete() {
    const timer = setTimeout(() => {
      setPointers(true);
    }, 1200);

    return () => clearTimeout(timer);
  }

  return (
    <motion.div
      className={`absolute top-0 left-0 mt-6 mb-0 border-2 border-secondary/50 mx-6 w-${[
        window.innerWidth,
      ]} h-${[
        window.innerHeight,
      ]} pt-20 md:pt-32 lg:pt-0 md:overflow-hidden flex flex-col lg:flex-row lg:justify-between bg-primary`}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ transformOrigin: "center center" }}
      onAnimationComplete={handleComplete}
    >
      <div className="w-fit mt-12 h-full text-secondary flex flex-col gap-x-8">
        <motion.div
          className="w-screen lg:w-fit text-center lg:text-left"
          initial="initial"
          animate="animate"
          variants={staggerOut}
        >
          <motion.p
            className="text-lg lg:text-left md:text-2xl font-showcase lg:ml-[84px] mb-2 md:mb-8"
            variants={fadeUp}
          >
            Hi, I'm Robert
          </motion.p>
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
        </motion.div>
      </div>

      <motion.div
        className="h-full w-full lg:w-5/12 lg:mt-12 mt-6 lg:ml-8 flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: "easeInOut",
        }}
      >
        <p className="text-md w-full px-8 md:px-0 md:w-7/12 font-showcase2 border-b-[1px] border-secondary pb-4">
          I'm a big enthusiast when it comes to giving life to user interfaces
          through simple, yet technical designs. Outside of code and design,
          you'd often find me either on the FL Studio DAW or watching anime.
        </p>
        <div className="flex px-8 md:px-0 justify-between md:gap-x-10 font-showcase2 mt-4 border-b-[1px] border-secondary pb-4 w-full md:w-7/12">
          <p>Email</p>
          <p>rgaronderdev@gmail.com</p>
        </div>

        <div className="flex px-8 md:px-0 justify-between md:gap-x-8 font-showcase2 mt-4 border-b-[1px] border-secondary pb-4 w-full md:w-7/12">
          <p>Phone</p>
          <p>+254792636357</p>
        </div>
      </motion.div>
      <p className="absolute -bottom-56 -right-52 text-[350px] text-secondary/10 z-0 font-showcase2 font-bold">
        Home
      </p>

      <motion.svg
        className="absolute w-[150vw] h-[150vh] -top-[50vh] -left-40 overflow-visible rotate-[20deg] stroke-secondary"
        viewBox="0 0 1916 741"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.path
          d="M134.712 276.378C53.826 487.74 -59.2915 763.879 65.7117 695.878C292.713 540.879 508.713 51.5251 606.211 30.8777C737.213 17.3787 317.713 540.879 460.212 720.378C630.709 834.379 873.713 -75.6233 959.211 30.8777C1044.71 137.379 742.209 480.879 818.711 587.878C917.209 664.879 1158.71 -118.123 1254.71 30.8777C1350.71 179.878 1027.21 521.878 1119.21 645.878C1211.21 769.878 1547.21 -132.623 1604.71 30.8777C1662.21 194.378 1456.71 452.378 1549.71 521.878C1642.71 591.378 1905.71 16.8777 1905.71 16.8777"
          stroke-linecap="round"
          variants={strokeOut}
        />
      </motion.svg>
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
      className="lg:ml-20 mb-4 md:mb-12 relative after:none md:after:absolute after:content-[''] after:bottom-0 after:w-12 after:bg-blend-difference after:h-0.5  after:rounded-full after:bg-secondary w-full"
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
      <p className="text-secondary text-xl lg:text-7xl font-showcase font-light relative bg-blend-difference">
        <HomeImage isActive={isActive} item={item} x={x} y={y} />
        {item.label}
      </p>
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
