"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};



export const NonDropdownItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="text-white hover:opacity-90 dark:text-black text-[14px] sm:text-[16px] pt-1 sm:pt-0"
    >
      {label}
    </Link>
  );
};


export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative pt-1 sm:pt-0">
      <motion.p
        transition={{ duration: 0.3 }}
        className=" cursor-pointer text-white hover:opacity-[0.9]  dark:text-black text-[14px] sm:text-[16px] "
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className={`absolute left-1/2 transform -translate-x-1/2 pt-4 mt-3 ${item === 'Services' && 'ml-12'}`}>
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-black  rounded-2xl overflow-hidden border border-white/[0.3] dark:border-white/[0.3] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-white/[0.3] dark:border-white/[0.8] dark:bg-white shadow-input flex justify-between space-x-6 px-2 py-2 bg-black ml-3 mr-3 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2 ">
      <Image
        src={src}
        width={130}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl w-[80px] h-[50px] lg:w-[130px] lg:h-[70px]"
      />
      <div>
        <h4 className="text-sm lg:text-xl font-bold mb-0 lg:mb-1 text-white dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-300 text-xs lg:text-[14px] max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-300 dark:text-neutral-100 hover:text-white "
    >
      {children}
    </Link>
  );
};
