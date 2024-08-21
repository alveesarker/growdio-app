"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Discovery & Strategy",
    description:
      "We start by getting to know your brand, understanding your goals, and identifying the challenges you face. Through in-depth discussions and market research, we develop a strategic plan tailored to your needs.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/par1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Creative Design & Development",
    description:
      "With the strategy in place, our creative team brings your vision to life. From eye-catching designs to user-friendly interfaces, we focus on creating experiences that resonate with your audience.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/par2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Execution & Campaign Setup",
    description:
      "Once the design is finalized, we move to execution. Whether it's launching a new website, setting up a digital marketing campaign, or creating engaging content, we handle it all. Our expertise in campaign management ensures that your message reaches the right audience at the right time.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/par3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Optimization & Growth",
    description:
      "Our job doesn’t end with the launch. We continuously monitor and optimize your campaigns, making data-driven adjustments to improve performance. We provide regular reports and insights, helping you to understand what’s working and where there’s room for improvement. Our goal is to help your brand grow and thrive in a competitive market.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/par4.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="mt-10 mask-image-top-bottom">
      <StickyScroll content={content} />
    </div>
  );
}
