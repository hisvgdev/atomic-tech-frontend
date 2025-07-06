'use server';

import { BaseResponseApiProps } from "@/types/Api.types";

interface RelatedCaseItemResponse extends BaseResponseApiProps {
  data: any[]
}

export const getRelatedCaseItem = async (id: number): Promise<RelatedCaseItemResponse | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/case-items/${id}/related`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed fetch to related case-items with id ${id}`);
    }
    const relatedCaseItem = await res.json();
    return relatedCaseItem;
  } catch (error) {
    console.log(error);
  }
}