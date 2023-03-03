import { Project as _Project } from '@src/@types/typings'
import { urlFor } from '@src/lib/sanity'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

type Props = {
  project: _Project
  index: number
  total: number
}

export default function Project({ project, index, total }: Props) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    amount: 0.5,
    once: true,
  })

  return (
    <div
      ref={ref}
      className="w-full h-full snap-center  flex flex-col flex-shrink-0 
      items-center justify-start gap-10 md:flex-row"
      key={project._id}
    >
      <div className="flex items-center justify-center">
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
          className="overflow-hidden relative w-60 h-36 rounded-lg
           md:w-[400px] md:h-[225px] lg:w-[560px] lg:h-[360px] "
        >
          <Image
            className="object-cover"
            src={urlFor(project.image).url()}
            fill
            sizes="(max-width: 768px) 15rem,
              (max-width: 1200px) 400px,
              560px"
            alt=""
          />
        </motion.a>
      </div>

      <div className="flex flex-col gap-10 px-0 text-center md:text-left ">
        <h4 className="capitalize text-2xl  md:text-4xl font-semibold  text-white">
          <span className=" text-blue400">
            Project {index + 1} of {total}:
          </span>{' '}
          {project.title}
        </h4>
        <div
          className="flex w-full items-center justify-center flex-wrap gap-5
          md:justify-start"
        >
          {project.technologies.map((technology) => (
            <div
              className="relative h-7 w-7 md:h-10 md:w-10"
              key={technology._id}
            >
              <Image
                className="object-contain"
                src={urlFor(technology.image).url()}
                fill
                sizes="(max-width: 768px) 1.75rem,
                (max-width: 1200px) 2.5rem"
                alt=""
              />
            </div>
          ))}
        </div>

        <p className="text-lg lg:text-left">{project.summary}</p>
      </div>
    </div>
  )
}
