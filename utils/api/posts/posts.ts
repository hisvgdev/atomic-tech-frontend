import { BaseQueryApiParamsProps, BaseResponseApiProps } from "@/types/Api.types";
import { buildQueryString } from "@/utils/buildQueryString/buildQueryString";

interface PostsResponse {
  data: PostsDataProps[]
}

export interface PostsDataProps {
  id: string
  title: string
  slug: string
  type_id: string
  author_id: string
  status: string
  published_at: string
  updated_at: string
  cover: Cover
  excerpt: string
  reading_time_min: number
  taxonomies: string[]
  blocks: Block[]
}

export interface Cover {
  url: string
  width: number
  height: number
  alt: string
}

export interface Block {
  id: string
  post_id: string
  type: string
  order: number
  content: Content
  created_at: string
  updated_at: string
}

export interface Content { }

export const getPosts = async (query?: BaseQueryApiParamsProps): Promise<PostsResponse | undefined> => {
  const buildQuery = buildQueryString(query);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts${buildQuery}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error("Failed fetch to posts");
    }
    const getPosts = await res.json();
    return getPosts;
  } catch (error) {
    console.log(error);
    throw error;
  }
}