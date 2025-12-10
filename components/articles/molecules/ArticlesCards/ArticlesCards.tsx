'use client'

import { CASE_LIMITS } from '@/components/cases/organism/Grid'
import {
     Pagination,
     PaginationContent,
     PaginationItem,
     PaginationLink,
     PaginationNext,
     PaginationPrevious,
} from '@/components/ui/pagination'
import { Skeleton } from '@/components/ui/skeleton'
import { usePostsQuery } from '@/hooks/query/usePostsQuery'
import ArticleCard from '@/shared/global/ArticleCard'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React, { FC, useState } from 'react'

import ArticlesFilters from '../ArticlesFilters'
import { ArticlesCardsProps } from './ArticlesCards.types'

export const BLOGS_LIMITS = 12

export const ArticlesCards: FC<ArticlesCardsProps> = (props) => {
     const {} = props

     const [currentPage, setCurrentPage] = useState(1)
     const [sortWithDate, setSortWithDate] = useState<'created_at' | 'updated_at'>('created_at')
     const [sortByViews, setSortByViews] = useState<'min_views' | 'max_views'>('max_views')
     const [sortByRating, setSortByRating] = useState<'asc' | 'desc'>('asc')

     const {
          data: articlesData,
          isLoading: isArticlesDataLoading,
          isError: isArticlesDataError,
     } = usePostsQuery({
          type: 'articles',
          sort_dir: sortByRating,
     })

     const searchParams = useSearchParams()
     const blogCategoryId = searchParams.get('blog_category_id') ?? ''

     const totalItems = articlesData?.length || 0
     const totalPages = Math.ceil(totalItems / CASE_LIMITS)

     const paginatedCases =
          totalItems > 0 ? articlesData?.slice((currentPage - 1) * CASE_LIMITS, currentPage * CASE_LIMITS) : []
     const safedPaginatedCases = Array.isArray(paginatedCases) ? paginatedCases : []

     if (isArticlesDataError || isArticlesDataLoading) {
          return (
               <div className="grid w-full grid-cols-3 items-center justify-center gap-9">
                    {Array.from({ length: BLOGS_LIMITS }).map((_, idx) => (
                         <div key={idx} className="flex flex-col space-y-3">
                              <Skeleton className="h-72 min-w-md rounded-xl" />
                              <div className="space-y-2">
                                   <Skeleton className="h-4 w-72" />
                                   <Skeleton className="h-4 w-64" />
                              </div>
                         </div>
                    ))}
               </div>
          )
     }

     return (
          <div className="flex flex-col gap-4 lg:gap-6">
               <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3.5">
                         <h1 className="text-5xl font-bold tracking-tighter">
                              {blogCategoryId ? blogCategoryId : 'Все статьи'}
                         </h1>
                         <p className="text-5xl font-bold text-[#C4C4C4]">
                              {safedPaginatedCases.length || 0}{' '}
                              {safedPaginatedCases.length < 2
                                   ? 'статья'
                                   : safedPaginatedCases.length > 2 && safedPaginatedCases.length < 4
                                     ? 'cтатьи'
                                     : 'статей'}
                         </p>
                    </div>
                    <ArticlesFilters
                         setSortByRating={setSortByRating}
                         setSortByViews={setSortByViews}
                         setSortWithDate={setSortWithDate}
                    />
               </div>
               <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {safedPaginatedCases.length > 0 &&
                         safedPaginatedCases.map((article, indx) => (
                              <ArticleCard withTag key={indx} article={article} ratingPosition="bottom" />
                         ))}
               </div>
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
