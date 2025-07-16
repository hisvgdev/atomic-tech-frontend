import CaseCard from '@/shared/global/CaseCard'
import Chip from '@/shared/global/Chip'
import { getCaseItems } from '@/utils/api/case-items/case-items'
import React, { FC } from 'react'

import { LastProjectsProps } from './LastProjects.types'

export const LastProjects: FC<LastProjectsProps> = async (props) => {
    const {} = props
    const lastProject = await getCaseItems({ limit: 4, offset: 0 })

    if (!lastProject?.data) return null

    const { data } = lastProject
    return (
        <section data-dark="false">
            <div className="flex flex-col gap-6">
                <div className="w-full flex justify-between items-center">
                    <h1 className="font-bold text-3xl leading-6 md:leading-relaxed md:text-7xl">
                        Последние проекты
                    </h1>
                    <Chip number="1" title="Кейсы" />
                </div>
                <div className="w-full grid grid-cols-1 items-center justify-center gap-4 lg:min-w-sm lg:grid-cols-2">
                    {data.map((project, indx) => {
                        return <CaseCard key={`${project.id}-${indx + 1}`} {...project} />
                    })}
                </div>
            </div>
        </section>
    )
}
