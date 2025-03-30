import { motion } from "framer-motion";
import { useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export function AboutPerso() {
  const hikingImages = useMemo(() => [
    { src: "/assets/randonnees/puydesancy.jpg", top: "10%", left: "20%", location: "Puy de Sancy" },
    { src: "/assets/randonnees/aiguilledumidi.jpg", top: "40%", left: "5%", location: "Aiguille du midi" },
    { src: "/assets/randonnees/petitballon.jpg", top: "30%", left: "50%", location: "Petit ballon d'Alsace" },
    { src: "/assets/randonnees/grandballon.jpg", top: "10%", left: "70%", location: "Grand ballon d'Alsace" },
    { src: "/assets/randonnees/tipsy.jpeg", top: "60%", left: "65%", location: "Auvergne" },
  ], []);

  const climbingImages = useMemo(() => [
    { src: "/assets/escalade/img1.jpg", top: "10%", left: "35%"},
    { src: "/assets/escalade/img2.jpeg", top: "40%", left: "10%"},
    { src: "/assets/escalade/img3.jpeg", top: "30%", left: "65%"},
  ], []);

  const travelImages = useMemo(() => [
    { src: "/assets/voyages/colmar.jpg", top: "10%", left: "30%", location: "Colmar" },
    { src: "/assets/voyages/chateau.jpg", top: "40%", left: "15%", location: "Haut Koenigsbourg" },
    { src: "/assets/voyages/grotte.jpg", top: "30%", left: "60%", location: "La Grotte de Clamouse" },
    { src: "/assets/voyages/dijon.jpg", top: "60%", left: "70%", location: "Dijon" },
  ], []);

  return (
    <div className="w-full h-full px-5 pt-5 flex flex-col gap-10 items-start">
      <div className="relative w-1/2">
        <img src="/assets/mePerso.jpg" alt="Moi" className="w-full h-full object-cover"/>
      </div>
      <h2 className="text-3xl font-bold w-full text-center">Ce que j'aime c'est...</h2>
      <ActivitySection title="...me perdre dans le paysage" images={hikingImages} />
      <ActivitySection title="...m'accrocher aux rochers de Fontainebleau 🤔" images={climbingImages} />
      <ActivitySection title="...découvrir 🎒" images={travelImages} />
    </div>
  );
}

export function ActivitySection({ title, images }) {
  return (
    <motion.div
      className="relative w-full h-screen gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center text-2xl text-black font-semibold z-50 bg-white/[.9] rounded-xl p-4">
        {title}
      </p>
      {images.map((activity, index) => (
        <ActivityImage 
          key={index} 
          src={activity.src} 
          location={activity.location}
          top={activity.top}
          left={activity.left}
        />
      ))}
    </motion.div>
  );
}

export function ActivityImage({ src, location, top, left }) {
  return (
    <motion.div
      className="relative md:absolute md:w-[250px] aspect-square"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.1, zIndex: 999 }}
      style={{ top, left }}
    >
      <img src={src} alt="" className="w-full h-full object-cover rounded-lg shadow-lg md:opacity-[.2] hover:opacity-[1]" />
      {location ? (
        <div className="absolute bottom-0 right-0 bg-black/[.4] text-white p-1 text-xs rounded-lg">
          <FontAwesomeIcon icon={faLocationDot} /> {location}
        </div> 
      ) : null}
    </motion.div>
  );
}
