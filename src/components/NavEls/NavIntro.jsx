import { motion } from "framer-motion";

export default function NavIntro({ project }) {
  return (
    <div className="w-full h-full lg:flex pt-4 lg:pt-12">
      <div className="w-full lg:w-1/2 px-6 lg:px-8">
        {[...project?.name].map((name, i) => (
          <motion.span
            className="text-5xl font-bold font-showcase mb-2"
            key={i}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.43, 0.13, 0.23, 0.96],
              duration: 0.25,
              delay: i * 0.1,
            }}
          >
            {name}
          </motion.span>
        ))}
        <motion.p
          className="font-body"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.43, 0.13, 0.23, 0.96],
            duration: 1,
          }}
        >
          {project?.description}
        </motion.p>
      </div>
      <div className="w-full lg:w-1/2 ml-6 lg:ml-0 mt-6 lg:mt-0">
        <motion.div
          className="flex w-full mb-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.43, 0.13, 0.23, 0.96],
            duration: 1,
            delay: 0.25,
          }}
        >
          <p className="text-xl font-semibold w-1/2">Date</p>
          <p className="text-lg w-1/2">{project?.year}</p>
        </motion.div>
        <motion.div
          className="flex w-full mb-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.43, 0.13, 0.23, 0.96],
            duration: 1,
            delay: 0.5,
          }}
        >
          <p className="text-xl font-semibold w-1/2">Role</p>
          <div className="w-1/2">
            {project.role.map((item, i) => (
              <p key={i} className="w-full mt-3">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flex w-full"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.43, 0.13, 0.23, 0.96],
            duration: 1,
            delay: 0.75,
          }}
        >
          <p className="text-xl font-semibold w-1/2">Technologies</p>
          <div className="w-1/2">
            {Object.values(project.technologies).map((item, i) => (
              <p key={i} className="w-full mt-1">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
        {/* <div className="flex w-full">
          <p className="text-xl font-semibold w-1/2">Project Info</p>
          <p className="w-1/2">{project?.intro}</p>
        </div> */}
      </div>
    </div>
  );
}
