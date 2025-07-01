import { StaticImageData } from "next/image";

export interface CaseGridProps {
  id: string;
  title: string;
  description: string;
  coverImage: StaticImageData;
  badgeContent: {
    title: string;
    description: string;
  }[];
  tags: {
    id: string;
    title: string;
    icon: any;
  }[];
}