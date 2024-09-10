import React from 'react'
import { StickyScrollRevealDemo } from '../StickyScrollRevealDemo/StickyScrollRevealDemo'

const HowHelp = () => {
    return (
        <div className='mt-40'>
            <div className='pl-4 pr-4'>
                <h2 className="text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    How can we help you?
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to Growdio, the leading digital creative agency. We provide reliable, scalable, and customizable creative solutions for your brand, ensuring that your message resonates and drives results.
                </p>
            </div>
            <StickyScrollRevealDemo />
        </div>
    )
}

export default HowHelp
