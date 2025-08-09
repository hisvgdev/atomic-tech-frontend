'use client'

import AllProjectsButton from '@/components/dashboard/molecules/AllProjectsButton'
import { Skeleton } from '@/components/ui/skeleton'
import ArticleCard from '@/shared/global/ArticleCard'
import { getBlogCategories } from '@/utils/api/blogs/blog-categories/blog-categories'
import { getJournalBlogs } from '@/utils/api/journal-blogs/journal-blogs'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

import BlockchainSection from '../molecules/BlockchainSection'
import BusinessSection from '../molecules/BusinessSection'
import DesignSection from '../molecules/DesignSection'
import Heading from '../molecules/Heading'
import LifestyleSection from '../molecules/LifestyleSection'
import MailingSection from '../molecules/MailingSection'
import MarketingSection from '../molecules/MarketingSection'
import NeuralNetworksArticle from '../molecules/NeuralNetworksArticle'
import NewSection from '../molecules/NewSection'
import OtherTags from '../molecules/OtherTags'
import SpecialProjectSection from '../molecules/SpecialProjectSection'

export enum BlogCategoryName {
     NeuralNetworks = 'Нейросеть',
     Blockchain = 'Blockchain',
     Lifestyle = 'Лайфстайл',
     SpecialProjects = 'Спецпроекты',
     Design = 'Дизайн',
     Marketing = 'Маркетинг',
     Business = 'Бизнес',
}

export const Grid = () => {
     const searchParams = useSearchParams()
     const blogCategoryQuery = searchParams.get('blog_category_id') ?? ''

     const { data: blogCategoriesData, isLoading: isBlogCategoriesLoading } = useQuery({
          queryKey: ['blog-categories', blogCategoryQuery],
          queryFn: () => getBlogCategories({ search: blogCategoryQuery }),
          staleTime: 3000,
     })

     const {
          data: journalData,
          isLoading: isJournalLoading,
          isError: isJournalError,
     } = useQuery({
          queryKey: ['journal-blogs', blogCategoryQuery],
          enabled: !blogCategoryQuery || !!blogCategoriesData,
          queryFn: async () => {
               const params: Record<string, any> = {}
               if (blogCategoryQuery && blogCategoriesData?.data?.[0]?.id) {
                    params.blog_category_id = String(blogCategoriesData.data[0].id)
               }
               return await getJournalBlogs(params)
          },
          staleTime: 3000,
     })

     const isLoading = isBlogCategoriesLoading || isJournalLoading

     const now = useMemo(() => new Date(), [])
     const sevenDaysAgo = useMemo(() => new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000), [now])

     const newPosts = useMemo(
          () =>
               journalData?.data
                    ?.sort(() => Math.random() - 0.5)
                    .filter((post) => {
                         const createdAt = new Date(post.created_at)
                         return createdAt >= sevenDaysAgo && createdAt <= now
                    }) ?? [],
          [journalData, sevenDaysAgo, now],
     )

     const filterByCategory = (name: string) => journalData?.data?.filter((post) => post.category.name === name) ?? []

     const neuralPosts = filterByCategory(BlogCategoryName.NeuralNetworks)
     const blockchainPosts = filterByCategory(BlogCategoryName.Blockchain)
     const lifestylePosts = filterByCategory(BlogCategoryName.Lifestyle)
     const specialProjects = filterByCategory(BlogCategoryName.SpecialProjects)
     const designPosts = filterByCategory(BlogCategoryName.Design)
     const marketingPosts = filterByCategory(BlogCategoryName.Marketing)
     const businessPosts = filterByCategory(BlogCategoryName.Business)

     if (isLoading) {
          return (
               <div className="flex w-full flex-wrap items-center gap-8">
                    {Array.from({ length: 12 }).map((_, idx) => (
                         <div key={idx} className="flex flex-col space-y-3">
                              <Skeleton className="h-96 min-w-3xl rounded-xl" />
                              <div className="space-y-2">
                                   <Skeleton className="h-4 w-72" />
                                   <Skeleton className="h-4 w-64" />
                              </div>
                         </div>
                    ))}
               </div>
          )
     }

     if (isJournalError) {
          return <div className="text-red-500">Ошибка при загрузке статей. Проверьте консоль разработчика.</div>
     }

     const isFiltered = Boolean(blogCategoryQuery)

     return (
          <div className="flex flex-col gap-y-24 overflow-y-auto px-2 lg:px-0">
               {isFiltered ? (
                    <section className="flex flex-col gap-y-4 lg:px-7" data-dark="false">
                         <Heading title={blogCategoryQuery} desc="Самые свежие статьи в Proger" path="/" />
                         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                              {journalData?.data?.map((article) => (
                                   <ArticleCard
                                        key={article.id}
                                        title={article.title}
                                        date={new Date(article.created_at).toISOString().split('T')[0]}
                                        imgCover={article.image ?? ''}
                                        href={`/articles/${article.id}`}
                                        classNames="w-full h-full"
                                        ratingPosition="bottom"
                                        views={article.views}
                                        tag={article.category.name}
                                        withTag
                                   />
                              ))}
                         </div>
                    </section>
               ) : (
                    <>
                         <NewSection newJournalData={newPosts.slice(newPosts.length - 6)} />
                         <NeuralNetworksArticle neuralPosts={neuralPosts} />
                         <OtherTags />
                         <BlockchainSection blockchainData={blockchainPosts} />
                         <MailingSection />
                         <LifestyleSection lifestyleData={lifestylePosts} />
                         <SpecialProjectSection specialProjects={specialProjects} />
                         <DesignSection designProjectData={designPosts} />
                         <MarketingSection marketingPosts={marketingPosts} />
                         <BusinessSection businessProjectData={businessPosts} />
                    </>
               )}
               <AllProjectsButton link="/articles" title="Все статьи" />
          </div>
     )
}
