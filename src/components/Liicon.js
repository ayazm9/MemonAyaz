import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const Liicon = ({ reference }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"]
  });

  // Calculate the pathLength based on scroll position
  const pathLength = scrollYProgress< 500 ? Math.min(scrollY / 500, 1) : 0; // Adjust the threshold and divisor for the desired animation

  return (
    <figure className='relative  stroke-dark'>
      <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
        {/* Square outline with thicker stroke */}
        <rect x="55" y="35" width="40" height="40" className='stroke-purple-600 stroke-2 fill-none dark:stroke-yellow-600'/>
        {/* Background square */}
        <motion.rect
          x="55" y="35" width="40" height="40"
          className='stroke-[5px] fill-light'
          style={{ pathLength: scrollYProgress }}
        />
        {/* Filled square */}
        <rect x="60" y="40" width="30" height="30" className='animate-pulse stroke-1 fill-purple-600 dark:fill-yellow-600'/>
      </svg>
    </figure>
  );
};

export default Liicon;
