'use server';

type SubCategoriesResponse = {
  data: {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }
}[] | undefined

export const getSubCategories = async (): Promise<SubCategoriesResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subcategories`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error("Failed fetch to subcategories");
    }
    const getSubCategories = await res.json();
    return getSubCategories;
  } catch (error) {
    console.log(error);
  }
}