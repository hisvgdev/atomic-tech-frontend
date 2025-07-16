'use client'

import lastBlog from '@/public/assets/images/blog/lastBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import Heading from '../Heading'
import { BusinessSectionProps } from './BusinessSection.types'

export const BusinessSection: FC<BusinessSectionProps> = (props) => {
    const {} = props
    return (
        <div className="w-full flex flex-col gap-y-4">
            <Heading title="Бизнес" desc="Как зарабатывать больше, а работать меньше" path="/" />
            <div className="hidden  lg:flex w-full items-center gap-x-3">
                {Array.from({ length: 4 }).map((_, indx) => (
                    <ArticleCard
                        key={indx}
                        title="Как создать уникальное приложение всего за 4 месяца ?"
                        date="29.04.2025"
                        imgCover={lastBlog}
                        classNames="w-full lg:max-w-md"
                    />
                ))}
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
        </div>
    )
}
