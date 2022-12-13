export default function Wrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeOut}
        location={location}
        key={location.pathname}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
