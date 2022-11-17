const transition = {
  duration: 0.6,
  ease: [0.33, 1, 0.68, 1],
};

const skewTransition = {
  duration: 3,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const fadeIn = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: -50,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 1,
    y: -50,
  },
};

const upFade = {
  initial: {
    y: "300%",
    opacity: 0,
  },
  animate: {
    y: "-150%",
    opacity: 1,
    transition: { ...transition },
  },
  exit: {
    y: "-300%",
    opacity: 0,
  },
};

const downFade = {
  initial: {
    y: "-300%",
    opacity: 0,
  },
  animate: {
    y: "150%",
    opacity: 1,
    transition: { delay: 0.8, ...transition },
  },
  exit: {
    y: "300%",
    opacity: 0,
  },
};

const skewUp = {
  initial: {
    y: 0,
    skewY: "-10deg",
  },
  animate: {
    y: "-200%",
    opacity: 0,
    transition: { delay: 1.6, ...skewTransition },
  },
  exit: {
    y: "-300%",
    opacity: 0,
  },
};

const skewUp2 = {
  initial: {
    y: 0,
    skewY: "-10deg",
  },
  animate: {
    y: "-200%",
    opacity: 0,
    transition: { delay: 1.7, ...skewTransition },
  },
  exit: {
    y: "-300%",
    opacity: 0,
  },
};

const slideLeft = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-400vw",
    transition: {
      duration: 75,
      ease: "linear",
    },
  },
};

const slideRight = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: "400vw",
    transition: {
      duration: 150,
      ease: "linear",
    },
  },
};

export { fadeIn, slideLeft, slideRight, skewUp, skewUp2, downFade, upFade };
