import React from 'react'
import { CanvasRevealEffectDemo } from '../CanvasRevealEffectDemo/CanvasRevealEffectDemo'

const DiscoverWork = () => {
    return (
        <div className='mt-40'>
            <div className='pl-4 pr-4'>
                <h2 className=" text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    How We Work
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    We follow a streamlined process to ensure excellence in every project. We start with Research to understand your brand then move to Design to create visually compelling. Finally, we handle Implementation with precision.
                </p>
            </div>
            <CanvasRevealEffectDemo />
        </div>
    )
}

export default DiscoverWork
