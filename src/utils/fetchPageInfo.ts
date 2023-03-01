import { PageInfo, Project, Skill, Social } from '@src/@types/typings'
import { api } from '@src/lib/axios'

interface Data {
  pageInfo: PageInfo
  projects: Project[]
  skills: Skill[]
  socials: Social[]
}

export async function fetchPageInfo() {
  const res = await api.get('page-info')
  const { pageInfo, projects, skills, socials }: Data = res.data
  return { pageInfo, projects, skills, socials }
}
