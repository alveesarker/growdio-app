import { GridBackgroundDemo } from '@/components/BackgroundServices/BackgroundServices'
import ClientReview from '@/components/ClientReview/ClientReview'
import ComprehensiveService from '@/components/ComprehensiveService/ComprehensiveService'
import { FloatingDockDemo } from '@/components/FloatingDockDemo/FloatingDockDemo'
import { MacbookScrollDemo } from '@/components/MacbookScrollDemo/MacbookScrollDemo'
import ServiceSystem from '@/components/ServiceSystem/ServiceSystem'
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo'
import Image from 'next/image'
import React from 'react'
import { MdCameraFront } from "react-icons/md";
import { IoIosImages } from "react-icons/io";
import { MdOutlineLightbulbCircle } from "react-icons/md";
import { VscLightbulbSparkle } from "react-icons/vsc";
import LeadingGroup from '@/components/LeadingGroup/LeadingGroup'



const page = () => {

  const usefulness = [
    {
      icon: <MdCameraFront />,
      text: "Capturing Authentic Moments"
    },
    {
      icon: <IoIosImages />,
      text: "Attention to Detail"
    },
    {
      icon: <MdOutlineLightbulbCircle />,
      text: "Mastery of Light and Composition"
    },
    {
      icon: <VscLightbulbSparkle />,
      text: "Creative Vision and Storytelling"
    },

  ]


  const head = {
    fstLine: 'Capturing Visual Masterpieces for',
    sndLine: 'Your Brand'
  }

  const serviceSystem = {
    namee: "Photography",
    paragraphOne: "Elevate your brand's visual identity with Growdio's top-tier photography services. Our team specializes in creating striking images that highlight your unique style and message. From corporate headshots and product photography to lifestyle shoots and event coverage, we provide tailored solutions to meet your specific needs. ",
    paragraphTwo: "At Growdio, we offer professional photography services designed to capture the essence of every moment. ",
    imageOne: "/images/photography_1.jpeg",
    imageTwo: "/images/photography_2.jpg"
  }
  const listItemForService = [
    "Professional Photography Services",
    "5+ Years of Experience",
    "Captured 40+ Stunning Moments",
    "High-Quality & Creative Shots",
    "Expert in Various Photography Styles",
    "Attention to Detail & Composition",
    "Customized to Your Brand’s Vision",
    "Fast Delivery & Editing",
    "Seamless Integration with Marketing Materials",
    "24/7 Support & Revisions"
  ];


  const Comprehensive = {
    namee: "Photography",
    projects: [
      {
        title: "Product Photography",
        description: "Capture high-quality images of products to showcase their features and appeal in marketing materials and online stores.",
        link: "6",
      },
      {
        title: "Event Photography",
        description: "Document events with professional photos that capture key moments and emotions, providing lasting memories and promotional content.",
        link: "5",
      },
      {
        title: "Corporate Headshots",
        description: "Provide polished and professional headshots for team members, enhancing corporate image and personal branding.",
        link: "4",
      },
      {
        title: "Lifestyle Photography",
        description: "Create engaging lifestyle images that convey brand stories and resonate with target audiences in various contexts.",
        link: "3",
      },
      {
        title: "Architectural Photography",
        description: "Photograph architectural designs and structures, highlighting their aesthetic and functional aspects for portfolios and promotional use.",
        link: "23",
      },
      {
        title: "Custom Photo Shoots",
        description: "Plan and execute tailored photo shoots based on specific client needs, delivering personalized and impactful visual content.",
        link: "1",
      }
    ]
  }

  const links = [
    {
      title: "Camera",
      icon: (
        <Image
          src="/images/camera.png"
          width={40}
          height={40}
          alt="camera logo"
          className=""
        />
      ),
      href: "https://en.wikipedia.org/wiki/Camera",
    },
  ];

  const cards = [
    {
      description: "K.M Sadman Arifin Sami",
      title: "K.M Sadman Arifin Sami",
      des: "Project Manager",
      service: "Photography",
      src: "/images/sadman.jpg",
      ctaText: "Facebook",
      facebook: "https://www.facebook.com/sadmansamiii?mibextid=kFxxJD",
      linkedin: "https://www.linkedin.com/in/k-m-sadman-arifin-sami-6ba64928a/",
      instagram:
        "https://www.instagram.com/sadmansphotogarage?igsh=OTlwcnUxb3ppdGt4",
    },
  ]

  const person = {
    name: "Sabbir Ahmed Probal",
    title: "Hi! I’m Sabbir Ahmed Probal. I’m the COO at Growdio, and I’m here to answer any questions you might have!",
    src: "/images/sabbir.jpg"
  }


  const macTitle1 = "Turning Ideas into";
  const italic = 'Creative';
  const macTitle2 = "Visual Masterpieces";

  return (
    <main>
      <GridBackgroundDemo head={head} />
      <ServiceSystem serviceSystem={serviceSystem} listItem={listItemForService} usefulness={usefulness} />
      <MacbookScrollDemo title1={macTitle1} title2={macTitle2} italic ={italic}/>
      <ComprehensiveService comprehensive={Comprehensive} />
      {/* <WobbleCardDemo /> */}
      {/* <FloatingDockDemo links={links} /> */}
      <ClientReview />
      <LeadingGroup cards={cards} />
      <WobbleCardDemo person={person}/>
    </main>
  )
}

export default page
