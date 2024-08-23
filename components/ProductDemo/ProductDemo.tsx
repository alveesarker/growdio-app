import React from 'react';
import Style from './ProductDemo.module.css';
import { DirectionAwareHoverDemo } from '../DirectionAwareHoverDemo/DirectionAwareHoverDemo';



export const products = [
    {
        title: "Moonbeam",
        text: "hello",
        linkUrl: '',
        image:
            "/images/latest-post1.png",
    },
    {
        title: "Cursor",
        text: "hello",
        linkUrl: '',
        image:
            "/images/latest-post2.png",
    },
    {
        title: "Rogue",
        text: "hello",
        linkUrl: '',
        image:
            "/images/latest-post3.png",
    },

    {
        title: "Editorially",
        text: "hello",
        linkUrl: '',
        image:
            "/images/latest-post4.png",
    },
    {
        title: "Editrix AI",
        text: "hello",
        linkUrl: '',
        image:
            "/images/latest-post5.png",
    },
    {
        title: "Pixel Perfect",
        text: "hello",
        linkUrl: '',
        image:
            "/images/latest-post6.png",
    }
];

const ProductDemo = () => {

    return (
        <div>
            <div className='pl-4 pr-4'>
                <h2 className="roboto mb-5 text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    The outcomes are self-evident
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
