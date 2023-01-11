import { motion } from "framer-motion";
import { useProjectContext } from "../hooks/useProjectContext";
import { useState, useEffect } from "react";
const fadeUp = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const letterStagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letters = {
  initial: {
    y: 10,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};
export default function ProjectImage({ project, visible, i, prev }) {
  const { currentProject } = useProjectContext();
  const active = currentProject?.id === project?.id;
  return (
    <div>
      <motion.img
        src={project.attributes.image.data.attributes.url}
        custom={prev}
        animate={{
          zIndex: active ? 1 : prev === i ? 1 : -10,
          x: active ? "0%" : currentProject?.id > i ? "-100%" : "100%",
          opacity: active ? 1 : prev === i ? 1 : 0.8,
          // clipPath: active ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 100%)",
        }}
        transition={{
          duration: 1,
          ease: [0.65, 0, 0.35, 1],
          x: {
            delay: 0.25,
            duration: 1,
            ease: [0.65, 0, 0.35, 1],
          },
        }}
        alt={project?.attributes?.name}
        className="absolute top-0 left-0 w-full h-[90%] object-cover object-left-top"
        key={project.id}
      />
      {/* <motion.div
        className="z-10 w-fit h-fit absolute top-[35%] md:top-[40%] left-[8%] md:left-[42.5%]"
        animate={active ? { y: 0, opacity: 1 } : { y: -125, opacity: 0 }}
        transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <motion.h1
          className="text-primary text-5xl font-bold font-showcase"
          variants={letterStagger}
        >
          {[...project.name].map((letter, i) => (
            <motion.span key={i} variants={letters}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <p className="font-body text-primary text-md mt-2 w-96 pr-14 lg:pr-0">
          {project.description}
        </p>
      </motion.div> */}

      <div className="w-full h-[10%] bg-white absolute bottom-0 z-50 flex justify-center items-center">
        <motion.span
          className="text-2xl text-center font-polaroid font-bold text-secondary"
          animate={{ x: active ? "0" : "100%" }}
          transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          {project?.attributes?.name}
        </motion.span>
      </div>
    </div>
  );
}
