import React from 'react'
import { StickyScrollRevealDemo } from '../StickyScrollRevealDemo/StickyScrollRevealDemo'

const HowHelp = () => {
    return (
        <div className='mt-60'>
            <div className='pl-4 pr-4'>
                <h2 className=" text-center sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    How can we help you?
                </h2>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to MailJet, the best transactional email service on the web.
                    We provide reliable, scalable, and customizable email solutions for
                    your business.
                </p>
            </div>
            <StickyScrollRevealDemo />
        </div>
    )
}

export default HowHelp
