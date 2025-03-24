import { Layout } from "../components/Layout";
import { motion } from "framer-motion";

export function AboutPerso() {
  return (
    <Layout>
      <motion.div
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-imgPerso bg-center bg-no-repeat bg-cover
          w-[230px] h-[230px]  // Utilisation de 50% de la largeur et de la hauteur de l'écran
        "
        initial={{
          width: "230px",
          height: "230px", 
          translateX: "-100%",
          translateY: "-100%",
          top: "50%",
          left: "50%"
        }}
        animate={{
          width: "63%", 
          height: "50vh",
          translateX: "-100%",
          translateY: "-100%",
          top: "50%",
          left: "64%",
        }}
        transition={{duration: 0.8, ease: "easeOut"}}
      />
    </Layout>
  );
}
