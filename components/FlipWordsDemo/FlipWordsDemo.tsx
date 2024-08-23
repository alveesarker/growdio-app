import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Creative Design", "Video Editing", "Web Design", "Photography", "Campaign Setup", "Reels Editing"];

  return (
    <div className="h-[40rem] flex justify-start items-center">
      <div className="w-[100%] text-4xl font-bold geomatrixBold text-center sm:text-6xl mx-auto text-neutral-100 dark:text-neutral-100">
        Boost your brand with Growdio's
        <br /><FlipWords words={words} />
      </div>
    </div>
  );
}
