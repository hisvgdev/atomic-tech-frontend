import CaseGrid from '@/components/cases/case/organism'
import { getCaseItem } from '@/utils/api/case-items/case-item'
import { getRelatedCaseItem } from '@/utils/api/case-items/related-case-item'

interface CaseProps {
    params: Promise<{ slug: string }>
}

export default async function Case({ params }: CaseProps) {
    const slug = await params.then((s) => s.slug)
    const findedCase = await getCaseItem(Number(slug))
    const relatedCaseItem = await getRelatedCaseItem(Number(slug))

    if (!findedCase || !relatedCaseItem) return <p>Кейс не найден</p>

    return <CaseGrid findedCase={findedCase?.data} relatedCase={relatedCaseItem} />
}
