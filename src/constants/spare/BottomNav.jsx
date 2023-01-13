export default function Bottom() {
  return (
    <motion.div
      className={`px-24 py-12 absolute top-0 left-0 bg-secondary text-primary w-full h-full z-50 flex justify-between ${
        pointers ? "opacity-100" : "opacity-0"
      }`}
      style={{ transformOrigin: open ? "right top" : "left top" }}
      animate={{
        clipPath: open ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 0% 100%)",
      }}
      transition={{ duration: 0.9, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <div className="w-1/2 h-1/2 flex gap-y-12 flex-col mt-36">
        {screenshots.map((screenshot, i) => (
          <NavContent
            screenshot={screenshot}
            key={screenshot.label}
            setOpen={setOpen}
          />
        ))}
      </div>

      <div className="logo flex flex-col gap-y-4 z-30 w-1/2 h-1/2 mt-36">
        {icons.map((icon, i) => (
          <a
            href={icon.path}
            key={i}
            className="w-36 h-fit flex justify-between font-showcase"
          >
            <p>{icon.label}</p>
            <img
              src={icon.icon}
              alt="icon"
              className="text-3xl text-primary bg-primary rounded-full"
            />
          </a>
        ))}
      </div>
    </motion.div>
  );
}
