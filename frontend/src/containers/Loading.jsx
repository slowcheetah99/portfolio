import { motion } from "framer-motion";
import { screenshots } from "../assets/screenshots/screenshots";
import {
  slideLeft,
  slideRight,
  skewUp,
  skewUp2,
  downFade,
  upFade,
} from "../constants/framerVariants";

export default function Loading() {
  const grid = [
    ...screenshots,
    ...screenshots,
    ...screenshots,
    ...screenshots,
    ...screenshots,
  ];
  return (
    <motion.div
      className="h-screen w-screen -ml-20 relative"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* skew up */}
      <motion.div
        className="bg-[#1e1e1e]/50 h-[200%] z-50 absolute bottom-1 w-[200%]"
        variants={skewUp2}
      />
      {/* skew up */}
      <motion.div
        className="bg-[#1e1e1e] h-[200%] z-50 absolute bottom-1 w-[200%]"
        variants={skewUp}
      />

      <motion.div
        className="h-32 w-12 z-50 absolute left-[50%] top-[50%] translate-y-[-125%] translate-x-[-125%] grid overflow-hidden place-items-center"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          className="w-2 h-8 bg-tertiary rounded-md"
          variants={upFade}
        />
        <motion.div
          className="w-2 h-8 bg-primary -translate-y-[200%] rounded-md"
          variants={downFade}
        />
      </motion.div>

      {/* <div
        className="absolute -top-4 left-0 w-[100%] h-full bg-green-300 flex flex-col justify-between"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          className="grid grid-flow-col grid-rows-1 gap-x-4 h-1/3 w-[400vw]"
          variants={slideLeft}
        >
          {grid.map((item, i) => (
            <img
              src={item.image}
              className="w-full h-full object-contain object-center "
              alt="grid-image"
              key={i}
            />
          ))}
        </motion.div>

        <motion.div
          className="grid grid-flow-col grid-rows-1 gap-x-4 h-1/3 w-[400vw]"
          variants={slideRight}
        >
          {grid.map((item, i) => (
            <img
              src={item.image}
              className="w-full h-full object-contain object-center"
              alt="grid-image"
              key={i}
            />
          ))}
        </motion.div>

        <motion.div
          className="grid grid-flow-col grid-rows-1 gap-x-4 h-1/3 w-[400vw]"
          variants={slideLeft}
        >
          {grid.map((item, i) => (
            <motion.img
              src={item.image}
              className="w-full h-full object-contain object-center"
              alt="grid-image"
              key={i}
              exit={item.path === "/" ? { scale: 110 } : { opacity: 0 }}
            />
          ))}
        </motion.div> */}
      {/* </div> */}
    </motion.div>
  );
}
