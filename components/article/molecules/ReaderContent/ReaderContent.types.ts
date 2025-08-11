import { CaseItemsData } from "@/utils/api/case-items/case-items";

export interface ReaderContentProps {
  caseItems: CaseItemsData[];
  content?: string;
  image?: string;
  ratingsCount?: number;
  id: number;
  relatedBlogs: {
    id: number;
    title: string;
  }[]
}