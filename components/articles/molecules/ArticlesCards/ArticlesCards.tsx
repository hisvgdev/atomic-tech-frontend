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
import { getBlogs } from '@/utils/api/blogs/blogs'
import { useQuery } from '@tanstack/react-query'
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

    const {
        data: blogsData,
        isLoading: isBlogsLoading,
        isError: isBlogsError,
    } = useQuery({
        queryKey: ['blogs', sortByRating, sortWithDate, currentPage],
        queryFn: async () =>
            await getBlogs({
                limit: BLOGS_LIMITS,
                offset: (currentPage - 1) * BLOGS_LIMITS,
                sort_by: sortWithDate,
                sort_direction: sortByRating,
            }),
    })

    if (isBlogsLoading)
        return (
            <div className="grid grid-cols-3 gap-9 items-center justify-center w-full">
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

    if (isBlogsError) {
        console.log(isBlogsError)
        return <div>Error...</div>
    }

    return (
        <div className="flex flex-col gap-y-16">
            <div className="w-full flex flex-col gap-6 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col lg:gap-3.5 lg:flex-row lg:items-center">
                    <h1 className="font-bold text-5xl -tracking-[0.075rem]">Все статьи</h1>
                    <p className="text-5xl font-bold text-[#C4C4C4]">
                        {Array.isArray(blogsData?.data) ? blogsData.data.length : 0}{' '}
                        {Array.isArray(blogsData?.data) && blogsData.data.length < 2
                            ? 'статья'
                            : 'статей'}
                    </p>
                </div>
                <ArticlesFilters
                    setSortByRating={setSortByRating}
                    setSortWithDate={setSortWithDate}
                />
            </div>
            <div className="grid grid-cols-1 w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Array.isArray(blogsData?.data) &&
                    blogsData.data.length > 0 &&
                    blogsData.data.map((item, indx) => (
                        <ArticleCard
                            withTag
                            key={indx}
                            title={item.title}
                            date={item.created_at}
                            rating={3}
                            href={`/articles/${String(item.id)}`}
                            tag="SEO"
                            ratingPosition="bottom"
                        />
                    ))}
            </div>
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
                                        Math.min(
                                            prev + 1,
                                            blogsData?.pagination?.total_pages || prev,
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
