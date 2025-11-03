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
import { getPosts } from '@/utils/api/posts/posts'
import { getServices } from '@/utils/api/services/services'
import { getTaxonomyType } from '@/utils/api/taxonomies/taxonomy-types/taxonomy-type/taxonomy-type'
import { getTaxonomyTypes } from '@/utils/api/taxonomies/taxonomy-types/taxonomy-types'
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

     // const { data: caseItems, isPending: isCasesPending } = useQuery({
     //      queryKey: ['caseItems', category, usluga, technology, currentPage],
     //      queryFn: () =>
     //           getCaseItems({
     //                offset: (currentPage - 1) * 6,
     //           }),
     //      staleTime: 10000,
     // })

     const { data: taxonomyTypesData, isLoading: taxonomyTypesLoading } = useQuery({
          queryKey: ['taxonomy-types'],
          queryFn: () => getTaxonomyTypes(),
     })
     const { data: caseItemsData, isLoading: isCaseItemsDataLoading } = useQuery({
          queryKey: ['case-items'],
          queryFn: () => getPosts({ filter: { status: 'published' } }),
     })

     if (isCaseItemsDataLoading || taxonomyTypesLoading) {
          return (
               <div className="flex w-full flex-wrap items-center justify-center gap-8">
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

     // const matchedTechnologies = technologiesData.data.map((technology) => {
     //      const matchedTech = techIcons.find((tech) => tech.name.toLowerCase() === technology.name.toLowerCase())
     //      return {
     //           id: technology.id,
     //           name: technology.name,
     //           icon: matchedTech?.icon,
     //      }
     // })

     // const allCases = caseItems?.data.flatMap((page) => page ?? []) || []

     return (
          <div className="flex flex-col px-4 lg:gap-y-20 lg:px-6 lg:py-20">
               {/* <CaseHeading
                    lengthOfCases={0}
               /> */}
               {/* <Cases cases={allCases} /> */}
               {/* {allCases.length > 0 && (
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
                                                  Math.min(prev + 1, caseItems?.pagination?.total_pages || prev),
                                             )
                                        }
                                   />
                              </PaginationItem>
                         </PaginationContent>
                    </Pagination>
               )} */}
          </div>
     )
}
