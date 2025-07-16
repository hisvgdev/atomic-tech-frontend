'use client'

import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import lastBlog from '@/public/assets/images/blog/lastBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import Heading from '../Heading'
import { LifestyleSectionProps } from './LifestyleSection.types'

export const LifestyleSection: FC<LifestyleSectionProps> = (props) => {
    const {} = props
    return (
        <section data-dark="false" className="flex flex-col gap-y-4">
            <Heading
                title="Лайфстайл"
                desc="Подборки инструментов, разборы и гайды по ИИ в маркетинге и бизнесе"
                path="/"
            />
            <div className="hidden lg:flex items-stretch justify-center gap-3">
                <ArticleCard
                    title="Как создать уникальное приложение всего за 4 месяца ?"
                    date="29.04.2025"
                    imgCover={firstBlog}
                    classNames="w-full lg:max-w-md"
                />
                <div className="flex flex-col gap-y-4">
                    {Array.from({ length: 2 }).map((_, indx) => (
                        <ArticleCard
                            key={indx}
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            classNames="w-full lg:max-w-xs"
                        />
                    ))}
                </div>
                <ArticleCard
                    title="Как создать уникальное приложение всего за 4 месяца ?"
                    date="29.04.2025"
                    imgCover={lastBlog}
                    classNames="w-full lg:max-w-md"
                />
                <div className="flex flex-col gap-y-4">
                    {Array.from({ length: 2 }).map((_, indx) => (
                        <ArticleCard
                            key={indx}
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            classNames="w-full lg:max-w-xs"
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-8 lg:hidden">
                <SwiperRowLayout>
                    {Array.from({ length: 6 }).map((_, indx) => {
                        return (
                            <SwiperSlide key={indx}>
                                <ArticleCard
                                    title="Как создать уникальное приложение всего за 4 месяца ?"
                                    date="29.04.2025"
                                    imgCover={lastBlog}
                                    classNames="w-full lg:max-w-md"
                                />
                            </SwiperSlide>
                        )
                    })}
                </SwiperRowLayout>
            </div>
        </section>
    )
}
