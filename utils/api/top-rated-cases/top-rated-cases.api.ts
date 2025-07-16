import { BaseQueryApiParamsProps, BaseResponseApiProps } from "@/types/Api.types";
import { buildQueryString } from "@/utils/buildQueryString/buildQueryString";

interface CaseItemsData { }

export interface TopRatedCasesItemResponse extends BaseResponseApiProps {
  data: CaseItemsData[];
}

type TopRatedQueryParams = Pick<BaseQueryApiParamsProps, 'limit' | 'offset'>


export const getTopRatedCasesItem = async (
  query?: TopRatedQueryParams
): Promise<TopRatedCasesItemResponse | undefined> => {
  try {
    const queryString = buildQueryString(query);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/top-rated-cases${queryString}`,
      {
        method: "GET",
        next: {
          revalidate: 10,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed fetch to top-rated-cases`);
    }

    const topRelatedCases = await res.json();
    return topRelatedCases;
  } catch (error) {
    console.log(error);
  }
};
