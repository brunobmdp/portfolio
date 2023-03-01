import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '@src/lib/sanity'
import { PageInfo } from '@src/@types/typings'

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: 'some',
    once: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray100 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        animate={{
          x: isInView ? 0 : -200,
          opacity: isInView ? 1 : 0,
        }}
        transition={{
          duration: 1,
        }}
        className="relative overflow-hidden -mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full 
        md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      >
        <Image
          priority
          className="object-cover"
          src={urlFor(pageInfo.profilePic).url()}
          fill
          alt=""
        />
      </motion.div>
      <div className=" space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold md:text-4xl text-white">
          Something <span className="text-blue400">about me</span>
        </h4>
        <p className="text-base text-justify indent-16">
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.div>
  )
}
