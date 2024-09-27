import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


//@ts-ignore
const FadeInSection1 = ({ children, className, delay = 0 }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the element is visible
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            className={className} // Pass the className to ensure styles are applied correctly
            variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } }, // Added delay here
            }}
            style={{ overflow: "hidden" }} // Prevent layout issues
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection1;