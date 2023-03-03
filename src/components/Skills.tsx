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
    amount: 0.5,
    once: true,
  })

  return (
    <div
      ref={ref}
      className="h-full flex flex-col text-center mx-auto  max-w-7xl xl:px-10 xl:space-y-0 "
    >
      <h3 className="pageTitle">Skills</h3>
      <h3 className="uppercase tracking-[3px] p-10 text-gray400 text-sm">
        Here is a list of all my current skills
      </h3>

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
        className=" grid grid-cols-4 gap-5 xl:gap-6 xl:pt-20"
      >
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </div>
  )
}
