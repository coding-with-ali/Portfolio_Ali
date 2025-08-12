import { Rule } from 'sanity'

const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      description: 'Full domain like https://branded-leather.vercel.app',
      validation: (Rule: Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }).error('Please enter a valid http or https URL.'),
    },
    {
      name: 'repoUrl',
      title: 'Repository URL',
      type: 'url',
      validation: (Rule: Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      subtitle: 'liveUrl',
    },
  },
}

export default project
