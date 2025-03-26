import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home({setBackground}) {
  return (
    <div className="flex flex-col items-start justify-center gap-8 w-full flex-1">
      <div
        className="md:ml-[15%] ml-[15px] group link-style"
        onMouseEnter={() => setBackground("bg-imgPerso bg-center bg-center")}
        onMouseLeave={() => setBackground("bg-stone-900")}
      >
        <motion.p className="link-style peer"
          exit={{ opacity: 0}}
        >
          <Link to="/aboutperso">
            ION
          </Link>
        </motion.p>
      </div>

      <div
        className="md:ml-[30%] ml-[15px] group link-style"
        onMouseEnter={() => setBackground("bg-imgPro bg-center bg-center")}
        onMouseLeave={() => setBackground("bg-stone-900")}
      >
        <motion.p className="link-style peer"
          exit={{ opacity: 0 }}
        >
          <Link to="/aboutpro">
            PASCAL
          </Link>
        </motion.p>
      </div>
    </div>
  );
}