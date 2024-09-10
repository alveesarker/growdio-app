"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Collab1",
      value: "",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1b0028] to-[#5a022b]">
          <p>M4 AUTOS</p>
          <DummyContent image={"/images/collab.jpg"} />
        </div>
      ),
    },
    {
      title: "Collab2",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1b0028] to-[#5a022b]">
          <p>LEAFS</p>
          <DummyContent image={"/images/collab1.jpg"} />
        </div>
      ),
    },
    {
      title: "Experts",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1b0028] to-[#5a022b]">
          <p>New Experts</p>
          <DummyContent image={"/images/newbies.jpg"} />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto max-w-[80rem] w-[80%] items-start justify-start my-40 mb-72">
      <Tabs tabs={tabs} />
    </div>
  );
}
//@ts-ignore
const DummyContent = ({ image }) => {
  return (
    <Image
      src={image}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover h-[85%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] sm:w-[55%] rounded-xl mx-auto"
    />
  );
};
