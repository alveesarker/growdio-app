import { CardSpotlight } from "@/components/ui/card-spotlight2";
import FadeInSection from "../HowHelp/FadeInSection";

export function CardSpotlightDemo2() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-xl text-center font-bold relative z-20 mt-2 text-neutral-500">
        Other Agencies
      </p>
      <CardSpotlight className="h-72 w-12/12 sm:w-96">
        <div className="text-neutral-500 mt-6 relative z-20">
          Their steps
          <ul className="list-none mt-2">
            <Step title="Use generic templates" />
            <Step title="Stick to safe trends" />
            <Step title="Offer limited services" />
            <Step title="Rush projects" />
          </ul>
        </div>
      </CardSpotlight>
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 mt-3 items-start">
      <CheckIcon />
      <p className="text-neutral-500">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-neutral-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};
