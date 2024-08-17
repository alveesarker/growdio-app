import React from 'react'
import { TextGenerateEffectDemo } from '../TextGenerateEffectDemo/TextGenerateEffectDemo'

const Value = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 items-start px-5 justify-between max-w-[80rem] mt-32 relative left-[50%] translate-x-[-50%]'>
    <div className='w-[100%] md:w-[50%]'>
        <h2 className="text-left sm:text-5xl max-sm:text-4xl dark:text-white text-white">
            The Core Values Holding us Together
        </h2>
        <TextGenerateEffectDemo />
    </div>
    <div className='w-[100%] flex justify-start md:justify-end md:w-[50%]'>
        <img 
            className='w-full h-auto md:h-[350px] lg:h-[400px] rounded-2xl object-cover' 
            src="/images/valueimg.jpg" 
            alt="Core Values"
        />
    </div>
</div>

    )
}

export default Value
