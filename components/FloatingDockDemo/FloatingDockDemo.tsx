"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";

interface LinkItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

interface FloatingDockDemoProps {
  links: LinkItem[];
}

export function FloatingDockDemo({ links }: FloatingDockDemoProps) {
  return (
    <div className="flex flex-col gap-20 items-center justify-center h-[35rem] mb-[-80px] mt-20 md:mt-0 md:h-[15rem] w-full">
      <h1 className="text-white text-4xl geomatrixBold">TECHNOLOGY WE USE</h1>
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
