import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export function Home({ setBackground }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div className="flex flex-col items-start justify-center gap-8 w-full flex-1 transition-all duration-500">
      <div
        className="md:ml-[20%] ml-[15px] group link-style md:mb-5"
        onMouseEnter={() => {
          setBackground("bg-imgPerso bg-hover bg-hover-animated");
          setHovered(true);
        }}
        onMouseLeave={() => {
          setBackground("bg-[#0C0C0C]");
          setHovered(false);
        }}
      >
        <motion.p
          className="link-style peer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4, ease: "linear" }}
        >
          <Link to="/aboutperso">ION</Link>
        </motion.p>
      </div>

      <div
        className="md:ml-[35%] ml-[15px] group link-style"
        onMouseEnter={() => {
          setBackground("bg-imgPro bg-hover bg-hover-animated");
          setHovered(true);
        }}
        onMouseLeave={() => {
          setBackground("bg-[#0C0C0C]");
          setHovered(false);
        }}
      >
        <motion.p
          className="link-style peer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4, ease: "linear" }}
        >
          <Link to="/aboutpro">PASCAL</Link>
        </motion.p>
      </div>
    </motion.div>
  );
}
