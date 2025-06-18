'use server';

type BlogsResponse = {
  success: boolean;
  data: any
} | undefined

export const getBlogs = async (id: number): Promise<BlogsResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${id}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error(`Failed fetch to blog with id ${id}`);
    }
    const blog = await res.json();
    return blog;
  } catch (error) {
    console.log(error);
  }
}