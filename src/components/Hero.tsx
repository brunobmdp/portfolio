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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full h-32 w-32 overflow-hidden ">
        <Image
          className="object-cover"
          src={urlFor(pageInfo.heroImage).url()}
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
          fill
          priority
          alt=""
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray400 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10">
          <span className="text-white">{text}</span>
          <Cursor cursorColor="#2C66C3" />
        </h1>
        <div>
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
