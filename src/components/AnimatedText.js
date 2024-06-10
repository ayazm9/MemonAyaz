import React from 'react';
import { motion } from 'framer-motion';

const container = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05, // Adjust the delay between each letter
    },
  },
};

const letter = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className={`inline-block font-bold dark:text-light ${className}`}> {/* Add font-bold class */}
      <motion.span variants={container} initial="initial" animate="animate">
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={letter}>{char}</motion.span>
        ))}
      </motion.span>
    </div>
  );
};

export default AnimatedText;
