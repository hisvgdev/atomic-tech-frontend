import type { BaseQueryApiParamsProps, BaseResponseApiProps } from "@/types/Api.types";
import { buildQueryString } from "@/utils/buildQueryString/buildQueryString";

interface ReviewsResponse extends BaseResponseApiProps {
  data: ReviewsDataProps[]
}

export interface ReviewsDataProps {
  id: number
  name: string;
  company: string;
  rating: number;
  review_text: string;
  created_at: string;
  updated_at: string;
}

export const getReviews = async (query?: BaseQueryApiParamsProps): Promise<ReviewsResponse | undefined> => {
  try {
    const queryString = buildQueryString(query);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/reviews${queryString}`, {
      method: "GET",
      cache: 'no-cache',
      next: {
        revalidate: 10,
      }
    });

    if (!res.ok) {
      throw new Error("Failed fetch to reviews blogs");
    }

    const reviewsData = await res.json();

    return reviewsData;

  } catch (error) {
    console.log(error);
  }
}