'use client'

import ArticleCard from '@/shared/global/ArticleCard'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import Heading from '../Heading'
import { SpecialProjectSectionProps } from './SpecialProjectSection.types'

export const SpecialProjectSection: FC<SpecialProjectSectionProps> = (props) => {
     const { specialProjects } = props
     return (
          <section data-dark="false" className="lg:px-7">
               <div className="w-full rounded-3xl border border-dashed border-black p-8 lg:p-16">
                    <div className="flex flex-col gap-9">
                         <Heading
                              title="Спецпроекты"
                              desc="Исследования, обзоры, нестандартный контент"
                              path="/journal?blog_category_id=Спецпроект"
                         />
                         <div className="hidden grid-cols-4 items-center gap-2.5 lg:grid">
                              {specialProjects.length > 0 &&
                                   specialProjects.map((bd, indx) => (
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
                         </div>
                         <div className="flex flex-col gap-8 lg:hidden">
                              <SwiperRowLayout>
                                   {specialProjects.length > 0 &&
                                        specialProjects.map((bd, indx) => (
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
                              </SwiperRowLayout>
                         </div>
                    </div>
               </div>
          </section>
     )
}
