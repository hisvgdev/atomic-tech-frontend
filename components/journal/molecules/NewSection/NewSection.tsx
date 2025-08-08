import ArticleCard from '@/shared/global/ArticleCard'
import React, { FC } from 'react'

import Heading from '../Heading'
import { NewSectionProps } from './NewSection.types'

export const NewSection: FC<NewSectionProps> = (props) => {
     const { newJournalData } = props
     return (
          <section data-dark="false" className="flex flex-col gap-y-4 lg:px-7">
               <Heading title="Новое" desc="Самые свежие статьи в Proger" path="/" />
               <div className="flex min-h-full w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-center">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                         {newJournalData.map((d) => (
                              <ArticleCard
                                   key={d.id}
                                   title={d.title}
                                   date={new Date(d.created_at).toISOString().split('T')[0]}
                                   imgCover={d.image || ''}
                                   href={`/articles/${d.id}`}
                                   classNames="w-full h-full"
                                   ratingPosition="bottom"
                                   rating={d.average_rating}
                                   views={d.views}
                                   tag={d.category.name}
                                   withTag
                              />
                         ))}
                    </div>
                    {/* <div className="flex flex-col gap-y-2.5">
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
                </div> */}
               </div>
          </section>
     )
}
