'use client'

import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import Heading from '../Heading'
import { NeuralNetworksArticleProps } from './NeuralNetworksArticle.types'

export const NeuralNetworksArticle: FC<NeuralNetworksArticleProps> = (props) => {
    const {} = props
    return (
        <section data-dark="false" className="bg-[#EEEFF5] rounded-2xl py-14 px-4 lg:px-7 lg:py-20">
            <div className="flex flex-col gap-y-4">
                <Heading
                    title="Нейросети"
                    desc="Подборки инструментов, разборы и гайды по ИИ в маркетинге и бизнесе"
                    path="/"
                />
                <div className="hidden lg:flex flex-wrap gap-3">
                    {Array.from({ length: 12 }).map((_, indx) => {
                        return (
                            <ArticleCard
                                key={indx}
                                title="Как понять что вы именно тот клиент с которым не хотят работать? "
                                date="29.04.2025"
                                imgCover={firstBlog}
                                classNames="w-full lg:max-w-sm"
                            />
                        )
                    })}
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
