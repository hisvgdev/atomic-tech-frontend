'use client'

import ArticleCard from '@/shared/global/ArticleCard'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import Heading from '../Heading'
import { BlockchainSectionProps } from './BlockchainSection.types'

export const BlockchainSection: FC<BlockchainSectionProps> = (props) => {
     const { blockchainData } = props
     return (
          <section data-dark="false">
               <div className="flex flex-col gap-y-4 lg:px-7">
                    <Heading
                         title="Blockchain"
                         desc="Изучаем с нуля: как работает блокчейн, зачем он нужен и как на нём можно заработать."
                         path="/journal?blog_category_id=Blockchain"
                    />
                    <div className="hidden items-center gap-x-5 lg:block">
                         {/* <div className="flex-1 h-[44rem]">
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            imgCover={firstBlog}
                            classNames="w-full h-full lg:max-w-3xl"
                        />
                    </div> */}

                         <div className="grid grid-cols-4 items-center gap-2.5">
                              {blockchainData.length > 0 &&
                                   blockchainData.map((bd, indx) => (
                                        <ArticleCard
                                             key={`${bd.id}-${indx}`}
                                             title={bd.title}
                                             views={bd.views}
                                             imgCover={bd.image}
                                             date={new Date(bd.created_at).toISOString().split('T')[0]}
                                             rating={bd.average_rating}
                                             href={`/articles/${bd.id}`}
                                             classNames="w-full lg:max-w-md"
                                        />
                                   ))}
                         </div>
                         {/* <div className="flex flex-col gap-y-2.5">
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
                         </div> */}
                    </div>
                    <div className="flex flex-col gap-8 lg:hidden">
                         <SwiperRowLayout>
                              {blockchainData.length > 0 &&
                                   blockchainData.map((bd, indx) => {
                                        return (
                                             <SwiperSlide key={indx}>
                                                  <ArticleCard
                                                       key={`${bd.id}-${indx}`}
                                                       title={bd.title}
                                                       views={bd.views}
                                                       imgCover={bd.image}
                                                       date={new Date(bd.created_at).toISOString().split('T')[0]}
                                                       rating={bd.average_rating}
                                                       href={`/articles/${bd.id}`}
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
