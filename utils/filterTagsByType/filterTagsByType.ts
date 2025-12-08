import { TaxonomiesType } from "@/types/Taxonomies.types";
import { TaxonomiesProps } from "../shared/atomic-client/types";

export const filterTagsByType = (
  taxonomies: TaxonomiesProps[] = [],
  types: TaxonomiesType[]
): TaxonomiesProps[] => {
  const type = types.map((t) => t)
  return taxonomies.filter((t) => t.type.slug === type[0]);
};