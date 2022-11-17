import { motion } from "framer-motion";
import graphic from "../assets/graphic.svg";
import { icons } from "../assets/icons/icons";
import { Link } from "react-router-dom";
import { Layout } from "../layout";
import {
  AiOutlineMail as Email,
  AiOutlinePhone as Phone,
} from "react-icons/ai";

export default function About() {
  return (
    <Layout>
      <motion.div
        className="h-screen"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="flex justify-between font-body text-secondary">
          <div className="flex flex-col gap-x-4 align-top mt-12">
            <p className="text-xl">Hi again,</p>
            <h2 className="font-bold text-2xl uppercase">Contact</h2>
            <div className="flex gap-x-4 items-center mb-4">
              <Email className="text-3xl" />
              <p>rgaronerdev@gmail.com</p>
            </div>

            <div className="flex gap-x-4 items-center mb-4">
              <Phone className="text-3xl" />
              <p>+25492636357</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <Link className="flex gap-x-4 items-center" to="/">
                <img src={icons[0]} alt="dribbble" />
                <p>Dribble</p>
              </Link>

              <Link className="flex gap-x-4 items-center" to="/">
                <img src={icons[1]} alt="twitter" />
                <p>Twitter</p>
              </Link>

              <Link className="flex gap-x-4 items-center" to="/">
                <img src={icons[2]} alt="github" />
                <p>Github</p>
              </Link>

              <Link className="flex gap-x-4 items-center" to="/">
                <img src={icons[3]} alt="linkedin" />
                <p>LinkedIn</p>
              </Link>
            </div>

            <div className="flex mt-4">
              <Link
                type="button"
                className="bg-opaque font-body text-sm w-fit h-6 px-8 py-5 grid place-content-center rounded-sm font-bold text-accent mr-8"
                to="/about-me"
              >
                Read More
              </Link>
              <button
                type="button"
                className="bg-tertiary/40 font-body text-sm w-fit h-6 px-8 py-5 grid place-content-center rounded-sm font-bold text-secondary"
              >
                Download My CV
              </button>
            </div>
          </div>
          <img
            src={graphic}
            alt="blobs-graphic"
            className="w-[750px] h-[750px] -mr-16 -mt-32"
          />
        </div>
      </motion.div>
    </Layout>
  );
}
