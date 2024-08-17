import React from 'react'
import { CardHoverEffectDemo } from '../CardHoverEffectDemo/CardHoverEffectDemo'

//@ts-ignore
const ComprehensiveService = ({comprehensive}) => {
    return (
        <div>
            <div className='pl-4 pr-4'>
                <h2 className=" text-center sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    Our Comprehensive <br/> {comprehensive.namee} Service
                </h2>
            </div>
            <CardHoverEffectDemo comprehensive={comprehensive}/>
        </div>
    )
}

export default ComprehensiveService
