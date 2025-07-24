export const blogRating = async (data: { blog_id: number, rating: number; }): Promise<{ message: string } | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog-ratings`, {
      method: "POST",
      cache: 'no-cache',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
    })
    const result = await res.json();
    if (!res.ok) {
      throw new Error(result.message)
    }
    return result;
  } catch (error) {
    console.error(error);
  }
}