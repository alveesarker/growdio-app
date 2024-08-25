import React from "react";
import { HeroHighlightDemo } from "../HeroHighlightDemo/HeroHighlightDemo";
import { AnimatedTooltipPreview } from "../AnimatedTooltipPreview/AnimatedTooltipPreview";
import Button from "../Button/Button";
import Buttont from "../Button/Buttont";

export function GridBackgroundDemo() {
  return (
    <div className="h-[47rem] w-full dark:bg-black bg-black  dark:bg-grid-black/[0.2] bg-grid-white/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-[80%]">
        <AnimatedTooltipPreview />
        <HeroHighlightDemo />
        <div className="w-100% flex items-center justify-center mt-10 gap-4">
          <Button />
          <Buttont />
        </div>
      </div>
    </div>
  );
}