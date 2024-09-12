import React from 'react'
import { BackgroundGradientDemo } from '../BackgroundGradientDemo/BackgroundGradientDemo'
import { SignupFormDemo } from '../SignupFormDemo/SignupFormDemo'

const SendMail = () => {
    return (
        <div className='md:max-w-[80rem] w-[80%] flex flex-col relative left-[50%] translate-x-[-50%] gap-16'>
            <div>
                <h2 className='text-white text-5xl geomatrixBold font-bold'>Let's work <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Together</h2>
            </div>
            <div className='flex items-center justify-center flex-col md:flex-row gap-20'>
                <BackgroundGradientDemo />
                <SignupFormDemo />
            </div>
        </div>
    )
}

export default SendMail
