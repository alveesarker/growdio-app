import { GridBackgroundDemo } from '@/components/BackgroundServices/BackgroundServices'
import ComprehensiveService from '@/components/ComprehensiveService/ComprehensiveService'
import { FloatingDockDemo } from '@/components/FloatingDockDemo/FloatingDockDemo'
import { MacbookScrollDemo } from '@/components/MacbookScrollDemo/MacbookScrollDemo'
import ServiceSystem from '@/components/ServiceSystem/ServiceSystem'
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo'
import Image from 'next/image'
import React from 'react'



const page = () => {

  const head = {
    fstLine: 'Transforming ',
    sndLine: 'Raw Footage into Compelling Stories'
  }

  const serviceSystem = {
    namee: "Video Editing",
    paragraphOne: "We offer expert video editing services that bring your vision to life. Our team meticulously refines your raw footage, adding a touch of creativity and precision to produce visually stunning videos. From cutting and assembling clips to enhancing audio, incorporating transitions, and adding special effects, we ensure every element aligns perfectly with your message",
    paragraphTwo: "With a focus on quality and detail, we ensure your final product not only meets but exceeds your expectations, helping you achieve a professional and polished look.",
    imageOne: "/images/videoe_1.jpg",
    imageTwo: "/images/videoe_2.jpg"
  }
  const listItemForService = [
    "Professional Video Editing",
    "5+ Years of Experience",
    "Worked with 40+ Clients",
    "High-Quality Video Production",
    "Creative & Engaging Edits",
    "Attention to Detail & Precision",
    "Seamless Transitions & Effects",
    "Tailored to Your Brand’s Style",
    "Fast Turnaround Times",
    "24/7 Support & Revisions"
  ];


  const Comprehensive = {
    namee: "Video Editing",
    projects: [
      {
        title: "Raw Footage Assembly",
        description: "Compile and organize raw footage into a structured timeline, setting the foundation for a compelling final product.",
        link: "6",
      },
      {
        title: "Transitions & Effects",
        description: "Apply transitions and visual effects to enhance the flow and visual appeal of the video, ensuring a smooth and engaging experience.",
        link: "5",
      },
      {
        title: "Audio Editing & Enhancement",
        description: "Edit and enhance audio tracks, including background music, sound effects, and voiceovers, to complement the visual content.",
        link: "4",
      },
      {
        title: "Color Grading & Correction",
        description: "Perform color grading and correction to achieve a consistent and professional look throughout the video.",
        link: "3",
      },
      {
        title: "Title & Graphics Integration",
        description: "Incorporate titles, lower thirds, and graphics to provide context and enhance the video’s message and branding.",
        link: "2",
      },
      {
        title: "Final Review & Export",
        description: "Conduct a comprehensive review of the edited video, make final adjustments, and export the video in the required format and quality.",
        link: "1",
      }
    ]
  }

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
      title: "Filmora",
      icon: (
        <Image
          src="/images/filmora.png"
          width={40}
          height={40}
          alt="filmora Logo"
          className="rounded-lg"
        />
      ),
      href: "https://filmora.wondershare.net/",
    },
    {
      title: "Capcut",
      icon: (
        <Image
          src="/images/capcut.jpg"
          width={40}
          height={40}
          alt="capcut Logo"
          className="rounded-lg"
        />
      ),
      href: "https://www.capcut.com/",
    },
    
  ];



  return (
    <main>
      <GridBackgroundDemo head={head} />
      <ServiceSystem serviceSystem={serviceSystem} listItem={listItemForService} />
      <MacbookScrollDemo />
      <ComprehensiveService comprehensive={Comprehensive} />
      <FloatingDockDemo links={links} />
      <WobbleCardDemo />
    </main>
  )
}

export default page
