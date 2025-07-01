import CaseGrid from '@/components/cases/case/organism'
import { mockProjects } from '@/constants/project.constants'

interface CaseProps {
    params: Promise<{ slug: string }>
}

export default async function Case({ params }: CaseProps) {
    const slug = await params.then((s) => s.slug)
    const findCase = mockProjects.find((p) => p.id === slug)

    if (!findCase) return <p>Кейс не найден</p>

    return <CaseGrid {...findCase} />
}
