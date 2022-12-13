import { CustomCursor, Navbar } from "../components";
import { BottomNav } from "./";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const fadeOut = {
  animate: {
    opacity: 1,
    transition: {
      ease: [0.43, 0.13, 0.23, 0.96],
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: [0.43, 0.13, 0.23, 0.96],
      duration: 1,
    },
  },
};

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CustomCursor />
      <Navbar setOpen={setOpen} open={open} />
      <motion.div variants={fadeOut}>{children}</motion.div>
      <BottomNav open={open} setOpen={setOpen} />
    </>
  );
}
