'use client'

import { Skeleton } from '@/components/ui/skeleton'
import project from '@/public/assets/images/projects/secondProject.png'
import GradientButton from '@/shared/custom/GradientButton'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import { getJournalBlogs } from '@/utils/api/journal-blogs/journal-blogs'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import ArticleCard from '../../../../shared/global/ArticleCard'
import { ArticleCardsProps } from './ArticleCards.types'

export const ArticleCards: FC<ArticleCardsProps> = (props) => {
     const {} = props

     const {
          data: topRelatedData,
          isLoading: isTopRelatedDataLoading,
          isError: isTopRelatedDataError,
     } = useQuery({
          queryKey: ['journal-blog'],
          queryFn: async () => {
               const randomOffset = Math.floor(Math.random() * 7)
               // return await getJournalBlogs({
               //     limit: 3,
               //     offset: randomOffset,
               // })
               return await getJournalBlogs()
          },
     })

     //  if (isTopRelatedDataLoading) {
     //       return (
     //            <div className="flex w-auto flex-wrap items-center gap-8">
     //                 {Array.from({ length: 3 }).map((_, idx) => (
     //                      <div key={idx} className="flex flex-col space-y-3">
     //                           <Skeleton className="h-72 w-xs rounded-xl" />
     //                           <div className="space-y-2">
     //                                <Skeleton className="h-4 w-56" />
     //                                <Skeleton className="h-4 w-48" />
     //                           </div>
     //                      </div>
     //                 ))}
     //            </div>
     //       )
     //  }

     //  if (isTopRelatedDataError) {
     //       return <div>Error of the get journal data. Check the devtools</div>
     //  }

     return (
          <div className="w-full">
               <div className="flex w-full flex-col gap-8 lg:hidden">
                    <SwiperRowLayout>
                         {/* {topRelatedData?.data.slice(0, 3).map((blog, idx) => (
                              <SwiperSlide key={idx}>
                                   <ArticleCard
                                        key={`${idx}-${blog.title}`}
                                        imgCover={blog.image}
                                        title={blog.title}
                                        date={new Date(blog.created_at).toISOString().split('T')[0]}
                                        rating={blog.average_rating}
                                        href={`/articles/${blog.id}`}
                                        views={blog.views}
                                        classNames="max-w-xs"
                                   />
                              </SwiperSlide>
                         ))} */}
                         {Array.from({ length: 12 }).map((_, idx) => (
                              <SwiperSlide key={idx}>
                                   <ArticleCard
                                        key={`${idx}`}
                                        imgCover={project.src}
                                        title={
                                             '«Ты ему нужен»: как рассылки помогли увеличить рекуррентные пожертвования'
                                        }
                                        rating={4}
                                        href={`/articles/`}
                                        views={10000}
                                        classNames="max-w-xs"
                                   />
                              </SwiperSlide>
                         ))}
                    </SwiperRowLayout>
                    {/* <div className="block lg:hidden">
                         <GradientButton
                              hasIsRoute
                              routePath="/cases"
                              title="Перейти в блог"
                              classNames="py-8 rounded-full text-white w-full"
                              secondClassnames="w-full lg:w-auto"
                         />
                    </div> */}
               </div>

               <div className="hidden items-center gap-4 lg:flex">
                    {/* {topRelatedData?.data.slice(0, 3).map((blog, indx) => (
                         <ArticleCard
                              key={`${indx}-${blog.title}`}
                              imgCover={blog.image}
                              title={blog.title}
                              date={new Date(blog.created_at).toISOString().split('T')[0]}
                              rating={blog.average_rating}
                              href={`/articles/${blog.id}`}
                              views={blog.views}
                              classNames="max-w-xs"
                         />
                    ))} */}
                    {Array.from({ length: 3 }).map((_, indx) => (
                         <ArticleCard
                              key={`${indx}`}
                              imgCover={project.src}
                              title={'«Ты ему нужен»: как рассылки помогли увеличить рекуррентные пожертвования'}
                              rating={4}
                              href={`/articles/`}
                              views={10000}
                              classNames="max-w-md"
                         />
                    ))}
               </div>
          </div>
     )
}
