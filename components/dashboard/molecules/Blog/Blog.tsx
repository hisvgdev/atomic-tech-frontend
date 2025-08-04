'use client'

import ArticleCards from '@/components/dashboard/molecules/ArticleCards'
import { Skeleton } from '@/components/ui/skeleton'
import { getJournalBlogs } from '@/utils/api/journal-blogs/journal-blogs'
import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'

import { BlogProps } from './Blog.types'
import BlogHeading from './BlogHeading'
import BlogTechnology from './BlogTechnology'

export const Blog: FC<BlogProps> = () => {
    const {
        data: journalData,
        isLoading: isJournalDataLoading,
        isError: isJournalDataError,
    } = useQuery({
        queryKey: ['journal-blogs'],
        queryFn: async () => {
            const randomOffset = Math.floor(Math.random() * 6)
            return await getJournalBlogs({
                limit: 3,
                offset: randomOffset,
            })
        },
    })

    if (isJournalDataLoading) {
        return (
            <div className="flex gap-8 flex-wrap items-center w-full">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className="flex flex-col space-y-3">
                        <Skeleton className="h-72 max-w-xl rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-56" />
                            <Skeleton className="h-4 w-48" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (isJournalDataError) {
        return <div>Error of the get journal data. Check the devtools</div>
    }

    return (
        <section data-dark="false" className="flex flex-col gap-12">
            <div className="flex flex-col-reverse items-start gap-8 lg:items-center lg:flex-row">
                <ArticleCards journalData={journalData} />
                <BlogHeading />
            </div>
            <hr className="" />
            <BlogTechnology />
        </section>
    )
}
