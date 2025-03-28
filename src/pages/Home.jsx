import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home({ setBackground }) {
  return (
    <div className="flex flex-col items-start justify-center gap-8 w-full flex-1">
      <div
        className="md:ml-[15%] ml-[15px] group link-style"
        onMouseEnter={() => setBackground("bg-imgPerso bg-cover hover:zoom-out bg-no-repeat")}
        onMouseLeave={() => setBackground("bg-stone-900")}
      >
        <motion.p
          className="link-style peer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }} 
          transition={{ duration: 0.5, ease: "linear" }} 
        >
          <Link to="/aboutperso">ION</Link>
        </motion.p>
      </div>

      <div
        className="md:ml-[30%] ml-[15px] group link-style"
        onMouseEnter={() => setBackground("bg-imgPro bg-center bg-center")}
        onMouseLeave={() => setBackground("bg-stone-900")}
      >
        <motion.p
          className="link-style peer"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}  
          exit={{ opacity: 0, x: 50 }}  
          transition={{ duration: 0.3, ease: "easeOut" }}  
        >
          <Link to="/aboutpro">PASCAL</Link>
        </motion.p>
      </div>
    </div>
  );
}
