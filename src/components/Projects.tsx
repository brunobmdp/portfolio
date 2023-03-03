import React from 'react'
import { motion } from 'framer-motion'
import { Project as _Project } from '@src/@types/typings'
import Project from './Project'

type Props = {
  projects: _Project[]
}

export default function Projects({ projects }: Props) {
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
      className="h-full w-full flex flex-col max-w-7xl "
    >
      <h3 className="pageTitle">Projects</h3>
      <div
        className="flex flex-row h-full py-10 overflow-x-scroll overflow-y-hidden snap-x 
        snap-mandatory z-20  scrollbar-thin scrollbar-track-gray400/20
        scrollbar-thumb-blue400/60"
      >
        {projects.map((project, index) => (
          <Project
            key={project._id}
            index={index}
            project={project}
            total={projects.length}
          />
        ))}
      </div>
      <div
        className="w-full h-[400px] absolute top-[30%] bg-blue400/10 left-0  
        -skew-y-12 "
      />
    </motion.div>
  )
}
