"use client"
import { HoverEffect } from "../ui/card-hover-effect";
//@ts-ignore
export function CardHoverEffectDemo({ comprehensive }) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={comprehensive.projects} />
    </div>
  );
}
