'use client'

import { BLOGS_LIMITS } from '@/components/articles/molecules/ArticlesCards/ArticlesCards'
import { Skeleton } from '@/components/ui/skeleton'
import { usePostsQuery } from '@/hooks/query/usePostsQuery'
import project from '@/public/assets/images/projects/secondProject.png'
import CaseCard from '@/shared/global/CaseCard'
import Chip from '@/shared/global/Chip'
import { PostStatus } from '@/utils/shared/atomic-client/types'
import Link from 'next/link'

import type { FC } from 'react'

import { LastProjectsProps } from './LastProjects.types'

export const LastProjects: FC<LastProjectsProps> = (props) => {
     const { data: postsData, isLoading: isPostsDataLoading, isError: isPostsDataError } = usePostsQuery('posts')

     const publishedPostsData = Array.isArray(postsData) ? postsData.filter((t) => t.status !== PostStatus.DRAFT) : []

     return (
          <section data-dark="false">
               <div className="flex flex-col gap-6 px-3.5 lg:gap-18 lg:px-7">
                    <div className="flex w-full items-center gap-20 lg:gap-0">
                         <div className="w-full md:max-w-3xl">
                              <h1 className="text-3xl leading-6 font-bold tracking-tight md:text-6xl md:leading-11">
                                   Мы накопили большой опыт в разработке{' '}
                                   <span className="text-[#0085A6]">кастомных решений</span>
                              </h1>
                         </div>

                         <div className="ml-auto flex flex-col items-end gap-14">
                              <Chip number="1" title="Кейсы" maxW="max-w-42" />
                              <div className="hidden w-fit grid-cols-[200px_minmax(100px,_1fr)_60px] items-end gap-4 text-start md:grid">
                                   <Link href="/" className="text-sm font-bold transition-all hover:underline">
                                        Индивидуальные решения <sup>13</sup>
                                   </Link>
                                   <Link href="/" className="text-sm font-bold transition-all hover:underline">
                                        Интернет магазины <sup>10</sup>
                                   </Link>
                                   <Link href="/" className="text-sm font-bold transition-all hover:underline">
                                        Retail <sup>15</sup>
                                   </Link>
                                   <Link href="/" className="text-sm font-bold transition-all hover:underline">
                                        Web3 <sup>2</sup>
                                   </Link>
                                   <Link href="/" className="text-sm font-bold transition-all hover:underline">
                                        Web-сайты <sup>1</sup>
                                   </Link>
                                   <Link href="/" className="text-sm font-bold transition-all hover:underline">
                                        FMCG <sup>8</sup>
                                   </Link>
                              </div>
                         </div>
                    </div>
                    {isPostsDataError || isPostsDataLoading ? (
                         <div className="grid w-full grid-cols-1 items-center justify-center gap-9 px-4 md:grid-cols-2">
                              {Array.from({ length: 4 }).map((_, idx) => (
                                   <div key={idx} className="flex flex-col space-y-3">
                                        <Skeleton className="h-72 min-w-md rounded-xl" />
                                        <div className="space-y-2">
                                             <Skeleton className="h-4 w-72" />
                                             <Skeleton className="h-4 w-64" />
                                        </div>
                                   </div>
                              ))}
                         </div>
                    ) : (
                         <div className="grid w-full grid-cols-1 items-center justify-center gap-4 lg:max-w-fit lg:grid-cols-3">
                              {publishedPostsData.map((post, indx) => {
                                   return <CaseCard key={`${post.id}-${indx + 1}`} post={post} />
                              })}
                         </div>
                    )}
               </div>
          </section>
     )
}
