"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Santo",
    designation: "Graphic Designer",
    image: '/images/sadik.jpg',
  },
  {
    id: 2,
    name: "Sabbir",
    designation: "Graphic Designer",
    image:
      '/images/sabbir.jpg',
  },
  {
    id: 3,
    name: "Habib",
    designation: "Digital Marketer",
    image:
      '/images/habib.png',
  },
  {
    id: 4,
    name: "Sadman",
    designation: "Project Manager",
    image:
      '/images/sadman.jpg',
  },
  // {
  //   id: 5,
  //   name: "Alvee",
  //   designation: "Developer",
  //   image:
  //     "/images/alveesarker.jpg",
  // },
  {
    id: 6,
    name: "Yeasin",
    designation: "Graphic Designer",
    image:
      "/images/yeasin.jpg",
  },
  {
    id: 7,
    name: "Alif",
    designation: "Developer",
    image:
      "/images/skalif.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-5 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
