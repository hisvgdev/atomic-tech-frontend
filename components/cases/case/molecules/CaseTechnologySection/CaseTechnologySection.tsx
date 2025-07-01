import dbIcon from '@/public/assets/icons/tech/database.svg'
import pythonIcon from '@/public/assets/icons/tech/pyIcon.svg'
import reactIcon from '@/public/assets/icons/tech/reactjsIcon.svg'
import React, { FC } from 'react'

import CaseTechButton from '../../atoms/CaseTechButton'
import { CaseTechnologySectionProps } from './CaseTechnologySection.types'

export const CaseTechnologySection: FC<CaseTechnologySectionProps> = (props) => {
    const {} = props
    return (
        <section aria-labelledby="tech-heading" className="flex flex-col gap-y-4">
            <h3 id="tech-heading">Технологии</h3>
            <div className="flex items-center gap-x-1.5">
                <CaseTechButton icon={pythonIcon} label="Python" />
                <CaseTechButton icon={reactIcon} label="React JS" />
                <CaseTechButton icon={dbIcon} label="SQLite" />
            </div>
        </section>
    )
}
