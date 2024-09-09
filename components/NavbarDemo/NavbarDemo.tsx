"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem, NonDropdownItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-5" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div>
          <Link href={'/'}><img className="h-8 rounded-full cursor-pointer" src="/images/logo.jpg" alt="logo" /></Link>
        </div>
        <div className="flex gap-5 pt-[2px]">

          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/digital-marketing">Digital Marketing</HoveredLink>
              <HoveredLink href="/creative-design">Creative Design</HoveredLink>
              <HoveredLink href="/web-development">Web Development</HoveredLink>
              <HoveredLink href="/video-editing">Video Editing</HoveredLink>
              <HoveredLink href="/web-design">Web Design</HoveredLink>
              <HoveredLink href="/photography">Photography</HoveredLink>
            </div>
          </MenuItem>
          <NonDropdownItem href="/about-us" label="About Us" />
          <div className="hidden md:block">
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Online Growth"
                  href="https://algochurn.com"
                  src="/images/navPone.jpg"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Graphics Design"
                  href="https://tailwindmasterkit.com"
                  src="/images/navPtwo.jpg"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Graphics Design"
                  href="https://gomoonbeam.com"
                  src="/images/navPthree.jpg"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Creativity"
                  href="https://userogue.com"
                  src="/images/navPfour.jpg"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
          </div>
          <MenuItem setActive={setActive} active={active} item="Resources">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/blog">Blog</HoveredLink>
              <HoveredLink href="/contact-us">Contact Us</HoveredLink>
            </div>
          </MenuItem>

        </div>
        <div></div>
      </Menu>
    </div>
  );
}
