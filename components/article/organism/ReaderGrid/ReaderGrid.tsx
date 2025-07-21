'use client'

import AllProjectsButton from '@/components/dashboard/molecules/AllProjectsButton'
import coverImage from '@/public/assets/images/projects/secondProject.png'
import ArticleCard from '@/shared/global/ArticleCard'
import LeaveRequest from '@/shared/global/LeaveRequest'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import ReaderContent from '../../molecules/ReaderContent'
import { ReaderGridProps } from './ReaderGrid.types'

export const ReaderGrid: FC<ReaderGridProps> = (props) => {
    const { caseItems, content, image } = props
    console.log(caseItems)
    return (
        <>
            <div className="flex flex-col gap-20 px-3 lg:px-0">
                <ReaderContent caseItems={caseItems} content={content} image={image} />
                <div className="flex flex-col gap-y-8">
                    <h2 className="text-4xl font-bold lg:text-5xl">Следующие темы</h2>
                    <div className="hidden lg:flex w-full items-center gap-x-3">
                        {Array.isArray(caseItems) && caseItems.length > 0
                            ? caseItems.map((item, indx) => (
                                  <ArticleCard
                                      key={indx}
                                      imgCover={coverImage}
                                      title={item.title}
                                      withTag
                                      tag="Бизнес"
                                  />
                              ))
                            : Array.from({ length: 4 }).map((_, indx) => (
                                  <ArticleCard
                                      key={indx}
                                      imgCover={coverImage}
                                      title="Как создать уникальное приложение всего за 4 месяца ?"
                                      withTag
                                      tag="Бизнес"
                                  />
                              ))}
                    </div>
                    <div className="flex flex-col gap-8 lg:hidden">
                        <SwiperRowLayout>
                            {Array.from({ length: 4 }).map((_, indx) => (
                                <SwiperSlide key={indx}>
                                    <ArticleCard
                                        imgCover={coverImage}
                                        title="Как создать уникальное приложение всего за 4 месяца ?"
                                        withTag
                                        tag="Бизнес"
                                    />
                                </SwiperSlide>
                            ))}
                        </SwiperRowLayout>
                    </div>
                    <AllProjectsButton title="Все статьи" />
                </div>
            </div>
            <LeaveRequest />
        </>
    )
}
