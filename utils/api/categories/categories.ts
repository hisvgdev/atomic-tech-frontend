'use server';

import { BaseResponseApiProps } from "@/types/Api.types";

interface CategoriesResponse extends BaseResponseApiProps {
  data: CategoriesDataProps[]
}

export interface CategoriesDataProps {
  id: number
  name: string
  description: string | null;
  created_at: string
  updated_at: string
}

export const getCategories = async (): Promise<CategoriesResponse | undefined> => {
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