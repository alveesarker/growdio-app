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
    fstLine: 'Creating Engaging Reels That',
    sndLine: 'Captivate Audiences'
  }

  const serviceSystem = {
    namee: "Reels Editing",
    paragraphOne: "Unleash the full potential of your video content with Growdio's creative reels editing services. Our skilled editors take your footage and craft it into visually stunning reels that resonate with your audience. From syncing clips to the perfect soundtrack to adding engaging visual effects and seamless transitions, we ensure your reels are both captivating and share-worthy.",
    paragraphTwo: "At Growdio, we transform your raw footage into compelling reels that captivate and engage. Our reels editing service focuses on creating dynamic, polished videos that stand out on social media.",
    imageOne: "/images/par10.jpg",
    imageTwo: "/images/navPtwo.jpg"
  }
  const listItemForService = [
    "Reels Editing Experts",
    "5+ Years of Experience",
    "Produced 40+ Engaging Reels",
    "Creative & Trendy Edits",
    "Attention-Grabbing Visuals",
    "Tailored to Platform Specifications",
    "Quick Turnaround & Timely Delivery",
    "Seamless Integration with Brand Messaging",
    "Responsive to Feedback & Revisions",
    "24/7 Support & Consultation"
  ];

  const Comprehensive = {
    namee: "Reels Editing",
    projects: [
      {
        title: "Creative Concept Development",
        description: "Develop engaging and original concepts for reels that capture attention and align with your brand's message.",
        link: "6",
      },
      {
        title: "Video Cutting & Sequencing",
        description: "Edit raw footage into cohesive and compelling sequences, ensuring a smooth flow and engaging narrative.",
        link: "4",
      },
      {
        title: "Visual Effects Integration",
        description: "Incorporate dynamic visual effects to enhance the overall appeal and impact of your reels.",
        link: "5",
      },
      {
        title: "Audio Editing & Syncing",
        description: "Edit and sync audio with video content to create a polished and immersive viewing experience.",
        link: "3",
      },
      {
        title: "Color Correction & Grading",
        description: "Apply color correction and grading to ensure consistent and visually appealing aesthetics across your reels.",
        link: "2",
      },
      {
        title: "Final Review & Export",
        description: "Conduct a final review of the edited reels and export them in the desired format, ready for distribution and publication.",
        link: "1",
      }
    ]
  }

  const links = [
    {
      title: "Paypal1",
      icon: (
        <Image
          src="/images/logo.jpg"
          width={40}
          height={40}
          alt="Aceternity Logo"
          className="rounded-lg"
        />
      ),
      href: "",
    },

    {
      title: "Paypal2",
      icon: (
        <Image
          src="/images/logo.jpg"
          width={40}
          height={40}
          alt="Aceternity Logo"
          className="rounded-lg"
        />
      ),
      href: "",
    },
    {
      title: "Paypal3",
      icon: (
        <Image
          src="/images/logo.jpg"
          width={40}
          height={40}
          alt="Aceternity Logo"
          className="rounded-lg"
        />
      ),
      href: "",
    },
    {
      title: "Paypal4",
      icon: (
        <Image
          src="/images/logo.jpg"
          width={40}
          height={40}
          alt="Aceternity Logo"
          className="rounded-lg"
        />
      ),
      href: "",
    },
    {
      title: "Paypal5",
      icon: (
        <Image
          src="/images/logo.jpg"
          width={40}
          height={40}
          alt="Aceternity Logo"
          className="rounded-lg"
        />
      ),
      href: "",
    },

    {
      title: "Paypal6",
      icon: (
        <Image
          src="/images/logo.jpg"
          width={40}
          height={40}
          alt="Aceternity Logo"
          className="rounded-lg"
        />
      ),
      href: "",
    },
    {
      title: "Paypal7",
      icon: (
        <Image
          src="/images/logo.jpg"
          width={40}
          height={40}
          alt="Aceternity Logo"
          className="rounded-lg"
        />
      ),
      href: "",
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
