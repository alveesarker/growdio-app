import { AnimatedTooltipPreview } from "../AnimatedTooltipPreview/AnimatedTooltipPreview";
import Button from "../Button/Button";
import Buttont from "../Button/Buttont";
import { HeroHighlightDemo } from "../HeroHighlightDemo/HeroHighlightDemo";

export function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full relative flex items-center justify-center bg-[url('/images/HeroBg.jpg')] bg-cover bg-center sm:bg-cover sm:h-[30rem] lg:h-[50rem]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="w-[80%]">
        <AnimatedTooltipPreview />
        <HeroHighlightDemo />
        <div className="w-full flex items-center justify-center mt-10 gap-4">
          <Button />
          <Buttont />
        </div>
      </div>
    </div>
  );
}
