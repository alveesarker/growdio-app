import { InfiniteMovingCardsDemo3 } from '../InfiniteMovingCardsDemo/InfiniteMovingCardsDemo3';
import { InfiniteMovingCardsDemo } from '../InfiniteMovingCardsDemo/InfiniteMovingCardsDemo';

const ClientReview = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-32 gap-20'>
            <div className='pl-4 pr-4'>
                <h2 className=" text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    There's a reason clients <br /> enjoy <span className='calvino'>partnering</span> with us.
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-base text-center relative z-10">
                    See what clients say about Growdio. Their feedback highlights our creative solutions and personalized service in driving success.
                </p>
            </div>
            <div className='relative w-full flex flex-col gap-5'>
                <InfiniteMovingCardsDemo3 />
                <InfiniteMovingCardsDemo />
            </div>
        </div>
    )
}

export default ClientReview
