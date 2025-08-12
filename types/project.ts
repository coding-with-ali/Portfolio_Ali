export interface Project {
    _id: string
    _slug: string
    title: string
    slug?: { current: string }
    description?: string
    imageUrl?: string
    liveUrl?: string
    repoUrl?: string
    techStack?: string[]
    publishedAt?: string
  }