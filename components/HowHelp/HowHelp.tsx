"use client";
import FadeInSection from "./FadeInSection";
import FadeInSection1 from "./FadeInSection1";

const HowHelp = () => {
    return (
        <div className="mt-40 flex flex-col items-center justify-center max-w-[80rem] w-[80%] relative left-[50%] translate-x-[-50%] gap-20">
            <div className="pl-4 pr-4">
                <h2 className="text-center geomatrixBold sm:text-5xl max-sm:text-4xl dark:text-white text-white">
                    How can we help <span className="calvino">You?</span>
                </h2>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-base text-center relative z-10">
                    From Google Ads to Meta Ads, TikTok Ads, and content <br /> marketing, we handle every aspect of your brand’s growth.
                </p>
            </div>
            <div className="flex flex-col">
                <div className=" absolute w-1 bg-white md:h-[86%] h-[90%] md:left-[50%] left[-10px]  z-50 flex flex-col items-center justify-start">
                    <div className="h-1/4">
                        <div className="w-10 text-white h-10 bg-green-500 rounded-full flex items-center justify-center">
                            1
                        </div>
                    </div>
                    <div className="h-1/4">
                        <div className="w-10 text-white h-10 bg-green-500 rounded-full flex items-center justify-center">
                            2
                        </div>
                    </div>
                    <div className="h-1/4">
                        <div className="w-10 text-white h-10 bg-green-500 rounded-full flex items-center justify-center">
                            3
                        </div>
                    </div>
                    <div className="h-1/4">
                        <div className="w-10 text-white h-10 bg-green-500 rounded-full flex items-center justify-center">
                            4
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-start w-full md:gap-60 gap-8 pl-10 md:h-80 h-[39rem]">
                    <FadeInSection1 className="md:w-1/2 w-full" delay={0.5}>
                        <img
                            src="/images/discover.png"
                            className="w-80 rounded-xl "
                            alt=""
                        />
                    </FadeInSection1>
                    <FadeInSection className=" md:w-1/2 w-full" delay={0.5}>
                        <h1 className="text-2xl font-bold text-slate-100">
                            Discovery & Strategy
                        </h1>
                        <p className="text-kg text-slate-300 max-w-xl mt-5">
                            We start by getting to know your brand, understanding your goals,
                            and identifying the challenges you face. Through in-depth
                            discussions and market research, we develop a strategic plan
                            tailored to your needs.
                        </p>
                    </FadeInSection>
                </div>
                <div className="flex md:flex-row items-start justify-end w-full md:gap-60 gap-8 pl-10 md:h-80 h-[39rem] flex-col-reverse">
                    <FadeInSection className=" md:w-1/2 w-full" delay={0.5}>
                        <h1 className="text-2xl font-bold text-slate-100">
                            Creative Design & Development
                        </h1>
                        <p className="text-kg text-slate-300 max-w-xl mt-5">
                            With the strategy in place, our creative team brings your vision
                            to life. From eye-catching designs to user-friendly interfaces, we
                            focus on creating experiences that resonate with your audience.
                        </p>
                    </FadeInSection>
                    <FadeInSection1 className="md:w-1/2 w-full" delay={0.5}>
                        <img
                            src="/images/creative__.png"
                            className="w-80 rounded-xl"
                            alt=""
                        />
                    </FadeInSection1>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-start w-full md:gap-60 gap-8 pl-10 md:h-80 h-[39rem]">
                    <FadeInSection1 className="md:w-1/2 w-full" delay={0.5}>
                        <img src="/images/setup.png" className="w-80 rounded-xl" alt="" />
                    </FadeInSection1>
                    <FadeInSection className=" md:w-1/2 w-full" delay={0.5}>
                        <h1 className="text-2xl font-bold text-slate-100">
                            Execution & Campaign Setup
                        </h1>
                        <p className="text-kg text-slate-300 max-w-xl mt-5">
                            Once the design is finalized, we move to execution. Whether it's
                            launching a new website, setting up a digital marketing campaign,
                            or creating engaging content, we handle it all. Our expertise in
                            campaign management ensures that your message reaches the right
                            audience at the right time.
                        </p>
                    </FadeInSection>
                </div>
                <div className="flex md:flex-row items-start justify-end w-full md:gap-60 gap-8 pl-10 md:h-80 h-[39rem] flex-col-reverse">
                    <FadeInSection className=" md:w-1/2 w-full" delay={0.5}>
                        <h1 className="text-2xl font-bold text-slate-100">
                            Optimization & Growth
                        </h1>
                        <p className="text-kg text-slate-300 max-w-xl mt-5">
                            Our job doesn’t end with the launch. We continuously monitor and
                            optimize your campaigns, making data-driven adjustments to improve
                            performance. We provide regular reports and insights, helping you
                            to understand what’s working and where there’s room for
                            improvement. Our goal is to help your brand grow and thrive in a
                            competitive market.
                        </p>
                    </FadeInSection>
                    <FadeInSection1 className="md:w-1/2 w-full" delay={0.5}>
                        <img
                            src="/images/growth__.png"
                            className="w-80 rounded-xl"
                            alt=""
                        />
                    </FadeInSection1>
                </div>
            </div>
        </div>
    );
};

export default HowHelp;
