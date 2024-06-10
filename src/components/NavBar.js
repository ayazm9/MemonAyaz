import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/navigation';
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  MoonIcon,
  SunIcon,
} from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
          h-[2px] inline-block bg-black 
          absolute left-0 right-0 bottom-0.1
          group-hover:w-full transition-[width] ease duration-200
          ${router.asPath === href ? 'w-full' : 'w-0'}
          dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <button className="flex-col justify-center items-center lg:flex md:block hidden" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm transform ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm transform ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mr-4" />
          <CustomLink href="/articles" title="Blog" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/your_twitter_username"
            target={'_blank'}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/your_github_username"
            target={'_blank'}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/your_linkedin_profile/"
            target={'_blank'}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.pinterest.com/your_pinterest_profile/"
            target={'_blank'}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://dribbble.com/your_dribbble_username"
            target={'_blank'}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <DribbbleIcon />
          </motion.a>
          <button 
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 
              ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "light" ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
          </button>
        </nav>
      </div>
      <div className="absolute top-0 transform -translate-y-2 left-[50%] -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
