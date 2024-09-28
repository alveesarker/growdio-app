"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: {
    image: string
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
        containerRef.current.classList.add("animate-scroll");
        containerRef.current.classList.remove("animate-scroll-right");
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
        containerRef.current.classList.add("animate-scroll-right");
        containerRef.current.classList.remove("animate-scroll");
      }
    }
  };


  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "70s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
        )}
        style={{
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationDuration:
            speed === "fast"
              ? "10s"
              : speed === "normal"
                ? "70s"
                : "120s",
          animationIterationCount: "infinite",
        }}
      >
        {items.map((item, idx) => (
          <li
            className="md:w-[120px] w-[80px] h-[100px] relative flex-shrink-0"

            key={idx}
          >
            <Image
              src={item.image}
              alt={''}

              width={80}
              height={80}
              style={{
                width: '80px',
                opacity: "0.7",
                borderRadius: "50%",
                objectPosition: "cover"
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
