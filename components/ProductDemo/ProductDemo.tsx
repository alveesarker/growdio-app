import { DirectionAwareHoverDemo } from '../DirectionAwareHoverDemo/DirectionAwareHoverDemo';
import Style from './ProductDemo.module.css';



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
        <div className='mt-40'>
            <div className='pl-4 pr-4 mb-16'>
                <h2 className="roboto text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    We Will <span className='calvino'>Guide</span> Your <br />Brand Towards Success
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-base text-center relative z-10">
                We are a leading digital solutions agency, delivering cutting-edge services customized to fulfill all your business requirements. From branding and web design to social media marketing, here’s a comprehensive overview of what we provide.
                </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-[59rem]  relative left-[50%] translate-x-[-50%]'>
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
