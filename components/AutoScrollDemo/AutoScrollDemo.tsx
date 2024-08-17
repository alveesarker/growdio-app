"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
const people = [
    {

        image: '/images/logot.png',
        altText: 'alvee5',
    },
    {

        image:
            '/images/logot.png',
        altText: 'alvee4',
    },
    {

        image:
            '/images/logot.png',
        altText: 'alvee3',
    },
    {

        image:
            '/images/logot.png',
        altText: 'alvee2',
    },
    {

        image:
            "/images/logot.png",
        altText: 'alvee1',
    },
    {

        image:
            "/images/logot.png",
        altText: 'alvee',
    },
    {

        image:
            "/images/logot.png",
        altText: 'alvee',
    },
    {

        image:
            "/images/logot.png",
        altText: 'alvee',
    },
    {

        image:
            "/images/logot.png",
        altText: 'alvee',
    },
    {

        image:
            "/images/logot.png",
        altText: 'alvee',
    },
];

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={people}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

