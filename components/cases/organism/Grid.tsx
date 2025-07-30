'use client'

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import { Skeleton } from '@/components/ui/skeleton'
import { technologies as techIcons } from '@/constants/tech.constants'
import { getCaseItems } from '@/utils/api/case-items/case-items'
import { getCategories } from '@/utils/api/categories/categories'
import { getServices } from '@/utils/api/services/services'
import { getTechnologies } from '@/utils/api/technologies/technologies'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

import { CaseHeading } from '../molecules/CaseHeading/CaseHeading'
import Cases from '../molecules/Cases'

export const CASE_LIMITS = 4

export const Grid = () => {
    const searchParams = useSearchParams()
    const usluga = searchParams.get('usluga_id') || ''
    const category = searchParams.get('category_id') || ''
    const technology = searchParams.get('technology_id') || ''
    const [currentPage, setCurrentPage] = useState(1)

    const { data: caseItems, isPending: isCasesPending } = useQuery({
        queryKey: ['caseItems', category, usluga, technology, currentPage],
        queryFn: () =>
            getCaseItems({
                category_id: category,
                usluga_id: usluga,
                technology_id: technology,
                limit: 2,
                offset: (currentPage - 1) * 2,
            }),
        staleTime: 10000,
    })

    const { data: servicesData, isPending: isServicesPending } = useQuery({
        queryKey: ['services'],
        queryFn: getServices,
        staleTime: Infinity,
    })

    const { data: technologiesData, isPending: isTechnologiesPending } = useQuery({
        queryKey: ['technologies'],
        queryFn: async () => getTechnologies(),
        staleTime: Infinity,
    })

    const { data: categoriesData, isPending: isCategoriesPending } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => getCategories(),
        staleTime: Infinity,
    })

    const isLoading =
        isCasesPending || isServicesPending || isTechnologiesPending || isCategoriesPending

    if (isLoading || !technologiesData || !categoriesData || !servicesData) {
        return (
            <div className="flex gap-8 flex-wrap items-center w-full">
                {Array.from({ length: CASE_LIMITS }).map((_, idx) => (
                    <div key={idx} className="flex flex-col space-y-3">
                        <Skeleton className="h-96 min-w-3xl rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-72" />
                            <Skeleton className="h-4 w-64" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    const matchedTechnologies = technologiesData.data.map((technology) => {
        const matchedTech = techIcons.find(
            (tech) => tech.name.toLowerCase() === technology.name.toLowerCase(),
        )
        return {
            id: technology.id,
            name: technology.name,
            icon: matchedTech?.icon,
        }
    })

    const allCases = caseItems?.data.flatMap((page) => page ?? []) || []

    return (
        <div className="flex flex-col lg:gap-y-20 lg:py-20">
            <CaseHeading
                matchedTechnologies={matchedTechnologies}
                categoriesData={categoriesData.data}
                servicesData={servicesData.data}
                lengthOfCases={allCases.length}
            />
            <Cases cases={allCases} />
            {allCases.length > 0 && (
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            />
                        </PaginationItem>

                        {[...Array(caseItems?.pagination?.total_pages || 1)].map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    isActive={currentPage === index + 1}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        <PaginationItem>
                            <PaginationNext
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.min(
                                            prev + 1,
                                            caseItems?.pagination?.total_pages || prev,
                                        ),
                                    )
                                }
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    )
}
