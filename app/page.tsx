'use client';
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ProgressBar from "./components/ui/ProgressBar";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Image from "next/image";
import { IoDocumentText } from "react-icons/io5";
import { HiOutlineDocumentMinus } from "react-icons/hi2";
import Resume from './components/ui/Resume';
import Services from "./components/sections/Services";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [isLoading]);


  const handleButtonPress = () => {
    setIsToggled(!isToggled);
  }


  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        {/* <Image 
          src="/assets/loading2.gif"
          alt="Loading"
          width={100}
          height={100}
        /> */}
      </div>
    );
  }
  
  return (
    <>
      <Header />
      <motion.main className="bg-white relative text-slate-800 dark:bg-slate-900 dark:text-white duration-300 h-full">
        {isToggled &&
          <Resume handleButtonPress={handleButtonPress} />
        }
        {/* <button 
          className={`h-5 flex flex-col z-10 items-center justify-center fixed top-80 hover:left-0 ${isToggled ? 'left-0' : '-left-20'} duration-300 border-r border-red-500 bg-red-500 px-3 py-8 rounded-r-xl text-white`}
          onClick={handleButtonPress}
        >
          <div className="flex gap-1">
            <span>Resume</span>
            <span><HiOutlineDocumentMinus className="text-white" size={24}/></span>
          </div>
        </button> */}
        <Hero />
        <About />
        <Services />
        <Projects />
        <ProgressBar />
        <Contact />
      </motion.main>
      <Footer />
    </>
  );
}

export default Home;