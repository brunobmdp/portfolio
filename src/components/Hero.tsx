import { PageInfo } from '@src/@types/typings'
import { urlFor } from '@src/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  const firstName = String(pageInfo.name.split(' ', 1))
  const [text] = useTypewriter({
    words: [
      'Oi',
      `Eu sou o ${firstName}`,
      'Lets code!',
      '<NeverStopLearning/>',
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="flex flex-col items-center justify-center gap-8  text-center max-w-7xl">
      <BackgroundCircles />
      <Image
        priority
        className="object-cover relative rounded-full h-32 w-32 "
        src={urlFor(pageInfo.heroImage).url()}
        width={128}
        height={128}
        alt=""
      />
      <div className="flex flex-col z-20">
        <h2 className="text-sm uppercase text-gray400 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <div className="flex justify-center items-center w-full overflow-hidden">
          <h1 className="text-3xl lg:text-6xl font-semibold ">
            <span className="text-white">{text}</span>
            <Cursor cursorColor="#2C66C3" />
          </h1>
        </div>

        <div className="flex w-full">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
