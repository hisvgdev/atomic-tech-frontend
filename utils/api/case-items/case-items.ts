import { BaseQueryApiParamsProps, BaseResponseApiProps } from "@/types/Api.types";
import { buildQueryString } from "@/utils/buildQueryString/buildQueryString";

interface CaseItemsResponse extends BaseResponseApiProps {
  data: CaseItemsData[]
}

export interface CaseItemsData {
  id: number
  title: string
  description: string
  year: number
  website_link: string
  project_history: string
  categories: string[]
  subcategories: string[]
  technologies: TechnologyData[]
  services: any[]
  destinations: DestinationData[]
  photos: string[]
  created_at: string
  updated_at: string
}


export interface TechnologyData {
  name: string;
  image: string;
}

export interface DestinationData {
  name: string
  description: string
}


export const getCaseItems = async (query?: BaseQueryApiParamsProps): Promise<CaseItemsResponse | undefined> => {
  try {
    const queryString = buildQueryString(query);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/case-items${queryString}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });

    if (!res.ok) {
      throw new Error(`Failed fetch to case-items`);
    }

    const data = await res.json();

    return data;

  } catch (error) {
    console.log(error);
  }
}