"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function DirectionAwareHoverDemo({ imageUrl='', title = '', text = '' }) {
    return (
      <div className="relative flex items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-xl">{title}</p>
          <p className="font-normal text-sm">{text}</p>
        </DirectionAwareHover>
      </div>
    );
  }
  