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

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  publishedAt: string;
  body?: unknown[];
  mainImage?: Image;
  author?: Author;
}
