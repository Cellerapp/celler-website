import { Variants } from "framer-motion";

export const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  },
};

// Enhanced animations with delay support
export const fadeInWithDelay = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => {
  const baseVariants = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: -20 },
    right: { x: 20 }
  };

  return {
    hidden: { 
      opacity: 0, 
      ...baseVariants[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay 
      }
    },
  };
};

// Long duration animations for hero sections
export const fadeInLong = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => {
  const baseVariants = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: -40 },
    right: { x: 40 }
  };

  return {
    hidden: { 
      opacity: 0, 
      ...baseVariants[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        delay 
      }
    },
  };
};

// Quick animations for small elements
export const fadeInQuick = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => {
  const baseVariants = {
    up: { y: 10 },
    down: { y: -10 },
    left: { x: -10 },
    right: { x: 10 }
  };

  return {
    hidden: { 
      opacity: 0, 
      ...baseVariants[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 0.3, 
        ease: "easeOut",
        delay 
      }
    },
  };
}; 