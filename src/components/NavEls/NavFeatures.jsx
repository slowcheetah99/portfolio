import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export default function NavFeatures({ project }) {
  const [hovered, setHovered] = useState(project.features[0]);
  return (
    <div className="w-full h-[70svh] relative">
      <AnimatePresence mode="wait">
        <motion.div
          className="w-full h-[89.5%] relative md:overflow-hidden overflow-y-scroll"
          key={hovered?.id}
          initial={{
            clipPath: "inset(0% 0% 0% 100%)",
          }}
          animate={{
            clipPath: "inset(0% 0% 0% 0%)",
          }}
          exit={{
            clipPath: "inset(0% 0% 0% 100%)",
          }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <motion.img
            src={`/${hovered.image.lg}`}
            alt={hovered.name}
            className="w-full h-full object-cover object-left-top"
            initial={{ scale: 1.25 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-secondary/50 z-20" />
          <div className="w-full h-fit text-primary absolute top-3/4 lg:top-1/2 left-0 px-4 md:px-0 lg:left-[30%] -translate-y-1/2 z-30">
            <div className="w-fit">
              <motion.h2
                className="text-4xl 2xl:text-7xl font-bold mb-2"
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
              >
                {hovered.name}
              </motion.h2>
              <motion.div
                className="w-full h-[2px] bg-primary my-2"
                initial={{
                  width: "0%",
                  opacity: 0,
                }}
                animate={{
                  width: "100%",
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
              />
            </div>
            <motion.p
              className="text-sm lg:text-lg 2xl:text-4xl w-full lg:w-1/2"
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 0.1,
              }}
            >
              {hovered.description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="w-full h-[11.5%] flex gap-x-8 justify-center items-center md:items-start md:justify-end pt-0 md:pt-6 md:pr-32 z-50 relative bg-white">
        {project.features.map((feature, i) => {
          const isActive = feature?.id === hovered?.id;
          return (
            <motion.img
              src={`/${feature.image.sm}`}
              key={feature.id}
              className={`w-18 h-8 2xl:w-24 2xl:h-12 object-center object-cover cursor-pointer ${
                isActive
                  ? " outline outline-2 outline-secondary outline-offset-4"
                  : " "
              }`}
              initial={{
                y: 200,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: i * 0.1,
              }}
              onClick={() => setHovered(feature)}
            />
          );
        })}
      </div>
    </div>
  );
}
