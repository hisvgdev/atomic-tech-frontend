import { Globe, Palette, Search } from 'lucide-react'
import React, { FC } from 'react'

import CaseIconButton from '../../atoms/CaseIconButton'
import { CaseServiceSectionProps } from './CaseServiceSection.types'

export const CaseServiceSection: FC<CaseServiceSectionProps> = (props) => {
    const {} = props
    return (
        <section aria-labelledby="services-heading" className="flex flex-col gap-y-4">
            <h3 id="services-heading">Услуги</h3>
            <div className="flex items-center gap-x-1.5">
                <CaseIconButton icon={<Search size={20} />} label="Исследования" />
                <CaseIconButton icon={<Palette size={20} />} label="Дизайн" />
                <CaseIconButton icon={<Globe size={20} />} label="Веб-разработка" />
            </div>
        </section>
    )
}
