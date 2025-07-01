'use server';

import { BaseResponseApiProps } from "@/types/Api.types";

interface TechnologiesResponse extends BaseResponseApiProps {
  data: TechnologiesDataProps[]
}

export interface TechnologiesDataProps {
  created_at: string;
  id: number;
  image: string | null;
  name: string;
  updated_at: string;
}

export const getTechnologies = async (): Promise<TechnologiesResponse | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/technologies/`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed fetch to technologies`);
    }
    const getTechnologies = await res.json();
    return getTechnologies;
  } catch (error) {
    console.log(error);
  }
}