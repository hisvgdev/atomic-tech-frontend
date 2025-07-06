import CaseGrid from '@/components/cases/case/organism'
import { mockProjects } from '@/constants/project.constants'
import { getCaseItem } from '@/utils/api/case-items/case-item'
import { getRelatedCaseItem } from '@/utils/api/case-items/related-case-item'

interface CaseProps {
    params: Promise<{ slug: string }>
}

export default async function Case({ params }: CaseProps) {
    const slug = await params.then((s) => s.slug)
    const findCase = mockProjects.find((p) => p.id === slug)
    const caseItem = await getCaseItem(1)
    const relatedCaseItem = await getRelatedCaseItem(1)

    console.log({ caseItem, relatedCaseItem })

    if (!findCase) return <p>Кейс не найден</p>

    return <CaseGrid {...findCase} />
}
