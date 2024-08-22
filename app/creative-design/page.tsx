import { GridBackgroundDemo } from '@/components/BackgroundServices/BackgroundServices'
import ComprehensiveService from '@/components/ComprehensiveService/ComprehensiveService'
import { FloatingDockDemo } from '@/components/FloatingDockDemo/FloatingDockDemo'
import { MacbookScrollDemo } from '@/components/MacbookScrollDemo/MacbookScrollDemo'
import OurServices from '@/components/OurServices/OurServices'
import ProductDemo from '@/components/ProductDemo/ProductDemo'
import ServiceSystem from '@/components/ServiceSystem/ServiceSystem'
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo'
import Image from 'next/image'
import React from 'react'



const page = () => {

  const head = {
    fstLine: 'Crafting Visual Masterpieces',
    sndLine: 'for Your Brand'
  }

  const serviceSystem = {
    namee: "Creative Design",
    paragraphOne: "Elevate your brand with our exceptional Creative Design services. Our innovative design solutions are tailored to make your brand stand out and resonate with your audience. From eye-catching logos to cohesive branding elements, we create designs that not only capture attention but also convey your brand's unique story and identity. Let us bring your vision to life with creativity that leaves a lasting impact.",
    paragraphTwo: "At Growdio, our Creative Design services breathe life into your brand's visual identity. Let us help you tell your story with creativity.",
    imageOne: "/images/par4.jpg",
    imageTwo: "/images/navPtwo.jpg"
  }
  const listItemForService = ["Creative Design Experts", "5+ Years of Experience", "40+ Satisfied Clients", "Comprehensive Creative Design Services", "Innovative & Tailored Solutions", "User-Centric Design Approach", "Focus on Brand Consistency", "Transparent Processes", "Data Protection & Confidentiality", "15/7 Dedicated Support"]

  const Comprehensive = {
    namee: "Creative Design",
    projects: [
      {
        title: "Brand Identity Design",
        description: "Create a strong brand presence with logos, color schemes, and typography that resonate with your target audience.",
        link: "6",
      },
      {
        title: "Graphic Design",
        description: "Deliver visually stunning graphics for marketing materials, social media, and websites to captivate your audience.",
        link: "5",
      },
      {
        title: "UI/UX Design",
        description: "Design intuitive and engaging user interfaces that enhance user experience and drive conversions.",
        link: "4",
      },
      {
        title: "Print Design",
        description: "Craft high-quality print materials including brochures, business cards, and posters to make a lasting impression.",
        link: "3",
      },
      {
        title: "Packaging Design",
        description: "Develop attractive and functional packaging that stands out on the shelves and reinforces your brand identity.",
        link: "2",
      },
      {
        title: "Illustrations",
        description: "Create custom illustrations that add a unique touch to your branding, website, or marketing materials.",
        link: "1",
      }
    ]
  }

  const links = [
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
      title: "Adobe ID",
      icon: (
        <Image
          src="/images/aid.png"
          width={40}
          height={40}
          alt="InDesign logo"
          className=""
        />
      ),
      href: "https://www.adobe.com/products/indesign.html",
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



  return (
    <main>
      <GridBackgroundDemo head={head} />
      <ServiceSystem serviceSystem={serviceSystem} listItem={listItemForService} />
      <MacbookScrollDemo />
      <ComprehensiveService comprehensive={Comprehensive} />
      <OurServices />
      <div className='mt-40'>
        <ProductDemo />
      </div>
      <div className='mt-20'>
        <FloatingDockDemo links={links} />
      </div>
      <WobbleCardDemo />
    </main>
  )
}

export default page
