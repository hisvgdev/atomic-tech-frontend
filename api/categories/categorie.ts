'use server';

type CategorieResponse = {
  success: boolean;
  data: any
} | undefined

export const getCategorie = async (id: number): Promise<CategorieResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories/${id}/case-items`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed fetch to categorie with id ${id}`);
    }
    const getCategorie = await res.json();
    return getCategorie;
  } catch (error) {
    console.log(error);
  }
}