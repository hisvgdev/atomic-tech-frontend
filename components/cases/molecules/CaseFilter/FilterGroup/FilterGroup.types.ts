import { CategoriesDataProps } from "@/utils/api/categories/categories"
import { ServicesDataProps } from "@/utils/api/services/services"

export interface FilterGroupProps {
  title: string
  items: ServicesDataProps[] | CategoriesDataProps[]
}
