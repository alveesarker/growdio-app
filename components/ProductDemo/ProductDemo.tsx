import React from 'react';
import Style from './ProductDemo.module.css';
import { DirectionAwareHoverDemo } from '../DirectionAwareHoverDemo/DirectionAwareHoverDemo';



export const products = [
    {
        title: "Creative Design",
        text: "GROWDIO",
        linkUrl: '/creative-design',
        image:
            "/images/qcds.jpeg",
    },
    {
        title: "Digital Marketing",
        text: "GROWDIO",
        linkUrl: '/digital-marketing',
        image:
            "/images/qdms.jpeg",
    },
    {
        title: "Video Editing",
        text: "GROWDIO",
        linkUrl: '/video-editing',
        image:
            "/images/qves.jpeg",
    },

    {
        title: "Web Design",
        text: "GROWDIO",
        linkUrl: '/web-design',
        image:
            "/images/qwdis.jpeg",
    },
    {
        title: "Web Development",
        text: "GROWDIO",
        linkUrl: '/web development',
        image:
            "/images/qwdvs.jpeg",
    },
    {
        title: "Photography",
        text: "hello",
        linkUrl: '/photography',
        image:
            "/images/qps.jpeg",
    }
];

const ProductDemo = () => {

    return (
        <div>
            <div className='pl-4 pr-4'>
                <h2 className="roboto text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                Growdio's Full-Service <span className='calvino'>{" "}Digital{" "}</span> Solutions
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    We deliver reliable, scalable, and customizable creative solutions for your brand. Whether you need eye-catching designs, engaging promotional content, or comprehensive campaign management, Growdio has you covered.
                </p>
            </div>
            <div className={Style.container}>
                {products.map((item, inx) => (
                    <DirectionAwareHoverDemo
                        key={inx}
                        linkUrl={item.linkUrl}
                        imageUrl={item.image}
                        title={item.title}
                        text={item.text}
                    />
                ))}

            </div>
        </div>
    )
}

export default ProductDemo
