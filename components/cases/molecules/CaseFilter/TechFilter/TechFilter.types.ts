export interface TechFilterProps {
  title: string;
  matchedTechnologies: {
    id: number;
    name: string;
    icon?: string;
  }[]
}