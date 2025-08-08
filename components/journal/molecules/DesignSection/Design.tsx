'use client'

import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import lastBlog from '@/public/assets/images/blog/lastBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import Heading from '../Heading'
import { DesignSectionProps } from './Design.types'

export const DesignSection: FC<DesignSectionProps> = (props) => {
     const { designProjectData } = props
     return (
          <section data-dark="false" className="flex w-full flex-col gap-y-2.5 lg:px-7">
               <Heading
                    title="Дизайн"
                    desc="Руководства и сервисы, в том числе для недизайнеров"
                    path="/journal?blog_category_id=Дизайн"
               />
               <div className="hidden lg:block">
                    {/* <div className="flex items-center gap-x-3 w-full">
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца ?"
                        date="29.04.2025"
                        imgCover={firstBlog}
                        classNames="w-full"
                    />
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца ?"
                        date="29.04.2025"
                        imgCover={lastBlog}
                        classNames="w-full"
                    />
                </div> */}
                    <div className="grid grid-cols-4 items-center gap-2.5">
                         {designProjectData.length > 0 &&
                              designProjectData.map((bd, indx) => (
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
               </div>
               <div className="flex flex-col gap-8 lg:hidden">
                    <SwiperRowLayout>
                         {designProjectData.length > 0 &&
                              designProjectData.map((bd, indx) => (
                                   <SwiperSlide key={`${bd.id}-${indx}`}>
                                        <ArticleCard
                                             title={bd.title}
                                             views={bd.views}
                                             imgCover={bd.image}
                                             date={new Date(bd.created_at).toISOString().split('T')[0]}
                                             rating={bd.average_rating}
                                             href={`/articles/${bd.id}`}
                                             classNames="w-full lg:max-w-md"
                                        />
                                   </SwiperSlide>
                              ))}
                    </SwiperRowLayout>
               </div>
          </section>
     )
}
