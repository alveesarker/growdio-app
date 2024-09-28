import React from 'react'
import { ExpandableCardDemo } from '../ExpandableCardDemo/ExpandableCardDemo'
import FadeInSection from '../HowHelp/FadeInSection'

const Team = () => {

    // const team = [
    //     {
    //         name: "Anik Sadik Santo",
    //         post: "Founder",
    //         image: "/images/sadik.jpg",
    //         facebook: "https://www.facebook.com/profile.php?id=100029429422473",
    //         linkedin: "https://www.linkedin.com/in/anik-sadik-santo-22a063256/",
    //         behance: "https://www.behance.net/shadikshanto"
    //     },
    //     {
    //         name: "Sabbir Ahmed",
    //         post: "Co-Founder",
    //         image: "/images/sabbir.jpg",
    //         facebook: "https://www.facebook.com/profile.php?id=100004706238103",
    //         linkedin: "https://www.linkedin.com/in/sabbir-ahmed-43403a1b2/",
    //         behance: "https://www.behance.net/sabbir69"
    //     },
    //     {
    //         name: "Mehedi Hasan Emon",
    //         post: "Founder & CEO",
    //         image: "/images/.jpg",
    //         facebook: "",
    //         linkedin: "",
    //         behance: ""
    //     },
    //     {
    //         name: "Yesin Arafat",
    //         post: "Co-Founder",
    //         image: "/images/yeasin.jpg",
    //         facebook: "https://www.facebook.com/designeryeasinarafat0",
    //         linkedin: "https://www.linkedin.com/in/yeasin-arafat-designer/",
    //         behance: "https://www.behance.net/designeryeasinar"
    //     },
    //     {
    //         name: "Mohammad Mahfuzul Haque",
    //         post: "Graphic Designer",
    //         image: "/images/mahfuz.png",
    //         facebook: "https://www.facebook.com/mahfuzulhaqu703/",
    //         linkedin: "https://www.linkedin.com/in/mahfuzulhaqu703/",
    //         behance: "https://www.behance.net/mahfuzfarabi"
    //     },
    //     {
    //         name: "K.M Sadman Arifin Sami",
    //         post: "Project Manager",
    //         image: "/images/sadman.jpg",
    //         facebook: "https://www.facebook.com/sadmansamiii?mibextid=kFxxJD",
    //         linkedin: "https://www.linkedin.com/in/k-m-sadman-arifin-sami-6ba64928a/",
    //         instagram: "https://www.instagram.com/sadmansphotogarage?igsh=OTlwcnUxb3ppdGt4"
    //     },
    //     {
    //         name: "Alvee Sarker",
    //         post: "Web Developer",
    //         image: "/images/alveesarker.jpg",
    //         facebook: "https://www.facebook.com/Alveesarker01",
    //         linkedin: "https://www.linkedin.com/in/alveesarker/",
    //         github: "https://github.com/alveesarker"
    //     },
    //     {
    //         name: "Ahmed Ullah Musa",
    //         post: "Chief Marketing Officer",
    //         image: "/images/musa.jpg",
    //         facebook: "https://www.facebook.com/ahmad.musa.3154284?mibextid=ZbWKwL",
    //         linkedin: "https://www.linkedin.com/in/ahmed-ullah-musa/",
    //         instagram: "https://www.instagram.com/dmmusa98/"
    //     },
    //     {
    //         name: "Raj Habib",
    //         post: "Digital Marketer",
    //         image: "/images/habib.png",
    //         facebook: "https://www.facebook.com/RajHabib789",
    //         linkedin: "https://www.linkedin.com/in/raj-habib/",
    //         instagram: "https://www.instagram.com/ahsanhabib_raaz",
    //     },
    //     {
    //         name: "Saber Hossain Shihab ",
    //         post: "Digital Marketer",
    //         image: "/images/shihab.jpg",
    //         facebook: "https://www.facebook.com/saberal.mahmud.5?mibextid=ZbWKwL",
    //         linkedin: "https://www.linkedin.com/in/md-saber-hossain-shihab-22527b2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    //         instagram: "https://www.instagram.com/saberseovid?igsh=anAzcXJ1aDNid21l"
    //     },
    // ]

    return (
        <div className='w-full flex flex-col justify-center gap-16 items-center py-16'>
            <FadeInSection className='pl-4 pr-4'>
                <h2 className=" text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    Our Tireless Team
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    These are the people working behind the computer screen,
                    dedicated to ensuring that your brand receives the recognition it deserves.
                </p>
            </FadeInSection>
            {/* <div className='flex items-center justify-center gap-10 w-[80%] flex-wrap '>
                {team.map((item, inx) => (
                    <ThreeDCardDemo team={item} key={inx} />
                ))}
            </div> */}
            <ExpandableCardDemo/>
        </div>
    )
}

export default Team
