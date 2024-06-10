// Import statements
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { GithubIcon } from '@/components/Icons';
import project1 from "../../public/images/projects/crypto-Screener-cover-image.jpg";
import { motion } from 'framer-motion';

// Define project data
const projects = [
  {
    type: "Featured Project",
    title: "Crypto Screener Application",
    summary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router, and Recharts. It shows details regarding almost all the cryptocurrencies. You can easily convert the price to your local currency.",
    img: project1,
    link: "/",
    github: "/"
  },
  {
    type: "Project 1",
    title: "Project 1 Title",
    summary: "Description of project 1...",
    img: project1,
    link: "/project1",
    github: "/project1"
  },
  {
    type: "Project 2",
    title: "Project 2 Title",
    summary: "Description of project 2...",
    img: project1,
    link: "/project2",
    github: "/project2"
  },
  {
    type: "Project 3",
    title: "Your Project 3 Title",
    summary: "Your Project 3 Description...",
    img: project1,
    link: "/project3",
    github: "/project3"
  },
  {
    type: "Project 4",
    title: "Your Project 4 Title",
    summary: "Your Project 4 Description...",
    img: project1,
    link: "/project4",
    github: "/project4"
  },
  {
    type: "Project 5",
    title: "Your Project 5 Title",
    summary: "Your Project 5 Description...",
    img: project1,
    link: "/project5",
    github: "/project5"
  },
  {
    type: "Project 6",
    title: "Your Project 6 Title",
    summary: "Your Project 6 Description...",
    img: project1,
    link: "/project6",
    github: "/project6"
  }
];

const transition = {
  type: 'spring',
  stiffness: 260,
  damping: 20
};

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article
      className='w-full flex flex-col md:flex-row items-center justify-between rounded-3xl border-t-8 border-r-8 border-b-8 border-dark shadow-2xl p-8 mb-16 transition-all duration-300 dark:border-light'
      whileHover={{ scale: 1.05 }}
      transition={transition}
    >
      <Link href={link} target="_blank" className='w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <motion.div whileHover={{ scale: 1.05 }} transition={transition}>
          <Image src={img} alt={title} className="w-full h-auto rounded-lg" />
        </motion.div>
      </Link>
      <div className='w-full md:w-1/2 flex flex-col items-start justify-between pl-0 md:pl-10 mt-6 md:mt-0 text-dark dark:text-light'>
        <span className='text-lg font-semibold'>{type}</span>
        <Link href={link} target="_blank">
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
        </Link>
        <p className='mb-4'>{summary}</p>
        <div className='flex items-center'>
          <Link href={github} target="_blank" className='w-8 mr-4'>
            <GithubIcon className='w-full h-full' />
          </Link>
          <Link href={link} target="_blank" className='relative text-lg font-semibold underline '>
            Visit Project
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article
      className='w-full flex flex-col items-center justify-between rounded-2xl border-r-8 border-dark shadow-xl p-6 mb-8 transition-all duration-300 dark:border-light'
      whileHover={{ scale: 1.05 }}
      transition={transition}
    >
      <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg mb-4'>
        <motion.div whileHover={{ scale: 1.05 }} transition={transition}>
          <Image src={img} alt={title} className="w-full h-auto rounded-lg" />
        </motion.div>
      </Link>
      <div className='w-full flex flex-col items-start justify-between text-dark dark:text-light'>
        <span className='text-lg font-semibold'>{type}</span>
        <Link href={link} target="_blank">
          <h2 className='my-2 w-full text-left text-2xl font-bold dark:text-lignt'>{title}</h2>
        </Link>
        <p className='mb-4'>{summary}</p>
        <div className='flex items-center'>
          <Link href={github} target="_blank" className='w-6 mr-4'>
            <GithubIcon className='w-full h-full' />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>Ayaz | Projects</title>
        <meta
          name="description"
          content="A web developer and UI/UX designer passionate about crafting beautiful, functional, and user-centered digital experiences."
        />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16 flex flex-col justify-center items-center'>
          <AnimatedText text="Imagination Trumps Knowledge!" className="text-8xl text-center mb-16" />

          <div className='w-full max-w-6xl grid grid-cols-12 gap-8'>
            <div className='col-span-12'>
              <FeaturedProjects
                type={projects[0].type}
                title={projects[0].title}
                summary={projects[0].summary}
                img={projects[0].img}
                link={projects[0].link}
                github={projects[0].github}
              />
            </div>
            {projects.slice(1, 4).map((project, index) => (
              <div className='col-span-12 sm:col-span-6' key={index}>
                <Project
                  type={project.type}
                  title={project.title}
                  summary={project.summary}
                  img={project.img}
                  link={project.link}
                  github={project.github}
                />
              </div>
            ))}
            <div className='col-span-12'>
              <FeaturedProjects
                type={projects[4].type}
                title={projects[4].title}
                summary={projects[4].summary}
                img={projects[4].img}
                link={projects[4].link}
                github={projects[4].github}
              />
            </div>
            {projects.slice(5).map((project, index) => (
                <div className='col-span-12 sm:col-span-6' key={index}>
                  <Project
                    type={project.type}
                    title={project.title}
                    summary={project.summary}
                    img={project.img}
                    link={project.link}
                    github={project.github}
                  />
                </div>
              ))}
            </div>
          </Layout>
        </main>
      </>
    );
}

export default Projects;

