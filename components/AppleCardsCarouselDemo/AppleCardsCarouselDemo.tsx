"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Highlight } from "../ui/hero-highlight";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 mt-32">
      <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-100 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
//@ts-ignore
const DummyContent = ({image, desc}) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The content is representing
              </span>{" "}
              {desc}
            </p>
            <Image
              src={image}
              alt="growdio image"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Growdio",
    title: "You can do more with AI.",
    src: "/images/par3.jpg",
    //@ts-ignore
    content: <DummyContent image={'/images/par3.jpg'} desc={"bringing your business to an \"Online Marketplace.\" It suggests that by leveraging Growdio's website development services, businesses can significantly enhance their online visibility. The visuals highlight the integration of digital tools and platforms, symbolizing the transition from traditional to online commerce, and emphasize the importance of establishing a strong online presence to reach a broader audience. The use of vibrant green and modern icons reinforces the theme of growth and digital engagement."}/>,
  },
  {
    category: "Growdio",
    title: "Enhance your productivity.",
    src: "/images/par4.jpg",
    content: <DummyContent image={'/images/par4.jpg'} desc={"bringing your business to an \"Online Marketplace.\" It suggests that by leveraging Growdio's website development services, businesses can significantly enhance their online visibility. The visuals highlight the integration of digital tools and platforms, symbolizing the transition from traditional to online commerce, and emphasize the importance of establishing a strong online presence to reach a broader audience. The use of vibrant green and modern icons reinforces the theme of growth and digital engagement."}/>,
  },
  {
    category: "Growdio",
    title: "Launching the new Apple Vision Pro.",
    src: "/images/par5.jpg",
    content: <DummyContent image={'/images/par5.jpg'} desc={"bringing your business to an \"Online Marketplace.\" It suggests that by leveraging Growdio's website development services, businesses can significantly enhance their online visibility. The visuals highlight the integration of digital tools and platforms, symbolizing the transition from traditional to online commerce, and emphasize the importance of establishing a strong online presence to reach a broader audience. The use of vibrant green and modern icons reinforces the theme of growth and digital engagement."}/>,
  },

  {
    category: "Growdio",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/images/par6.jpg",
    content: <DummyContent image={'/images/par6.jpg'} desc={"bringing your business to an \"Online Marketplace.\" It suggests that by leveraging Growdio's website development services, businesses can significantly enhance their online visibility. The visuals highlight the integration of digital tools and platforms, symbolizing the transition from traditional to online commerce, and emphasize the importance of establishing a strong online presence to reach a broader audience. The use of vibrant green and modern icons reinforces the theme of growth and digital engagement."}/>,
  },
  {
    category: "Growdio",
    title: "Photography just got better.",
    src: "/images/par7.jpg",
    content: <DummyContent image={'/images/par7.jpg'} desc={"bringing your business to an \"Online Marketplace.\" It suggests that by leveraging Growdio's website development services, businesses can significantly enhance their online visibility. The visuals highlight the integration of digital tools and platforms, symbolizing the transition from traditional to online commerce, and emphasize the importance of establishing a strong online presence to reach a broader audience. The use of vibrant green and modern icons reinforces the theme of growth and digital engagement."}/>,
  },
  {
    category: "Growdio",
    title: "Hiring for a Staff Software Engineer",
    src: "/images/par9.jpg",
    content: <DummyContent image={'/images/par9.jpg'} desc={"bringing your business to an \"Online Marketplace.\" It suggests that by leveraging Growdio's website development services, businesses can significantly enhance their online visibility. The visuals highlight the integration of digital tools and platforms, symbolizing the transition from traditional to online commerce, and emphasize the importance of establishing a strong online presence to reach a broader audience. The use of vibrant green and modern icons reinforces the theme of growth and digital engagement."}/>,
  },
];
