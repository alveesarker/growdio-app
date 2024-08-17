"use client";
import React from "react";
import Link from "next/link";

export const NonDropdownItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="text-white hover:opacity-90 dark:text-black"
    >
      {label}
    </Link>
  );
};
