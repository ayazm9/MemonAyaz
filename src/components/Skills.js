import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-lg cursor-pointer absolute border-2 border-dark dark:bg-yellow-600 dark:text-dark dark:border-dark'
      whileHover={{
        scale: 1.1,
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#f0f0f0",
        color: "#333"
      }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{ x: x, y: y, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center dark:text-light'>
        Skills
      </h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-lg cursor-pointer border-2 border-dark dark:bg-yellow-600 dark:text-dark dark:border-dark'
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#f0f0f0",
            color: "#333"
          }}
        >
          Web
        </motion.div>

        <Skill name="CSS" x="-5vw" y="-10vw" />
<Skill name="HTML" x="-20vw" y="2vw" />
<Skill name="Javascript" x="20vw" y="6vw" />
<Skill name="React" x="0vw" y="12vw" />
<Skill name="Python" x="-20vw" y="-15vw" />
<Skill name="Java" x="15vw" y="-12vw" />
<Skill name="Git" x="32vw" y="-5vw" />
<Skill name="Web Development" x="0vw" y="-20vw" />
<Skill name="Software Development" x="-25vw" y="18vw" />
<Skill name="Problem Solving" x="18vw" y="18vw" />
<Skill name="Tailwind CSS" x="-32vw" y="5vw" />

      </div>
    </>
  );
};

export default Skills;
