
export interface CaseCardProps {
  id: string | number;
  title: string;
  description: string;
  photos: string[];
  website_link: string;
  destinations: {
    name: string;
    description: string;
  }[]
  categories: string[];
  subcategories: string[];
  technologies: {
    name: string;
    image: string | null;
  }[]
}