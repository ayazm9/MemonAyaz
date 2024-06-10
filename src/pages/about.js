import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText'; // Assuming AnimatedText is a custom component
import Layout from '@/components/Layout';
import profilePic from '../../public/images/profile/Ayaz.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref} className="number-shadow"></span>;
};

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Logic to set dark mode based on some condition, like user preference or system settings
    // For simplicity, I'll just set it to true here
    setDarkMode(true);
  }, []);

  return (
    <>
      <Head>
        <title>Ayaz | About</title>
        <meta
          name="description"
          content="A web developer and UI/UX designer passionate about crafting beautiful, functional, and user-centered digital experiences."
        />
      </Head>

      <main className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'dark' : ''}`}>
        <Layout className="pt-16 px-4 md:px-16 lg:px-32">
          <AnimatedText text="Passion Fuels Purpose!" className={`text-8xl text-center mb-16 ${darkMode ? 'text-light' : 'text-dark'}`} />
          
          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            {/* Biography Section */}
            <div className={`w-full lg:w-1/2 px-4 ${darkMode ? 'bg-dark' : 'bg-light'} text-${darkMode ? 'light' : 'dark'} mb-8 lg:mb-0`}>
              <div className="border rounded-lg p-6">
                <h2 className="mb-4 text-lg font-bold uppercase">Biography</h2>
                <p className="font-medium">
                  Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field, I am always looking for new and innovative ways to bring my clients' visions to life.
                </p>
                <p className="my-6 font-medium">
                  I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
                </p>
                <p className="font-medium">
                  Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 p-4 flex justify-center mb-8 lg:mb-0">
              <div className="relative w-full max-w-sm lg:max-w-none h-max rounded-2xl border-2 border-solid border-dark bg-light  p-8 dark:bg-dark dark:border-light">
                <div className="absolute top-0 right-0 w-[calc(100%+2rem)] h-[calc(100%+2rem)] rounded-2xl bg-dark" style={{ transform: 'translate(1rem, 1rem)', zIndex: -1 }}></div>
                <Image src={profilePic} alt="Ayaz" className="rounded-2xl" width={500} height={500} />
              </div>
            </div>
          </div>

          {/* Numbers Section */}
{/* Numbers Section */}
<div className="w-full flex justify-center items-center my-8">
  <div className="w-full md:w-1/3 flex items-center justify-center">
    <div className={`bg-dark rounded-lg p-6 flex items-center justify-center flex-col ${darkMode ? 'text-light' : 'text-dark'}`}>
      <span className="text-7xl font-bold number-shadow mb-2"><AnimatedNumbers value={50} /></span>
      <h2 className="text-xl font-bold capitalize">Satisfied Clients</h2>
    </div>
  </div>
  <div className="w-full md:w-1/3 flex items-center justify-center">
    <div className={`bg-dark rounded-lg p-6 flex items-center justify-center flex-col ${darkMode ? 'text-light' : 'text-dark'}`}>
      <span className="text-7xl font-bold number-shadow mb-2"><AnimatedNumbers value={40} /></span>
      <h2 className="text-xl font-bold capitalize">Projects</h2>
    </div>
  </div>
  <div className="w-full md:w-1/3 flex items-center justify-center">
    <div className={`bg-dark rounded-lg p-6 flex items-center justify-center flex-col ${darkMode ? 'text-light' : 'text-dark'}`}>
      <span className="text-7xl font-bold number-shadow mb-2"><AnimatedNumbers value={2} /></span>
      <h2 className="text-xl font-bold capitalize">Years of Experience</h2>
    </div>
  </div>
</div>


          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
