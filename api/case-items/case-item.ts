'use server';

type CaseItemResponse = {
  success: boolean;
  data: any
} | undefined

export const getCaseItem = async (id: number): Promise<CaseItemResponse> => {
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
    const getCaseItem = await res.json();
    return getCaseItem;
  } catch (error) {
    console.log(error);
  }
}