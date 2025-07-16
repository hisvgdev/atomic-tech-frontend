import React, { FC } from 'react'

import CaseIconButton from '../../atoms/CaseIconButton'
import { CaseServiceSectionProps } from './CaseServiceSection.types'

export const CaseServiceSection: FC<CaseServiceSectionProps> = (props) => {
    const { subcategories } = props
    return (
        <section aria-labelledby="services-heading" className="flex flex-col gap-y-4">
            <h3 id="services-heading">Услуги</h3>
            <div className="flex items-center gap-x-1.5">
                <div className="flex items-center gap-x-1.5">
                    {subcategories &&
                        subcategories.map((label, indx) => (
                            <CaseIconButton key={indx} label={label} />
                        ))}
                </div>
            </div>
        </section>
    )
}
