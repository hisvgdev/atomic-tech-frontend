'use client'

import { useTaxonomyTypesQuery } from '@/hooks/query/useTaxonomyTypes'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useCallback } from 'react'

import CustomSolutionsAddingFeedbackDialog from '../CustomSolutionsHeader/CustomSolutionsAddingFeedbackDialog'

export const CustomSolutionsFooter = () => {
     const searchParams = useSearchParams()
     const {
          data: taxonomyTypesData,
          isLoading: isTaxonomyTypesDataLoading,
          isError: isTaxonomyTypesDataError,
     } = useTaxonomyTypesQuery()

     const createQueryString = useCallback(
          (name: string, value: string) => {
               const params = new URLSearchParams(searchParams.toString())
               params.set(name, value)

               return params.toString()
          },
          [searchParams],
     )
     return (
          <div className="flex items-center justify-center">
               <CustomSolutionsAddingFeedbackDialog />
               {/* <div className="flex w-full max-w-sm flex-wrap justify-end gap-x-10 gap-y-4 text-xl font-medium whitespace-nowrap text-gray-600">
                    {!isTaxonomyTypesDataLoading
                         ? taxonomyTypesData?.map((c, i) => (
                                <Link
                                     href={`/cases?${createQueryString('category_id', String(c.slug))}`}
                                     key={i}
                                     className="text-sm transition-all hover:underline"
                                >
                                     {c.title}
                                </Link>
                           ))
                         : null}
               </div> */}
          </div>
     )
}
