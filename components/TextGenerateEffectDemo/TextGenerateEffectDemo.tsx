"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `our core values are the foundation of everything we do. They drive our commitment to excellence, innovation, and integrity. By fostering collaboration, creativity, and client-centric solutions, we ensure that every project reflects our dedication to delivering exceptional results and building lasting relationships.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
