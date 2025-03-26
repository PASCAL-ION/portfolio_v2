import { motion } from "framer-motion";
import { useMemo } from "react";

export function AboutPerso() {
  const hikingImages = useMemo(() => [
    { src: "./src/assets/hiking1.jpg", pos: "col-start-1 row-start-1" },
    { src: "./src/assets/hiking2.jpg", pos: "col-start-3 row-start-2" },
    { src: "./src/assets/hiking3.jpg", pos: "col-start-2 row-start-4" },
  ], []);

  const climbingImages = useMemo(() => [
    { src: "./src/assets/climbing1.jpg", pos: "col-start-1 row-start-1" },
    { src: "./src/assets/climbing2.jpg", pos: "col-start-3 row-start-2" },
    { src: "./src/assets/climbing3.jpg", pos: "col-start-2 row-start-4" },
  ], []);

  const travelImages = useMemo(() => [
    { src: "./src/assets/travel1.jpg", pos: "col-start-1 row-start-1" },
    { src: "./src/assets/travel2.jpg", pos: "col-start-3 row-start-2" },
    { src: "./src/assets/travel3.jpg", pos: "col-start-2 row-start-4" },
  ], []);

  return (
    <div className="w-full h-full px-5 pt-5 flex flex-col gap-10 items-start">
      {/* Profil */}
      <div className="w-[200px] h-[200px] relative">
        <img src="./src/assets/imgPro.jpg" alt="Moi" className="w-full h-full rounded-full object-cover"/>
        <h1 className="absolute -bottom-7 -right-5 w-2/3 bg-stone-800 text-white py-2 px-2 rounded-md">
          Moi ✋
        </h1>
      </div>

      <h2 className="text-xl font-bold">Ce que j'aime c'est...</h2>

      <ActivitySection title="...grimper tout en haut !!" images={hikingImages} />
      <ActivitySection title="...m'accrocher à des rochers 🤔" images={climbingImages} />
      <ActivitySection title="...découvrir 🎒" images={travelImages} />
    </div>
  );
}

function ActivitySection({ title, images }) {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto aspect-square grid grid-cols-4 grid-rows-4 border-2 border-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="italic text-stone-700 absolute inset-0 flex items-center justify-center text-center text-lg font-semibold">
        {title}
      </p>
      {images.map((activity, index) => (
        <ActivityImage key={index} src={activity.src} gridArea={activity.pos} />
      ))}
    </motion.div>
  );
}

export function ActivityImage({ src, gridArea }) {
  return (
    <motion.div
      className={`absolute ${gridArea} w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-lg overflow-hidden shadow-lg`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={src} alt="" className="w-full h-full object-cover"/>
    </motion.div>
  );
}
