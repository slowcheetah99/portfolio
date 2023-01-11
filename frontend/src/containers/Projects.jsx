import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useProjectContext } from "../hooks/useProjectContext";
import { ProjectInfo } from "../components";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { fadeIn } from "../constants/framerVariants";
import ProjectImage from "../components/ProjectImage";
import { useGql } from "../hooks";

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

const fadeInStagger = {
  animate: {
    transition: {
      delayChildren: 0.5,
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
      delay: 1,
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};
export default function Work() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(index);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  // const [projects, setProjects] = useState();
  const { loading, error, data } = useGql();
  const { dispatch, projects, currentProject } = useProjectContext();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch({
      type: "SET_PROJECTS",
      payload: data?.projects?.data,
    });

    dispatch({
      type: "CURRENT_PROJECT",
      payload: data?.projects?.data[0],
    });
  }, [data]);

  if (loading) return <p>Loading...</p>;

  function handleProject(i) {
    dispatch({
      type: "CHANGE_PROJECT",
      index: i,
    });
    setIndex(currentProject.id);
    setPrev(index);
  }

  function viewProject() {
    localStorage.setItem("CURRENT_PROJECT", JSON.stringify(currentProject));
    navigate(`/projects/${_.kebabCase(currentProject?.attributes?.name)}`, {
      state: {
        project: currentProject,
      },
    });
  }

  return (
    <motion.div
      className="absolute top-0 left-0 overflow-hidden lg:px-24 mx-6 w-[96vw] h-[76.5vh] mt-6 bg-primary border-2 border-secondary/50"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <svg
        className="absolute w-[150vw] h-[150vh] -top-[50vh] -left-40 overflow-visible rotate-[20deg] stroke-secondary pointer-events-auto -z-0"
        viewBox="0 0 1916 741"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M134.712 276.378C53.826 487.74 -59.2915 763.879 65.7117 695.878C292.713 540.879 508.713 51.5251 606.211 30.8777C737.213 17.3787 317.713 540.879 460.212 720.378C630.709 834.379 873.713 -75.6233 959.211 30.8777C1044.71 137.379 742.209 480.879 818.711 587.878C917.209 664.879 1158.71 -118.123 1254.71 30.8777C1350.71 179.878 1027.21 521.878 1119.21 645.878C1211.21 769.878 1547.21 -132.623 1604.71 30.8777C1662.21 194.378 1456.71 452.378 1549.71 521.878C1642.71 591.378 1905.71 16.8777 1905.71 16.8777"
          stroke-linecap="round"
          variants={strokeOut}
          onAnimationStart={() => setShow(false)}
          onAnimationComplete={() => setShow(true)}
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full z-50">
        <div className="absolute top-0 left-0 w-full h-full bg-secondary/40 z-10" />
        {show && (
          <div>
            <motion.button
              className="bg-[#111] text-primary text-sm md:text-md px-4 py-2 z-50 absolute bottom-20 md:bottom-16 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-20"
              onClick={viewProject}
              variants={fadeUp}
            >
              View Project
            </motion.button>
            <motion.div
              className="w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {projects?.map((project, i) => (
                <ProjectImage
                  project={project}
                  key={project.id}
                  visible={visible}
                  i={i}
                  prev={prev}
                />
              ))}
            </motion.div>
            <motion.div
              className="absolute bottom-28 lg:right-20 lg:translate-x-0 right-1/2 translate-x-1/2 flex gap-x-4 z-10 items-center"
              variants={fadeInStagger}
            >
              {projects?.map((project, i) => (
                <ProjectInfo
                  project={project}
                  i={i}
                  handleProject={handleProject}
                  key={project.attributes.name}
                />
              ))}
            </motion.div>
          </div>
        )}
      </div>
      <p className="absolute -bottom-56 -right-52 text-[350px] text-secondary/10 z-0 font-showcase2 font-bold">
        Projects
      </p>
    </motion.div>
  );
}
//
