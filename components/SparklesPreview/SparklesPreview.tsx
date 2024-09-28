"use client";
import React from "react";
// import { SparklesCore } from "../ui/sparkles";
import Team from "../Team/Team";

export function SparklesPreview() {
  return (
    <div className="mt-28 h-auto relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* <div className="w-full h-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div> */}
      <Team />
    </div>
  );
}
