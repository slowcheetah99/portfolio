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
        src={project.image.lg}
        custom={prev}
        animate={{
          zIndex: active ? 1 : prev === i ? 1 : -10,
          y: active ? "0%" : currentProject?.id > i ? "-100%" : "100%",
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
        alt={project?.name}
        className="absolute top-0 left-0 w-full h-[90%] object-cover project-img"
        key={project.id}
      />
      <div className="w-full h-[10%] bg-white absolute bottom-0 z-50 flex justify-center items-center">
        <motion.span
          className="text-2xl text-center font-polaroid font-bold text-secondary"
          // style={{ y: -125, opacity: 0 }}
          // transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          {currentProject?.name}
        </motion.span>
      </div>
    </div>
  );
}
