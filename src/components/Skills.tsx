import React, { useRef } from 'react'
import Skill from './Skill'
import { motion, useInView } from 'framer-motion'
import { Skill as _Skills } from '@src/@types/typings'

type Props = {
  skills: _Skills[]
}

export default function Skills({ skills }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: 'all',
    once: true,
  })

  return (
    <div
      ref={ref}
      className="h-screen flex relative flex-col text-center 
    md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen 
    justify-center xl:space-y-0 mx-auto items-center"
    >
      <div className="absolute top-24 ">
        <h3 className="uppercase tracking-[20px] text-gray100 text-2xl text-center">
          Skills
        </h3>
        <h3 className=" mt-12 uppercase tracking-[3px] text-gray400 text-sm">
          Here is a list of all my current skills
        </h3>
      </div>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : -200,
        }}
        className=" grid  grid-cols-4 gap-5 xl:gap-6 xl:pt-20"
      >
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </div>
  )
}
