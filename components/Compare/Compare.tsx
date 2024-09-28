"use client"
import { CardSpotlightDemo } from '../CardSpotlightDemo/CardSpotlightDemo'
import { CardSpotlightDemo2 } from '../CardSpotlightDemo/CardSpotlightDemo2'
import FadeInSection from '../HowHelp/FadeInSection'

const Compare = () => {
    return (
        <div className=' flex flex-col items-center justify-center mt-28 gap-20'>
            <FadeInSection className='pl-4 pr-4'>
                <h2 className=" text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    Why Would You <br /> Want To Work <span className='calvino'>With Us?</span>
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-base text-center relative z-10">
                    When you choose Growdio, you’re opting for a partner that prioritizes your success. Unlike other agencies, we offer personalized attention, innovative solutions, and a commitment to long-term growth.
                </p>
            </FadeInSection>
            <div className='flex gap-20 sm:gap-14 containerForSpot'>
                <FadeInSection delay={0.3} className={''}><CardSpotlightDemo2 /></FadeInSection>
                <FadeInSection className={''} delay={0.5}><CardSpotlightDemo /></FadeInSection>
            </div>
        </div>
    )
}

export default Compare
