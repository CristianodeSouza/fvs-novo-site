export const motionTokens = {
  easePremium: [0.25, 0.74, 0.22, 0.99],
  durationFast: 0.35,
  durationMedium: 0.8,
  durationSlow: 1.2,
  durationVerySlow: 1.6,
  staggerSmall: 0.08,
  staggerMedium: 0.14,
  staggerLarge: 0.2,
  ySmall: 24,
  yMedium: 48,
  yLarge: 96,
} as const

export const animationVariants = {
  titleEnter: {
    hidden: { y: motionTokens.yMedium, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  textEnter: {
    hidden: { y: motionTokens.ySmall, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  imageEnter: {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  cardEnter: {
    hidden: { y: motionTokens.ySmall, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  containerEnter: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: motionTokens.staggerMedium,
        delayChildren: 0,
      },
    },
  },
  buttonHover: {
    scale: 1.05,
    transition: {
      duration: motionTokens.durationFast,
      ease: motionTokens.easePremium,
    },
  },
  buttonTap: {
    scale: 0.97,
  },
}

export const transitionVariant = (duration = motionTokens.durationMedium) => ({
  duration,
  ease: motionTokens.easePremium,
})
