import { BaseQueryApiParamsProps, BaseResponseApiProps } from "@/types/Api.types";
import { buildQueryString } from "@/utils/buildQueryString/buildQueryString";

interface TechnologiesResponse extends BaseResponseApiProps {
  data: TechnologiesDataProps[]
}

export interface TechnologiesDataProps {
  created_at: string;
  id: number;
  image: string | null;
  name: string;
  updated_at: string;
}

type TechnologiesQueryParams = Pick<BaseQueryApiParamsProps, 'limit' | 'offset'>

export const getTechnologies = async (query?: TechnologiesQueryParams): Promise<TechnologiesResponse | undefined> => {
  try {
    const queryString = buildQueryString(query);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/technologies${queryString}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed fetch to technologies`);
    }
    const getTechnologies = await res.json();
    return getTechnologies;
  } catch (error) {
    console.log(error);
  }
}