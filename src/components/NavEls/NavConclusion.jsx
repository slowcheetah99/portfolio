import { motion } from "framer-motion";
export default function NavConclusion({ project }) {
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
    </div>
  );
}
