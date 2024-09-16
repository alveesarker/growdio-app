"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What makes Growdio different?",
    "How do you customize your services?",
    "Can you show examples of your work?",
    "How do you ensure timely delivery?",
    "How do you track project success?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[30rem] flex max-w-[80rem] w-[80%] left-[50%] translate-x-[-50%] relative flex-col justify-center items-center px-4 mt-24">
      <h2 className="sm:text-5xl max-sm:text-4xl geomatrixBold text-center dark:text-white text-white">
        Feel free to ask Growdio anything
      </h2>
      <p className="mb-10 text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">This feature is coming soon. Stay tuned for more details and get ready to connect with us in a whole new way</p>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
