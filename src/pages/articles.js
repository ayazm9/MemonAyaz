import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import project1 from "../../public/images/projects/crypto-Screener-cover-image.jpg";

// Define transition
const transition = {
  type: 'spring',
  stiffness: 260,
  damping: 20
};

// Variants for animation
const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

// Mock function to determine dark mode
const useDarkMode = () => {
  // Replace this logic with your actual theme hook or context
  return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// FeaturedArticle component
const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <motion.li
      className='rounded-lg border border-dark overflow-hidden shadow-md dark:border-light'
      whileHover={{ scale: 1.05 }}
      transition={transition}
    >
      <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg mb-4 block'>
        <Image src={img} alt={title} className="w-full h-auto rounded-lg" />
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 dark:text-light">{title}</h3>
        <p className="text-gray-600 dark:text-light">{summary}</p>
        <p className="text-sm text-gray-400 mt-2 dark:text-light">{time}</p>
      </div>
    </motion.li>
  );
}

// RecommendedArticle component
const RecommendedArticle = ({ title, time, summary, link }) => {
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const darkMode = useDarkMode();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <motion.li 
      className={`rounded-lg border border-dark p-4 mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between overflow-hidden relative dark:border-light ${darkMode ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" : "bg-white"}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <h3 className="text-lg font-semibold dark:text-light">{title}</h3>
        <p className="text-dark dark:text-light">{summary}</p>
        <p className="text-sm text-gray-400 mt-2 dark:text-light">{time}</p>
      </div>
      {isHovering && (
        <div className="w-20 h-20 bg-gray-200 sm:ml-4 flex items-center justify-center mt-4 sm:mt-0">
          <Image src={project1} alt={title} className="w-full h-full rounded-lg" />
        </div>
      )}
    </motion.li>
  );
}

const Articles = () => {
  return (
    <>
      <Head>
        <title>Ayaz | Articles</title>
        <meta
          name="description"
          content="A web developer and UI/UX designer passionate about crafting beautiful, functional, and user-centered digital experiences."
        />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
          <div>
            <AnimatedText text="Words Can Change The World!" className="text-8xl text-center mb-16 dark:text-light" />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Featured articles */}
              <FeaturedArticle
                img={project1}
                title="Article 1 Title"
                time="5 min read"
                summary="Summary of article 1..."
                link="/article1"
              />
              <FeaturedArticle
                img={project1}
                title="Article 2 Title"
                time="7 min read"
                summary="Summary of article 2..."
                link="/article2"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-light mt-10">Recommended Articles</h2>
            <div className="flex flex-col">
              {/* Recommended articles */}
              <RecommendedArticle
                title="Recommended Article 1 Title"
                time="3 min read"
                summary="Summary of recommended article 1..."
                link="/recommended-article1"
              />
              <RecommendedArticle
                title="Recommended Article 2 Title"
                time="4 min read"
                summary="Summary of recommended article 2..."
                link="/recommended-article2"
              />
              <RecommendedArticle
                title="Recommended Article 3 Title"
                time="5 min read"
                summary="Summary of recommended article 3..."
                link="/recommended-article3"
              />
              <RecommendedArticle
                title="Recommended Article 4 Title"
                time="6 min read"
                summary="Summary of recommended article 4..."
                link="/recommended-article4"
              />
              <RecommendedArticle
                title="Recommended Article 5 Title"
                time="7 min read"
                summary="Summary of recommended article 5..."
                link="/recommended-article5"
              />
              <RecommendedArticle
                title="Recommended Article 6 Title"
                time="8 min read"
                summary="Summary of recommended article 6..."
                link="/recommended-article6"
              />
              <RecommendedArticle
                title="Recommended Article 7 Title"
                time="9 min read"
                summary="Summary of recommended article 7..."
                link="/recommended-article7"
              />
              <RecommendedArticle
                title="Recommended Article 8 Title"
                time="10 min read"
                summary="Summary of recommended article 8..."
                link="/recommended-article8"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Articles;

