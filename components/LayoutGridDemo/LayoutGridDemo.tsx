"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Online growth with Growdio
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Venturing into the boundless expanse of untapped creativity, where the echoes of innovation reverberate with the pulse of limitless possibilities.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Online growth with Growdio
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Selling to everybody creates no community. Selling to one avatar creates a strong community. Tailor your approach, understand your audience, and watch a vibrant community emerge. 
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Online growth with Growdio
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Branding profoundly affects your business by shaping customer perceptions and building trust. It establishes recognition, differentiation, and loyalty. A strong brand communicates value, fosters employee pride, and positions your business in the market. It opens doors to opportunities and facilitates expansion. In essence, effective branding is a strategic asset that contributes to long-term success.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      How Consumers find perfect product?
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Uncover the intricacies of customer interaction on your digital platforms! By grasping a few fundamental insights, you can identify the ideal consumers for your flawless product.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Online growth with Growdio
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Crafting success with your vision, our strategy - because together, we're the perfect fit for innovation. 
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Our top sevices
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Unlock unparalleled growth with our comprehensive Shine with Gold package, meticulously crafted to catapult your brand to new heights. Partnering with Growdio guarantees a transformation in your brand's success journey!
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "/images/venture.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/images/selling.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/images/branding.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      "/images/product.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail:
      "/images/idea.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail:
      "/images/sevices.jpg",
  },
];
