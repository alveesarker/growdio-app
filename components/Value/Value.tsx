import React from 'react'
import { TextGenerateEffectDemo } from '../TextGenerateEffectDemo/TextGenerateEffectDemo'

const Value = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-5 items-start justify-between max-w-[80rem] w-[80%] mt-32 relative left-[50%] translate-x-[-50%]'>
            <div className='w-[100%] lg:w-[50%]'>
                <h2 className="text-left geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    The Core Values Holding us Together
                </h2>
                <TextGenerateEffectDemo />
            </div>
            <div className='w-[100%] flex justify-start lg:justify-end lg:w-[50%]'>
                <img
                    className='w-full h-auto md:h-[350px] lg:h-[400px] rounded-2xl object-cover'
                    src="/images/valueimg.jpeg"
                    alt="Core Values"
                />
            </div>
        </div>

    )
}

export default Value
