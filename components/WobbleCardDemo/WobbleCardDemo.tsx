"use client";
import Link from "next/link";
import FadeInSection from "../HowHelp/FadeInSection";
import { WobbleCard } from "../ui/wobble-card";


//@ts-ignore
export function WobbleCardDemo({person}) {
  return (
    <FadeInSection className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-[80%] mt-32">
      
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[300px] lg:min-h-[300px]"
          className=""
        >
          <div className=" max-w-[21rem] flex flex-col items-start justify-center">
            <p className="mt-4 text-left text-[17px] text-neutral-200 sm:text-[19px]">
              Have an Idea You Want to Bring to Life?
            </p>
            <h2 className="text-left geomatrixBold text-balance text-[28px] sm:text-[30px] md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Let's Make it <br /> Happen!
            </h2>
            <Link href={'/'} target="_black" className="w-auto h-auto px-10 mt-3 py-3 rounded-xl hover:bg-green-500 transition-[all] duration-500 bg-transparent borderWhite z-10">Schedule a meeting</Link>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black">
          <img src={person.src} className="h-20 rounded-full mb-6" alt="" />
          <h2 className="max-w-80 text-left text-[26px] sm:text-[30px] text-base font-semibold tracking-[-0.015em] text-white">
            {person.name}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-sm/6 text-neutral-200">
            {person.title}
          </p>
        </WobbleCard>
    </FadeInSection>
  );
}
