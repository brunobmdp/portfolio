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
    amount: 0.5,
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
      className="h-full flex flex-col gap-5 text-center max-w-7xl"
    >
      <h3 className="pageTitle">About</h3>
      <div
        className="flex flex-col h-full justify-center items-center 
        gap-5 md:text-left md:flex-row "
      >
        <div>
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
            className="relative overflow-hidden h-56 w-56 rounded-full mx-auto
            md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          >
            <Image
              className="object-cover"
              src={urlFor(pageInfo.profilePic).url()}
              fill
              sizes="(max-width: 768px) 14rem,
              (max-width: 1200px) 16rem,
              500px"
              alt=""
            />
          </motion.div>
        </div>

        <div className="flex flex-col justify-between gap-5 ">
          <h4 className="text-3xl font-semibold md:text-4xl text-white">
            Something <span className="text-blue400">about me</span>
          </h4>
          <p className="text-base text-justify indent-4">
            {pageInfo.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
