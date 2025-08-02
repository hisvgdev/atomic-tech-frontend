'use server';

import { CreateReviewInput } from "@/components/dashboard/molecules/CustomSolutions/CustomSolutionsHeader/CustomSolutionsHeader";

export const addingReviews = async (
  data: CreateReviewInput
): Promise<{ message: string; success: boolean }> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/reviews`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await res.json()

    if (!res.ok) {
      throw new Error(result.message)
    }

    return result
  } catch (error) {
    console.error(error)
    throw error
  }
}
