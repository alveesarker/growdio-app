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
    <div className="flex items-center justify-center h-[35rem] mb-[-80px] mt-20 md:mt-0 md:h-[15rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
