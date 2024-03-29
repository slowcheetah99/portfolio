export default function SideNav({ inView, project }) {
  return (
    <div
      className={`w-full md:w-1/4 h-screen bg-secondary fixed top-0 left-0 flex flex-col text-primary font-body pl-20 justify-center gap-y-6 z-30 transition-all ${
        inView ? " translate-x-0" : " -translate-x-full"
      }`}
    >
      <div>
        <h2 className="mb-2 font-bold text-xl">Year</h2>
        <p>{project?.year}</p>
      </div>

      <div>
        <h2 className="mb-2 font-bold text-xl">Role</h2>
        {Object.values(project?.role).map((item, i) => (
          <p className="mb-2" key={i}>
            {item}
          </p>
        ))}
      </div>

      <div>
        <h2 className="mb-2 font-bold text-xl">Technologies</h2>
        <div className="flex gap-x-4 gap-y-3 w-44 flex-wrap">
          {Object.values(project?.technologies).map((tech, i) => (
            <button
              className="grid place-content-center px-2 py-1 rounded-full border-2 border-primary text-sm"
              key={i}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <a
        href={project.link}
        target="_blank"
        className="grid place-items-center w-fit px-6 py-3 bg-primary font-body font-bold text-sm rounded-sm cursor-pointer"
        style={{ color: project?.color }}
      >
        {project?.type === "web" ? "View Site" : "View Case Study"}
      </a>
    </div>
  );
}
