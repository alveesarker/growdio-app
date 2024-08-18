import { GridBackgroundDemo } from '@/components/BackgroundServices/BackgroundServices'
import ComprehensiveService from '@/components/ComprehensiveService/ComprehensiveService'
import { FloatingDockDemo } from '@/components/FloatingDockDemo/FloatingDockDemo'
import { MacbookScrollDemo } from '@/components/MacbookScrollDemo/MacbookScrollDemo'
import ServiceSystem from '@/components/ServiceSystem/ServiceSystem'
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo'
import React from 'react'



const page = () => {

  const head = {
    fstLine: 'Designing Modern',
    sndLine: 'User-Centric Beautiful Websites'
  }

  const serviceSystem = {
    namee: "Web Design",
    paragraphOne: "Transform your online presence with Growdio’s web design expertise. We create visually stunning and highly functional websites tailored to your brand, ensuring a memorable user experience that stands out and drives business growth.",
    paragraphTwo: "At Growdio, our web design services deliver innovative and user-centric websites that capture your brand's essence.",
    imageOne: "/images/par5.jpg",
    imageTwo: "/images/navPtwo.jpg"
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




  return (
    <main>
      <GridBackgroundDemo head={head} />
      <ServiceSystem serviceSystem={serviceSystem} listItem={listItemForService} />
      <MacbookScrollDemo />
      <ComprehensiveService comprehensive = {Comprehensive} />
      <FloatingDockDemo />
      <WobbleCardDemo />
    </main>
  )
}

export default page
