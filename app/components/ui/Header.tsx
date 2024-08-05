"use client";
import React, { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';
import DarkModeButton from '../DarkModeButton';
import { motion } from 'framer-motion';
import { TbMenuDeep } from "react-icons/tb";
import Rlink from 'next/link';

const Header = () => {
  // const [activeLink, setActiveLink] = useState('home');

  // const handleSetActive = (link: any) => {
  //   setActiveLink(link);
  //   console.log(link);
  // };

  // console.log(activeLink);

  return (
    <header className="w-full sticky top-0 border-b drop-shadow-lg dark:drop-shadow-none bg-white text-slate-900 dark:bg-slate-900 dark:text-white duration-300 z-40">
      <motion.div 
        className="w-full mx-auto flex xl:grid grid-cols-12 justify-between"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <Rlink 
          href={'/'}
          className="xl:col-span-3 p-5 my-auto flex items-center gap-3"
        >
          <FaCode className="h-10 xl:h-[64px] w-auto" />
          <h3 className="text-xl xl:text-5xl font-bold pointer-events-none select-none">AI.P</h3>
        </Rlink>
        <span className="xl:col-span-6 hidden items-center xl:flex gap-10 justify-center text-xl">
          {['home', 'about', 'services', 'projects', 'contact'].map((link) => (
            <Link
              key={link}
              to={link}
              className={`cursor-pointer hover:underline underline-offset-8`}
              smooth={true}
              duration={300}
              offset={link === 'home' ? -110 : -60}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
        </span>
        <DarkModeButton />
        {/* <button className='xl:hidden'>
          <TbMenuDeep size={40} className='absolute top-5 right-0'/>
        </button> */}
      </motion.div>
    </header>
  );
};

export default Header;
