import type { BaseQueryApiParamsProps, BaseResponseApiProps } from "@/types/Api.types";
import { buildQueryString } from "@/utils/buildQueryString/buildQueryString";
import { CaseItemsData } from "../case-items/case-items";

interface BlogsResponse extends BaseResponseApiProps {
  data: BlogsDataProps[]
}

export interface BlogsDataProps {
  id: number
  title: string
  description: string
  content: string
  image: string;
  views: number;
  average_rating: number;
  ratings_count: number;
  case_items: CaseItemsData[]
  created_at: string
  updated_at: string
  related_blogs: {
    id: number;
    title: string;
  }[]
  category: {
    id: number;
    name: string;
  }
}

export const getBlogs = async (query?: BaseQueryApiParamsProps): Promise<BlogsResponse | undefined> => {
  try {
    const queryString = buildQueryString(query);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs${queryString}`, {
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