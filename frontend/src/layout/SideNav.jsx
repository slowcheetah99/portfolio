export default function SideNav({ inView }) {
  return (
    <div
      className={`w-1/4 h-screen bg-secondary absolute top-0 left-0 flex flex-col text-primary font-body pl-20 justify-center gap-y-8 z-40 transition-all ${
        inView ? " translate-x-0" : " -translate-x-full"
      }`}
    >
      <div>
        <h2 className="mb-2 font-bold text-xl">Year</h2>
        <p>2022</p>
      </div>

      <div>
        <h2 className="mb-2 font-bold text-xl">Role</h2>
        <p className="mb-1">UI Designer</p>
        <p>Frontend Developer</p>
      </div>

      <div>
        <h2 className="mb-2 font-bold text-xl">Technologies</h2>
        <div className="flex gap-x-4">
          <button className="grid place-content-center px-2 py-1 rounded-full border-2 border-primary text-sm">
            React
          </button>
          <button className="grid place-content-center px-2 py-1 rounded-full border-2 border-primary text-sm">
            Figma
          </button>
        </div>
      </div>

      <button className="grid place-items-center w-fit px-6 py-3 bg-primary text-accent font-body font-bold text-sm rounded-sm">
        View Site
      </button>
    </div>
  );
}
