"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Paypal",
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
      title: "Paypal",
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
      title: "Paypal",
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
      title: "Paypal",
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
      title: "Paypal",
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
      title: "Paypal",
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
      title: "Paypal",
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
    <div className="flex items-center justify-center h-[35rem] mb-[-80px] mt-20 md:mt-0 md:h-[15rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
