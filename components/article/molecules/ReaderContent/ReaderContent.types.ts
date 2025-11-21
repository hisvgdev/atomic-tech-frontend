

export interface ReaderContentProps {
  caseItems: any[];
  content?: string;
  image?: string;
  ratingsCount?: number;
  id: string;
  relatedBlogs: {
    id: number;
    title: string;
  }[]
}