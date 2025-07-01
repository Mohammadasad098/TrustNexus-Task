import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 0px rgba(236, 72, 153, 0.4)",
            "0 0 40px rgba(168, 85, 247, 0.6)",
            "0 0 0px rgba(236, 72, 153, 0.4)",
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ borderRadius: "50%" }}
      >
        <motion.img
  src="/images/logo.png"
  alt="Logo"
  className="h-32 aspect-square object-contain"
  animate={{
    rotate: [0, 360],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  }}
/>

      </motion.div>

      <p className="mt-6 text-xl font-semibold text-pink-500 animate-pulse">
        Dev Connect
      </p>
    </div>
  );
};

export default Loader;