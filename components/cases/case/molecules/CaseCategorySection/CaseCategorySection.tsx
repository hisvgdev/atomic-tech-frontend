import { RobotIcon } from '@phosphor-icons/react/dist/ssr'
import { LayoutTemplate, PanelsTopLeft } from 'lucide-react'
import React, { FC } from 'react'

import CaseIconButton from '../../atoms/CaseIconButton'
import { CaseCategorySectionProps } from './CaseCategorySection.types'

export const CaseCategorySection: FC<CaseCategorySectionProps> = () => {
    return (
        <section aria-labelledby="category-heading" className="flex flex-col gap-y-4">
            <h3 id="category-heading">Категория</h3>
            <div className="flex items-center gap-x-1.5">
                <CaseIconButton icon={<PanelsTopLeft size={20} />} label="Веб-сайт" />
                <CaseIconButton icon={<LayoutTemplate size={20} />} label="Платформа" />
                <CaseIconButton icon={<RobotIcon size={20} />} label="Телеграм-бот" />
            </div>
        </section>
    )
}
