type HeroVideoResponse = {
  hero_video: string;
} | undefined

export const getHeroVideo = async (): Promise<HeroVideoResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/hero-video`, {
      method: "GET",
      next: {
        revalidate: 10,
      }
    });
    if (!res.ok) {
      throw new Error("Failed fetch to hero-video");
    }
    const getHeroVideo = await res.json();
    return getHeroVideo;
  } catch (error) {
    console.log(error);
  }
}