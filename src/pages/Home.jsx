import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home({ setBackground }) {
  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.6, ease: "linear" },
  };

  return (
    <motion.div className="flex flex-col items-start justify-center gap-8 w-full md:flex-1 md:mt-0 mt-20 transition-all duration-500">
      <div
        className="md:ml-[20%] ml-[15px] group link-style md:mb-5"
        onMouseEnter={() => {
          setBackground("bg-imgPerso bg-hover bg-hover-animated");
        }}
        onMouseLeave={() => {
          setBackground("bg-[#0C0C0C]");
        }}
      >
        <motion.p
          className="link-style peer"
          initial={textAnimation.initial}
          animate={textAnimation.animate}
          exit={textAnimation.exit}
          transition={textAnimation.transition}
        >
          <Link to="/aboutperso">ION</Link>
          <span className="text-base !font-light block tracking-[5px] italic">
            Derrière le developpeur.
          </span>
        </motion.p>
      </div>

      <div
        className="md:ml-[35%] ml-[15px] group link-style"
        onMouseEnter={() => {
          setBackground("bg-imgPro bg-hover bg-hover-animated bg-imgPro-high");
        }}
        onMouseLeave={() => {
          setBackground("bg-[#0C0C0C]");
        }}
      >
        <motion.p
          className="link-style peer"
          initial={textAnimation.initial}
          animate={textAnimation.animate}
          exit={textAnimation.exit}
          transition={textAnimation.transition}
        >
          <Link to="/aboutpro">PASCAL</Link>
          <span className="text-base !font-light block tracking-[5px] italic">
            Mon parcours.
          </span>
        </motion.p>
      </div>
    </motion.div>
  );
}