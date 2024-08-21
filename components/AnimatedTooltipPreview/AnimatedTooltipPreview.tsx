"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Alvee",
    designation: "Software Engineer",
    image: '/images/alvee.jpg',
  },
  {
    id: 2,
    name: "Dog",
    designation: "Product Manager",
    image:
      '/images/dog.jpg',
  },
  {
    id: 3,
    name: "Alvee",
    designation: "Data Scientist",
    image:
      '/images/alveetwo.jpg',
  },
  {
    id: 4,
    name: "John",
    designation: "UX Designer",
    image:
      '/images/ruki.jpg',
  },
  {
    id: 5,
    name: "Alvee",
    designation: "The Developer",
    image:
      "/images/alvee.jpg",
  },
  {
    id: 6,
    name: "Dog",
    designation: "The Developer",
    image:
      "/images/dog.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-5 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
