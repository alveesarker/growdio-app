import React from 'react'
import { ExpandableCardDemo } from '../ExpandableCardDemo1/ExpandableCardDemo1'

//@ts-ignore
const LeadingGroup = ({cards}) => {

    

    return (
        <div className='w-full flex flex-col justify-center gap-16 mt-32 items-center py-16'>
            <div className='pl-4 pr-4'>
                <h2 className=" text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    Leading Growdio’s <br /> {cards[0].service} Department
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-base text-center relative z-10">
                    We will provide customized solutions to meet your specific needs across all platforms
                </p>
            </div>
            {/* <div className='flex items-center justify-center gap-10 w-[80%] flex-wrap '>
                {team.map((item, inx) => (
                    <ThreeDCardDemo team={item} key={inx} />
                ))}
            </div> */}
            <ExpandableCardDemo cards={cards} />
        </div>
    )
}

export default LeadingGroup;