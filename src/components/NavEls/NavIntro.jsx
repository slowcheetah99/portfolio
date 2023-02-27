import { motion } from "framer-motion";

export default function NavIntro({ project }) {
  return (
    <div className="w-full h-full lg:flex pt-4 lg:pt-12">
      <div className="w-full lg:w-1/2 px-6 lg:px-8">
        {[...project?.name].map((name, i) => (
          <motion.span
            className="text-5xl 2xl:text-8xl font-bold font-showcase"
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
          className="font-body text-base 2xl:text-3xl mt-2 2xl:mt-4"
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
          className="flex w-full mb-6 2xl:mb-16"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.43, 0.13, 0.23, 0.96],
            duration: 1,
            delay: 0.25,
          }}
        >
          <p className="text-xl font-semibold w-1/2 2xl:text-4xl">Date</p>
          <p className="text-lg w-1/2 2xl:text-4xl">{project?.year}</p>
        </motion.div>
        <motion.div
          className="flex w-full mb-6 2xl:mb-16"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.43, 0.13, 0.23, 0.96],
            duration: 1,
            delay: 0.5,
          }}
        >
          <p className="text-xl font-semibold w-1/2 2xl:text-4xl">Role</p>
          <div className="w-1/2">
            {project.role.map((item, i) => (
              <p
                key={i}
                className="w-full first-of-type:mb-4 text-lg 2xl:text-4xl"
              >
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
          <p className="text-xl font-semibold w-1/2 2xl:text-4xl">
            Technologies
          </p>
          <div className="w-1/2">
            {Object.values(project.technologies).map((item, i) => (
              <p key={i} className="w-full mb-1 2xl:mb-8 2xl:text-4xl">
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
