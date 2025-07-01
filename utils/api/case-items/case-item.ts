'use server';

import { BaseResponseApiProps } from "@/types/Api.types";

interface CaseItemResponse extends BaseResponseApiProps {
  data: any[]
}

export const getCaseItem = async (id: number): Promise<CaseItemResponse | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/case-items/${id}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed fetch to case-items with id ${id}`);
    }
    const caseItem = await res.json();
    return caseItem;
  } catch (error) {
    console.log(error);
  }
}