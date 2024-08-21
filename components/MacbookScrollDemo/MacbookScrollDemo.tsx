import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-black w-full">
      <MacbookScroll
        title={
          <span className="text-neutral-200">
            Transforming Ideas into Visual Masterpieces <br /> with Creativity
          </span>
        }
        badge={
          <Link href="https://peerlist.io/manuarora">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/images/creativedtool.jpg`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (

    <></>
  );
};
