import React from 'react'
import { InfiniteMovingCardsDemo2 } from '../InfiniteMovingCardsDemo/InfiniteMovingCardsDemo'
import { InfiniteMovingCardsDemo3 } from '../InfiniteMovingCardsDemo/InfiniteMovingCardsDemo3'

const ClientReview = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-40 gap-20'>
            <div className='pl-4 pr-4'>
                <h2 className="mb-5 text-center sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    But, why would you <br /> want to work with us?
                </h2>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to MailJet, the best transactional email service on the web.
                    We provide reliable, scalable, and customizable email solutions for
                    your business.
                </p>
            </div>
            <div className='relative w-full'>
            <InfiniteMovingCardsDemo3 />
            <InfiniteMovingCardsDemo2 />
            <InfiniteMovingCardsDemo3 />
            </div>
        </div>
    )
}

export default ClientReview
