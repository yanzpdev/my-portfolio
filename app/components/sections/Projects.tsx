'use client';
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Element } from 'react-scroll';
import Card from "../ui/Card";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section id='projects'>
      <Element name="projects" className="mx-4 max-w-6xl xl:mx-auto h-full py-20">
        <h1 className="underline underline-offset-[15px] text-3xl xl:text-5xl font-semibold">Projects</h1>
        {projects.map((project, index) => (
          <Card className="max-w-5xl bg-white border drop-shadow-xl rounded-xl my-10 mx-auto py-10 px-5 xl:px-10 flex flex-col" key={index}>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image 
                    className={`col-span-12 xl:col-span-7 h-auto w-auto rounded-xl my-auto`}
                    src={image.src}
                    alt={project.name}
                    width={2000}
                    height={2000}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <figcaption className={`col-span-12 xl:col-span-5 flex flex-col text-justify justify-between text-blue-950`}>
              <>
                <div className="flex gap-5 items-center justify-between">
                  <h2 className="text-2xl pt-5 xl:pt-0 font-semibold">{project.name}</h2>
                  <span className={`${project.sourcecode === '' ? 'bg-red-400 line-through decoration-2' : 'bg-green-400'} w-fit py-1 px-3 rounded-xl text-white text-xs font-semibold`}>
                    open-source
                  </span>
                </div>
                <p className="pb-3 mt-2 xl:pb-0">{project.description}</p>
                <div className={`justify-start flex flex-wrap gap-3 py-3 text-xs`}>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`p-2 border drop-shadow-md rounded-xl w-fit h-fit bg-white text-slate-900`}
                      style={{boxShadow: '#0f172a 5px 5px'}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </>
              <div className={`flex gap-4 mt-4`}>
                {project.actions.map((action, index) =>
                  <Link 
                    key={index}
                    target="_blank"
                    href={action === 'Link' || 'Demo' ? project.demo : project.sourcecode} 
                    className="rounded-xl w-28 h-12 bg-slate-900 hover:bg-slate-700 duration-300 px-2 py-3 text-center text-white font-semibold"
                  >
                    {action}
                  </Link>
                )}
              </div>
            </figcaption>
          </Card>
        ))}
        <figure className="max-w-5xl mx-auto flex gap-3 xl:gap-1 items-center justify-center">
          <Image 
            src={'/assets/blocks.svg'}
            alt={'Under Construction'}
            width={100}
            height={100}
            className="h-28 xl:h-44 w-auto"
          />
          <figcaption className="xl:text-xl font-medium flex items-center justify-center">
            More projects are underway!
            <span className="text-6xl">👷‍♂️</span>
          </figcaption>
        </figure>
      </Element>
    </motion.section>
  )
}

export default Projects;
