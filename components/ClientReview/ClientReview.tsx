import React from 'react'
import { InfiniteMovingCardsDemo2 } from '../InfiniteMovingCardsDemo/InfiniteMovingCardsDemo'
import { InfiniteMovingCardsDemo3 } from '../InfiniteMovingCardsDemo/InfiniteMovingCardsDemo3'
import { WobbleCardDemo } from '../WobbleCardDemo/WobbleCardDemo'

const ClientReview = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-40 gap-20'>
            <div className='pl-4 pr-4'>
                <h2 className="mb-5 text-center sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    Client Success Stories
                </h2>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    See what our clients have to say about working with Growdio. Their feedback highlights the impact of our creative solutions and personalized service, showcasing how we turn vision into reality and drive success.
                </p>
            </div>
            <div className='relative w-full'>
                <InfiniteMovingCardsDemo3 />
            </div>
            <WobbleCardDemo/>
        </div>
    )
}

export default ClientReview
