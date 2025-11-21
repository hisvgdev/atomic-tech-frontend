import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpenIcon } from '@phosphor-icons/react/dist/ssr'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { CaseHistoryProps } from './CaseHistory.types'

export const CaseHistory: FC<CaseHistoryProps> = (props) => {
     const { projectHistory } = props

     const randomizeRelatedCaseItems = [...projectHistory.related_project_history_items].sort(() => 0.5 - Math.random())
     return (
          <section data-dark="true" className="h-full w-full rounded-[3.125rem] bg-black p-10">
               <div className="flex w-full flex-col items-center justify-center gap-24 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex max-w-4xl flex-col gap-y-9">
                         <h2 className="text-5xl font-bold -tracking-[0.23rem] text-white">История проекта</h2>
                         <div
                              className="flex flex-col gap-y-12 text-base font-medium text-white/70"
                              dangerouslySetInnerHTML={{ __html: projectHistory.content }}
                         />
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

                         {randomizeRelatedCaseItems.slice(0, 2).map((c, i) => (
                              <Card
                                   key={i}
                                   className="flex h-96 flex-col justify-between rounded-4xl border-none bg-[#1D1D1D] shadow-none"
                              >
                                   <CardHeader>
                                        <CardTitle>
                                             {c.photos.length > 0 ? (
                                                  <Image
                                                       src={c.photos[0]}
                                                       alt={`${c.title}-image`}
                                                       className="h-48 w-full rounded-2xl object-cover"
                                                       width={320}
                                                       height={180}
                                                  />
                                             ) : (
                                                  <div className="h-48 w-full rounded-2xl bg-black" />
                                             )}
                                        </CardTitle>
                                   </CardHeader>
                                   <CardContent>
                                        <Link
                                             href={`/cases/${c.id}`}
                                             className="line-clamp-2 font-semibold text-white hover:underline"
                                        >
                                             {c.description}
                                        </Link>
                                   </CardContent>
                                   <CardFooter>
                                        <time className="text-sm leading-6 font-light text-gray-300">
                                             {String(c.year)}
                                        </time>
                                   </CardFooter>
                              </Card>
                         ))}
                    </aside>
               </div>
          </section>
     )
}
