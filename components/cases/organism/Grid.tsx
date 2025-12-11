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
import { usePostsQuery } from '@/hooks/query/usePostsQuery'
import { useFilteredTaxonomies } from '@/hooks/useFilteredTaxonomies'
import projectImage from '@/public/assets/images/projects/secondProject.png'
import { TaxonomiesProps } from '@/utils/shared/atomic-client/types'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'

import { TaxonomiesType } from '@/types/Taxonomies.types'

import { CaseHeading } from '../molecules/CaseHeading/CaseHeading'
import Cases from '../molecules/Cases'

export const CASE_LIMITS = 6

export const Grid = () => {
     const searchParams = useSearchParams()
     const [currentPage, setCurrentPage] = useState(1)

     const {
          data: casesData,
          isLoading: isCasesDataLoading,
          isError: isCasesDataError,
     } = usePostsQuery({
          type: 'cases',
     })

     const memoCases = React.useMemo(() => casesData ?? [], [casesData])

     const uniqueTaxonomies = useFilteredTaxonomies(memoCases ?? [])

     const usluga = searchParams.get('usluga_id') || ''
     const category = searchParams.get('category_id') || ''
     const technology = searchParams.get('technology_id') || ''

     const technologyArray = technology
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean)

     const technologies = uniqueTaxonomies?.filter((t) => t.type.title === TaxonomiesType.stack) || []
     const categories = uniqueTaxonomies?.filter((t) => t.type.title === 'Категории') || []
     const services = uniqueTaxonomies?.filter((t) => t.type.title === TaxonomiesType.services) || []

     const filteredCases = React.useMemo(() => {
          if (technologyArray.length === 0) return memoCases
          return memoCases.filter((p) => p.taxonomies?.some((tax) => technologyArray.includes(tax.id)))
     }, [memoCases, technologyArray])

     const totalItems = filteredCases.length
     const totalPages = Math.ceil(totalItems / CASE_LIMITS)

     const paginatedCases = React.useMemo(() => {
          return filteredCases.slice((currentPage - 1) * CASE_LIMITS, currentPage * CASE_LIMITS)
     }, [filteredCases, currentPage])

     return (
          <div className="flex flex-col gap-8 px-4 lg:px-6 lg:py-20">
               <CaseHeading
                    lengthOfCases={casesData?.length || 0}
                    categoriesData={categories}
                    matchedTechnologies={technologies}
                    servicesData={[]}
               />
               {Array.isArray(paginatedCases) && paginatedCases.length > 0 ? (
                    <Cases cases={paginatedCases} />
               ) : (
                    <div className="grid w-full grid-cols-3 items-center gap-8">
                         {Array.from({ length: CASE_LIMITS }).map((_, idx) => (
                              <div key={idx} className="flex flex-col space-y-3">
                                   <Skeleton className="h-96 w-auto rounded-xl" />
                                   <div className="space-y-2">
                                        <Skeleton className="h-4 w-72" />
                                        <Skeleton className="h-4 w-64" />
                                   </div>
                              </div>
                         ))}
                    </div>
               )}

               {totalPages > 1 && (
                    <Pagination>
                         <PaginationContent>
                              <PaginationItem>
                                   <PaginationPrevious
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                   />
                              </PaginationItem>

                              {Array.from({ length: totalPages }).map((_, index) => (
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
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                   />
                              </PaginationItem>
                         </PaginationContent>
                    </Pagination>
               )}
          </div>
     )
}
