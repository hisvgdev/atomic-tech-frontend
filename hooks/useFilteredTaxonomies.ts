import { Post, TaxonomiesProps } from "@/utils/shared/atomic-client/types";
import { useEffect, useState } from "react";

export const useFilteredTaxonomies = (casesData: Post[]): TaxonomiesProps[] => {
  const [uniqueTaxonomies, setUniqueTaxonomies] = useState<TaxonomiesProps[]>([])

  const getAllTaxonimies = casesData?.flatMap((t) => t.taxonomies)

  useEffect(() => {
    if (getAllTaxonimies) {
      setUniqueTaxonomies((prev) => {
        const unique = new Map(prev.map((t) => [t.id, t]))
        getAllTaxonimies.forEach((t) => t && unique.set(t.id, t))
        return [...unique.values()]
      })
    }
  }, [casesData])

  return uniqueTaxonomies
}