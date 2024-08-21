import React from 'react'
import { LayoutGridDemo } from '../LayoutGridDemo/LayoutGridDemo'

const FullLayout = () => {
    return (
        <div className=' flex flex-col items-center gap-10 max-w-[80rem] w-[80%] relative left-[50%] translate-x-[-50%] justify-center mt-20'>
            <div className='pl-4 pr-4'>
                <h2 className="mb-5 text-center sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    Why would you <br /> want to work with us?
                </h2>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to MailJet, the best transactional email service on the web.
                    We provide reliable, scalable, and customizable email solutions for
                    your business.
                </p>
            </div>
            <LayoutGridDemo />
        </div>
    )
}

export default FullLayout
