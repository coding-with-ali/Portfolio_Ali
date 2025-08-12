import { client } from './client'
import { Project } from '../../../types/project'

export async function fetchProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(publishedAt desc){
    _slug,
    title,
    slug,
    description,
    "imageUrl": coverImage.asset->url,
    liveUrl,
    repoUrl,
    techStack,
    publishedAt
  }`
  return client.fetch<Project[]>(query)
}
