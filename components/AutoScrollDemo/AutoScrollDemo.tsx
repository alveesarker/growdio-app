"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
const people = [
    {

        image: '/images/gogna.jpg',
        altText: 'logo5',
    },
    {

        image:
            '/images/oraimologo.jpg',
        altText: 'logo4',
    },
    {

        image:
            '/images/leafs.jpg',
        altText: 'logo3',
    },
    {

        image:
            '/images/m4.jpg',
        altText: 'logo2',
    },
    {

        image:
            "/images/normies.jpg",
        altText: 'logo1',
    },
    {

        image:
            "/images/zclub.jpg",
        altText: 'logo',
    },
    {

        image:
            "/images/hunter.jpg",
        altText: 'logo20',
    },
    {

        image:
            "/images/gogna.jpg",
        altText: 'logo30',
    },
    {

        image:
            "/images/oraimologo.jpg",
        altText: 'logo40',
    },
    {

        image:
            "/images/leafs.jpg",
        altText: 'logo50',
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

