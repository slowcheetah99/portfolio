import { useState } from "react";
import { motion } from "framer-motion";
import { useProjectContext } from "../hooks/useProjectContext";
import { ProjectInfo } from "../components";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { fadeIn } from "../constants/framerVariants";
import ProjectImage from "../components/ProjectImage";
export default function Work({ setInView }) {
  const [index, setIndex] = useState(0);
  const { projects, currentProject, dispatch } = useProjectContext();
  const navigate = useNavigate();

  const fadeInStagger = {
    animate: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  function handleProject(i) {
    dispatch({
      type: "CHANGE_PROJECT",
      index: i,
    });
    setIndex(currentProject.id);
  }

  function viewProject() {
    localStorage.setItem("CURRENT_PROJECT", JSON.stringify(currentProject));
    navigate(`/projects/${_.kebabCase(currentProject.name)}`, {
      state: {
        project: currentProject,
      },
    });
  }

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full px-24"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-secondary/40 z-10" />
      {projects.map((project) => (
        <ProjectImage project={project} key={project.id} />
      ))}
      <motion.div
        className="absolute bottom-20 left-[42.5%] flex gap-x-4 z-10 items-center"
        variants={fadeInStagger}
      >
        {projects.map((project, i) => (
          <ProjectInfo
            project={project}
            i={i}
            handleProject={handleProject}
            key={project.id}
          />
        ))}

        <div
          className="mt-4 rounded-3xl border-2 border-primary text-3xl text-primary grid place-items-center px-2 py-4 cursor-pointer"
          onClick={viewProject}
        >
          &darr;
        </div>
      </motion.div>
    </motion.div>
  );
}
