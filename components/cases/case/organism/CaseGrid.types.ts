
import { CaseItemsData } from "@/utils/api/case-items/case-items"
import { RelatedCaseItemResponse } from "@/utils/api/case-items/related-case-item"

export interface CaseGridProps {
  findedCase: CaseItemsData
  relatedCase: RelatedCaseItemResponse
}