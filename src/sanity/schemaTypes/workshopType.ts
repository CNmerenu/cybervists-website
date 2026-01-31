import {ImagesIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const workshopType = defineType({
  name: 'workshop',
  title: 'Workshop',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'participants',
      type: 'string',
      title: 'Participants',
      description: 'Number or description of participants (e.g., "47" or "Community members")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partners',
      type: 'string',
      title: 'Partners',
      description: 'Supporting organizations and partners',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'previewImages',
      type: 'array',
      title: 'Preview Images',
      description: 'Images shown in gallery preview (2 recommended)',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
        })
      ],
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Gallery Images',
      description: 'All images for the workshop gallery',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
              validation: (Rule) => Rule.required(),
            })
          ]
        })
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      location: 'location',
      media: 'previewImages.0',
    },
    prepare(selection) {
      const {title, location} = selection
      return {
        ...selection,
        subtitle: location,
      }
    },
  },
})
