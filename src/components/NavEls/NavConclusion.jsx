import { motion } from "framer-motion";
import { AiOutlinePlus as Plus } from "react-icons/ai";
import { GrSubtract as Sub } from "react-icons/gr";
import { useServer } from "../../hooks";
import { useNavigate } from "react-router-dom";
export default function NavConclusion({ project }) {
  const { items } = useServer();
  const projects = items;
  const navigate = useNavigate();

  function handlePrev() {
    if (project.id !== projects[0].id) {
      const res = projects.filter((item, i) => item.id === project.id - 1);
      localStorage.setItem("CURRENT_PROJECT", JSON.stringify(res[0]));
      navigate(`/projects/${res[0].slug}`, {
        state: {
          project: res[0],
        },
      });
    }
  }

  function handleNext() {
    if (project.id !== projects[projects.length - 1].id) {
      const res = projects.filter((item, i) => item.id === project.id + 1);
      localStorage.setItem("CURRENT_PROJECT", JSON.stringify(res[0]));
      navigate(`/projects/${res[0].slug}`, {
        state: {
          project: res[0],
        },
      });
    }
  }
  return (
    <div className="w-full h-[80%] pt-12">
      <div className="w-1/2">
        <motion.h3
          className="text-2xl mb-2 font-bold font-showcase"
          style={{ color: project?.color }}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.15,
            },
          }}
          exit={{
            y: 20,
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.15,
            },
          }}
        >
          Conclusion
        </motion.h3>
        <motion.p
          className="w-full text-secondary font-body text-sm md:text-2xl lg:text-base"
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.3,
            },
          }}
          exit={{
            y: 20,
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.3,
            },
          }}
        >
          {project?.conclusion}
        </motion.p>
      </div>
      {project.type === "web" && (
        <a
          href={project.link}
          target="_blank"
          className="mt-16 block font-bold text-lg font-showcase underline underline-offset-4"
          style={{ color: project.color }}
        >
          Visit Site
        </a>
      )}

      <div className="flex h-fit justify-between mt-8">
        <motion.div
          className="w-fit cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{
            ease: "easeInOut",
          }}
          onClick={handlePrev}
        >
          <div className="w-fit flex items-center gap-x-2">
            <Sub className="text-secondary" />
            <p className="text-base pr-4 py-2 font-bold">Previous Project</p>
          </div>
        </motion.div>

        <motion.div
          className="w-fit cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{
            ease: "easeInOut",
          }}
          onClick={handleNext}
        >
          <div className="flex w-fit items-center gap-x-2 mr-8">
            <p className="text-base pl-4 py-2 font-bold">Next Project</p>
            <Plus className="text-secondary" />
          </div>
          {/* <div className="w-full h-[2px] bg-secondary" /> */}
        </motion.div>
      </div>
    </div>
  );
}
