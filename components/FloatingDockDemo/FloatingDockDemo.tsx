
import React from "react";

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
    <div className="flex flex-col max-w-[80rem] gap-6 items-center justify-center mt-28 w-[80%] relative left-[50%] translate-x-[-50%]">
      <h1 className="text-white text-3xl md:text-4xl geomatrixBold text-center">TECHNOLOGY WE USE</h1>
      <img src={links[0].title} alt="marketing" className="max-w-[40rem] w-full" />
    </div>
  );
}
