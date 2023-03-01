import { PageInfo, Project, Skill, Social } from '@src/@types/typings'
import About from '@src/components/About'
import ContactMe from '@src/components/ContactMe'
import Header from '@src/components/Header'
import Hero from '@src/components/Hero'
import Projects from '@src/components/Projects'
import Skills from '@src/components/Skills'
import { fetchPageInfo } from '@src/utils/fetchPageInfo'
import { GetStaticProps } from 'next'
import Head from 'next/head'

type Props = {
  pageInfo: PageInfo
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

export default function Home({ pageInfo, projects, skills, socials }: Props) {
  return (
    <div
      className="scroll-smooth bg-blue900 h-screen w-screen text-gray100 
    font-Roboto overflow-x-hidden snap-y snap-mandatory overflow-y-scroll z-0
    scrollbar-thin scrollbar-track-gray400/20 scrollbar-thumb-blue400/60 "
    >
      <Head>
        <title>Portfólio</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start ">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-start ">
        <About pageInfo={pageInfo} />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { pageInfo, projects, skills, socials }: Props = await fetchPageInfo()

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
