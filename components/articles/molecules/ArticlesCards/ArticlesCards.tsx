import ArticleCard from '@/shared/global/ArticleCard'
import React, { FC } from 'react'

import ArticlesFilters from '../ArticlesFilters'
import { ArticlesCardsProps } from './ArticlesCards.types'

export const ArticlesCards: FC<ArticlesCardsProps> = (props) => {
    const {} = props
    return (
        <div className="flex flex-col gap-y-16">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-x-3.5">
                    <h1 className="font-bold text-5xl">Все статьи</h1>
                    <p className="text-5xl font-bold text-[#C4C4C4]">239 статей</p>
                </div>
                <ArticlesFilters />
            </div>
            <div className="grid grid-cols-3 w-full gap-4">
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
