"use client";

import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "@/components/ui/InputBox";
import Template from "@/components/ui/transition";
import Link from "next/link";
export default function Feature2() {
  const placeholders = [
    "Bitcoin price surge",

    "Elon Musk latest tweet",

    "World Cup 2023 highlights",

    "AI advancements in 2023",

    "Crypto market trends",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const text = "Explore Real-Time Tweets";
  const text_effect = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: i * 0.1,
      },
    }),
  };
  return (
    <Template>
      <motion.div
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="ml-8 pt-6 "
      >
        <Link href="/features">
          <button className="inline-flex items-center justify-center cursor-pointer gap-2 text-neutral-400 italic  text-2xl">
            <svg
              data-slot="icon"
              fill="none"
              width="24"
              height="24"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              ></path>
            </svg>
            Go Back
          </button>
        </Link>
      </motion.div>
      <div className="flex justify-center">
        {text.split(" ").map((cur, i) => (
          <motion.div
            key={i}
            variants={text_effect}
            initial="initial"
            custom={i}
            animate="animate"
            className="text-5xl md:leading-[4rem] font-medium text-center tracking-tighter pr-2 mt-24  bg-clip-text bg-gradient-to-b from-[#ffffff] to-neutral-400 text-transparent"
          >
            {cur == "" ? <span>&nbsp;</span> : cur}
          </motion.div>
        ))}
      </div>
      <div className="mt-20">
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="text-xl mb-20 cursor-pointer font-semibold flex flex-col justify-center items-center text-center text-gray-400"
        >
          See what the world is saying about any
          <br />
          topic—live and unfiltered.
        </motion.div>
        <div>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </Template>
  );
}
