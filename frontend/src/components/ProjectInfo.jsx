import { motion } from "framer-motion";
import { useProjectContext } from "../hooks/useProjectContext";

const items = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};
export default function ProjectInfo({ project }) {
  const { dispatch } = useProjectContext();

  return (
    <motion.div
      className="w-32 h-full rounded-md overflow-hidden cursor-pointer"
      // onClick={() => handleProject(i)}
      onClick={() => {
        dispatch({
          type: "CHANGE_PROJECT",
          payload: project.id,
        });
      }}
      variants={items}
    >
      <img src={project.url} alt="project-image" />
    </motion.div>
  );
}
