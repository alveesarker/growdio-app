import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/images/par7.jpg",
    },
    {
      title: "Valley of life",
      src: "/images/par3.jpg",
    },
    {
      title: "Sala behta hi jayega",
      src: "/images/7th.jpg",
    },
    {
      title: "Camping is for pros",
      src: "/images/extra.jpg",
    },
    {
      title: "The road not taken",
      src: "/images/lang.jpg",
    },
    {
      title: "The First Rule",
      src: "/images/workersday.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
