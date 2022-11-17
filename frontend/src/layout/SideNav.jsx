export default function SideNav({ inView, images }) {
  return (
    <div
      className={`w-1/4 h-screen bg-secondary absolute top-0 left-0 flex flex-col text-primary font-body pl-20 justify-center gap-y-6 z-40 transition-all ${
        inView ? " translate-x-0" : " -translate-x-full"
      }`}
    >
      <div>
        <h2 className="mb-2 font-bold text-xl">Year</h2>
        <p>{images.year}</p>
      </div>

      <div>
        <h2 className="mb-2 font-bold text-xl">Role</h2>
        {images?.role.map((item, i) => (
          <p className="mb-2" key={i}>
            {item}
          </p>
        ))}
      </div>

      <div>
        <h2 className="mb-2 font-bold text-xl">Technologies</h2>
        <div className="flex gap-x-4 gap-y-3 w-44 flex-wrap">
          {images?.technologies.map((tech, i) => (
            <button
              className="grid place-content-center px-2 py-1 rounded-full border-2 border-primary text-sm"
              key={i}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <button className="grid place-items-center w-fit px-6 py-3 bg-primary text-accent font-body font-bold text-sm rounded-sm">
        {images[3]?.type === "web" ? "View Site" : "View Case Study"}
      </button>
    </div>
  );
}
