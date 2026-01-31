import { groq } from 'next-sanity'

// Blog Post Queries
export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "author": author->{name, image},
    mainImage{
      asset->{_id, url},
      alt
    }
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    body,
    content,
    "author": author->{name, image},
    mainImage{
      asset->{_id, url},
      alt
    },
    contentImages[]{
      asset->{url},
      alt,
      caption
    },
    references[]{
      title,
      url
    }
  }
`

export const featuredPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "author": author->{name, image},
    mainImage{
      asset->{_id, url},
      alt
    }
  }
`

// Workshop Queries
export const allWorkshopsQuery = groq`
  *[_type == "workshop"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    location,
    participants,
    partners,
    "previewImages": previewImages[].asset->url,
    "totalImages": count(images)
  }
`

export const workshopBySlugQuery = groq`
  *[_type == "workshop" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    location,
    participants,
    partners,
    "images": images[]{
      "url": asset->url,
      alt,
      caption
    }
  }
`

export const workshopPreviewQuery = groq`
  *[_type == "workshop"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    location,
    participants,
    partners,
    "previewImages": previewImages[].asset->url,
    "totalImages": count(images)
  }
`
