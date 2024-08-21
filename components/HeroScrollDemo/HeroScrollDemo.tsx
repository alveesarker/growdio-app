"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { Highlight } from "../ui/hero-highlight";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#ffffff] dark:text-white">
              <Highlight>Unleash the power of</Highlight>  <br />
              <span className="text-4xl text-white md:text-[6rem] font-bold mt-1 leading-none">
                GROWDIO
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/images/par7.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
