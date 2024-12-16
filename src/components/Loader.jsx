import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="z-1000 fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center">
      <motion.div
        className="w-16 h-16 bg-white/20 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          backgroundColor: [
            'rgba(255,255,255,0.2)', 
            'rgba(255,255,255,0.4)', 
            'rgba(255,255,255,0.2)'
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="absolute inset-0 border-4 border-white/30 rounded-full opacity-75"
          animate={{
            scale: [1, 1.5, 1],
            rotate: 360
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;