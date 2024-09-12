import React from "react";
import Button from "../Button/Button";

const BackgroundContact = () => {
  return (
    <div className="h-[47rem] w-full dark:bg-black bg-black  dark:bg-grid-black/[0.2] bg-grid-white/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-[40rem] w-[80%] flex flex-col items-center justify-center gap-7">
        <h1 className="text-white text-[40px] md:text-[70px] font-extrabold text-center lineh">
          We'd love to <br /> <span className="friendsbold">hear from you</span>
        </h1>
        <p className="text-neutral-400 text-center text-[17px] font-bold">
          Setting up a meeting with us is quick and easy! Simply click on the
          ‘Schedule a Meeting’ button below and choose a time that suits your
          schedule. We look forward to hearing from you.
        </p>
        <Button />
        <p className="text-neutral-200 text-center text-[17px] font-bold">We'll get back to you within an hour. <br />
          We're also happy to sign a NDA</p>
      </div>
    </div>
  );
};

export default BackgroundContact;
