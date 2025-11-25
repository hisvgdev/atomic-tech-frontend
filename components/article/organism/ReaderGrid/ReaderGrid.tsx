'use client'

import AllProjectsButton from '@/components/dashboard/molecules/AllProjectsButton'
import coverImage from '@/public/assets/images/projects/secondProject.png'
import ArticleCard from '@/shared/global/ArticleCard'
import LeaveRequest from '@/shared/global/LeaveRequest'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import React, { FC } from 'react'

import { RoutesEnum } from '@/types/Routes.types'

import ReaderContent from '../../molecules/ReaderContent'
import { ReaderGridProps } from './ReaderGrid.types'

export const ReaderGrid: FC<ReaderGridProps> = (props) => {
     const { caseItems, content, image, id, ratingsCount, relatedBlogs } = props
     return (
          <>
               <div className="grid w-full max-w-[120rem] grid-cols-1 gap-20 px-4">
                    <div>
                         <ReaderContent
                              caseItems={caseItems as any[]}
                              content={content}
                              ratingsCount={ratingsCount}
                              image={image}
                              id={id}
                              relatedBlogs={relatedBlogs}
                         />
                    </div>

                    {Array.isArray(relatedBlogs) && relatedBlogs.length > 0 && (
                         <div className="mx-auto flex w-full max-w-[40rem] flex-col gap-y-8">
                              <h2 className="text-center text-4xl font-bold lg:text-5xl">Следующие темы</h2>

                              <div className="hidden w-full grid-cols-1 gap-6 md:grid lg:grid-cols-1">
                                   {/* {relatedBlogs.map((c, i) => (
                                        <ArticleCard
                                             key={i}
                                             withTag
                                             classNames="w-full"
                                        />
                                   ))} */}
                              </div>

                              {/* <div className="flex flex-col gap-8 md:hidden">
                                   <SwiperRowLayout>
                                        {relatedBlogs.map((c, i) => (
                                             <ArticleCard key={i} withTag classNames="w-full" />
                                        ))}
                                   </SwiperRowLayout>
                              </div> */}

                              <AllProjectsButton link={RoutesEnum.articles} title="Все статьи" />
                         </div>
                    )}
               </div>

               <div className="mt-20 w-full lg:px-7">
                    <LeaveRequest />
               </div>
          </>
     )
}
