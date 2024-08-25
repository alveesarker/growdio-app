"use client"
import { motion } from 'framer-motion'
import React from "react";
import Buttont from "../Button/Buttont";
import Button from "../Button/Button";

//@ts-ignore
export function GridBackgroundDemo({ head }) {
    return (
        <div className="h-[47rem] w-full dark:bg-black bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>


            <div className='w-[95%] sm:w-[50%]'>
                <div className='w-full flex items-center justify-center'>
                    <img src="/images/growdio.png" className='h-14 sm:h-20' alt="growdio" />
                </div>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                        delay:0.5,
                    }}
                    className="text-3xl px-4 md:text-4xl geomatrixBold lg:text-5xl font-bold text-neutral-100 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                >{head.fstLine}{" "}{head.sndLine}
                </motion.h1>
                <div className="w-100% flex items-center justify-center mt-10">
                    <Button />
                </div>
            </div>
        </div>
    );
}


