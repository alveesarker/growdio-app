import React from 'react'
import { CanvasRevealEffectDemo } from '../CanvasRevealEffectDemo/CanvasRevealEffectDemo'

const DiscoverWork = () => {
    return (
        <div className='mt-40'>
            <div className='pl-4 pr-4'>
                <h2 className=" text-center sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                How We Work
                </h2>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                The digital landscape is constantly changing. To establish a strong foothold here, we focus on our key strengths, and take heed to our customer’s experiences to find the perfect solution for any problems we might come across.
                </p>
            </div>
            <CanvasRevealEffectDemo/>
        </div>
    )
}

export default DiscoverWork
