"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

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
      className="text-4xl px-4 geomatrixBold md:text-6xl lg:text-6xl font-bold text-neutral-100 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
    >
      Boost Your Brand’s <span className="calvino">Growth</span> to New Heights!
    </motion.h1>
  );
}

