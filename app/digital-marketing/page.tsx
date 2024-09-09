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
        fstLine: 'Innovating Digital',
        sndLine: 'Marketing Strategies for Success'
      }
      
      const serviceSystem = {
        namee: "Digital Marketing",
        paragraphOne: "Grow your business with Growdio’s digital marketing expertise. We offer comprehensive strategies that are tailored to boost your online presence, increase engagement, and drive growth through effective, data-driven campaigns.",
        paragraphTwo: "At Growdio, our digital marketing services encompass SEO, social media marketing, email campaigns, and more to ensure your brand reaches its full potential.",
        imageOne: "/images/digitalm_1.jpeg",
        imageTwo: "/images/digitalm_2.jpeg"
      }
      
      const listItemForService = ["Experienced Marketing Team", "5+ Years of Experience", "60+ Satisfied Clients", "Data-Driven Strategies", "SEO & SEM Expertise", "Social Media Marketing", "Email Campaigns & Automation", "Content Marketing", "Analytics & Reporting", "15/7 Dedicated Support"]
      
      const Comprehensive = {
        namee: "Digital Marketing",
        projects: [
          {
            title: "Search Engine Optimization (SEO)",
            description: "Improve your website's search engine rankings with tailored SEO strategies, including keyword optimization, link building, and content creation.",
            link: "6",
          },
          {
            title: "Social Media Marketing",
            description: "Develop engaging social media campaigns across platforms like Facebook, Instagram, and LinkedIn to build your brand and drive traffic.",
            link: "5",
          },
          {
            title: "Pay-Per-Click (PPC) Advertising",
            description: "Create targeted PPC campaigns that maximize ROI by reaching the right audience through platforms like Google Ads and Facebook Ads.",
            link: "4",
          },
          {
            title: "Email Marketing",
            description: "Design and execute automated email marketing campaigns to nurture leads, engage customers, and drive conversions.",
            link: "3",
          },
          {
            title: "Content Marketing",
            description: "Craft high-quality, engaging content that resonates with your target audience, including blogs, articles, and multimedia content.",
            link: "2",
          },
          {
            title: "Analytics & Reporting",
            description: "Track and analyze the performance of digital marketing campaigns to ensure data-driven decision-making and continuous improvement.",
            link: "1",
          }
        ]
      }
      
      const links = [
        {
          title: "Facebook",
          icon: (
            <Image
              src="/images/facebooklogo.png"
              width={40}
              height={40}
              alt="facebook"
              className=""
            />
          ),
          href: "https://facebook.com/",
        },
        {
          title: "Instagram",
          icon: (
            <Image
              src="/images/instagramlogo.jpg"
              width={20}
              height={20}
              alt="instagram"
              className="rounded-full"
            />
          ),
          href: "https://instagram.com/",
        },
        {
          title: "Gmail",
          icon: (
            <Image
              src="/images/gmaillogo.png"
              width={40}
              height={40}
              alt="gmail"
              className="rounded-full"
            />
          ),
          href: "https://analytics.google.com/",
        },
        {
          title: "Google Analytics",
          icon: (
            <Image
              src="/images/googlelogo.webp"
              width={40}
              height={40}
              alt="Google Analytics"
              className=""
            />
          ),
          href: "https://analytics.google.com/",
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
