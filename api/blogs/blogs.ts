'use server';

type BlogsResponse = {
  success: boolean;
  data: any[]
} | undefined

export const getBlogs = async (): Promise<BlogsResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error("Failed fetch to blogs");
    }
    const blogs = await res.json();
    return blogs;
  } catch (error) {
    console.log(error);
  }
}