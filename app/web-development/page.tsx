import { GridBackgroundDemo } from "@/components/BackgroundServices/BackgroundServices";
import ClientReview from "@/components/ClientReview/ClientReview";
import ComprehensiveService from "@/components/ComprehensiveService/ComprehensiveService";
import { FloatingDockDemo } from "@/components/FloatingDockDemo/FloatingDockDemo";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo/MacbookScrollDemo";
import ServiceSystem from "@/components/ServiceSystem/ServiceSystem";
import { WobbleCardDemo } from "@/components/WobbleCardDemo/WobbleCardDemo";
import Image from "next/image";
import React from "react";
import { LuScrollText } from "react-icons/lu";
import { MdAccessTimeFilled } from "react-icons/md";
import { TbUxCircle } from "react-icons/tb";
import { BsBuilding } from "react-icons/bs";


const page = () => {

  const usefulness = [
    {
      icon: <LuScrollText />,
      text: "Easy-to-maintain Sites"
    },
    {
      icon: <MdAccessTimeFilled />,
      text: "Fast Load Time"
    },
    {
      icon: <TbUxCircle />,
      text: "Easy User Experience"
    },
    {
      icon: <BsBuilding />,
      text: "User-friendly navigation"
    },

  ]


  const head = {
    fstLine: "Developing Modern",
    sndLine: "Robust and Scalable Web Applications",
  };

  const serviceSystem = {
    namee: "Web Development",
    paragraphOne:
      "Elevate your business with Growdio’s web development services. We craft robust, scalable, and secure web applications that deliver seamless functionality, tailored to your specific business needs and user expectations.",
    paragraphTwo:
      "At Growdio, our web development services ensure high performance, optimized efficiency, and security-focused development to empower your digital solutions.",
    imageOne: "/images/webdev_1.jpeg",
    imageTwo: "/images/webdev_2.jpeg",
  };

  const listItemForService = [
    "Expert Development Team",
    "5+ Years of Experience",
    "50+ Satisfied Clients",
    "Full Stack Development",
    "Custom Solutions",
    "Performance-Oriented Development",
    "Focus on Security",
    "Agile Development Process",
    "Data Protection & Security",
    "15/7 Dedicated Support",
  ];

  const Comprehensive = {
    namee: "Web Development",
    projects: [
      {
        title: "Backend Development",
        description:
          "Build scalable and secure back-end systems to ensure robust performance and seamless integration with front-end components.",
        link: "6",
      },
      {
        title: "API Integration",
        description:
          "Implement and integrate APIs to extend functionality and ensure smooth interaction between various platforms and services.",
        link: "5",
      },
      {
        title: "Frontend Development",
        description:
          "Create responsive, user-friendly front-end interfaces that provide a seamless and engaging user experience across devices.",
        link: "4",
      },
      {
        title: "Custom CMS Development",
        description:
          "Develop custom content management systems tailored to your business needs for easy management and scalability.",
        link: "3",
      },
      {
        title: "Performance Optimization",
        description:
          "Optimize web applications for fast load times, high performance, and SEO-friendly structures to enhance user experience.",
        link: "2",
      },
      {
        title: "Security Implementation",
        description:
          "Implement advanced security measures such as data encryption, firewalls, and regular audits to ensure protection against potential threats.",
        link: "1",
      },
    ],
  };

  const links = [
    {
      title: "GitHub",
      icon: (
        <Image
          src="/images/github-logo.png"
          width={40}
          height={40}
          alt="GitHub"
          className=""
        />
      ),
      href: "https://www.github.com/",
    },
    {
      title: "React.js",
      icon: (
        <Image
          src="/images/reactlogo.png"
          width={40}
          height={40}
          alt="GitHub"
          className="rounded-full"
        />
      ),
      href: "https://react.dev/",
    },
    {
      title: "JavaScript",
      icon: (
        <Image
          src="/images/jslogo.png"
          width={40}
          height={40}
          alt="js"
          className="rounded-md"
        />
      ),
      href: "https://javascript.com/",
    },
    {
      title: "Next.js",
      icon: (
        <Image
          src="/images/nextlogo.jpg"
          width={40}
          height={40}
          alt="next.js"
          className="rounded-full"
        />
      ),
      href: "https://nextjs.org/",
    },
    {
      title: "VS Code",
      icon: (
        <Image
          src="/images/vscodelogo.png"
          width={40}
          height={40}
          alt="vs code"
          className="rounded-sm"
        />
      ),
      href: "https://code.visualstudio.com/",
    },
  ];

  return (
    <main>
      <GridBackgroundDemo head={head} />
      <ServiceSystem
        serviceSystem={serviceSystem}
        listItem={listItemForService}
        usefulness={usefulness}
      />
      <MacbookScrollDemo />
      <ComprehensiveService comprehensive={Comprehensive} />
      <FloatingDockDemo links={links} />
      <WobbleCardDemo />
      <ClientReview />
    </main>
  );
};

export default page;
