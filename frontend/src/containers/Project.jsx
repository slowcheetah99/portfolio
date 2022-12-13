import { SideNav } from "../layout";
import { AiOutlineClose as Close } from "react-icons/ai";
import { BsChevronLeft as Left } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useProjectContext } from "../hooks/useProjectContext";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../constants/framerVariants";
import { useRef } from "react";

export default function Project({ inView, setInView }) {
  const location = useLocation();
  const { currentProject } = useProjectContext();
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, {
    once: true,
  });

  const project =
    location?.state?.project ||
    JSON.parse(localStorage.getItem("CURRENT_PROJECT")) ||
    currentProject;
  function handleView() {
    setInView((state) => !state);
  }
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full px-24 mt-20 overflow-x-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
    >
      <div className="flex flex-col items-end h-[50vh]">
        <h1 className="text-3xl font-body text-secondary font-black mb-2 mt-4">
          {project.name}
        </h1>
        <p className="w-[50%] text-secondary font-body text-right">
          {project.description}
        </p>
      </div>
      <div
        className={`fixed top-1/2 left-0 bg-primary w-10 h-fit py-2 z-50 grid place-items-center rounded-tr-2xl rounded-br-2xl cursor-pointer ${
          inView ? "" : " bg-accent text-primary"
        }`}
        onClick={handleView}
      >
        {inView ? (
          <Close className="text-lg" />
        ) : (
          <Left className="rotate-180 text-lg" />
        )}
      </div>
      <div className="bg-primary w-full h-[60vh]">
        <motion.img
          src={project.url}
          alt={project.name}
          ref={imageRef}
          className="w-full h-full object-cover object-center"
          style={{
            clipPath: isInView
              ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
              : "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            // opacity: isInView ? 1 : 0,
            // transformOrigin: "bottom center",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        />
      </div>
      <p className="w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rem
        excepturi repudiandae quo officiis voluptatem molestiae? Voluptatibus
        omnis in similique officiis unde aspernatur praesentium optio nisi nobis
        odit exercitationem cum est, neque aperiam corporis suscipit. Quidem,
        temporibus. A, aliquam sint! Eius, enim rem vel eaque ducimus velit
        itaque consequuntur, placeat cum quis a odit corporis expedita odio
        labore adipisci, esse sequi assumenda eum libero! In vel animi possimus
        aspernatur voluptas reiciendis quisquam ipsum nulla provident incidunt,
        laboriosam, eveniet inventore accusamus necessitatibus dolore? Vel
        dignissimos delectus, amet consectetur ratione dolores error possimus
        molestias a obcaecati beatae magnam ipsum reiciendis, quia quidem!
      </p>
      <SideNav inView={inView} project={project} />
    </motion.div>
  );
}
