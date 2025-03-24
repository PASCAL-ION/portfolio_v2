import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home({ setBackground }) {
  const exitTransition = { duration: 0.3, ease: "linear" };
  const exitTransitionFrame = { duration: 0.3, ease: "linear" };

  const frameProps = {
    animate: {
      rotate: "10deg",
      opacity: 1,
      translateX: "-100%",
      translateY: "-100%",
    },
    exit: {
      rotate: "0deg",
      opacity: 0,
      translateX: "-100%",
      translateY: "-100%",
    },
    transition: exitTransitionFrame,
  };

  return (
    <div className="flex items-start flex-col gap-8 w-full">
      {/* === ION LINK === */}
      <div
        className="md:ml-[15%] ml-[15px] group link-style"
        onMouseEnter={() => setBackground("bg-imgPro")}
        onMouseLeave={() => setBackground("bg-stone-900")}
      >
        <motion.p className="link-style peer"
          exit={{ opacity: 0 }}
          transition={exitTransition}
        >
          <Link to="/aboutperso">
            ION
          </Link>
        </motion.p>

        <div
          className="
            absolute top-1/2 left-1/2 w-[230px] h-[230px] 
            -translate-x-full -translate-y-full
            transition-all duration-300
            bg-center bg-no-repeat bg-cover opacity-0
            peer-hover:bg-imgPerso peer-hover:z-10 peer-hover:opacity-100
          "
        />

        <motion.div
          className="
            hidden 
            absolute top-1/2 left-1/2 w-[230px] h-[230px] 
            -translate-x-full -translate-y-full rotate-[10deg]
            border border-white 
            peer-hover:block
          "
          {...frameProps}
        />
      </div>

      {/* === PASCAL LINK === */}
      <div
        className="md:ml-[30%] ml-[15px] group link-style"
        onMouseEnter={() => setBackground("bg-imgPerso")}
        onMouseLeave={() => setBackground("bg-stone-900")}
      >
        <motion.p className="link-style peer"
          exit={{ opacity: 0 }}
          transition={exitTransition}
        >
          <Link to="/aboutpro">
            PASCAL
          </Link>
        </motion.p>

        <div
          className="
            absolute top-1/2 left-1/2 w-[230px] h-[230px] 
            -translate-x-full -translate-y-full
            transition-all duration-300
            bg-center bg-no-repeat bg-cover opacity-0
            peer-hover:bg-imgPro peer-hover:z-10 peer-hover:opacity-100
          "
        />

        <motion.div
          className="
            hidden 
            absolute top-1/2 left-1/2 w-[230px] h-[230px] 
            -translate-x-full -translate-y-full rotate-[10deg]
            border border-white 
            peer-hover:block
          "
          {...frameProps}
        />
      </div>
    </div>
  );
}