'use client'

import lastBlog from '@/public/assets/images/blog/lastBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import Heading from '../Heading'
import { BusinessSectionProps } from './BusinessSection.types'

export const BusinessSection: FC<BusinessSectionProps> = (props) => {
     const { businessProjectData } = props
     return (
          <div className="flex w-full flex-col gap-y-4 lg:px-7">
               <Heading
                    title="Бизнес"
                    desc="Как зарабатывать больше, а работать меньше"
                    path="/journal?blog_category_id=Бизнес"
               />
               <div className="hidden grid-cols-4 items-center gap-2.5 lg:grid">
                    {businessProjectData.length > 0 &&
                         businessProjectData.map((bd, indx) => (
                              <ArticleCard
                                   key={`${bd.id}-${indx}`}
                                   title={bd.title}
                                   views={bd.views}
                                   imgCover={bd.image || null}
                                   date={new Date(bd.created_at).toISOString().split('T')[0]}
                                   rating={bd.average_rating}
                                   href={`/articles/${bd.id}`}
                                   classNames="w-full lg:max-w-md"
                              />
                         ))}
               </div>
               <div className="flex flex-col gap-8 lg:hidden">
                    <SwiperRowLayout>
                         {businessProjectData.length > 0 &&
                              businessProjectData.map((bd, indx) => (
                                   <SwiperSlide key={`${bd.id}-${indx}`}>
                                        <ArticleCard
                                             title={bd.title}
                                             views={bd.views}
                                             imgCover={bd.image || null}
                                             date={new Date(bd.created_at).toISOString().split('T')[0]}
                                             rating={bd.average_rating}
                                             href={`/articles/${bd.id}`}
                                             classNames="w-full lg:max-w-md"
                                        />
                                   </SwiperSlide>
                              ))}
                    </SwiperRowLayout>
               </div>
          </div>
     )
}
