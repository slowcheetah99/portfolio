import { images } from "../assets/images/images";
import { SideNav } from "../layout";
import { AiOutlineClose as Close } from "react-icons/ai";
import { BsChevronLeft as Left } from "react-icons/bs";
import { useState } from "react";
import { Layout } from "../layout";

export default function Project() {
  const [inView, setInView] = useState(false);

  function handleView() {
    setInView((state) => !state);
  }
  return (
    <Layout>
      <div className="h-screen w-full">
        <div
          className="absolute top-1/2 left-0 bg-primary w-10 h-fit py-2 z-50 grid place-items-center rounded-tr-2xl rounded-br-2xl cursor-pointer"
          onClick={handleView}
        >
          {inView ? (
            <Close className="text-lg" />
          ) : (
            <Left className="rotate-180 text-lg" />
          )}
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={images[3].url}
            alt={images[3].name}
            className="w-full h-full object-cover object-center"
          />
          <div
            className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/2 h-fit px-20 py-20 text-primary flex flex-col gap-y-4 z-50 opacity-0 transition-[opacity, transform] cubic-bezier(0.33, 1, 0.68, 1) duration-100
                ${!inView && " opacity-100 translate-y-[-50%]"}
              `}
          >
            <div className="-z-10 absolute top-0 left-0 w-full h-full bg-secondary/40 backdrop-blur-lg" />
            <p className="font-body text-2xl">{images[3].name}</p>
            <div className="flex w-full justify-between">
              <div>
                <h2 className="mb-2 font-bold text-xl">Year</h2>
                <p className="mb-2">{images[3].year}</p>
                <p>{images[3].duration}</p>
              </div>

              <div>
                <h2 className="mb-2 font-bold text-xl">Role</h2>
                {images[3]?.role.map((item, i) => (
                  <p className="mb-2" key={i}>
                    {item}
                  </p>
                ))}
              </div>

              <div>
                <h2 className="mb-2 font-bold text-xl">Technologies</h2>
                <div className="grid grid-cols-2 gap-4">
                  {images[3]?.technologies.map((tech, i) => (
                    <button
                      className="grid place-content-center px-2 py-1 rounded-full border-2 border-primary text-sm"
                      key={i}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button className="grid place-items-center w-fit px-6 py-3 bg-primary text-accent font-body font-bold text-sm rounded-sm">
              {images[3]?.type === "web" ? "View Site" : "View Case Study"}
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-secondary/40 z-10" />
        <div></div>
        <SideNav inView={inView} images={images[3]} />
      </div>
    </Layout>
  );
}
