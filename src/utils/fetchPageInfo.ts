import { PageInfo, Project, Skill, Social } from '@src/@types/typings'

interface Data {
  pageInfo: PageInfo
  projects: Project[]
  skills: Skill[]
  socials: Social[]
}

export async function fetchPageInfo() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/page-info`)
  const { pageInfo, projects, skills, socials }: Data = await res.json()
  return { pageInfo, projects, skills, socials }
}
