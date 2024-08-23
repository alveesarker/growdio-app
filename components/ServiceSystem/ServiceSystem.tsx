import React from 'react';
import Button from '../Button/Button';
import Buttont from '../Button/Buttont';

interface ServiceSystemProps {
    serviceSystem: {
        namee: string;
        paragraphOne: string;
        paragraphTwo: string;
        imageOne: string;
        imageTwo: string;
    };
    listItem: string[]; // specifying that listItem is an array of strings
}

//@ts-ignore
const ServiceSystem: React.FC<ServiceSystemProps> = ({ serviceSystem, listItem }) => {


    return (
        <div className='max-w-[80rem] w-[80%] flex flex-col lg:flex-row items-start justify-between relative left-[50%] translate-x-[-50%] '>
            <div className='w-[100%] lg:w-[67%]'>
                <div className='w-[100%]'>
                    <h2 className="text-left geomatrixBold sm:text-4xl max-sm:text-3xl dark:text-white text-white">
                        {serviceSystem.namee} Service
                    </h2>
                    <p className="text-neutral-400 my-8 text-sm text-left relative z-10">{serviceSystem.paragraphOne}</p>
                </div>
                <img className="w-full h-auto md:h-[350px] lg:h-[500px] rounded-3xl object-cover" src={serviceSystem.imageOne} alt="" />

                <div className='mt-8'>
                    <p className="text-neutral-400 mb-8 text-sm text-left relative z-10">
                        {serviceSystem.paragraphTwo}
                    </p>
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
                    <div className='mt-4'>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSystem;
