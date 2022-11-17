import { CustomCursor, Navbar } from "../components";
import { BottomNav } from "./";
import { useState } from "react";
import { Loading } from "../containers";
import { motion } from "framer-motion";
export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CustomCursor />
      <Navbar setOpen={setOpen} open={open} />
      {children}
      <BottomNav open={open} setOpen={setOpen} />
    </>
  );
}
