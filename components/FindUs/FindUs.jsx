"use client";
import FadeInSection from "../HowHelp/FadeInSection";
import FadeInSection1 from "../HowHelp/FadeInSection1";
import Styles from "./FindUs.module.css";

const FindUs = () => {
    return (
        <div className={Styles.container}>
            <FadeInSection1 className="text-white text-5xl geomatrixBold font-bold">
                Find Us
            </FadeInSection1>
            <FadeInSection className={Styles.addressSection}>
                <div className={Styles.address}>
                    <h1 className="text-white">Bangladesh</h1>
                    <h4 className="text-neutral-400">ADDRESS</h4>
                    <p className="text-neutral-400">
                        Bhuighar, Kazipara, Commander Sirajul Islam Road, Bhuigar, Fatullah,
                    </p>
                    <p className="text-neutral-400">Narayanganj</p>
                    <div className={Styles.usa}>
                        <h4>CHINA BRANCH</h4>
                        <p className="text-neutral-400">
                        Nanjing, Jiangsu, China
                        </p>
                    </div>
                </div>
                <div className={Styles.contact}>
                    <h4 className="text-neutral-400">CONTACT</h4>
                    {/* <p className="text-neutral-400">mail@gamil.com</p> */}
                    <p className="text-neutral-400">info.growdio@gmail.com</p>
                    <p className="text-neutral-400">+880 1897975430</p>
                </div>
                <div className={Styles.mapLocation}>
                    <iframe
                        className="rounded-lg"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=universiy%20boys%20hostel+(Growdio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
            </FadeInSection>
        </div>
    );
};

export default FindUs;
