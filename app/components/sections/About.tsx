'use client';
import { experience, techStack, summary } from "@/app/constants";
import Image from "next/image";
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "@/app/redux/store";
import { motion } from "framer-motion";
import { setDialog } from "@/app/redux/features/dialogslice";
import { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';

const About = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const [isDark, setIsDark] = useState<boolean>();
  const dialog = useSelector((state: RootState) => state.dialog.name);
  const dispatch: AppDispatch = useDispatch();

  const handleHover = (title: string) => {
    dispatch(setDialog(title));
  }

  useEffect(() => {
    if(dark) {
      setIsDark(true);
    }
    else {
      setIsDark(false);
    }
  }, [dark]);

  return (
    <section id="about">
      <Element name="about" className="mx-4 max-w-6xl xl:mx-auto h-full py-10 xl:py-20">
        <article>
          <h1 className="underline underline-offset-[15px] text-3xl sm:text-4xl xl:text-5xl font-semibold">About me</h1>
          <div className="grid grid-cols-1 xl:grid-cols-2 mt-10 mb-5 xl:my-10 gap-5">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src={"/assets/about.jpg"}
                alt={"Image"}
                height={700}
                width={700}
                className="rounded-xl w-auto h-auto mx-auto"
                priority
              />
            </motion.div>
            <motion.p 
              className="text-sm sm:text-base text-justify xl:text-lg font-medium"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              I earned my Bachelor of Science in Information Technology (BSIT) degree 
              from Eastern Visayas State University Main Campus - Tacloban City, Leyte. 
              As a full-stack web developer, I have knowledge and experience in HTML, 
              CSS, JavaScript, TypeScript, Tailwind, JavaScript frameworks such as 
              React, Next.js, MVC pattern using Laravel, and databases like MySQL, and MongoDB. I 
              specialize in creating responsive websites that prioritize 
              user experience and functionality, crafting dynamic interfaces 
              through clean and optimized code and employing modern development techniques. 
              A collaborative team player, thriving in group settings, contributing to the 
              delivery of exceptional web applications. In my ongoing journey as a developer, 
              I remain dedicated to further honing my skills through hard work and passion for my craft.
            </motion.p>
          </div>
        </article>
        <h2 className="text-center xl:pt-10 py-5 font-bold text-3xl xl:text-4xl">Skills</h2>
        <div className="h-full max-w-4xl mx-auto pb-10">
          <div className="grid grid-cols-3 xl:grid-cols-10 gap-3 place-items-center">
            {techStack.map((tech, index) => (
              <motion.figure 
                key={index} 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 50, damping: 10, delay: index * 0.08 }}
                onMouseEnter={() => handleHover(tech.alt)} 
                onMouseLeave={() => handleHover('')} 
                className="xl:cursor-pointer flex flex-col xl:flex-row items-center justify-center relative w-fit h-fit"
              >
                {tech.icon} 
                {tech.alt === dialog &&
                  <motion.figcaption 
                    animate={{opacity: [0, 1]}}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="border bg-white rounded-xl h-fit w-fit p-3 hidden xl:block absolute z-20 -bottom-12 text-xs text-black drop-shadow-md"
                  >
                    {dialog}
                  </motion.figcaption>
                }
                <figcaption className="block mt-2 xl:hidden">{tech.alt}</figcaption> 
              </motion.figure>
            ))}
          </div>
        </div>
        <h2 className="text-center py-10 font-bold text-3xl xl:text-4xl">Work Experience</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <VerticalTimeline animate={false} lineColor={isDark ? "white" : "#172554"} className="">
            {experience.map((exp, index) => (
              <VerticalTimelineElement
                className="w-full"
                contentStyle={{ background: isDark ? "white" : "#172554" , color: isDark ? "white" : "#1e293b" }}
                contentArrowStyle={{ borderRight: isDark ? "7px solid white" : "7px solid #172554" }}
                key={index}
                date={exp.date}
                dateClassName="text-4xl"
                iconStyle={{boxShadow: "none"}}
                icon={
                  <div className={`relative h-full w-full flex items-center justify-center ${exp.active ? `bg-yellow-400` : `bg-yellow-100`} border-4 dark:border-white border-[#172554] rounded-full`}>
                    {exp.active && (
                      <>
                        <motion.div
                          className="absolute w-10 h-10 xl:w-12 xl:h-12 bg-yellow-400 rounded-full"
                          initial={{ scale: 0, opacity: 1 }}
                          animate={{ scale: [0, 1.5], opacity: [1, 0] }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }}
                        />
                        <motion.div
                          className="absolute w-10 h-10 xl:w-12 xl:h-12 bg-yellow-400 rounded-full"
                          style={{
                            boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.5)'
                          }}
                          initial={{ scale: 0, opacity: 1 }}
                          animate={{ scale: [0, 2], opacity: [1, 0] }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: 0.5, // stagger the pulse
                          }}
                        />
                      </>
                    )}
                  </div>                
                }
              >
                <div className="grid grid-cols-10 gap-3 dark:text-blue-950 text-white">
                  <div className="flex flex-col col-span-7">
                    <span className="block xl:hidden">{exp.date}</span>
                    <h3 className="font-bold text-xl">{exp.name}</h3>
                    <h4 className="font-semibold">{exp.title}</h4>
                    <h5 className="text-sm">{exp.address}</h5>
                  </div>
                  <div className="flex items-start xl:items-center justify-end col-span-3">
                    <Image 
                      src={exp.logo} 
                      alt={exp.name} 
                      width={100}
                      height={100}
                      className="rounded-xl h-20 xl:h-full w-auto"
                    />
                  </div>
                </div>
                <p className="dark:text-blue-950 text-white">
                  {exp.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
        
        <h2 className="text-center xl:pt-10 py-5 font-bold text-3xl xl:text-4xl">Certifications</h2>
        <div className="overflow-hidden flex items-center justify-center">

        </div>
      </Element>
    </section>
  )
}

export default About;
