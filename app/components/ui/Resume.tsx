'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import { MdFileDownload } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

type ResumeProps = {
  handleButtonPress: () => void;
}

const Resume:React.FC<ResumeProps> = ({handleButtonPress}) => {
  const downloadPdf = () => {
    const anchor = document.createElement('a');
    anchor.href = '../assets/Resume.pdf';
    anchor.download = 'Arris Ian Peralta.pdf'; 
  
    return anchor.click();
  }
  
  return (
    <motion.div 
      className="fixed w-full overflow-y-scroll flex items-center pb-10 pt-16 justify-center top-0 h-screen z-50 bg-black"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      // onClick={handleButtonPress}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <button
        onClick={handleButtonPress}
        className='fixed w-40 text-center top-5 right-10 hover:bg-slate-300 duration-300 bg-white px-3 py-1 rounded-xl text-slate-800'
      >
        Close
        <FaWindowClose className='absolute top-2 right-4'/>
      </button>
      <button
        className='fixed w-40 z-50 text-center top-16 right-10 hover:bg-slate-300 duration-300 bg-white px-3 py-1 rounded-xl text-slate-800'
        onClick={downloadPdf}
      >
        Download
        <MdFileDownload className='absolute top-2 right-4'/>
      </button>
      DISPLAY PDF HERE
    </motion.div>
  )
}

export default Resume