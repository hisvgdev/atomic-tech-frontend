import React, { FC } from 'react'

import CaseTechButton from '../../atoms/CaseTechButton'
import { CaseTechnologySectionProps } from './CaseTechnologySection.types'

export const CaseTechnologySection: FC<CaseTechnologySectionProps> = (props) => {
    const { technologies } = props
    return (
        <section aria-labelledby="tech-heading" className="flex flex-col gap-y-4">
            <h3 id="tech-heading">Технологии</h3>
            <div className="flex items-center gap-x-1.5">
                {Array.isArray(technologies) &&
                    technologies.map(({ image, name }, indx) => (
                        <CaseTechButton key={`${indx}-${name}`} icon={image} label={name} />
                    ))}
            </div>
        </section>
    )
}
