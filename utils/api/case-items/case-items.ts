'use server';

import { BaseResponseApiProps } from "@/types/Api.types";

interface CaseItemsResponse extends BaseResponseApiProps {
  data: any[]
}

export const getCaseItems = async (): Promise<CaseItemsResponse | undefined> => {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/case-items`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });

    if (!res.ok) {
      throw new Error(`Failed fetch to case-items`);
    }

    const getCaseItems = await res.json();
    return getCaseItems;

  } catch (error) {
    console.log(error);
  }
}