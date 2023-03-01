import { groq } from 'next-sanity'
import { sanityClient } from '@src/lib/sanity'
import { NextApiRequest, NextApiResponse } from 'next'
import { PageInfo, Project, Skill, Social } from '@src/@types/typings'

const query = groq`
{
  'pageInfo':*[_type=='pageInfo'][0],
  'socials':*[_type=='social'],
  'projects':*[_type=='project']{
    ...,
    technologies[]->
  },
  'skills':*[_type=='skill']
  
}
`

interface Data {
  pageInfo: PageInfo
  projects: Project[]
  skills: Skill[]
  socials: Social[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { pageInfo, projects, skills, socials }: Data =
    await sanityClient.fetch(query)

  return res.status(200).json({ pageInfo, projects, skills, socials })
}
