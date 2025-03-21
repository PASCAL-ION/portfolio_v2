import { motion } from "framer-motion";
import { useState } from "react";

export function TextCaroussel({ wordArray, direction }) {
  const [isHovered, setIsHovered] = useState(false);
  let i = 0;

  return (
    <motion.div
      className={`flex flex-col grow h-screen overflow-hidden relative transition-all duration-500 
      ${isHovered ? "bg-slate-100" : "bg-stone-900"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`flex flex-col relative z-10 border-solid border-0 border-l border-white ${
          direction === "up" ? "animate-scroll-up" : "animate-scroll-down"
        }`}
        whileHover={{
          cursor: "pointer",
        }}
      >
        {[...wordArray, ...wordArray].map((letter) => (
          <p
            key={`${letter}${i++}`}
            className={`text-7xl font-opensans px-5 py-2 w-full text-center tracking-wider transition-colors duration-300 
            ${isHovered ? "text-black" : "text-white"}`}
          >
            {letter}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
}
