'use client'

import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import Heading from '../Heading'
import { BlockchainSectionProps } from './BlockchainSection.types'

export const BlockchainSection: FC<BlockchainSectionProps> = (props) => {
    const {} = props
    return (
        <section data-dark="false">
            <div className="flex flex-col gap-y-4">
                <Heading
                    title="Blockchain"
                    desc="Изучаем с нуля: как работает блокчейн, зачем он нужен и как на нём можно заработать."
                    path="/"
                />
                <div className="hidden lg:flex items-center gap-x-5">
                    <div className="flex-1 h-[44rem]">
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            imgCover={firstBlog}
                            classNames="w-full h-full lg:max-w-3xl"
                        />
                    </div>

                    <div className="flex flex-col gap-y-2.5">
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            imgCover={firstBlog}
                            classNames="w-full lg:max-w-md"
                        />
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            classNames="w-full lg:max-w-md"
                        />
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            classNames="w-full lg:max-w-md"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2.5">
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            classNames="w-full lg:max-w-md"
                        />
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            imgCover={firstBlog}
                            classNames="w-full lg:max-w-md"
                        />
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            classNames="w-full lg:max-w-md"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-8 lg:hidden">
                    <SwiperRowLayout>
                        {Array.from({ length: 12 }).map((_, indx) => {
                            return (
                                <SwiperSlide key={indx}>
                                    <ArticleCard
                                        title="Как понять что вы именно тот клиент с которым не хотят работать? "
                                        date="29.04.2025"
                                        imgCover={firstBlog}
                                        classNames="w-full lg:max-w-sm"
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
