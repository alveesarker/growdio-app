import React, { useEffect, useState } from "react";
import { InfiniteMovingCard2 } from "../ui/infinite-moving-card2";

// Define the prop type
// type InfiniteMovingCardsDemo2Props = {
//   direction: "left" | "right"; // You can adjust this based on valid directions
// };

export function InfiniteMovingCardsDemo2() {
  return (
    <div className="h-[14rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCard2
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worge of foolist, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "/images/alveesarker.jpg"
  },
  {
    quote:
      "It was the best of times, it was the worge of foolist, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "/images/alveesarker.jpg"
  },
  {
    quote:
      "It was the best of times, it was the worge of foolist, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "/images/alveesarker.jpg"
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/images/alveesarker.jpg"
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/images/alveesarker.jpg"
  },
];