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
    // clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    // clipPath: "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)",
    scale: 0.8,
    x: -200,
    opacity: 0,
    borderRadius: "1%",
    border: "2px solid #1e1e1e",
  },
  animate: {
    // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    x: 0,
    scale: 1,
    opacity: 1,
    borderRadius: "0%",
    border: "0px",
    transition: {
      duration: 1.5,
      ease: [0.43, 0.13, 0.23, 0.96],
      scale: {
        delay: 1.5,
        transition: {
          duration: 1.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      },
      opacity: {
        delay: 0.5,
        transition: {
          duration: 1.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      },
    },
  },
  exit: {
    // clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    // clipPath: "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)",
    scale: 0.8,
    borderRadius: "1%",
    x: -200,
    opacity: 0,
    border: "2px solid #ccc",
    transition: {
      duration: 1.5,
      ease: [0.43, 0.13, 0.23, 0.96],

      x: {
        delay: 1.5,
        transition: {
          duration: 1.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      },
      opacity: {
        delay: 1.6,
        transition: {
          duration: 1.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      },
    },
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
