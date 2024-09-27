"use client";
import Link from "next/link";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function DirectionAwareHoverDemo({ imageUrl = '', title = '', text = '', linkUrl = ' ' }) {
  return (
    <div className="relative flex items-center justify-center">
      <Link href={linkUrl} target="_blank">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold geomatrixBold text-xl">{title}</p>
          {/* <p className="font-normal text-sm">{text}</p> */}
        </DirectionAwareHover>
      </Link>
    </div>
  );
}
