import { CategoriesDataProps } from "@/utils/api/categories/categories";
import { ServicesDataProps } from "@/utils/api/services/services";

export interface CaseHeadingProps {
  matchedTechnologies: {
    name: string;
    icon?: string;
  }[]
  categoriesData: CategoriesDataProps[]
  servicesData: ServicesDataProps[]
}