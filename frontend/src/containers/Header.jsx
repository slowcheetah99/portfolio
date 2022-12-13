import { icons } from "../assets/icons/icons";
import { Link } from "react-router-dom";
import graphic from "../assets/graphic.svg";
import { useState } from "react";
import { text } from "../assets/homepage/homeText";
import { HomeText } from "../components/";
import { useMousePosition } from "../hooks";
import Loading from "./Loading";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/framerVariants";

export default function Header({ loading }) {
  const [active, setActive] = useState(-1);
  const { x, y } = useMousePosition();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          className="absolute top-0 left-0 w-full h-full px-24 py-12 overflow-hidden"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeIn}
          style={{ transformOrigin: "center center" }}
        >
          <img
            src={graphic}
            alt="graphic"
            className="absolute -top-96 -right-96 opacity-25 w-[1200px] h-[1200px]"
          />
          <div className="flex flex-col items-center gap-y-4 w-12 mt-20">
            <div className="w-0.5 h-20 bg-secondary rounded-full" />
            <div className="logo flex flex-col gap-y-4 z-30">
              {icons.map((icon, i) => (
                <Link to="/" key={i}>
                  <img
                    src={icon}
                    alt="icon"
                    className="cursor-pointer w-7 h-7"
                  />
                </Link>
              ))}
            </div>
            <div className="w-0.5 h-20 bg-secondary rounded-full" />
          </div>

          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pt-32 px-20 text-secondary">
            <p className="text-3xl font-showcase pl-32">Hi, I'm Robert</p>
            {text.map((item, i) => {
              const visible = active === i;
              const xPos = x;
              const yPos = y;
              return (
                <HomeText
                  item={item}
                  i={i}
                  setActive={setActive}
                  visible={visible}
                  active={active}
                  key={item.label}
                  x={xPos}
                  y={yPos}
                />
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
}
