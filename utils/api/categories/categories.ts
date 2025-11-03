import { BaseQueryApiParamsProps, BaseResponseApiProps } from "@/types/Api.types";
import { buildQueryString } from "@/utils/buildQueryString/buildQueryString";

interface CategoriesResponse extends BaseResponseApiProps {
  data: CategoriesDataProps[]
}

export interface CategoriesDataProps {
  id: number
  name: string
  description: string | null;
  created_at: string
  updated_at: string
}

// type CategoriesQueryParams = Pick<BaseQueryApiParamsProps, 'limit' | 'offset' | 'name' | 'sort_by' | 'sort_direction'>

export const getCategories = async (query?: BaseQueryApiParamsProps): Promise<CategoriesResponse | undefined> => {
  try {
    const queryString = buildQueryString(query);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories${queryString}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed fetch to categories`);
    }
    const getCategories = await res.json();
    return getCategories;
  } catch (error) {
    console.log(error);
  }
}