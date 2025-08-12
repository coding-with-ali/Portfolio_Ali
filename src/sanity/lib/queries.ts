// lib/queries.ts
export const projectsQuery = `*[_type == "project"] | order(publishedAt desc){
    _slug,
    title,
    description,
    "imageUrl": coverImage.asset->url,
    liveUrl,
    repoUrl
  }`
  