import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Project } from '@src/@types/typings'
import { urlFor } from '@src/lib/sanity'

type Props = {
  projects: Project[]
}

export default function Projects({ projects }: Props) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    amount: 'all',
    once: true,
  })
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left 
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3
        className=" absolute top-24 uppercase tracking-[20px] text-gray100 
        text-2xl"
      >
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
        snap-mandatory z-20  scrollbar-thin scrollbar-track-gray400/20
        scrollbar-thumb-blue400/60"
      >
        {projects.map((project, index) => (
          <div
            ref={ref}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-20 h-screen md:grid md:grid-cols-2 md:gap-12   "
            key={project._id}
          >
            <motion.a
              href={project.linkToBuild}
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : -300,
              }}
              className="overflow-hidden relative mt-10 h-80 w-80
               rounded-lg md:mt-0 md:w-[360px] md:h-[360px] xl:w-[500px] xl:h-[500px] "
            >
              <Image
                className="object-cover"
                src={urlFor(project.image).url()}
                fill
                alt=""
              />
            </motion.a>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="capitalize text-2xl  md:text-4xl font-semibold text-center text-white">
                <span className=" text-blue400">
                  Project {index + 1} of {projects.length}:
                </span>{' '}
                {project.title}
              </h4>
              <div className="flex w-full items-center justify-center flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <div
                    className="relative h-7 w-7 sm:h-10 sm:w-10"
                    key={technology._id}
                  >
                    <Image
                      className="object-contain"
                      src={urlFor(technology.image).url()}
                      alt=""
                      fill
                    />
                  </div>
                ))}
              </div>

              <p className="text-center text-lg md:text-justify">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-blue400/10 left-0 h-[400px] 
        -skew-y-12"
      ></div>
    </motion.div>
  )
}
