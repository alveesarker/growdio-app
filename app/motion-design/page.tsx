import { GridBackgroundDemo } from "@/components/BackgroundServices/BackgroundServices";
import ComprehensiveService from "@/components/ComprehensiveService/ComprehensiveService";
import { FloatingDockDemo } from "@/components/FloatingDockDemo/FloatingDockDemo";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo/MacbookScrollDemo";
import ServiceSystem from "@/components/ServiceSystem/ServiceSystem";
import { WobbleCardDemo } from "@/components/WobbleCardDemo/WobbleCardDemo";
import Image from "next/image";
import React from "react";

const page = () => {
  const head = {
    fstLine: "Bringing Ideas to Life",
    sndLine: "Through Motion",
  };

  const serviceSystem = {
    namee: "Motion Design",
    paragraphOne:
      "Transform your content with our stunning Graphics and Motion works. Our captivating social media graphic design services will be sure to leave a lasting impression on the viewers. Our animations will tell compelling stories, something that grabs your audience’s interests.",
    paragraphTwo:
      "At Growdio,our Graphics and Motion Services breathe life into your brand’s visual identity. Let us help you tell your story with creativity and impact.",
    imageOne: "/images/motion_1.png",
    imageTwo: "/images/motion_2.png",
  };
  const listItemForService = [
    "Motion Design Specialists",
    "5+ Years of Experience",
    "Created 40+ Dynamic Animations",
    "High-Impact Visual Storytelling",
    "Custom & Creative Animations",
    "Seamless Integration with Brand Identity",
    "Innovative & Trend-Setting Designs",
    "Attention to Detail & Precision",
    "Responsive to Client Feedback",
    "24/7 Support & Revisions",
  ];

  const Comprehensive = {
    namee: "Motion Design",
    projects: [
      {
        title: "Animated Explainers",
        description:
          "Create engaging animated videos that explain complex concepts clearly and attractively.",
        link: "6",
      },
      {
        title: "Logo Animations",
        description:
          "Design dynamic logo animations that enhance brand recognition and add a professional touch to your identity.",
        link: "5",
      },
      {
        title: "Social Media Animations",
        description:
          "Develop eye-catching animations for social media platforms to boost engagement and visibility.",
        link: "4",
      },
      {
        title: "Website Animations",
        description:
          "Integrate smooth and interactive animations into websites to improve user experience and drive user interaction.",
        link: "3",
      },
      {
        title: "Video Transitions",
        description:
          "Craft creative transitions between video scenes to maintain viewer interest and ensure seamless storytelling.",
        link: "2",
      },
      {
        title: "Infographics Animations",
        description:
          "Animate infographics to visually represent data and insights, making information more accessible and engaging.",
        link: "1",
      },
    ],
  };

  const links = [
    {
      title: "Adobe Pr",
      icon: (
        <Image
          src="/images/apr.png"
          width={40}
          height={40}
          alt="adobe pr logo"
          className=""
        />
      ),
      href: "https://www.adobe.com/products/premiere.html",
    },

    {
      title: "Adobe Ae",
      icon: (
        <Image
          src="/images/aae.png"
          width={40}
          height={40}
          alt="adobe ae logo"
          className=""
        />
      ),
      href: "https://www.adobe.com/products/aftereffects.html",
    },

    {
      title: "AI",
      icon: (
        <Image
          src="/images/aai.png"
          width={40}
          height={40}
          alt="Adobe AI"
          className=""
        />
      ),
      href: "https://www.adobe.com/products/illustrator.html",
    },
    {
      title: "Adobe PS",
      icon: (
        <Image
          src="/images/aps.png"
          width={40}
          height={40}
          alt="Photoshop logo"
          className=""
        />
      ),
      href: "https://www.adobe.com/products/photoshop.html",
    },
    {
      title: "Blender",
      icon: (
        <Image
          src="/images/blender.png"
          width={40}
          height={40}
          alt="blender logo"
          className=""
        />
      ),
      href: "https://www.blender.org/",
    },
  ];

  return (
    <main>
      <GridBackgroundDemo head={head} />
      <ServiceSystem
        serviceSystem={serviceSystem}
        listItem={listItemForService}
      />
      <MacbookScrollDemo />
      <ComprehensiveService comprehensive={Comprehensive} />
      <FloatingDockDemo links={links} />
      <WobbleCardDemo />
    </main>
  );
};

export default page;
