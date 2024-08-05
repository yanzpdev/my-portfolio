'use client';
import { socials } from "@/app/constants";
import { RootState } from "@/app/redux/store";
import { motion } from "framer-motion";
import RLink from "next/link";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';

const Hero = () => {
  const progress = useSelector((state: RootState) => state.scroll.progress);
  
  return (
    <section id='hero'>
      <Element name='home' className="mx-4 max-w-6xl xl:mx-auto h-full py-10 xl:py-20 grid grid-cols-12">
        <motion.div 
          className="col-span-12 order-2 my-auto text-center lg:text-start lg:order-1 lg:col-span-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="pointer-events-none text-3xl sm:text-4xl xl:text-4xl">Howdy! I am 
            <div className="py-3 font-black dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 bg-gradient-to-r from-slate-900 to-slate-600 text-transparent bg-clip-text text-[42px] sm:text-6xl xl:text-7xl pl-[2px] leading-snug">
              Arris Ian Peralta 
            </div>
            and I am a Full-stack Developer.
          </h1>
          <div className="flex gap-5 items-center justify-center lg:justify-start py-8 xl:pt-20 xl:pb-10">
            <span className="flex gap-5">
              {
                socials.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 10, delay: 0.8 + index * 0.08 }}
                  >
                    <RLink href={social.link} target="_blank">
                      {social.icon}
                    </RLink>
                  </motion.div>                
                ))
              }
            </span>
          </div>
        </motion.div>

        <motion.div 
          className="blob col-span-12 order-1 lg:order-2 lg:col-span-4 border-4 dark:border-white border-slate-300 priority"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <Link
          to='about'
          className={`cursor-pointer col-span-12 order-3`}
          smooth={true}
          duration={300}
          offset={-60}
        >
          <motion.div className="col-span-12 order-3 flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: progress > 5 ? 0 : 1, y: progress > 5 ? -20 : 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0 }}
          >
            More
            <motion.span
              className="mx-1"
              animate={{y: [-2.5, 2, -2.5] }}
              transition={{ duration: 0.8, ease: 'easeInOut', repeat: Infinity}}
            >
              <BsFillCaretDownFill size={30}/>
            </motion.span> 
          </motion.div>
        </Link>
      </Element>
    </section>
  )
}

export default Hero;