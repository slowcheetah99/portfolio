<motion.div
  className="lg:flex justify-between mt-4 md:mt-24 lg:mt-6 h-[90%] w-full relative overflow-hidden"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}
  transition={{
    duration: 0.5,
    ease: [0.17, 0.55, 0.55, 1],
  }}
>
  <div className="flex flex-col w-full items-start relative">
    <div className="w-full h-full">{navItem.element}</div>

    <div className="flex gap-x-2 w-full h-fit -mt-20 mb-6">
      {nav.map((item, i) => {
        const isActive = item.link === navItem.link;
        return (
          <div
            className="w-fit cursor-pointer p-2"
            onClick={() => setNavItem(item)}
            key={i}
          >
            <motion.p
              className="font-showcase font-bold text-secondary uppercase text-base"
              animate={{ opacity: isActive ? 1 : 0.5 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {item.link}
            </motion.p>
            <motion.div
              className="h-[2px] bg-secondary"
              animate={{ width: isActive ? "100%" : "0%" }}
            />
          </div>
        );
      })}
    </div>

    <div className="w-full flex justify-between">
      <motion.button
        className="font-bold px-4 -ml-4 py-2 font-body text-lg relative disabled:opacity-75"
        style={{ color: project?.color }}
        onClick={handlePrev}
        disabled={project?.id === 0}
      >
        &larr; &nbsp; Previous Project
      </motion.button>
      <motion.button
        className="font-bold -mr-4 px-4 py-2 font-body text-lg relative disabled:opacity-75"
        style={{ color: project?.color }}
        onClick={handleNext}
        disabled={project?.id === projects?.length - 1}
      >
        Next Project &nbsp; &rarr;
      </motion.button>
    </div>
  </div>
</motion.div>;
