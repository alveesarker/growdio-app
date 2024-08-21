import React from "react";
import { FlipWordsDemo } from "../FlipWordsDemo/FlipWordsDemo";

export function GridBackgroundDemo() {
  return (
    <div className="h-[47rem] w-full dark:bg-black bg-black  dark:bg-grid-black/[0.2] bg-grid-white/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div>
        <FlipWordsDemo />
      </div>
    </div>
  );
}