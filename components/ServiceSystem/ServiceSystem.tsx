import React from 'react';
import Button from '../Button/Button';
import Button2 from '../Button/Button2';

interface ServiceSystemProps {
    serviceSystem: {
        namee: string;
        paragraphOne: string;
        paragraphTwo: string;
        imageOne: string;
        imageTwo: string;
    };
    listItem: string[];
    usefulness: {
        icon: any,
        text: string;
    }[];
}

const ServiceSystem: React.FC<ServiceSystemProps> = ({ serviceSystem, listItem, usefulness = [] }) => {
    return (
        <div className='max-w-[80rem] w-[80%] flex flex-col lg:flex-row items-start justify-between relative left-[50%] translate-x-[-50%]'>
            <div className='w-[100%] lg:w-[67%]'>
                <div className='w-[100%]'>
                    <h2 className="text-left geomatrixBold sm:text-4xl max-sm:text-3xl dark:text-white text-white">
                        {serviceSystem.namee} Service
                    </h2>
                    <p className="text-neutral-400 my-8 text-sm text-left relative z-10">{serviceSystem.paragraphOne}</p>
                </div>
                <img className="w-full h-auto md:h-[350px] lg:h-[500px] rounded-3xl object-cover" src={serviceSystem.imageOne} alt="" />

                <div className='mt-8'>
                    <p className="text-neutral-400 mb-5 text-[1.2rem] text-left relative z-10">
                        {serviceSystem.paragraphTwo}
                    </p>

                    {/* Safeguard against undefined usefulness */}
                    <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-x-28 gap-y-3 mb-5'>
                        {usefulness.length > 0 ? (
                            usefulness.map((item, idx) => (
                                <div key={idx} className='flex gap-2 items-center'>
                                    <div className='text-neutral-400 text-xl text-left relative z-10'>

                                        {item.icon}
                                    </div>
                                    <p className='text-neutral-400 text-base text-left relative z-10'>{item.text}</p>
                                </div>
                            ))
                        ) : (
                            <p className='text-neutral-400 text-sm text-left relative z-10'>
                                No usefulness information available.
                            </p>
                        )}
                    </div>
                    <Button />
                </div>
            </div>
            <div className='lg:w-[30%] md:w-[50%] sm:w-[80%] w-[100%] lg:mt-0 mt-12 flex flex-col items-center justify-center border p-3 rounded-3xl'>
                <div>
                    <img src={serviceSystem.imageTwo} className='w-full h-auto md:h-[300px] lg:h-[250px] object-cover rounded-t-3xl' alt="" />
                </div>
                <div className='w-[100%] flex flex-col items-start'>
                    <h3 className='text-3xl geomatrixBold my-4 text-white'>{serviceSystem.namee}</h3>
                    <ul>
                        {listItem.map((item: string, idx: number) => (
                            <li className='mb-3 text-neutral-400 text-lg font-normal list-disc ml-4' key={idx}>{item}</li>
                        ))}
                    </ul>
                    <div className='mt-2 mb-2 ml-1'>
                        <Button2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSystem;
