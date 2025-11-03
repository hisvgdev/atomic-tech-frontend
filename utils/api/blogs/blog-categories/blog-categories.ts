import { BaseQueryApiParamsProps, BaseResponseApiProps } from "@/types/Api.types";
import { buildQueryString } from "@/utils/buildQueryString/buildQueryString";

interface BlogCategoriesResponse extends BaseResponseApiProps {
  data: BlogCategoriesDataProps[]
}

export interface BlogCategoriesDataProps {
  id: number
  name: string
  created_at: string
  updated_at: string
}


export const getBlogCategories = async (query?: BaseQueryApiParamsProps): Promise<BlogCategoriesResponse | undefined> => {
  try {
    const queryString = buildQueryString(query);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog-categories${queryString}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed fetch to blog-categories`);
    }
    const getCategories = await res.json();
    return getCategories;
  } catch (error) {
    console.log(error);
  }
}