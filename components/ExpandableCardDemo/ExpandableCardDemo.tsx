"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-[25rem] sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 font-semibold text-[18px]"
                    >
                      {active.description}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.des}
                    </motion.h3>
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.facebook}
                      target="_blank"
                      className=" text-[25px] mt-3 rounded-full text-blue-500"
                    >
                      <FaFacebook />
                    </motion.a>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.linkedin}
                      target="_blank"
                      className=" text-[25px] mt-3 rounded-full text-[#0077b5]"
                    >
                      <FaLinkedin />
                    </motion.a>
                    {active.behance ? (
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.behance}
                        target="_blank"
                        className=" text-[25px] mt-3 rounded-full text-[#0057ff]"
                      >
                        <FaBehanceSquare />
                      </motion.a>
                    ) : active.instagram ? (
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.instagram}
                        target="_blank"
                        className=" text-[25px] mt-3 rounded-full text-[#ff4756]"
                      >
                        <FaSquareInstagram />
                      </motion.a>
                    ) : active.github ? (
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.github}
                        target="_blank"
                        className=" text-[25px] mt-3 rounded-full text-neutral-800"
                      >
                       <FaGithub />
                      </motion.a>
                    ) : null}
                  </div>
                </div>
                {/* <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div> */}
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" w-[80%] max-w-[55rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-800 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-300 dark:text-neutral-400 font-semibold text-center md:text-left text-[17px]"
                >
                  {card.description}
                </motion.p>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-500 dark:text-neutral-200 text-center md:text-left text-[15px]"
                >
                  {card.des}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Anik Sadik Santo",
    title: "Anik Sadik Santo",
    des: "Founder",
    src: "/images/sadik.jpg",
    ctaText: "Facebook",
    facebook: "https://www.facebook.com/profile.php?id=100029429422473",
    linkedin: "https://www.linkedin.com/in/anik-sadik-santo-22a063256/",
    behance: "https://www.behance.net/shadikshanto",
  },
  {
    description: "Sabbir Ahmed",
    title: "Sabbir Ahmed",
    des: "Co-Founde",
    src: "/images/sabbir.jpg",
    ctaText: "Facebook",
    facebook: "https://www.facebook.com/profile.php?id=100004706238103",
    linkedin: "https://www.linkedin.com/in/sabbir-ahmed-43403a1b2/",
    behance: "https://www.behance.net/sabbir69",
  },

  {
    description: "Mehedi Hasan Emon",
    title: "Mehedi Hasan Emon",
    des: "Founder & CEO",
    src: "/images/mehedi_hasan.jpg",
    ctaText: "Facebook",
    facebook: "https://www.facebook.com/vpmehediemon",
    linkedin: "",
    behance: "",
  },
  {
    description: "Yesin Arafat",
    title: "Yesin Arafat",
    des: "Co-Founder",
    src: "/images/yeasin.jpg",
    ctaText: "Facebook",
    facebook: "https://www.facebook.com/designeryeasinarafat0",
    linkedin: "https://www.linkedin.com/in/yeasin-arafat-designer/",
    behance: "https://www.behance.net/designeryeasinar",
  },
  {
    description: "Mohammad Mahfuzul Haque",
    title: "Mohammad Mahfuzul Haque",
    des: "Graphic Designer",
    src: "/images/mahfuz.png",
    ctaText: "Facebook",
    facebook: "https://www.facebook.com/mahfuzulhaqu703/",
    linkedin: "https://www.linkedin.com/in/mahfuzulhaqu703/",
    behance: "https://www.behance.net/mahfuzfarabi",
  },
  {
    description: "K.M Sadman Arifin Sami",
    title: "K.M Sadman Arifin Sami",
    des: "Project Manager",
    src: "/images/sadman.jpg",
    ctaText: "Facebook",
    facebook: "https://www.facebook.com/sadmansamiii?mibextid=kFxxJD",
    linkedin: "https://www.linkedin.com/in/k-m-sadman-arifin-sami-6ba64928a/",
    instagram:
      "https://www.instagram.com/sadmansphotogarage?igsh=OTlwcnUxb3ppdGt4",
  },
  {
    description: "Alvee Sarker",
    title: "Alvee Sarker",
    des: "Web Developer",
    src: "/images/alveesarker.jpg",
    ctaText: "Facebook",
    facebook: "https://www.facebook.com/Alveesarker01",
    linkedin: "https://www.linkedin.com/in/alveesarker/",
    github: "https://github.com/alveesarker",
  },
  {
    description: "Ahmed Ullah Musa",
    title: "Ahmed Ullah Musa",
    des: "Chief Marketing Officer",
    src: "/images/musa.jpg",
    ctaText: "Facebook",
    facebook: "https://www.facebook.com/ahmad.musa.3154284?mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/ahmed-ullah-musa/",
    instagram: "https://www.instagram.com/dmmusa98/",
  },
  {
    description: "SK Alif",
    title: "SK Alif",
    des: "Web Developer",
    src: "/images/skalif.jpg",
    service: "Web Development",
    ctaText: "Facebook",
    facebook: "https://www.facebook.com/sk.alif.90475",
    linkedin: "https://www.linkedin.com/in/alveesarker/",
    github: "https://github.com/alveesarker",
  },
  {
    description: "Raj Habib",
    title: "Raj Habib",
    des: "Digital Marketer",
    src: "/images/habib.png",
    ctaText: "Facebook",
    facebook: "https://www.facebook.com/RajHabib789",
    linkedin: "https://www.linkedin.com/in/raj-habib/",
    instagram: "https://www.instagram.com/ahsanhabib_raaz",
  },
  {
    description: "Saber Hossain Shihab",
    title: "Saber Hossain Shihab",
    des: "Digital Marketer",
    src: "/images/shihab.jpg",
    ctaText: "Facebook",
    facebook: "https://www.facebook.com/saberal.mahmud.5?mibextid=ZbWKwL",
    linkedin:
      "https://www.linkedin.com/in/md-saber-hossain-shihab-22527b2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/saberseovid?igsh=anAzcXJ1aDNid21l",
  },
];
