"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import Link from "next/link";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-[80%] mt-40">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <div className=" max-w-xs flex flex-col items-start justify-center">
          <p className="mt-4 text-left text-[15px] text-neutral-200 sm:text-[18px]">
            Have an Idea You Want to Bring to Life?
          </p>
          <h2 className="text-left geomatrixBold text-balance text-[25px] sm:text-[30px] md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Let's Make it Happen!
          </h2>
          <Link href={'/'} target="_black" className="w-auto h-auto px-10 py-3 mt-10 rounded-xl bg-transparent borderWhite z-10">Schedule a meeting</Link>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black">
        <img src="/images/anik-sadik.jpg" className="h-20 rounded-full mb-6" alt="" />
        <h2 className="max-w-80 text-left text-[25px] sm:text-[30px] text-base font-semibold tracking-[-0.015em] text-white">
          Anik Sadik Santo
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Hey, I’m Anik, the CEO of Growdio and a graphic designer. Driven by a love for visual communication and forward-thinking strategies, I guide Growdio in delivering flexible and impactful solutions for our clients.
        </p>
      </WobbleCard>

    </div>
  );
}
