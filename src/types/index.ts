import type { PortableTextBlock } from "@portabletext/types";

export interface Author {
  name: string;
  image?: {
    asset: {
      url: string;
    };
  };
}

export interface Image {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
}

export interface ContentImage {
  asset: {
    url: string;
  };
  alt: string;
  caption?: string;
}

export interface Reference {
  title: string;
  url?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  publishedAt: string;
  body: PortableTextBlock[];
  mainImage?: Image;
  author?: Author;
  author2?: Author;
  author3?: Author;
  references?: Reference[];
}
