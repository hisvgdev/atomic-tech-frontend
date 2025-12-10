import { usePostsQuery } from '@/hooks/query/usePostsQuery'
import { PostStatus } from '@/utils/shared/atomic-client/types'
import React from 'react'

export const MoreCases = () => {
     const { data } = usePostsQuery({
          filters: {
               taxonomy: 'technology',
               status: PostStatus.PUBLISHED,
          },
     })

     return (
          <section data-dark="false" aria-labelledby="more-cases-heading" className="flex flex-col gap-6">
               <h2 id="more-cases-heading" className="text-4xl font-bold tracking-tight lg:text-6xl">
                    Больше кейсов
               </h2>
               <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
                    {/* {Array.from({ length: 2 }).map((project, indx) => (
                                        <CaseCard
                                             key={`${indx}`}
                                             post={{
                                                  id: '',
                                                  slug: '/',
                                                  title: 'Test',
                                                  covers: { url: blogImage.src },
                                                  excerpt: '/',
                                             }}
                                        />
                                   ))} */}
               </div>
          </section>
     )
}
