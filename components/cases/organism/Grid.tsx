import { technologies } from '@/constants/tech.constants'
import { getCaseItems } from '@/utils/api/case-items/case-items'
import { getCategories } from '@/utils/api/categories/categories'
import { getServices } from '@/utils/api/services/services'
import { getTechnologies } from '@/utils/api/technologies/technologies'
import React from 'react'

import { CaseHeading } from '../molecules/CaseHeading/CaseHeading'
import Cases from '../molecules/Cases'

export const Grid = async () => {
    const [servicesData, technologiesData, categoriesData] = await Promise.all([
        getServices(),
        getTechnologies(),
        getCategories(),
    ])
    const cases = await getCaseItems()
    console.log(cases)
    if (!technologiesData || !categoriesData || !servicesData) return null

    const matchedTechnologies = technologiesData.data.map((technology) => {
        const matchedTech = technologies.find(
            (tech) => tech.name.toLowerCase() === technology.name.toLowerCase(),
        )
        return {
            name: technology.name,
            icon: matchedTech?.icon,
        }
    })

    return (
        <div className="flex flex-col gap-y-20 py-20">
            <CaseHeading
                matchedTechnologies={matchedTechnologies}
                categoriesData={categoriesData.data}
                servicesData={servicesData.data}
            />
            <Cases />
        </div>
    )
}
