'use client';
import { socials } from "@/app/constants";
import { RootState } from "@/app/redux/store";
import { motion } from "framer-motion";
import RLink from "next/link";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';

const Services = () => {
  
  return (
    <section id='services'>
      <Element name='services' className="mx-4 max-w-6xl xl:mx-auto h-full py-10 xl:py-20">
      <article>
        <h1 className="underline w-full underline-offset-[15px] text-3xl sm:text-4xl xl:text-5xl font-semibold">Services Offered</h1>
      </article>        
      </Element>
    </section>
  )
}

export default Services;