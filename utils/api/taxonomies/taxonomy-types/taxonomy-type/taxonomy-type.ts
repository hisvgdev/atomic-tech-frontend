interface TaxonomyTypeResponse {
  data: TaxonomyTypeDataProps[]
}

export interface TaxonomyTypeDataProps {
  id: number
  title: string;
  slug: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export const getTaxonomyType = async (slug: string): Promise<TaxonomyTypeResponse | undefined> => {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/taxonomy-type/${slug}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error("Failed fetch to taxonomy type");
    }
    const getTaxonomyType = await res.json();
    return getTaxonomyType;
  } catch (error) {
    console.log(error);
    throw error;
  }
}