'use client'

import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import lastBlog from '@/public/assets/images/blog/lastBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import Heading from '../Heading'
import { LifestyleSectionProps } from './LifestyleSection.types'

export const LifestyleSection: FC<LifestyleSectionProps> = (props) => {
     const { lifestyleData } = props
     return (
          <section data-dark="false" className="flex flex-col gap-y-4 lg:px-7">
               <Heading
                    title="Лайфстайл"
                    desc="Подборки инструментов, разборы и гайды по ИИ в маркетинге и бизнесе"
                    path="//journal?blog_category_id=Лайфстайл"
               />
               <div className="hidden lg:block">
                    <div className="grid grid-cols-4 items-center gap-2.5">
                         {lifestyleData.length > 0 &&
                              lifestyleData.map((bd, indx) => (
                                   <ArticleCard
                                        key={`${bd.id}-${indx}`}
                                        title={bd.title}
                                        imgCover={bd.image}
                                        views={bd.views}
                                        date={new Date(bd.created_at).toISOString().split('T')[0]}
                                        rating={bd.average_rating}
                                        href={`/articles/${bd.id}`}
                                        classNames="w-full lg:max-w-md"
                                   />
                              ))}
                    </div>
                    {/* <div className="flex flex-col gap-y-4">
                         {Array.from({ length: 2 }).map((_, indx) => (
                              <ArticleCard
                                   key={indx}
                                   title="Как создать уникальное приложение всего за 4 месяца ?"
                                   date="29.04.2025"
                                   classNames="w-full lg:max-w-xs"
                              />
                         ))}
                    </div>
                    <ArticleCard
                         title="Как создать уникальное приложение всего за 4 месяца ?"
                         date="29.04.2025"
                         imgCover={lastBlog}
                         classNames="w-full lg:max-w-md"
                    />
                    <div className="flex flex-col gap-y-4">
                         {Array.from({ length: 2 }).map((_, indx) => (
                              <ArticleCard
                                   key={indx}
                                   title="Как создать уникальное приложение всего за 4 месяца ?"
                                   date="29.04.2025"
                                   classNames="w-full lg:max-w-xs"
                              />
                         ))}
                    </div> */}
               </div>
               <div className="flex flex-col gap-8 lg:hidden">
                    <SwiperRowLayout>
                         {lifestyleData.length > 0 &&
                              lifestyleData.map((bd, indx) => {
                                   return (
                                        <SwiperSlide key={indx}>
                                             <ArticleCard
                                                  key={`${bd.id}-${indx}`}
                                                  title={bd.title}
                                                  imgCover={bd.image}
                                                  views={bd.views}
                                                  date={new Date(bd.created_at).toISOString().split('T')[0]}
                                                  rating={bd.average_rating}
                                                  href={`/articles/${bd.id}`}
                                                  classNames="w-full lg:max-w-md"
                                             />
                                        </SwiperSlide>
                                   )
                              })}
                    </SwiperRowLayout>
               </div>
          </section>
     )
}
