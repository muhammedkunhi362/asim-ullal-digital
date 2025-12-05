import { motion, useInView, Variant } from "framer-motion";
import { ReactNode, useRef } from "react";

type AnimationDirection = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const getInitialPosition = (direction: AnimationDirection): Variant => {
  const positions = {
    up: { opacity: 0, y: 60, filter: "blur(4px)" },
    down: { opacity: 0, y: -60, filter: "blur(4px)" },
    left: { opacity: 0, x: 60, filter: "blur(4px)" },
    right: { opacity: 0, x: -60, filter: "blur(4px)" },
    none: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
  };
  return positions[direction];
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.2,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const variants = {
    hidden: getInitialPosition(direction),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
