import { client } from "./client";
import {
  allPostsQuery,
  postBySlugQuery,
  featuredPostsQuery,
  allWorkshopsQuery,
  workshopBySlugQuery,
  workshopPreviewQuery,
} from "./queries";
import { Post } from "@/src/types";

// Blog Post Fetch Functions
export async function getAllPosts(): Promise<Post[]> {
  try {
    return await client.fetch(allPostsQuery);
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    return await client.fetch(postBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

export async function getFeaturedPosts(limit: number = 3): Promise<Post[]> {
  try {
    return await client.fetch(featuredPostsQuery, { limit });
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
}

// Workshop Fetch Functions
export async function getAllWorkshops() {
  try {
    return await client.fetch(allWorkshopsQuery);
  } catch (error) {
    console.error("Error fetching all workshops:", error);
    return [];
  }
}

export async function getWorkshopBySlug(slug: string) {
  try {
    return await client.fetch(workshopBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching workshop by slug:", error);
    return null;
  }
}

export async function getWorkshopPreview() {
  try {
    return await client.fetch(workshopPreviewQuery);
  } catch (error) {
    console.error("Error fetching workshop preview:", error);
    return [];
  }
}
