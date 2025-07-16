import { BaseResponseApiProps } from "@/types/Api.types";

interface ServicesResponse extends BaseResponseApiProps {
  data: ServicesDataProps[]
}

export interface ServicesDataProps {
  created_at: string;
  updated_at: string;
  description: string | null;
  id: number;
  image: string | null;
  name: string;
}

export const getServices = async (): Promise<ServicesResponse | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/services`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed fetch to services`);
    }
    const getServices = await res.json();
    return getServices;
  } catch (error) {
    console.log(error);
  }
}