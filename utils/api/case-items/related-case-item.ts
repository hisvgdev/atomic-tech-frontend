import { BaseResponseApiProps } from "@/types/Api.types";
import { CaseItemsData } from "./case-items";

export interface RelatedCaseItemResponse extends BaseResponseApiProps {
  data: CaseItemsData[]
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