'use server';

import { BaseResponseApiProps } from "@/types/Api.types";
import { BlogsDataProps } from "./blogs";

export interface BlogResponse extends BaseResponseApiProps {
  data: BlogsDataProps
}

export const getBlog = async (id: string): Promise<BlogResponse | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${id}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed fetch to blog with id ${id}`);
    }
    const blog = await res.json();
    return blog;
  } catch (error) {
    console.log(error);
  }
}