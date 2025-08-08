'use client'

import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import Heading from '../Heading'
import { NeuralNetworksArticleProps } from './NeuralNetworksArticle.types'

export const NeuralNetworksArticle: FC<NeuralNetworksArticleProps> = (props) => {
     const { neuralPosts } = props
     return (
          <section data-dark="false" className="rounded-2xl bg-[#EEEFF5] px-4 py-14 lg:px-7 lg:py-20">
               <div className="flex flex-col gap-y-4">
                    <Heading
                         title="Нейросети"
                         desc="Подборки инструментов, разборы и гайды по ИИ в маркетинге и бизнесе"
                         path="/journal?blog_category_id=Нейросеть"
                    />
                    <div className="hidden grid-cols-4 items-center gap-2.5 lg:grid">
                         {neuralPosts.length > 0 &&
                              neuralPosts.map((bd, indx) => (
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
                    <div className="flex flex-col gap-8 lg:hidden">
                         <SwiperRowLayout>
                              {neuralPosts.length > 0 &&
                                   neuralPosts.map((bd, indx) => (
                                        <SwiperSlide key={`${bd.id}-${indx}`}>
                                             <ArticleCard
                                                  title={bd.title}
                                                  imgCover={bd.image}
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
          </section>
     )
}
