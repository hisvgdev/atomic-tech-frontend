import { mockProjects } from '@/constants/project.constants'
import CaseCard from '@/shared/global/CaseCard'
import React, { FC } from 'react'

import { CasesProps } from './Cases.types'

export const Cases: FC<CasesProps> = async (props) => {
    const {} = props
    return (
        <div className="min-w-sm grid grid-cols-1 items-center justify-center gap-4 xl:grid-cols-2">
            {[...mockProjects, ...mockProjects].map((project, indx) => {
                return <CaseCard key={`${project.id}-${indx + 1}`} {...project} />
            })}
        </div>
    )
}
