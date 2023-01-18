import { motion } from "framer-motion";
import { useState } from "react";
export default function NavFeatures({ project }) {
  const [hovered, setHovered] = useState(project.features[0]);
  return (
    <div className="w-full h-[75%] flex">
      <div className="w-8/12 h-full">
        <motion.img
          src={`/${hovered?.image?.lg}`}
          alt={hovered.name}
          className="w-full h-full object-cover object-center"
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
      </div>
      <div className="w-4/12 h-full pl-6 font-showcase relative">
        <motion.h1
          className="text-xl md:text-xl font-showcase font-base whitespace-nowrap w-full"
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
              delay: 0,
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
          {project?.name}
        </motion.h1>
        <motion.p
          className="text-2xl font-black"
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
          {hovered?.name}
        </motion.p>
        <motion.p
          className="mt-2 text-sm"
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
              delay: 0,
            },
          }}
        >
          {hovered?.description}
        </motion.p>
        <div className="absolute flex left-0 ml-6 gap-x-4 bottom-0 cursor-pointer">
          {project?.features.map((feature) => (
            <motion.div
              className="w-8 h-8 rounded-full text-white grid place-items-center"
              key={feature?.id}
              style={{ backgroundColor: project?.color }}
              onClick={() => setHovered(feature)}
              initial={{
                y: 10,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: feature?.id * 0.1,
              }}
            >
              {feature?.id}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="w-1/2">
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
  Features
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
  {hovered?.description}
</motion.p>

<div className="controls flex gap-x-4 w-fit absolute left-0 bottom-1/3">
  {project?.features.map((feature) => (
    <div
      className="w-fit px-4 py-2 rounded-full outline-primary outline-2 text-primary cursor-pointer"
      style={{ backgroundColor: project?.color }}
      key={feature?.id}
    >
      {feature?.id}
    </div>
  ))}
</div>
</div>
<motion.div className="w-[40%] ml-4 absolute top-0 right-0 h-full border-b-2 border-secondary/50">
<motion.img
  src={`/${hovered?.image?.md}`}
  alt={hovered?.name}
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
  {hovered?.name}
</h3>
</motion.div> */
}
