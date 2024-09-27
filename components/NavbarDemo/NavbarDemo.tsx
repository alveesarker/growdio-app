"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  NonDropdownItem,
  ProductItem,
} from "../ui/navbar-menu";

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
      className={cn(
        "fixed top-10 inset-x-0 max-w-[36rem] mx-auto z-[60]",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div>
          <Link href={"/"}>
            <img
              className="h-8 rounded-full cursor-pointer"
              src="/images/logo.jpg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex gap-5 pt-[2px]">
          <div className="sm:block hidden">
            <NonDropdownItem href="/" label="Home" />
          </div>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div
              className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4 relative
            "
            >
              <ProductItem
                title="Digital marketing"
                href="/digital-marketing"
                src="/images/digmnav.jpeg"
                description="Boosting your brand with tailored online strategies."
              />
              <ProductItem
                title="Creative Design"
                href="/creative-design"
                src="/images/creadesnav.jpeg"
                description="Crafting visually engaging designs."
              />
              <ProductItem
                title="Web Development"
                href="web-development"
                src="/images/webdevnav.jpeg"
                description="Building responsive, high-performing websites."
              />
              <ProductItem
                title="Video Editing"
                href="video-editing"
                src="/images/vidednav.jpeg"
                description="Turning raw footage into compelling visual stories."
              />
              <ProductItem
                title="Web Design"
                href="web-design"
                src="/images/webdesnav.jpeg"
                description="Designing beautiful, user-friendly websites."
              />
              <ProductItem
                title="Photgraphy"
                href="photography"
                src="/images/photnav.jpeg"
                description="Capturing professional, high-quality brand images."
              />
            </div>
          </MenuItem>
          <NonDropdownItem href="/about-us" label="About Us" />
          <div className="sm:block hidden">
            <NonDropdownItem href="/blog" label="Blog" />
          </div>
          <div className="sm:block hidden">
            <NonDropdownItem href="/contact-us" label="Contact Us" />
          </div>
          <div className="sm:hidden block">
            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/blog">Blog</HoveredLink>
                <HoveredLink href="/contact-us">Contact Us</HoveredLink>
              </div>
            </MenuItem>
          </div>
        </div>
        <div></div>
      </Menu>
    </div>
  );
}
