'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { usePostsQuery } from '@/hooks/query/usePostsQuery'
import project from '@/public/assets/images/projects/secondProject.png'
import GradientButton from '@/shared/custom/GradientButton'
import SwiperRowLayout from '@/shared/global/SwiperRowLayout'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import ArticleCard from '../../../../shared/global/ArticleCard'
import { ArticleCardsProps } from './ArticleCards.types'

export const ArticleCards: FC<ArticleCardsProps> = (props) => {
     const {} = props
     const {
          data: articlesData,
          isLoading: isArticlesDataLoading,
          isError: isArticlesDataError,
     } = usePostsQuery({
          type: 'articles',
     })

     // const {
     //      data: topRelatedData,
     //      isLoading: isTopRelatedDataLoading,
     //      isError: isTopRelatedDataError,
     // } = useQuery({
     //      queryKey: ['journal-blog'],
     //      queryFn: async () => {
     //           const randomOffset = Math.floor(Math.random() * 7)
     //           // return await getJournalBlogs({
     //           //     limit: 3,
     //           //     offset: randomOffset,
     //           // })
     //           return await atomicClient.posts.list()
     //      },
     // })

     if (isArticlesDataLoading || isArticlesDataError) {
          return (
               <div className="flex w-auto flex-wrap items-center gap-8">
                    {Array.from({ length: 3 }).map((_, idx) => (
                         <div key={idx} className="flex flex-col space-y-3">
                              <Skeleton className="h-56 w-56 rounded-xl" />
                              <div className="space-y-2">
                                   <Skeleton className="h-4 w-56" />
                                   <Skeleton className="h-4 w-48" />
                              </div>
                         </div>
                    ))}
               </div>
          )
     }
     return (
          <div className="w-full">
               <div className="flex w-full flex-col gap-8 lg:hidden">
                    <SwiperRowLayout hiddenPagination slidesPerViews={1.8}>
                         {articlesData?.slice(0, 3).map((article, idx) => (
                              <SwiperSlide key={idx}>
                                   <ArticleCard
                                        key={`${idx}-${article.title}`}
                                        article={article}
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
                    {articlesData?.slice(0, 3).map((article, idx) => (
                         <ArticleCard key={`${idx}-${article.title}`} article={article} classNames="max-w-full" />
                    ))}
               </div>
          </div>
     )
}
