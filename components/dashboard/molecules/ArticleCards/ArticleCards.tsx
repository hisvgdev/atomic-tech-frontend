'use client'

import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import lastBlog from '@/public/assets/images/blog/lastBlog.png'
import secondBlog from '@/public/assets/images/blog/secondBlog.png'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'

import ArticleCard from '../../../../shared/global/ArticleCard'
import { ArticleCardsProps } from './ArticleCards.types'

import 'swiper/css'

import GradientButton from '@/shared/custom/GradientButton'
import { Pagination } from 'swiper/modules'

const mockDataCards = [
    {
        id: uuidv4(),
        title: 'Как создать уникальное приложение всего за 4 месяца?',
        date: new Date().toISOString().split('T')[0],
        imgCover: firstBlog,
    },
    {
        id: uuidv4(),
        title: 'Wordpress - это быстро? Но что если мы расскажем вам о новых.',
        date: new Date().toISOString().split('T')[0],
        imgCover: secondBlog,
    },
    {
        id: uuidv4(),
        title: 'Как понять что вы именно тот клиент с которым не хотят работать?',
        date: new Date().toISOString().split('T')[0],
        imgCover: lastBlog,
    },
]

export const ArticleCards: FC<ArticleCardsProps> = (props) => {
    const { topRated } = props
    return (
        <>
            <div className="flex w-full flex-col gap-8 lg:hidden">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={1.5}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="w-full h-full"
                >
                    {mockDataCards.map((blog, idx) => (
                        <SwiperSlide key={idx}>
                            <ArticleCard
                                key={`${idx}-${blog.title}`}
                                {...blog}
                                classNames="max-w-xs"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-pagination  flex justify-center gap-x-2 mt-2" />
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
                {mockDataCards.map((blog, indx) => (
                    <ArticleCard key={`${indx}-${blog.title}`} {...blog} classNames="max-w-xs" />
                ))}
            </div>
        </>
    )
}
