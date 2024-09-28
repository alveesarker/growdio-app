import React from "react";
import { CardDemo } from "../CardDemo/CardDemo";

const Counting = () => {
  const items = [
    {
      title: "Years of Service",
      description: "Growdio has been providing exceptional digital services.",
      number: "3",
    },
    {
      title: "Location",
      description: "Dhaka, Bangladesh Main Branch",
      number: "2",
    },
    {
      title: "Team Members",
      description:
        "Our talented team at Growdio combines creativity, expertise, and dedication.",
      number: "14",
    },
    {
      title: "Happy Clients",
      description: "Take a chance to be the 51",
      number: "50",
    },
  ];

  return (
    <div className="my-10  max-w-[80rem] w-[80%] flex items-center justify-between relative left-[50%] translate-x-[-50%] flex-wrap gap-5">
      {items.map((item, idx) => (
        <CardDemo item={item} key={idx} />
      ))}
    </div>
  );
};

export default Counting;
