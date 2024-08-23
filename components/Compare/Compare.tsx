import React from 'react'
import { CardSpotlightDemo } from '../CardSpotlightDemo/CardSpotlightDemo'
import { CardSpotlightDemo2 } from '../CardSpotlightDemo/CardSpotlightDemo2'
import { CardSpotlight } from '../ui/card-spotlight'

const Compare = () => {
    return (
        <div className=' flex flex-col items-center justify-center mt-40 gap-10'>
            <div className='pl-4 pr-4'>
                <h2 className="mb-5 text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    Why would you <br /> want to work with us?
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    When you choose Growdio, you’re opting for a partner that prioritizes your success. Unlike other agencies, we offer personalized attention, innovative solutions, and a commitment to long-term growth.
                </p>
            </div>
            <div className='flex gap-10 sm:gap-14 containerForSpot'>
                <CardSpotlightDemo2 />
                <CardSpotlightDemo />
            </div>
        </div>
    )
}

export default Compare
