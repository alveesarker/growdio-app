import { GridBackgroundDemo } from '@/components/BackgroundServices/BackgroundServices'
import ClientReview from '@/components/ClientReview/ClientReview'
import ComprehensiveService from '@/components/ComprehensiveService/ComprehensiveService'
import { FloatingDockDemo } from '@/components/FloatingDockDemo/FloatingDockDemo'
import { MacbookScrollDemo } from '@/components/MacbookScrollDemo/MacbookScrollDemo'
import ServiceSystem from '@/components/ServiceSystem/ServiceSystem'
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo'
import Image from 'next/image'

import LeadingGroup from '@/components/LeadingGroup/LeadingGroup'
import { BsGraphUpArrow } from "react-icons/bs"
import { GiPuzzle } from "react-icons/gi"
import { IoBulbOutline } from "react-icons/io5"
import { LiaHandshake } from "react-icons/lia"


const page = () => {

  const person = {
    name: "Mohammad Mahfuzul Haque",
    title: "Hi! I’m Mohammad Mahfuzul Haque. I’m the COO at Growdio, and I’m here to answer any questions you might have!",
    src: "/images/mahfuz.png"
  }

  const usefulness = [
    {
      icon: <IoBulbOutline />,
      text: "Innovative Design Solutions"
    },
    {
      icon: <BsGraphUpArrow />,
      text: "Continuous Improvement"
    },
    {
      icon: <LiaHandshake />,
      text: "Commitment to Excellence"
    },
    {
      icon: <GiPuzzle />,
      text: "Creative Problem Solving"
    },
  ]

  const head = {
    fstLine: 'Crafting Visual Masterpieces for',
    sndLine: 'Your Brand'
  }

  const serviceSystem = {
    namee: "Creative Design",
    paragraphOne: "Elevate your brand with our exceptional Creative Design services. Our innovative design solutions are tailored to make your brand stand out and resonate with your audience. From eye-catching logos to cohesive branding elements, we create designs that not only capture attention but also convey your brand's unique story and identity. Let us bring your vision to life with creativity that leaves a lasting impact.",
    paragraphTwo: "At Growdio, our Creative Design services breathe life into your brand's visual identity. Let us help you tell your story with creativity.",
    imageOne: "/images/creative_1.jpg",
    imageTwo: "/images/creative_2.jpg",
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
      title: "/images/technologydes.png",
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

  const cards = [
    {
      description: "Anik Sadik Santo",
      title: "Anik Sadik Santo",
      des: "Founder",
      src: "/images/sadik.jpg",
      service: "Creative Design",
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
  ];

  const macTitle1 = "Turning Ideas into";
  const italic = 'Creative';
  const macTitle2 = "Visual Masterpieces";


  return (
    <main>
      <GridBackgroundDemo head={head} />
      <ServiceSystem serviceSystem={serviceSystem} listItem={listItemForService} usefulness={usefulness} />
      <MacbookScrollDemo title1={macTitle1} title2={macTitle2} italic ={italic}/>
      <ComprehensiveService comprehensive={Comprehensive} />
      {/* <OurServices /> */}
      {/* <WobbleCardDemo /> */}
      <div className='mt-20'>
        <FloatingDockDemo links={links} />
      </div>
      <ClientReview />
      <LeadingGroup cards={cards} />
      <WobbleCardDemo person={person}/>
    </main>
  )
}

export default page
