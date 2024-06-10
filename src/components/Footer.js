import Link from 'next/link';
import React from 'react';
import Layout from './Layout'; // Assuming Layout component is used

const Footer = () => {
  return (
    <footer className='w-full border bg-dark text-light flex items-center justify-between py-4 px-8 dark:text-light dark:border-light'>
      <span className='text-footer text-sm'>
        {new Date().getFullYear()} &copy; All Rights Reserved
      </span>
      <div className='flex items-center '>
        <span className='text-primary text-2xl px-1'>&#9825;</span> Built with Next.js by AyazMemon&nbsp;
        
      </div>
    </footer>
  );
};

export default Footer;
