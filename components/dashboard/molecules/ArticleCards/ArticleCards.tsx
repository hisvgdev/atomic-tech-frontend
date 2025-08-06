'use client'

import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import ArticleCard from '../../../../shared/global/ArticleCard'
import { ArticleCardsProps } from './ArticleCards.types'

import 'swiper/css'

import { Skeleton } from '@/components/ui/skeleton'
import GradientButton from '@/shared/custom/GradientButton'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import { getJournalBlogs } from '@/utils/api/journal-blogs/journal-blogs'
import { useQuery } from '@tanstack/react-query'
import { Pagination } from 'swiper/modules'

export const ArticleCards: FC<ArticleCardsProps> = (props) => {
    const {} = props

    const {
        data: topRelatedData,
        isLoading: isTopRelatedDataLoading,
        isError: isTopRelatedDataError,
    } = useQuery({
        queryKey: ['journal-blog'],
        queryFn: async () => {
            const randomOffset = Math.floor(Math.random() * 7)
            return await getJournalBlogs({
                limit: 3,
                offset: randomOffset,
            })
        },
    })

    if (isTopRelatedDataLoading) {
        return (
            <div className="flex gap-8 flex-wrap items-center w-auto">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className="flex flex-col space-y-3">
                        <Skeleton className="h-72 w-xs rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-56" />
                            <Skeleton className="h-4 w-48" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (isTopRelatedDataError) {
        return <div>Error of the get journal data. Check the devtools</div>
    }

    return (
        <>
            <div className="flex w-full flex-col gap-8 lg:hidden">
                <SwiperRowLayout>
                    {topRelatedData?.data.slice(0, 3).map((blog, idx) => (
                        <SwiperSlide key={idx}>
                            <ArticleCard
                                key={`${idx}-${blog.title}`}
                                imgCover={blog.image}
                                title={blog.title}
                                date={new Date(blog.created_at).toISOString().split('T')[0]}
                                rating={blog.average_rating}
                                href={`/articles/${blog.id}`}
                                views={blog.views}
                                classNames="max-w-xs"
                            />
                        </SwiperSlide>
                    ))}
                </SwiperRowLayout>
                <div className="block lg:hidden">
                    <GradientButton
                        hasIsRoute
                        routePath="/cases"
                        title="Перейти в блог"
                        classNames="py-8 rounded-full text-white w-full"
                        secondClassnames="w-full lg:w-auto"
                    />
                </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-4">
                {topRelatedData?.data.slice(0, 3).map((blog, indx) => (
                    <ArticleCard
                        key={`${indx}-${blog.title}`}
                        imgCover={blog.image}
                        title={blog.title}
                        date={new Date(blog.created_at).toISOString().split('T')[0]}
                        rating={blog.average_rating}
                        href={`/articles/${blog.id}`}
                        views={blog.views}
                        classNames="max-w-xs"
                    />
                ))}
            </div>
        </>
    )
}
