'use server';

import type { BaseResponseApiProps } from "@/types/Api.types";

interface BlogsResponse extends BaseResponseApiProps {
  data: BlogsDataProps[]
}

export interface BlogsDataProps {
  id: number
  title: string
  description: string
  content: string
  image: string;
  case_items: string[]
  created_at: string
  updated_at: string
}

export const getBlogs = async (): Promise<BlogsResponse | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error("Failed fetch to blogs");
    }
    const blogs = await res.json();
    return blogs;
  } catch (error) {
    console.log(error);
  }
}