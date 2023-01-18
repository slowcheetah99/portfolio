import { motion } from "framer-motion";
export default function NavIntro({ project }) {
  return (
    <div className="w-full h-[60%] flex">
      <div className="w-1/2">
        <motion.h3
          className="text-2xl font-body mb-2 font-bold"
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
          Introduction
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
          {project?.description}
        </motion.p>
      </div>
      <div className="w-1/2">
        <motion.div
          className="w-full lg:w-[60%] h-1/2 bg-white lg:h-[50vh] absolute -top-8 right-4 md:ml-32 mr-2 md:relative px-4 pt-4 outline-2 outline"
          style={{ outlineColor: project?.color, rotate: "-4deg" }}
          whileHover={{ rotate: "0deg" }}
          transition={{
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          <motion.img
            src={`/${project?.image?.md}`}
            alt={project?.name}
            className="w-full h-[80%] object-cover object-left-top"
            initial={{
              clipPath: "inset(0% 0% 0% 100%)",
            }}
            animate={{
              clipPath: "inset(0% 0% 0% 0%)",
            }}
            exit={{
              clipPath: "inset(0% 0% 0% 100%)",
            }}
            transition={{
              duration: 0.5,
              ease: [0.17, 0.55, 0.55, 1],
            }}
          />
          <h3
            className="text-center font-polaroid text-3xl mt-4"
            style={{ color: project?.color }}
          >
            {project?.name}
          </h3>
        </motion.div>
      </div>
    </div>
  );
}
