export {
  getAllWorkshops,
  getWorkshopBySlug,
  getWorkshopPreview,
} from "@/src/sanity/lib/fetch";

export interface WorkshopImage {
  url: string;
  alt: string;
  caption: string;
}

export interface Workshop {
  _id: string;
  title: string;
  location: string;
  participants: string;
  partners: string;
  description: string;
  slug: {
    current: string;
  };
  previewImages?: string[];
  totalImages?: number;
  images: WorkshopImage[];
}
