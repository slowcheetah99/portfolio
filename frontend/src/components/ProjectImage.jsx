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

// const mainProject = {
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1.6,
//       ease: [0.43, 0.13, 0.23, 0.96],
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: 200,
//     transition: {
//       duration: 1.6,
//       ease: [0.43, 0.13, 0.23, 0.96],
//     },
//   },
// };
export default function ProjectImage({ project }) {
  const { currentProject } = useProjectContext();
  const [visible, setVisible] = useState(false);
  const active = currentProject.id === project.id;
  return (
    <div>
      <motion.img
        src={project.url}
        style={{ transformOrigin: active ? "right top" : "left top" }}
        animate={{
          scaleX: active ? 1 : 0,
        }}
        transition={{ duration: 0.9, ease: [0.6, 0.05, -0.01, 0.9] }}
        alt={project.name}
        className="absolute top-0 left-0 w-full h-full object-cover"
        key={project.id}
        onAnimationComplete={() => setVisible(true)}
        // layoutId="project-img"
      />
      {visible && (
        <motion.div
          className="z-10 w-fit h-fit absolute top-[40%] left-[42.5%]"
          animate={active ? { y: 0, opacity: 1 } : { y: -125, opacity: 0 }}
          transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          <motion.h1
            className="font-body text-primary text-3xl font-bold"
            variants={letterStagger}
          >
            {[...project.name].map((letter, i) => (
              <motion.span key={i} variants={letters}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <p className="font-body text-primary text-md mt-2 w-96">
            {project.description}
          </p>
        </motion.div>
      )}
    </div>
  );
}
