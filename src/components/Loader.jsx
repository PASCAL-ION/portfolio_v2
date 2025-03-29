import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.img
          src="/assets/logo.png"
          alt="logo"
          className="h-[50px] absolute"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: 360,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

