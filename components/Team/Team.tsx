import React from 'react'
import { ThreeDCardDemo } from '../ThreeDCardDemo/ThreeDCardDemo'

const Team = () => {

    const team = [
        {
            name: "Anik Sadik Santo",
            post: "Founder",
            image: "/images/sadik.jpg",
            facebook: "https://www.facebook.com/Alveesarker01",
            behance: "https://www.facebook.com/Alveesarker01"
        },
        {
            name: "Sabbir Ahmed",
            post: "Co-Founder",
            image: "/images/sabbir.jpg",
            facebook: "https://www.facebook.com/Alveesarker01",
            behance: "https://www.facebook.com/Alveesarker01"
        },
        {
            name: "Mehedi Hasan Emon",
            post: "Founder & CEO",
            image: "/images/.jpg",
            facebook: "https://www.facebook.com/Alveesarker01",
            behance: "https://www.facebook.com/Alveesarker01"
        },
        {
            name: "Yesin Arafat",
            post: "Co-Founder",
            image: "/images/.jpg",
            facebook: "https://www.facebook.com/Alveesarker01",
            behance: "https://www.facebook.com/Alveesarker01"
        },
        {
            name: "Mohammad Mahfuzul Haque",
            post: "Graphic Designer",
            image: "/images/mahfuz.png",
            facebook: "https://www.facebook.com/Alveesarker01",
            behance: "https://www.facebook.com/Alveesarker01"
        },
        {
            name: "K.M Sadman Arifin Sami",
            post: "Project Manager",
            image: "/images/sadman.jpg",
            facebook: "https://www.facebook.com/Alveesarker01",
            behance: "https://www.facebook.com/Alveesarker01"
        },
        {
            name: "Alvee Sarker",
            post: "Web Developer",
            image: "/images/alveesarker.jpg",
            facebook: "https://www.facebook.com/Alveesarker01",
            behance: "https://www.facebook.com/Alveesarker01"
        },
        {
            name: "Ahmed Ullah Musa",
            post: "Chief Marketing Officer",
            image: "/images/musa.jpg",
            facebook: "https://www.facebook.com/Alveesarker01",
            behance: "https://www.facebook.com/Alveesarker01"
        },
        {
            name: "Raj Habib",
            post: "Digital Marketer",
            image: "/images/habib.png",
            facebook: "https://www.facebook.com/Alveesarker01",
            behance: "https://www.facebook.com/Alveesarker01"
        },
        {
            name: "Saber Hossain Shihab ",
            post: "Digital Marketer",
            image: "/images/shihab.jpg",
            facebook: "https://www.facebook.com/Alveesarker01",
            behance: "https://www.facebook.com/Alveesarker01"
        },
    ]

    return (
        <div className='w-full flex flex-col justify-center gap-16 items-center py-16'>
            <div className='pl-4 pr-4'>
                <h2 className=" text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    Our Tireless Team
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    These are the people working behind the computer screen,
                    dedicated to ensuring that your brand receives the recognition it deserves.
                </p>
            </div>
            <div className='flex items-center justify-center gap-10 w-[80%] flex-wrap '>
                {team.map((item, inx) => (
                    <ThreeDCardDemo team={item} key={inx} />
                ))}
            </div>
        </div>
    )
}

export default Team
