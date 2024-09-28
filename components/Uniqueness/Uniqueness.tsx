"use client"
import React from 'react';
import { IoBarChartOutline, IoTrophyOutline } from "react-icons/io5";
import { PiUsersFourThin, PiHandshakeLight, PiStrategyLight } from "react-icons/pi";
import { LuFocus } from "react-icons/lu";
import FadeInSection from '../HowHelp/FadeInSection';
import FadeInSection1 from '../HowHelp/FadeInSection1';

const Uniqueness = () => {

    const growdioUniquePoints = [
        {
            title: "Relentless Innovation",
            description: "At Growdio, we are committed to pushing the boundaries of creativity and technology. Our team is constantly exploring new ways to deliver cutting-edge solutions that give our clients a competitive edge.",
            icon: <IoBarChartOutline /> // You can replace this with an icon component or image if needed
        },
        {
            title: "Client-Focused Solutions",
            description: "We put our clients at the center of everything we do. By deeply understanding their needs, we create bespoke solutions that not only solve their current challenges but also help them grow.",
            icon: <PiUsersFourThin />
        },
        {
            title: "Proven Excellence",
            description: "Our portfolio speaks for itself. Over the years, we have delivered a multitude of successful projects, and our reputation for reliability and exceptional service continues to grow.",
            icon: <IoTrophyOutline />
        },
        {
            title: "Strategic Thinking",
            description: "We believe that every project requires a well-thought-out strategy. Growdio leverages data-driven insights and creative ideas to build solutions that are both impactful and sustainable.",
            icon: <PiStrategyLight />
        },
        {
            title: "Commitment to Transparency",
            description: "We believe in open communication. Every project is handled with clear and consistent updates to ensure our clients are always informed, fostering trust and collaboration at every step.",
            icon: <PiHandshakeLight />
        },
        {
            title: "Sustainability at Heart",
            description: "Growdio is passionate about integrating sustainable practices in our processes. We strive to implement eco-friendly solutions that contribute to a more responsible digital future.",
            icon: <LuFocus />
        }
    ];


    return (
        <div className='max-w-[80rem] mt-32 w-[80%] relative left-[50%] translate-x-[-50%]'>
            <FadeInSection1 className="text-left geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white mb-28">What <span className='text-[#01c056] calvino'>Makes Us <br /> Differen</span> from Others</FadeInSection1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-16'>
                {growdioUniquePoints.map((item, idx) => (
                    <FadeInSection className='flex flex-col md:items-center items-start justify-center gap-5' key={idx}>
                        <div className=' text-[55px] font-thin text-[#01c056]'>{item.icon}</div>
                        <h2 className='md:text-center text-2xl geomatrixBold text-slate-100'>{item.title}</h2>
                        <p className='md:text-center text-kg text-slate-300'>{item.description}</p>
                    </FadeInSection>
                ))}
            </div>
<></>
        </div>
    )
}

export default Uniqueness
