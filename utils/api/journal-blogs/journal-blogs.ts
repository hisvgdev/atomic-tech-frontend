import type { BaseQueryApiParamsProps, BaseResponseApiProps } from "@/types/Api.types";
import { buildQueryString } from "@/utils/buildQueryString/buildQueryString";

interface JournalBlogsResponse extends BaseResponseApiProps {
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
  average_rating: number
  ratings_count: number;
  views: number;
  category: {
    id: number;
    name: string;
  }
}

export const getJournalBlogs = async (query?: BaseQueryApiParamsProps): Promise<JournalBlogsResponse | undefined> => {
  try {
    const queryString = buildQueryString(query);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/journal-blogs${queryString}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error("Failed fetch to journal blogs");
    }
    const journalBlogs = await res.json();
    return journalBlogs;
  } catch (error) {
    console.log(error);
  }
}