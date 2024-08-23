import React from 'react'
import { FeaturesSectionDemo } from '../FeaturesSectionDemo/FeaturesSectionDemo'

const OurServices = () => {
    return (
        <div className='w-[80%] mt-40 flex flex-col items-center justify-center relative left-[50%] translate-x-[-50%]'>
            <div className='pl-4 pr-4'>
                <h2 className=" text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    What we offer?
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Offering customized and innovative solutions designed to meet your unique challenges. With a focus on quality and efficiency, we provide comprehensive services that help you achieve your goals with confidence.
                </p>
            </div>
            <FeaturesSectionDemo />
        </div>
    )
}

export default OurServices
