import React from "react";
import { HeroHighlightDemo } from "../HeroHighlightDemo/HeroHighlightDemo";
import { AnimatedTooltipPreview } from "../AnimatedTooltipPreview/AnimatedTooltipPreview";
import Button from "../Button/Button";
import Buttont from "../Button/Buttont";

export function GridBackgroundDemo() {
  return (
    <div className="h-[47rem] w-full bg-[images/HeroBg.jpg] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      
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