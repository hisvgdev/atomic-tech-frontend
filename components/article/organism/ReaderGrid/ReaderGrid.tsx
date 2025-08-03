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
    const { caseItems, content, image, id, ratingsCount } = props

    return (
        <>
            <div className="flex flex-col gap-20 px-3 lg:px-0">
                <ReaderContent
                    caseItems={caseItems}
                    content={content}
                    ratingsCount={ratingsCount}
                    image={image}
                    id={id}
                />
                {Array.isArray(caseItems) && caseItems.length > 0 ? (
                    <div className="flex flex-col gap-y-8">
                        <h2 className="text-4xl font-bold lg:text-5xl">Следующие темы</h2>
                        <div className="hidden lg:flex w-full items-center gap-x-3">
                            {caseItems.map((c, i) => (
                                <ArticleCard
                                    key={i}
                                    imgCover={coverImage}
                                    title={c.title}
                                    href={`/cases/${c.id}`}
                                    withTag
                                    tag="Бизнес"
                                    classNames="w-full"
                                />
                            ))}
                        </div>
                        <div className="flex flex-col gap-8 lg:hidden">
                            <SwiperRowLayout>
                                {caseItems.map((c, i) => (
                                    <ArticleCard
                                        key={i}
                                        imgCover={coverImage}
                                        title={c.title}
                                        href={`/cases/${c.id}`}
                                        withTag
                                        tag="Бизнес"
                                        classNames="w-full"
                                    />
                                ))}
                            </SwiperRowLayout>
                        </div>
                        <AllProjectsButton link="/articles" title="Все статьи" />
                    </div>
                ) : null}
            </div>
            <LeaveRequest />
        </>
    )
}
