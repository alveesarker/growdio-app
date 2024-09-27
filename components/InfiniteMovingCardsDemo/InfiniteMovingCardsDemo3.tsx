import { InfiniteMovingCard3 } from "../ui/infinite-moving-card3";

// Define the prop type
// type InfiniteMovingCardsDemo2Props = {
//   direction: "left" | "right"; // You can adjust this based on valid directions
// };

export function InfiniteMovingCardsDemo3() {
  return (
    <div className="h-[14rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCard3
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
const testimonials = [
  {
    quote:
      "Growdio has been amazing for our clothing brand. Their designs, video edits, and campaign management helped bring our vision to life.",
    name: "LEAFS",
    title: "Clothing Brand",
    image: "/images/leafs.jpg",
  },

  {
    quote:
      "On time and perfect revisions, delivered for our company now a year in a row!",
    name: "mizananr | fiverr",
    title: "United States",
    image: "/images/profilepic.png",
  },

  {
    quote: "I'm always impressed with his work and attention to detail.",
    name: "Idominick93",
    title: "United States",
    image: "/images/profilepic.png",
  },
  {
    quote:
      "Growdio’s creative team brought our brand to life with their unique designs and seamless campaign execution. They exceeded our expectations at every step!",
    name: "GOGNA",
    title: "Schoolwear",
    image: "/images/gogna.jpg",
  },
  {
    quote:
      "We partnered with Growdio for our business, and their work has been exceptional. They crafted a website and managed our digital campaigns nicely",
    name: "M4 AUTOS ",
    title: "Vehicle Importer",
    image: "/images/m4.jpg",
  },
  {
    quote:
      "Growdio helped take our esports organization to the next level. From dynamic visuals to engaging content, they delivered every time.",
    name: "Dead Of Hunter",
    title: "Esport",
    image: "/images/hunter.jpg",
  },

  {
    quote: "Perfect. Fast, very detailed.",
    name: "glenndill",
    title: "Belgium",
    image: "/images/profilepic.png",
  },
  {
    quote:
      "Working with Growdio has been a great experience for Oraimo. Their team brought innovative ideas to our campaigns, showcasing our smart accessories.",
    name: "Oraimo",
    title: "Accessories Brand",
    image: "/images/oraimologo.jpg",
  },
  {
    quote:
      "Growdio elevated Zclub's with cutting-edge designs and content. Their expertise in the esports industry made our partnership seamless.",
    name: "Z CLUB",
    title: "Esport",
    image: "/images/zclub.jpg",
  },

  {
    quote:
      "Clear communication, and was able to understand precisely the needs of the project.",
    name: "Justin Herde | Fiverr",
    title: "United States",
    image: "/images/profilepic.png",
  },
  {
    quote:
      "Growdio played a key role in boosting Normies Esports' presence. Their creative team delivered sharp designs and engaging content.",
    name: "Normies",
    title: "Esport",
    image: "/images/normies.jpg",
  },
  {
    quote:
      "Always does a great job. Very quick and responsive with designs. Very creative, Great to work with.",
    name: "Duranfivr | Fiverr",
    title: "United States",
    image: "/images/profilepic.png",
  },
  {
    quote:
      "The price-performance ratio is top. They exceeded my expectations. The delivery time was adhere to and communication was uncomplicated.",
    name: "Devid Grzesik | Fiverr",
    title: "Germany",
    image: "/images/profilepic.png",
  },
  {
    quote: "Achieved their deadline as I asked.",
    name: "muda55ar",
    title: "United States",
    image: "/images/profilepic.png",
  },
  {
    quote: "Easy to work with and very creative. Did exactly what I asked for.",
    name: "mike1ch",
    title: "United States",
    image: "/images/profilepic.png",
  },
];
