'use server';

type ServicesResponse = {
  success: boolean;
  data: any
} | undefined

export const getServices = async (): Promise<ServicesResponse> => {
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