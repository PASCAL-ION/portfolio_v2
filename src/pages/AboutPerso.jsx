import { motion } from "framer-motion";
import { useMemo, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

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
  const [isMobile, setIsMobile] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full px-5 pt-5 flex flex-col md:gap-10 items-center">
      <div className="relative md:w-1/2 w-full">
        {!isImageLoaded && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gray-300 animate-pulse rounded-lg"
            initial={{ opacity: 1 }}
            animate={{ opacity: isImageLoaded ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
        <img
          src="/assets/mePerso.jpg"
          alt="Moi"
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <h2 className="text-3xl font-bold w-full text-center my-10 md:my-0">Ce que j'aime c'est...</h2>
      <ActivitySection title="...me fondre dans la nature" images={hikingImages} isMobile={isMobile} />
      <ActivitySection title="...m'accrocher aux rochers de Fontainebleau 🤔" images={climbingImages} isMobile={isMobile} />
      <ActivitySection title="...découvrir 🎒" images={travelImages} isMobile={isMobile} />
    </div>
  );
}

export function ActivitySection({ title, images, isMobile }) {
  return (
    <motion.div
      className="relative w-full md:h-screen h-auto gap-4 md:block flex flex-col items-center mb-10 md:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className={`${isMobile ? "block" : "absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"} text-center text-2xl text-black font-semibold z-50 bg-white/[.9] rounded-xl p-4 text-wrap text-lg`}>
        {title}
      </p>
      {images.map((activity, index) => (
        <ActivityImage 
          key={index} 
          src={activity.src} 
          location={activity.location}
          top={activity.top}
          left={activity.left}
          isMobile={isMobile}
        />
      ))}
    </motion.div>
  );
}

export function ActivityImage({ src, location, top, left, isMobile }) {
  return (
    <motion.div
      className="relative md:absolute md:w-[250px] w-[250px] h-[200px] aspect-square mb-4"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.1, zIndex: 999 }}
      style={isMobile ? { position: "relative", top: "auto", left: "auto" } : { top, left }}
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