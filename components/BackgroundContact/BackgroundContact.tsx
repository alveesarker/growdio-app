import React from 'react'
import { CoverDemo } from '../CoverDemo/CoverDemo'
import Button from '../Button/Button'

const BackgroundContact = () => {
    return (
        <div className="h-[47rem] w-full dark:bg-black bg-black  dark:bg-grid-black/[0.2] bg-grid-white/[0.1] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div>
                <CoverDemo />
                <div className="w-100% flex flex-col items-center justify-center mt-10">
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                        Setting up a meeting with us is quick and easy!
                    </p>
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default BackgroundContact
