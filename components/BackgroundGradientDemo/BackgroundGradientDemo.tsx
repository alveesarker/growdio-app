"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] w-[100%] flex flex-col items-center p-4 sm:p-10 bg-black dark:bg-zinc-900">
        <Image
          src={`/images/alveesarker.jpg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain rounded-xl"
        />
        <div>
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          Alvee Sarker
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Lorem ipsum, dolor sit amet consectetur  sunt placeat explicabo numquam in animi assumenda fuga blanditiis voluptate, quasi, officia illo quia,  optio?
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>View profile </span>
        </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
