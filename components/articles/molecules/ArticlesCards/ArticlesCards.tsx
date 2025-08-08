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
import ArticleCard from '@/shared/global/ArticleCard'
import { getBlogCategories } from '@/utils/api/blogs/blog-categories/blog-categories'
import { getBlogs } from '@/utils/api/blogs/blogs'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React, { FC, useState } from 'react'

import ArticlesFilters from '../ArticlesFilters'
import { ArticlesCardsProps } from './ArticlesCards.types'

export const BLOGS_LIMITS = 12
// asc - по возрастанию
// desc - по убыванию
export const ArticlesCards: FC<ArticlesCardsProps> = (props) => {
     const {} = props

     const [currentPage, setCurrentPage] = useState(1)
     const [sortByRating, setSortByRating] = useState<'asc' | 'desc'>('desc')
     const [sortWithDate, setSortWithDate] = useState<'created_at' | 'updated_at'>('created_at')
     const [sortByViews, setSortByViews] = useState<'min_views' | 'max_views'>('max_views')

     const searchParams = useSearchParams()
     const blogCategoryId = searchParams.get('blog_category_id') ?? ''

     const { data: blogCategoriesData, isLoading: isBlogCategoriesDataLoading } = useQuery({
          queryKey: ['blog-categories', blogCategoryId],
          queryFn: async () =>
               await getBlogCategories({
                    search: blogCategoryId,
               }),
          staleTime: 3000,
     })

     const {
          data: blogsData,
          isLoading: isBlogsLoading,
          isError: isBlogsError,
     } = useQuery({
          queryKey: ['blogs', sortByRating, blogCategoryId, sortWithDate, sortByViews, currentPage],
          enabled: !blogCategoryId || !!blogCategoriesData,
          queryFn: async () => {
               const params: Record<string, any> = {
                    limit: BLOGS_LIMITS,
                    offset: (currentPage - 1) * BLOGS_LIMITS,
                    sort_by: sortWithDate,
                    sort_direction: sortByRating,
                    views: sortByViews,
               }

               if (blogCategoryId && blogCategoriesData?.data[0]?.id) {
                    params.blog_category_id = String(blogCategoriesData.data[0].id)
               }

               return await getBlogs(params)
          },
          staleTime: 3000,
     })

     //  if (isBlogsLoading || isBlogCategoriesDataLoading)
     //       return (
     //            <div className="grid w-full grid-cols-3 items-center justify-center gap-9">
     //                 {Array.from({ length: BLOGS_LIMITS }).map((_, idx) => (
     //                      <div key={idx} className="flex flex-col space-y-3">
     //                           <Skeleton className="h-72 min-w-md rounded-xl" />
     //                           <div className="space-y-2">
     //                                <Skeleton className="h-4 w-72" />
     //                                <Skeleton className="h-4 w-64" />
     //                           </div>
     //                      </div>
     //                 ))}
     //            </div>
     //       )

     if (isBlogsError) {
          console.log(isBlogsError)
          return <div>Error...</div>
     }

     return (
          <div className="flex flex-col gap-y-16">
               <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3.5">
                         <h1 className="text-5xl font-bold -tracking-[0.075rem]">
                              {blogCategoryId ? blogCategoryId : 'Все статьи'}
                         </h1>
                         <p className="text-5xl font-bold text-[#C4C4C4]">
                              {Array.isArray(blogsData?.data) ? blogsData.data.length : 0}{' '}
                              {Array.isArray(blogsData?.data) && blogsData.data.length < 2 ? 'статья' : 'статей'}
                         </p>
                    </div>
                    <ArticlesFilters
                         setSortByRating={setSortByRating}
                         setSortWithDate={setSortWithDate}
                         setSortByViews={setSortByViews}
                    />
               </div>
               {isBlogCategoriesDataLoading || isBlogsLoading ? (
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
               ) : (
                    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                         {Array.isArray(blogsData?.data) &&
                              blogsData.data.length > 0 &&
                              blogsData.data.map((item, indx) => (
                                   <ArticleCard
                                        withTag
                                        key={indx}
                                        title={item.title}
                                        date={item.created_at}
                                        rating={item.average_rating}
                                        href={`/articles/${String(item.id)}`}
                                        tag={item.category.name}
                                        views={item.views}
                                        ratingPosition="bottom"
                                   />
                              ))}
                    </div>
               )}
               {Array.isArray(blogsData?.data) && blogsData?.data.length > 0 && (
                    <Pagination>
                         <PaginationContent>
                              <PaginationItem>
                                   <PaginationPrevious
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                   />
                              </PaginationItem>

                              {[...Array(blogsData?.pagination?.total_pages || 1)].map((_, index) => (
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
                                                  Math.min(prev + 1, blogsData?.pagination?.total_pages || prev),
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
