"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Highlight } from "../ui/hero-highlight";
import FadeInSection1 from "../HowHelp/FadeInSection1";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 mt-32">
      <FadeInSection1 delay={0.5} className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-100 dark:text-neutral-200 font-sans">
      Meet Our Experts
      </FadeInSection1>
      <Carousel items={cards} />
    </div>
  );
}
//@ts-ignore
const DummyContent = ({ image, desc }) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-6">
              {desc}
            </p>
            <Image
              src={image}
              alt="growdio image"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Honourable Adviser",
    title: "Afif Al Kabir",
    src: "/images/afif.jpg",
    //@ts-ignore
    content: <DummyContent image={'/images/afif.jpg'} desc={"A warm welcome @kabir.oc , where brilliance thrives! We are thrilled to have you on board as our esteemed adviser. As a Grandmaster winner, your invaluable insights will undoubtedly contribute to the growth and success of our team. Here's to an exciting journey ahead! Join us in welcoming Mr. Afif Al Kabir to the future we're building together. ✨"} />,
  },
  {
    category: "Web Developer",
    title: "SK Alif",
    src: "/images/alif.jpg",
    content: <DummyContent image={'/images/alif.jpg'} desc={"Introducing Visionary Developer, @Sk Alif , the creative force behind CodeCanvas. With an innate passion for crafting digital masterpieces, He brings a unique perspective to the world of coding. Specializing in transforming the ordinary into the extraordinary, he is dedicated to creating visually stunning applications that showcase the most ground breaking aspects of technology. Join us in welcoming SK Alif to the future we're building together, where his coding brilliance will play a vital role in shaping the digital narrative of our journey. ✨"} />,
  },
  {
    category: "Digital Marketer",
    title: "Yeasin Arafat",
    src: "/images/arafat.jpg",
    content: <DummyContent image={'/images/arafat.jpg'} desc={"Meet @Yeasin Arafat, a dynamic force in the realm of digital marketing and a co-founder with a keen vision for transforming ideas into reality. As a passionate digital marketer, Yeasin Arafat is committed to capturing attention and creating memorable experiences that resonate in the fast-paced world of online engagement. With a vision for the future, Yeasin Arafat leverages the power of digital platforms to showcase breathtaking moments and captivate audiences. Welcome to the future we're building together! 💚"} />,
  },

  {
    category: "Digital Marketer",
    title: "Raj Habib",
    src: "/images/habibraj.jpg",
    content: <DummyContent image={'/images/habibraj.jpg'} desc={"Meet Raj Habib , an unstoppable force in the realm of digital marketing and a visionary with the ability to transform ideas into reality. As a fervent digital marketer, Raj Habib is dedicated to seizing attention and crafting unforgettable experiences that reverberate in the fast-paced world of online engagement. With a forward-thinking perspective, Raj Habib harnesses the power of digital platforms to showcase breathtaking moments and captivate audiences. Welcome to the future we're building together! 💚"} />,
  },
  {
    category: "Human Resources",
    title: "Sabbir Ahmed Probal",
    src: "/images/sabbiri.jpg",
    content: <DummyContent image={'/images/sabbiri.jpg'} desc={"Meet @Sabbir Ahmed Probal, a visionary leader in the Department of HR at Growdio. With a dedication to fostering a thriving workplace culture, He brings a unique perspective to the intersection of HR and organizational growth. Passionate about creating meaningful connections and supporting the professional journey of each team member, He is committed to building a workplace where talent flourishes. Welcome to the future we're constructing together. 💚"} />,
  },
  {
    category: "SEO Expert",
    title: "Kamrul Hasan Samrat",
    src: "/images/kamal.jpg",
    content: <DummyContent image={'/images/kamal.jpg'} desc={"Introducing our dynamo of digital discovery, Kamrul Hasan Samrat ! A true trailblazer in the SEO realm, Samrat is not just a specialist; he's a maestro transforming online landscapes. With an insatiable appetite for innovation, Samrat captures attention, orchestrates unforgettable online experiences, and leaves an indelible mark in the fast-paced world of SEO. In his hands, digital platforms become canvases for breathtaking moments that enthrall audiences. Lets Welcome him to the future we're building together! 💚"} />,
  },
  {
    category: "Designer",
    title: "Anik Sadik Santo",
    src: "/images/sadiksanto.jpg",
    content: <DummyContent image={'/images/sadiksanto.jpg'} desc={"Meet Anik Sadik Santo, a luminary in the world of brand design. As a Founder, his keen vision transforms ideas into captivating realities. With an unwavering commitment to creating memorable experiences, His harnesses the digital landscape's power to showcase stunning visuals and leave an indelible mark. A true artist in the realm of brand design, he crafts a future where every detail tells a compelling story. Welcome to the future we're building together! 💚"} />,
  },
  {
    category: "Project Manager",
    title: "Sadman Sami",
    src: "/images/sadmansami.jpg",
    content: <DummyContent image={'/images/sadmansami.jpg'} desc={"Meet Sadman Sami , a visionary photographer and the creative force behind Growdio. With an innate passion for capturing the essence of moments, He brings a unique perspective to the art of photography. Specializing in transforming the ordinary into the extraordinary, He is dedicated to creating visually thrilling montages that showcase the most breathtaking moments of nature. Join us in welcoming Him to the future we're building together, where their artistic vision will play a vital role in shaping the visual narrative of our journey. ✨"} />,
  },
  {
    category: "Video Editor",
    title: "Mehedi Hasan Emon",
    src: "/images/mehedi.jpg",
    content: <DummyContent image={'/images/mehedi.jpg'} desc={"Meet @Mehedi Hasan Emon, Founder, Video Editor, the visionary mind behind Growdio. With a passion for Video Editing and a commitment to Capture attention by showcasing the most breathtaking moments of nature in a fast-paced, visually thrilling montage, Welcome to the future we're building together! 💚"} />,
  },
];
