'use server';

type TechnologiesResponse = {
  success: boolean;
  data: any
} | undefined

export const getTechnologies = async (): Promise<TechnologiesResponse> => {
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