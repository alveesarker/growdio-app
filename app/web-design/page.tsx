import { GridBackgroundDemo } from '@/components/BackgroundServices/BackgroundServices'
import ClientReview from '@/components/ClientReview/ClientReview'
import ComprehensiveService from '@/components/ComprehensiveService/ComprehensiveService'
import { FloatingDockDemo } from '@/components/FloatingDockDemo/FloatingDockDemo'
import { MacbookScrollDemo } from '@/components/MacbookScrollDemo/MacbookScrollDemo'
import ServiceSystem from '@/components/ServiceSystem/ServiceSystem'
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo'
import Image from 'next/image'
import React from 'react'
import { LuScrollText } from "react-icons/lu";
import { MdAccessTimeFilled } from "react-icons/md";
import { TbUxCircle } from "react-icons/tb";
import { BsBuilding } from "react-icons/bs";
import LeadingGroup from '@/components/LeadingGroup/LeadingGroup'


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
    fstLine: 'Designing Modern',
    sndLine: 'User-Centric Beautiful Websites'
  }

  const serviceSystem = {
    namee: "Web Design",
    paragraphOne: "Transform your online presence with Growdio’s web design expertise. We create visually stunning and highly functional websites tailored to your brand, ensuring a memorable user experience that stands out and drives business growth.",
    paragraphTwo: "At Growdio, our web design services deliver innovative and user-centric websites that capture your brand's essence.",
    imageOne: "/images/webd_1.jpeg",
    imageTwo: "/images/webd_2.jpeg"
  }
  const listItemForService = ["Creative Design Experts", "5+ Years of Experience", "40+ Satisfied Clients", "Comprehensive Creative Design Services", "Innovative & Tailored Solutions", "User-Centric Design Approach", "Focus on Brand Consistency", "Transparent Processes", "Data Protection & Confidentiality", "15/7 Dedicated Support"]

  const Comprehensive = {
    namee: "Web Design",
    projects: [
      {
        title: "Website Layout & Wireframes",
        description: "Create detailed layouts and wireframes to establish the structure and user flow of the website, ensuring an intuitive and effective design.",
        link: "6",
      },
      {
        title: "Responsive Design",
        description: "Design and implement responsive layouts that adapt seamlessly across various devices and screen sizes, enhancing user experience.",
        link: "5",
      },
      {
        title: "UI/UX Design",
        description: "Develop user interfaces and experiences that are visually appealing and user-friendly, focusing on functionality and engagement.",
        link: "4",
      },
      {
        title: "Graphic Elements Creation",
        description: "Design custom graphic elements such as icons, banners, and buttons to complement the website’s aesthetic and functionality.",
        link: "3",
      },
      {
        title: "Prototyping & User Testing",
        description: "Build interactive prototypes and conduct user testing to validate design decisions and make necessary improvements before final implementation.",
        link: "2",
      },
      {
        title: "Website Optimization",
        description: "Optimize website design for performance, including fast load times, SEO-friendly structure, and efficient coding practices.",
        link: "1",
      }
    ]
  }


  const links = [
    {
      title: "Figma",
      icon: (
        <Image
          src="/images/figma-logo.jpg"
          width={40}
          height={40}
          alt="Figma"
          className=""
        />
      ),
      href: "https://www.figma.com/",
    },
  ];
  const cards = [
    {
      description: "Anik Sadik Santo",
      title: "Anik Sadik Santo",
      des: "Founder",
      src: "/images/sadik.jpg",
      ctaText: "Facebook",
      facebook: "https://www.facebook.com/profile.php?id=100029429422473",
      linkedin: "https://www.linkedin.com/in/anik-sadik-santo-22a063256/",
      behance: "https://www.behance.net/shadikshanto",
    },
    {
      description: "Sabbir Ahmed",
      title: "Sabbir Ahmed",
      des: "Co-Founde",
      src: "/images/sabbir.jpg",
      ctaText: "Facebook",
      facebook: "https://www.facebook.com/profile.php?id=100004706238103",
      linkedin: "https://www.linkedin.com/in/sabbir-ahmed-43403a1b2/",
      behance: "https://www.behance.net/sabbir69",
    },
  
    {
      description: "Mehedi Hasan Emon",
      title: "Mehedi Hasan Emon",
      des: "Founder & CEO",
      src: "",
      ctaText: "Facebook",
      facebook: "",
      linkedin: "",
      behance: "",
    },
    {
      description: "Yesin Arafat",
      title: "Yesin Arafat",
      des: "Co-Founder",
      src: "/images/yeasin.jpg",
      ctaText: "Facebook",
      facebook: "https://www.facebook.com/designeryeasinarafat0",
      linkedin: "https://www.linkedin.com/in/yeasin-arafat-designer/",
      behance: "https://www.behance.net/designeryeasinar",
    },
    {
      description: "Mohammad Mahfuzul Haque",
      title: "Mohammad Mahfuzul Haque",
      des: "Graphic Designer",
      src: "/images/mahfuz.png",
      ctaText: "Facebook",
      facebook: "https://www.facebook.com/mahfuzulhaqu703/",
      linkedin: "https://www.linkedin.com/in/mahfuzulhaqu703/",
      behance: "https://www.behance.net/mahfuzfarabi",
    },
  ]



  return (
    <main>
      <GridBackgroundDemo head={head} />
      <ServiceSystem serviceSystem={serviceSystem} listItem={listItemForService} usefulness={usefulness} />
      <MacbookScrollDemo />
      <ComprehensiveService comprehensive={Comprehensive} />
      <FloatingDockDemo links={links} />
      <ClientReview />
      <LeadingGroup cards = {cards}/>
      <WobbleCardDemo />
    </main>
  )
}

export default page
