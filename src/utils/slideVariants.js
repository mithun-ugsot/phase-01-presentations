export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -48 : 48,
    opacity: 0,
  }),
}

export const slideTransition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
}
