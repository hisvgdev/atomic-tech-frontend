export interface TechFilterProps {
  title: string;
  matchedTechnologies: {
    name: string;
    icon?: string;
  }[]
}