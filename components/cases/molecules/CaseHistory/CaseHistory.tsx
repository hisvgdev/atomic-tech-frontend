import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useGetMultiplePostsQuery } from '@/hooks/query/useGetMultiplePostsQuery'
import { usePostsQuery } from '@/hooks/query/usePostsQuery'
import { EyeIcon } from '@phosphor-icons/react'
import { BookOpenIcon } from '@phosphor-icons/react/dist/ssr'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { transformTextToHtml } from '../../../../utils/shared/transformTextToHtml'
import { CaseHistoryProps } from './CaseHistory.types'

export const CaseHistory: FC<CaseHistoryProps> = (props) => {
     const { blocks } = props
     const text = blocks.filter((t) => t.type === 'text')
     const relatedPost = blocks.filter((t) => t.type === 'related_post')
     const slugs = relatedPost.map((r) => r.post_id)

     const {
          data: relatedPostData,
          isLoading: isRelatedPostDataLoading,
          isError: isRelatedPostDataError,
     } = useGetMultiplePostsQuery({
          type: 'articles',
          slugs,
     })

     return (
          <section data-dark="true" className="h-full w-full rounded-[3.125rem] bg-black p-10">
               <div className="flex w-full flex-col items-center justify-center gap-24 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex max-w-4xl flex-col gap-y-9">
                         <h2 className="text-5xl font-bold -tracking-[0.23rem] text-white">История проекта</h2>
                         {text.map((b) => {
                              return (
                                   <div
                                        key={b.id}
                                        className="flex flex-col gap-y-12 text-base font-medium text-white/70"
                                        dangerouslySetInnerHTML={{ __html: transformTextToHtml(b.content.html) }}
                                   />
                              )
                         })}
                    </div>

                    <aside data-dark="true" className="flex max-w-sm grow flex-col gap-y-6">
                         <button
                              type="button"
                              className="flex cursor-pointer justify-between rounded-full border border-white bg-transparent px-6 py-5 text-white hover:bg-transparent"
                         >
                              <div className="flex items-center gap-x-4">
                                   <BookOpenIcon size={24} weight="fill" />
                                   <span>Блог по тематике</span>
                              </div>
                              <ArrowRight />
                         </button>
                         {relatedPostData?.map((post) => (
                              <Card
                                   key={post.id}
                                   className={'group relative h-80 cursor-pointer overflow-hidden rounded-4xl bg-white'}
                              >
                                   {post.covers?.[0] && (
                                        <Image
                                             src={post.covers[0].url}
                                             alt={post.covers[0].filename || post.title}
                                             fill
                                             className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                   )}

                                   <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />

                                   <div className="relative z-10 flex h-full flex-col justify-between p-4 text-white">
                                        <div className="flex justify-between">
                                             <div className="flex items-center gap-0.5 rounded-full bg-[#252A2B] px-4 py-2">
                                                  <EyeIcon />
                                                  <span className="text-xs font-semibold backdrop-blur-sm">16K</span>
                                             </div>
                                        </div>

                                        <div className="flex flex-col items-start gap-3">
                                             {post.slug ? (
                                                  <Link
                                                       href={`/articles/${post.slug}`}
                                                       className="text-lg leading-tight font-semibold hover:underline"
                                                  >
                                                       {post.title}
                                                  </Link>
                                             ) : (
                                                  <h4 className="text-lg leading-tight font-semibold">{post?.title}</h4>
                                             )}
                                        </div>
                                   </div>
                              </Card>
                         ))}
                    </aside>
               </div>
          </section>
     )
}
