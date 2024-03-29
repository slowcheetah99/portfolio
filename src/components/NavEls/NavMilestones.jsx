import { motion } from "framer-motion";
import { useState } from "react";
export default function NavMilestones({ project }) {
  const [current, setCurrent] = useState(project.milestones[0]);
  return (
    <div className="w-full sm:h-full h-[75%] relative mt-0 lg:mt-12">
      <div className="absolute top-0 left-0 flex flex-col gap-y-12 w-full h-full md:px-0 px-6 lg:px-8 2xl:pr-24">
        {project?.milestones.map((milestone) => (
          <motion.div
            className={`w-full flex flex-col md:flex-row h-[${
              100 / project.milestones.length
            }%]`}
            key={milestone?.id}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
            transition={{
              duration: 0.4,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: milestone?.id * 0.1,
            }}
          >
            <div className="w-full md:w-1/2">
              <p className="text-2xl font-bold md:font-normal mb-2 md:mb-0 2xl:mb-8 2xl:text-4xl">
                {milestone.title}
              </p>
            </div>
            <p className="w-full md:w-1/2 lg:pl-4 2xl:text-3xl">
              {milestone.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
