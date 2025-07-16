import ArticleCard from '@/shared/global/ArticleCard'
import React, { FC } from 'react'

import ArticlesFilters from '../ArticlesFilters'
import { ArticlesCardsProps } from './ArticlesCards.types'

export const ArticlesCards: FC<ArticlesCardsProps> = (props) => {
    const {} = props
    return (
        <div className="flex flex-col gap-y-16">
            <div className="w-full flex flex-col gap-6 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col lg:gap-3.5 lg:flex-row lg:items-center">
                    <h1 className="font-bold text-5xl">Все статьи</h1>
                    <p className="text-5xl font-bold text-[#C4C4C4]">239 статей</p>
                </div>
                <ArticlesFilters />
            </div>
            <div className="grid grid-cols-1 w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 12 }).map((_, indx) => (
                    <ArticleCard
                        key={indx}
                        title="Как приручить Яндекс: 13 операторов расширенного поиска"
                        withTag
                        tag="SEO"
                        date="29.04.2025"
                        rating={3}
                        ratingPosition="bottom"
                    />
                ))}
            </div>
        </div>
    )
}
