"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

//@ts-ignore
export function ThreeDCardDemo({ team }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]   w-[18rem] sm:w-[20rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-lg font-bold text-neutral-200 dark:text-white"
        >
          {team.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-xs mt-2 dark:text-neutral-300"
        >
          {team.post}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={team.image}
            height="800"
            width="800"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href={team.facebook}
            target="__blank"
            className="px-3 py-1 rounded-xl bg-white dark:bg-white dark:text-white text-black text-xs font-bold"
          >
            Facebook
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={team.behance}
            target="__blank"
            className="px-3 py-1 rounded-xl bg-white dark:bg-white dark:text-white text-black text-xs font-bold"
          >
            Behance
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
