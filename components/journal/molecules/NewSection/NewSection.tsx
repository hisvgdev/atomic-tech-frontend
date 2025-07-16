import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import React, { FC } from 'react'

import Heading from '../Heading'
import { NewSectionProps } from './NewSection.types'

export const NewSection: FC<NewSectionProps> = (props) => {
    const {} = props
    return (
        <section data-dark="false" className="flex flex-col gap-y-4">
            <Heading title="Новое" desc="Самые свежие статьи в Proger" path="/" />
            <div className="flex flex-col gap-5 w-full min-h-full lg:flex-row lg:items-center lg:justify-center">
                <div className="flex flex-col grow gap-y-2.5">
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца?"
                        date="29.04.2025"
                        imgCover={firstBlog}
                        classNames="w-full h-full"
                        ratingPosition="bottom"
                        tag="Программирование"
                        withTag
                    />
                    <ArticleCard
                        title="Как приручить Яндекс: 13 операторов расширенного поиска"
                        date="29.04.2025"
                        classNames="w-full h-full"
                        ratingPosition="bottom"
                        tag="Бизнес"
                        withTag
                    />
                </div>
                <div className="flex flex-col gap-y-2.5">
                    <ArticleCard
                        title="Что подарить клиентам и партнёрам: 35 идей для вдохновения"
                        date="29.04.2025"
                        classNames="w-full lg:max-w-sm"
                        imgCover={firstBlog}
                        ratingPosition="bottom"
                        tag="E-mail"
                        withTag
                    />
                    <ArticleCard
                        title="Как приручить Яндекс: 13 операторов расширенного поиска"
                        date="29.04.2025"
                        classNames="w-full lg:max-w-sm"
                        ratingPosition="bottom"
                        tag="Бизнес"
                        withTag
                    />
                    <ArticleCard
                        title="Как создавать контент для образовательных рассылок"
                        date="29.04.2025"
                        classNames="w-full lg:max-w-sm"
                        ratingPosition="bottom"
                        tag="E-mail"
                        withTag
                    />
                </div>
                <div className="flex flex-col gap-y-2.5">
                    <ArticleCard
                        title="Как проверить наличие платных подписок и услуг"
                        date="29.04.2025"
                        classNames="w-full lg:max-w-sm"
                        ratingPosition="bottom"
                        tag="Программирование"
                        withTag
                    />
                    <ArticleCard
                        title="Как создать сайт на Tilda: гайд для новичков"
                        date="29.04.2025"
                        classNames="w-full lg:max-w-sm"
                        ratingPosition="bottom"
                        imgCover={firstBlog}
                        tag="Программирование"
                        withTag
                    />
                    <ArticleCard
                        title="«Ты ему нужен»: как рассылки помогли увеличить рекуррентные пожертвования в 3 раза и удвоить сборы"
                        date="29.04.2025"
                        classNames="w-full lg:max-w-sm"
                        ratingPosition="bottom"
                        tag="E-mail"
                        withTag
                    />
                </div>
            </div>
        </section>
    )
}
