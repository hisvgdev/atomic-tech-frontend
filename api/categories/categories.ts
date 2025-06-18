'use server';

type CategoriesResponse = {
  success: boolean;
  data: any
} | undefined

export const getCategories = async (): Promise<CategoriesResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories/`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed fetch to categories`);
    }
    const getCategories = await res.json();
    return getCategories;
  } catch (error) {
    console.log(error);
  }
}