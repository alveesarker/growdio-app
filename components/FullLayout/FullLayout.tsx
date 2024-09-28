"use client"
import React from 'react'
import { LayoutGridDemo } from '../LayoutGridDemo/LayoutGridDemo'
import FadeInSection from '../HowHelp/FadeInSection'

const FullLayout = () => {
    return (
        <div className=' flex flex-col items-center gap-10 max-w-[80rem] w-[80%] relative left-[50%] translate-x-[-50%] justify-center mt-20'>
            <FadeInSection className='pl-4 pr-4'>
                <h2 className="text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                Expert Tips and Best Practices
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to Growdio, the best digital agency.
                    We provide reliable, scalable, and customizable email solutions for
                    your business.
                </p>
            </FadeInSection>
            <LayoutGridDemo />
        </div>
    )
}

export default FullLayout
