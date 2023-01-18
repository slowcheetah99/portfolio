import { motion } from "framer-motion";
import { useState } from "react";
export default function NavMilestones({ project }) {
  const [current, setCurrent] = useState(project.milestones[0]);
  return (
    <div className="w-full h-[75%] relative">
      <div className="absolute top-0 left-0 flex flex-col gap-y-12 w-full h-full">
        {project?.milestones.map((milestone) => (
          <motion.div
            className="w-full h-[40vh] flex"
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
            <div className="w-1/2">
              <p className="text-2xl">{milestone.title}</p>
            </div>
            <p className="w-1/2 pl-4">{milestone.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
