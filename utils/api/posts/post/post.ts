import { PostsDataProps } from "../posts";

interface PostResponse {
  data: PostsDataProps[]
}

export const getPost = async (slug: string): Promise<PostResponse | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/${slug}`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error("Failed fetch to post");
    }
    const getPost = await res.json();
    return getPost;
  } catch (error) {
    console.log(error);
    throw error;
  }
}