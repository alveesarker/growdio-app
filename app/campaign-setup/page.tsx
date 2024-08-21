import { GridBackgroundDemo } from '@/components/BackgroundServices/BackgroundServices';
import ComprehensiveService from '@/components/ComprehensiveService/ComprehensiveService';
import { FloatingDockDemo } from '@/components/FloatingDockDemo/FloatingDockDemo';
import { MacbookScrollDemo } from '@/components/MacbookScrollDemo/MacbookScrollDemo';
import ServiceSystem from '@/components/ServiceSystem/ServiceSystem';
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo';
import Image from 'next/image';
import React from 'react';

const page = () => {
  const head = {
    fstLine: 'Strategizing and Launching',
    sndLine: 'Impactful Campaigns'
  };

  const serviceSystem = {
    namee: "Campaign Setup",
    paragraphOne: "At Growdio, our Campaign Setup Services team excels in crafting strategic and impactful campaigns for forward-thinking brands. We stay ahead of the curve by utilizing the latest tools and frameworks to optimize campaign effectiveness. Understanding the crucial role of well-executed campaigns in achieving your business goals, we are dedicated to delivering solutions that drive results and elevate your brand’s presence.",
    paragraphTwo: "We focus on leveraging industry best practices and our own creative expertise to ensure every campaign setup is strategically crafted for seamless execution.",
    imageOne: "/images/par3.jpg",
    imageTwo: "/images/navPtwo.jpg"
  };

  const listItemForService = [
    "Campaign Setup Experts",
    "5+ Years of Experience",
    "Proven Success with 40+ Campaigns",
    "Comprehensive Campaign Strategies",
    "Data-Driven Insights & Planning",
    "Targeted Audience Engagement",
    "Creative & Impactful Campaigns",
    "Transparent Performance Tracking",
    "Adherence to Industry Standards",
    "24/7 Support & Optimization"
  ];

  const Comprehensive = {
    namee: "Campaign Setup",
    projects: [
      {
        title: "Strategic Planning",
        description: "Develop a comprehensive strategy to align campaign goals with target audience insights, ensuring maximum impact.",
        link: "6",
      },
      {
        title: "Creative Concept Development",
        description: "Design innovative concepts and themes that resonate with your audience and effectively communicate your message.",
        link: "5",
      },
      {
        title: "Content Creation",
        description: "Produce engaging content, including copy, visuals, and multimedia, tailored to the campaign's objectives and platforms.",
        link: "4",
      },
      {
        title: "Media Buying & Placement",
        description: "Manage media buying and placement across various channels to ensure optimal reach and ROI for your campaign.",
        link: "3",
      },
      {
        title: "Performance Tracking",
        description: "Monitor and analyze campaign performance using key metrics to optimize strategies and achieve better results.",
        link: "2",
      },
      {
        title: "Reporting & Analysis",
        description: "Provide detailed reports and insights on campaign outcomes, helping you understand effectiveness and inform future strategies.",
        link: "1",
      }
    ]
  };

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
      <ServiceSystem serviceSystem={serviceSystem} listItem={listItemForService} />
      <MacbookScrollDemo />
      <ComprehensiveService comprehensive={Comprehensive} />
      <FloatingDockDemo links={links} />
      <WobbleCardDemo />
    </main>
  );
};

export default page;
