import React from 'react'

import Image from 'next/image'
import { Skill as _Skill } from '@src/@types/typings'
import { urlFor } from '@src/lib/sanity'

type Props = {
  skill: _Skill
}

export default function Skill({ skill }: Props) {
  return (
    <div className="group relative flex items-center justify-center cursor-pointer">
      <div
        className="relative rounded-full border border-gray500 overflow-hidden 
        h-16 w-16 md:h-28 md:w-28 xl:w-32 xl:h-32 filter 
        group-hover:grayscale bg-white"
      >
        <Image
          className="object-cover"
          src={urlFor(skill.image).url()}
          alt={skill.title}
          sizes="(max-width: 768px) 4rem,
          (max-width: 1280px) 7rem,
          8rem"
          fill
        />
      </div>
      <div
        className=" absolute opacity-0 group-hover:opacity-80 
      transition duration-300 ease-in-out group-hover:bg-gray100 
      h-16 w-16  md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0"
      >
        <div className=" flex items-center justify-center h-full">
          <p className=" text-2xl sm:text-3xl  font-bold text-blue900 opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  )
}
