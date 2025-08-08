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
               <div className="flex flex-col gap-6 px-3.5 lg:px-7">
                    <div className="flex w-full items-center justify-between">
                         <h1 className="text-3xl leading-6 font-bold -tracking-[0.2rem] md:text-7xl md:leading-relaxed">
                              Последние проекты
                         </h1>
                         <Chip number="1" title="Кейсы" />
                    </div>
                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 lg:min-w-sm lg:grid-cols-2">
                         {data.map((project, indx) => {
                              return <CaseCard key={`${project.id}-${indx + 1}`} {...project} />
                         })}
                    </div>
               </div>
          </section>
     )
}
