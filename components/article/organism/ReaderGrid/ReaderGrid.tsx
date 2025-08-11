'use client'

import AllProjectsButton from '@/components/dashboard/molecules/AllProjectsButton'
import coverImage from '@/public/assets/images/projects/secondProject.png'
import ArticleCard from '@/shared/global/ArticleCard'
import LeaveRequest from '@/shared/global/LeaveRequest'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import { CaseItemsData } from '@/utils/api/case-items/case-items'
import React, { FC } from 'react'

import ReaderContent from '../../molecules/ReaderContent'
import { ReaderGridProps } from './ReaderGrid.types'

export const ReaderGrid: FC<ReaderGridProps> = (props) => {
     const { caseItems, content, image, id, ratingsCount, relatedBlogs } = props

     return (
          <>
               <div className="flex flex-col gap-20 px-3 lg:px-7">
                    <ReaderContent
                         caseItems={caseItems as CaseItemsData[]}
                         content={content}
                         ratingsCount={ratingsCount}
                         image={image}
                         id={id}
                         relatedBlogs={relatedBlogs}
                    />
                    {Array.isArray(relatedBlogs) && relatedBlogs.length > 0 ? (
                         <div className="flex flex-col gap-y-8">
                              <h2 className="text-4xl font-bold lg:text-5xl">Следующие темы</h2>
                              <div className="hidden w-full items-center gap-x-3 lg:flex">
                                   {relatedBlogs.map((c, i) => (
                                        <ArticleCard
                                             key={i}
                                             imgCover={coverImage}
                                             title={c.title}
                                             href={`/articles/${c.id}`}
                                             withTag
                                             tag="Бизнес"
                                             classNames="w-full"
                                        />
                                   ))}
                              </div>
                              <div className="flex flex-col gap-8 lg:hidden">
                                   <SwiperRowLayout>
                                        {relatedBlogs.map((c, i) => (
                                             <ArticleCard
                                                  key={i}
                                                  imgCover={coverImage}
                                                  title={c.title}
                                                  href={`/articles/${c.id}`}
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
               <div className="px-4 lg:px-7">
                    <LeaveRequest />
               </div>
          </>
     )
}
