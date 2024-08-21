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
      className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-100 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
    >
      Transforming Your Vision<br /> into Reality with Digital Solutions  <br />and{" "}
      <Highlight className="text-white dark:text-white">
        Leading-Edge Innovation
      </Highlight>
    </motion.h1>
  );
}

