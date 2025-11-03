import { BaseQueryApiParamsProps, BaseResponseApiProps } from "@/types/Api.types";
import { buildQueryString } from "@/utils/buildQueryString/buildQueryString";

interface TaxonomyTypesResponse {
  data: TaxonomyTypesDataProps[]
}

export interface TaxonomyTypesDataProps {
  id: number
  title: string;
  slug: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export const getTaxonomyTypes = async (query?: BaseQueryApiParamsProps): Promise<TaxonomyTypesResponse | undefined> => {
  const buildQuery = buildQueryString(query);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/taxonomy-types${buildQuery}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error("Failed fetch to taxonomy types");
    }
    const getTaxonomyTypes = await res.json();
    return getTaxonomyTypes;
  } catch (error) {
    console.log(error);
    throw error;
  }
}