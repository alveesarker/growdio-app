import { GridBackgroundDemo } from "@/components/BackgroundServices/BackgroundServices";
import ClientReview from "@/components/ClientReview/ClientReview";
import ComprehensiveService from "@/components/ComprehensiveService/ComprehensiveService";
import { FloatingDockDemo } from "@/components/FloatingDockDemo/FloatingDockDemo";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo/MacbookScrollDemo";
import ServiceSystem from "@/components/ServiceSystem/ServiceSystem";
import { WobbleCardDemo } from "@/components/WobbleCardDemo/WobbleCardDemo";
import { RxSpeakerQuiet } from "react-icons/rx";
import { GiConversation } from "react-icons/gi";
import { CiMoneyCheck1 } from "react-icons/ci";
import Image from "next/image";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import LeadingGroup from '@/components/LeadingGroup/LeadingGroup'


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
      title: "/images/technologydig.png",
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
          width={30}
          height={30}
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
          src="/images/googlelogo.jpg"
          width={20}
          height={20}
          alt="Google Analytics"
          className=""
        />
      ),
      href: "https://analytics.google.com/",
    },
  ];

  const usefulness = [
    {
      icon:
        <RxSpeakerQuiet />,
      text: "Custom marketing methods"
    },
    {
      icon:
        <GiConversation />,
      text: "High conversion volume"
    },
    {
      icon:
        <CiMoneyCheck1 />,
      text: "Maximizing Revenue from Leads"
    },
    {
      icon:
        <IoEyeOutline />,
      text: "Better online visibility"
    },

  ]

  const cards = [
    {
      description: "Ahmed Ullah Musa",
      title: "Ahmed Ullah Musa",
      des: "Chief Marketing Officer",
      service: "Digital Marketing",
      src: "/images/musa.jpg",
      ctaText: "Facebook",
      facebook: "https://www.facebook.com/ahmad.musa.3154284?mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/ahmed-ullah-musa/",
      instagram: "https://www.instagram.com/dmmusa98/",
    },
    {
      description: "Raj Habib",
      title: "Raj Habib",
      des: "Digital Marketer",
      src: "/images/habib.png",
      ctaText: "Facebook",
      facebook: "https://www.facebook.com/RajHabib789",
      linkedin: "https://www.linkedin.com/in/raj-habib/",
      instagram: "https://www.instagram.com/ahsanhabib_raaz",
    },
    {
      description: "Saber Hossain Shihab",
      title: "Saber Hossain Shihab",
      des: "Digital Marketer",
      src: "/images/shihab.jpg",
      ctaText: "Facebook",
      facebook: "https://www.facebook.com/saberal.mahmud.5?mibextid=ZbWKwL",
      linkedin:
        "https://www.linkedin.com/in/md-saber-hossain-shihab-22527b2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/saberseovid?igsh=anAzcXJ1aDNid21l",
    },
  ]

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
      {/* <WobbleCardDemo /> */}
      <FloatingDockDemo links={links} />
      <ClientReview />
      <LeadingGroup cards = {cards}/>
      <WobbleCardDemo />
    </main>
  );
};

export default page;
