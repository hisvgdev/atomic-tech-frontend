import { BaseQueryApiParamsProps, BaseResponseApiProps } from "@/types/Api.types";
import { buildQueryString } from "@/utils/buildQueryString/buildQueryString";

interface TaxonomiesResponse {
  data: TaxonomiesDataProps[]
}

export interface TaxonomiesDataProps {
  id: number
  title: string;
  slug: string;
  type_id: string;
  parent_id: string;
  description: string;
  path: string[];
  children_count: number;
  created_at: string;
  updated_at: string;
}

export const getTaxonomies = async (slug: string): Promise<TaxonomiesResponse | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/taxonomies/${slug}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error("Failed fetch to taxonomies");
    }
    const getTaxonomies = await res.json();
    return getTaxonomies;
  } catch (error) {
    console.log(error);
    throw error;
  }
}