import { BaseResponseApiProps } from "@/types/Api.types";

interface SubCategoriesResponse extends BaseResponseApiProps {
  data: SubCategoriesDataProps[]
}

export interface SubCategoriesDataProps {
  id: number
  name: string
  created_at: string
  updated_at: string
}

export const getSubCategories = async (): Promise<SubCategoriesResponse | undefined> => {
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