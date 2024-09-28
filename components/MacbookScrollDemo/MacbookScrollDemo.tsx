import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
import Link from "next/link";

//@ts-ignore
export function MacbookScrollDemo({title1, title2, italic}) {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-black w-full">
      <MacbookScroll
        title={
          <span className="text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
            {title1} {" "} <span className="calvino">{italic}</span> <br /> {title2}
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
