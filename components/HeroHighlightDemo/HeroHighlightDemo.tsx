"use client";
import { motion } from "framer-motion";

export function HeroHighlightDemo() {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="text-4xl px-4 geomatrixBold md:text-6xl lg:text-6xl text-neutral-100 dark:text-white max-w-4xl leading-relaxed lg:leading-tight text-center mx-auto "
    >
      Ready To <span className="calvino">Grow</span> Your <br /> Brand With Growdio
    </motion.h1>
  );
}

