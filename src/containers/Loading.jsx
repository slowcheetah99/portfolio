import { motion, AnimatePresence } from "framer-motion";
const skewTransition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const staggerOut = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const slideUp = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-100%",
    transition: { ...skewTransition },
  },
};

export default function Loading({ setLoading }) {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute top-0 left-0 w-screen h-screen flex"
        initial="initial"
        animate="animate"
        variants={staggerOut}
        key="loader"
        onAnimationComplete={() => setLoading(false)}
      >
        <motion.div className="w-1/4 h-full bg-secondary" variants={slideUp} />
        <motion.div className="w-1/4 h-full bg-secondary" variants={slideUp} />
        <motion.div className="w-1/4 h-full bg-secondary" variants={slideUp} />
        <motion.div className="w-1/4 h-full bg-secondary" variants={slideUp} />
      </motion.div>
    </AnimatePresence>
  );
}
