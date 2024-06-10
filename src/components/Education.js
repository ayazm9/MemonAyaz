import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Liicon from './Liicon'; // Import Liicon from the correct path

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-4 first:mt-0 last:mb-0 w-[60% ]rounded-lg relative mx-auto flex items-start">
      <Liicon reference={ref}/> {/* Pass the reference to Liicon component */}
      <div className="ml-8">
        <h3 className="text-2xl font-bold dark:text-light">
          {type}&nbsp;
          
        </h3>
        <span className="block text-sm italic text-gray-500 dark:text-light">
          {time} | {place}
        </span>
        <p className="mt-2 text-lg dark:text-light">
          {info}
        </p>
      </div>
    </li>
  );
};

const Education = () => { // Renamed from Experience to Education
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light">
        Education
      </h2>
      <div className="w-full flex justify-center">
        <div ref={ref} className="w-[75%] relative"> {/* Remove the ref attribute here */}
          <motion.div
            className="absolute left-14 top-0 bottom-0 w-[4px] bg-purple-600 origin-top dark:bg-yellow-600"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>
          <ul className="pl-4">
            <Details
              type="Bachelor Of Science In Computer Science"
              
              
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence.
"
            />
            <br></br>
            <br></br>
            
            <Details
              type="Bachelor Of Science In Computer Science"
              
              
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence.
"
            />
            <br></br>
            <br></br>
            <Details
              type="Bachelor Of Science In Computer Science"
              
              
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence.
"
            />
            <br></br>
            <br></br>

            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education; // Updated export statement to export Education component
