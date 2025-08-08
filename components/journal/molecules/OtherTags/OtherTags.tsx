'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { getBlogCategories } from '@/utils/api/blogs/blog-categories/blog-categories'
import { getJournalBlogs } from '@/utils/api/journal-blogs/journal-blogs'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { FC, useMemo } from 'react'

export const OtherTags: FC = () => {
     const {
          data: categoriesData,
          isLoading: isCategoriesDataLoading,
          isError: isCategoriesError,
     } = useQuery({
          queryKey: ['blog-categories'],
          queryFn: () => getBlogCategories(),
     })

     const {
          data: journalData,
          isLoading: isJournalLoading,
          isError: isJournalError,
     } = useQuery({
          queryKey: ['journal-blogs'],
          queryFn: () => getJournalBlogs(),
     })

     const categoryCounts = useMemo(() => {
          if (!journalData?.data) return {}
          return journalData.data.reduce(
               (acc, post) => {
                    const category = post.category?.name
                    if (!category) return acc
                    acc[category] = (acc[category] || 0) + 1
                    return acc
               },
               {} as Record<string, number>,
          )
     }, [journalData])

     if (isCategoriesDataLoading || isJournalLoading) {
          return <Skeleton className="h-80 w-full rounded-3xl" />
     }
     if (isCategoriesError || isJournalError) return null

     return (
          <section data-dark="true" className="w-full bg-[#000809] py-20 lg:py-32">
               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
                    <div className="flex flex-col gap-16">
                         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                              {categoriesData?.data.map((cd) => (
                                   <Link
                                        href={`/journal?blog_category_id=${cd.name}`}
                                        key={cd.id}
                                        className="cursor-pointer"
                                   >
                                        <div className="flex items-center justify-center gap-x-2">
                                             <h4 className="text-2xl font-bold text-white">
                                                  <span className="underline">{cd.name}</span>
                                                  <sup className="text-white/50">{categoryCounts[cd.name] ?? 0}</sup>
                                             </h4>
                                             <ArrowRightIcon size={18} color="#9A9C9D" />
                                        </div>
                                   </Link>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     )
}
