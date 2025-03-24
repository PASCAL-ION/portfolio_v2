import { Layout } from "../components/Layout";
import { motion } from "framer-motion";

export function AboutPro() {
  return (
    <Layout>
      <motion.div
        className="
          absolute md:top-1/2 md:left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-imgPro bg-center bg-no-repeat bg-cover
          w-[230px] h-[230px]
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
          height: "30vh",
          translateX: "-100%",
          translateY: "-100%",
          top: "30%",
          left: "64%",
        }}
        transition={{duration: 0.8, ease: "easeOut"}}
      />
    </Layout>
  );
}
