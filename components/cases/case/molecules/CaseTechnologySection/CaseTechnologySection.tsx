import React, { FC } from 'react'

import CaseIconButton from '../../atoms/CaseIconButton'
import { CaseTechnologySectionProps } from './CaseTechnologySection.types'

export const CaseTechnologySection: FC<CaseTechnologySectionProps> = (props) => {
     const { technologies } = props
     return (
          <section aria-labelledby="tech-heading" className="flex flex-col gap-2">
               <h3 id="tech-heading" className="text-base font-bold tracking-tight text-black/60">
                    Технологии
               </h3>
               <div className="flex items-center gap-x-1.5">
                    {Array.isArray(technologies) &&
                         technologies.map(({ title }, indx) => (
                              <CaseIconButton key={`${indx}-${title}`} icon={''} label={title} />
                         ))}
               </div>
          </section>
     )
}
