import React from "react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 text-white bg-stone-900 relative">
      <div className="absolute left-6 top-1/4 hidden md:block">
        <div className="w-2 h-40 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-white rounded-full mt-4 animate-bounce"></div>
      </div>
      
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-12 md:mr-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contactez-moi
      </motion.h1>
      <motion.form 
        className="w-full max-w-2xl flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input 
          type="text" 
          placeholder="Votre nom" 
          className="w-full text-2xl p-2 border-b border-white focus:outline-none focus:border-gray-400 transition-all bg-transparent"
        />
        <input 
          type="email" 
          placeholder="Votre email" 
          className="w-full text-2xl p-2 border-b border-white focus:outline-none focus:border-gray-400 transition-all bg-transparent"
        />
        <textarea 
          placeholder="Votre message" 
          className="w-full text-2xl p-2 border-b border-white focus:outline-none focus:border-gray-400 transition-all bg-transparent"
          rows="5"
        ></textarea>
        <motion.button 
          type="submit" 
          className="text-2xl font-semibold px-6 py-3 border border-white hover:bg-white hover:text-stone-900 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Envoyer
        </motion.button>
      </motion.form>
    </div>
  );
}