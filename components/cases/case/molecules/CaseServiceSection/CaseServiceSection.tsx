import React, { FC } from 'react'

import CaseIconButton from '../../atoms/CaseIconButton'
import { CaseServiceSectionProps } from './CaseServiceSection.types'

export const CaseServiceSection: FC<CaseServiceSectionProps> = (props) => {
     const { services } = props
     console.log(services)
     return (
          <section aria-labelledby="services-heading" className="flex flex-col gap-2">
               <h3 id="services-heading" className="text-base font-bold tracking-tight text-black/60">
                    Услуги
               </h3>
               <div className="flex items-center gap-x-1.5">
                    <div className="flex max-w-md flex-wrap items-center gap-3">
                         {services && services.map((s, indx) => <CaseIconButton key={indx} label={s.title} />)}
                    </div>
               </div>
          </section>
     )
}
