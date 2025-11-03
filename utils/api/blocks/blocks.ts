import { BaseQueryApiParamsProps } from "@/types/Api.types"
import { buildQueryString } from "@/utils/buildQueryString/buildQueryString"

interface BlocksDataResponse {
  data: BlocksDataProps[]
}

export interface BlocksDataProps {
  id: string
  post_id: string
  type: string
  order: number
  content: Content
  created_at: string
  updated_at: string
}

export interface Content { }


export const getBlocks = async (query?: BaseQueryApiParamsProps): Promise<BlocksDataResponse | undefined> => {
  const buildQuery = buildQueryString(query);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blocks${buildQuery}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error("Failed fetch to blocks");
    }
    const getBlocks = await res.json();
    return getBlocks;
  } catch (error) {
    console.log(error);
    throw error;
  }
}