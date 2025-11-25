'use client'

import ArticleCard from '@/shared/global/ArticleCard'
import SwiperGridLayout from '@/shared/global/SwiperGridLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import { RoutesEnum } from '@/types/Routes.types'

import Heading from '../Heading'
import { MarketingSectionProps } from './MarketingSection.types'

export const MarketingSection: FC<MarketingSectionProps> = (props) => {
     const { marketingPosts } = props

     return (
          <section data-dark="false" className="w-full bg-[#EEEFF5] px-9 py-14">
               <div className="flex flex-col gap-y-4">
                    <Heading
                         title="Маркетинг"
                         desc="Про привлечение клиентов, узнаваемость бренда и SMM"
                         path={RoutesEnum.journal}
                         query="blog_category_id=Маркетинг"
                    />
                    {/* <div className="hidden grid-cols-4 items-center gap-2.5 lg:grid">
                         {marketingPosts.length > 0 &&
                              marketingPosts.map((bd, indx) => (
                                   <ArticleCard
                                        key={`${bd.id}-${indx}`}
                                        title={bd.title}
                                        imgCover={bd.image || null}
                                        views={bd.views}
                                        date={new Date(bd.created_at).toISOString().split('T')[0]}
                                        rating={bd.average_rating}
                                        href={`/articles/${bd.id}`}
                                        classNames="w-full lg:max-w-md"
                                   />
                              ))}
                    </div> */}
                    {/* <div className="flex flex-col gap-8 lg:hidden">
                         <SwiperGridLayout>
                              {marketingPosts.length > 0 &&
                                   marketingPosts.map((bd, indx) => (
                                        <SwiperSlide key={`${bd.id}-${indx}`}>
                                             <ArticleCard
                                                  key={`${bd.id}-${indx}`}
                                                  title={bd.title}
                                                  imgCover={bd.image || null}
                                                  views={bd.views}
                                                  date={new Date(bd.created_at).toISOString().split('T')[0]}
                                                  rating={bd.average_rating}
                                                  href={`/articles/${bd.id}`}
                                                  classNames="w-full lg:max-w-md"
                                             />
                                        </SwiperSlide>
                                   ))}
                         </SwiperGridLayout>
                    </div> */}
               </div>
          </section>
     )
}
