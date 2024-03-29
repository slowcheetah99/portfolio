import { motion } from "framer-motion";
import { useProjectContext } from "../hooks/useProjectContext";

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
export default function ProjectInfo({ project }) {
  const { dispatch, currentProject } = useProjectContext();
  const isActive = project?.id === currentProject?.id;
  return (
    <motion.div
      className={`w-18 h-8 2xl:w-24 2xl:h-12 overflow-hidden cursor-pointer transition-all ${
        isActive ? " outline outline-2 outline-secondary outline-offset-4" : " "
      }`}
      onClick={() => {
        dispatch({
          type: "CHANGE_PROJECT",
          payload: project?.id,
        });
      }}
      variants={items}
    >
      <img
        src={project?.image?.sm}
        alt="project-image"
        className="object-cover object-left-top w-full h-full"
      />
    </motion.div>
  );
}
