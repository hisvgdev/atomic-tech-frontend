

export interface CaseHeadingProps {
  lengthOfCases: number;
  matchedTechnologies: {
    id: number;
    name: string;
    icon?: string;
  }[]
  categoriesData: any[]
  servicesData: any[]
}