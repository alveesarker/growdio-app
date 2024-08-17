import { GridBackgroundDemo } from "@/components/BackgroundServices/BackgroundServices";
import ComprehensiveService from "@/components/ComprehensiveService/ComprehensiveService";
import { FloatingDockDemo } from "@/components/FloatingDockDemo/FloatingDockDemo";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo/MacbookScrollDemo";
import ServiceSystem from "@/components/ServiceSystem/ServiceSystem";
import { WobbleCardDemo } from "@/components/WobbleCardDemo/WobbleCardDemo";
import React from "react";

const page = () => {
  const head = {
    fstLine: "Effortlessly Managing Your",
    sndLine: "Online Presence",
  };

  const serviceSystem = {
    namee: "Page Management",
    paragraphOne:
      "We craft and curate content that keeps your audience engaged and your brand top-of-mind. From strategic planning to consistent updates, we manage every aspect of your pages to ensure they reflect your brand’s story and connect with your audience. Let us handle the details, so your brand can shine and leave a lasting impression.",
    paragraphTwo:
      "At Growdio, our Page Management services ensure your brand’s online presence is consistent, engaging, and impactful.",
    imageOne: "/images/par7.jpg",
    imageTwo: "/images/navPtwo.jpg",
  };
  const listItemForService = [
    "Page Management Specialists",
    "5+ Years of Experience",
    "Trusted by 40+ Clients",
    "Holistic Page Management Services",
    "Strategic & Engaging Content",
    "Consistency Across Platforms",
    "Responsive & Adaptive Strategies",
    "Transparent Reporting & Insights",
    "Commitment to Data Security",
    "24/7 Dedicated Support",
  ];

  const Comprehensive = {
    namee: "Page Management",
    projects: [
      {
        title: "Content Updates",
        description: "Regularly update and refresh website content to keep information relevant and engaging for your audience.",
        link: "",
      },
      {
        title: "SEO Optimization",
        description: "Implement on-page SEO strategies to enhance page visibility and search engine rankings.",
        link: "",
      },
      {
        title: "Performance Monitoring",
        description: "Monitor page performance metrics and ensure fast load times to provide a seamless user experience.",
        link: "",
      },
      {
        title: "User Experience Enhancements",
        description: "Identify and implement improvements to enhance user experience, navigation, and overall satisfaction.",
        link: "",
      },
      {
        title: "A/B Testing",
        description: "Conduct A/B tests on page elements to determine the most effective design and content strategies.",
        link: "",
      },
      {
        title: "Bug Fixes & Maintenance",
        description: "Address and resolve any issues or bugs that arise, ensuring smooth and uninterrupted page functionality.",
        link: "",
      }
    ]
  }


  return (
    <main>
      <GridBackgroundDemo head={head} />
      <ServiceSystem
        serviceSystem={serviceSystem}
        listItem={listItemForService}
      />
      <MacbookScrollDemo />
      <ComprehensiveService comprehensive={Comprehensive} />
      <FloatingDockDemo />
      <WobbleCardDemo />
    </main>
  );
};

export default page;
