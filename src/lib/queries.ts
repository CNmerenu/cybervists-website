import groq from "groq";

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    }
  }
`;

export const singlePostQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    body,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    }
  }
`;
