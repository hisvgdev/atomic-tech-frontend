'use client'

import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import lastBlog from '@/public/assets/images/blog/lastBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import Heading from '../Heading'
import { SpecialProjectSectionProps } from './SpecialProjectSection.types'

export const SpecialProjectSection: FC<SpecialProjectSectionProps> = (props) => {
    const {} = props
    return (
        <section
            data-dark="false"
            className="w-full border border-black border-dashed rounded-3xl p-8 lg:p-24"
        >
            <div className="flex flex-col gap-9">
                <Heading
                    title="Спецпроекты"
                    desc="Исследования, обзоры, нестандартный контент"
                    path="/"
                />
                <div className="hidden lg:flex items-center justify-center gap-x-8">
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца ?"
                        date="29.04.2025"
                        imgCover={firstBlog}
                        classNames="w-full lg:max-w-md"
                    />
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца ?"
                        date="29.04.2025"
                        imgCover={lastBlog}
                        classNames="w-full lg:max-w-md"
                    />
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца ?"
                        date="29.04.2025"
                        imgCover={firstBlog}
                        classNames="w-full lg:max-w-md"
                    />
                </div>
                <div className="flex flex-col gap-8 lg:hidden">
                    <SwiperRowLayout>
                        {Array.from({ length: 6 }).map((_, indx) => {
                            return (
                                <SwiperSlide key={indx}>
                                    <ArticleCard
                                        title="Как создать уникальное приложение всего за 4 месяца ?"
                                        date="29.04.2025"
                                        imgCover={firstBlog}
                                        classNames="w-full lg:max-w-md"
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </SwiperRowLayout>
                </div>
            </div>
        </section>
    )
}
