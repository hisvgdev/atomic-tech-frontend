import CaseCard from '@/shared/global/CaseCard'
import React, { FC } from 'react'

import { CasesProps } from './Cases.types'

export const Cases: FC<CasesProps> = (props) => {
     const { cases } = props
     return (
          <div className="grid min-w-sm grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
               {Array.isArray(cases) &&
                    cases.map((post, indx) => {
                         return <CaseCard key={`${post.id}-${indx}`} post={post} />
                    })}
          </div>
     )
}
