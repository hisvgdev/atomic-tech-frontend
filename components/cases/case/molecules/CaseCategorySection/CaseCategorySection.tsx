import React, { FC } from 'react'

import CaseIconButton from '../../atoms/CaseIconButton'
import { CaseCategorySectionProps } from './CaseCategorySection.types'

export const CaseCategorySection: FC<CaseCategorySectionProps> = (props) => {
     const { categories } = props
     return (
          <section aria-labelledby="category-heading" className="flex flex-col gap-2">
               <h3 id="category-heading" className="text-base font-bold tracking-tight text-black/60">
                    Категория
               </h3>
               <div className="flex items-center gap-x-1.5">
                    {categories && categories.map(({ title }, indx) => <CaseIconButton key={indx} label={title} />)}
               </div>
          </section>
     )
}
