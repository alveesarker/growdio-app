"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center relative left-[50%] translate-x-[-50%] h-[25rem] flex-col mt-20 max-w-[80rem] w-[80%]">
      <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-3xl w-[100%] mb-10">
        Got a project idea or need a creative boost? At Growdio, we're all about turning your visions into reality. Whether it's a fresh website design, a branding overhaul, or digital marketing strategies that work, we've got you covered.
      </p>
      <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl w-[100%]">
        Connect with us on{" "}
        <LinkPreview
          url="https://www.facebook.com/growdio"
          imageSrc="/images/facebook.png" // Replace with your image path or URL
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br text-blue-500"
        >
          Facebook
        </LinkPreview>{" "}
        and {" "}
        <LinkPreview
          url="https://www.instagram.com/team.growdio/"
          imageSrc="/images/instagram.png" // Replace with your image path or URL
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Instagram!
        </LinkPreview>{" "}
        Slide into our DMs, and let's chat about how we can grow your brand together.
      </div>
    </div>
  );
}
