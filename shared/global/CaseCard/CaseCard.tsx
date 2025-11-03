'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import GradientButton from '@/shared/custom/GradientButton'
import { StarIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

import { CaseCardProps } from './CaseCard.types'

export const CaseCard: FC<CaseCardProps> = (props) => {
     const { categories, description, destinations, id, photos, title, website_link } = props
     const router = useRouter()

     return (
          <Card
               className="h-full max-w-full cursor-pointer border-none bg-[#EEEFF5] p-0 shadow-none"
               onClick={() => router.push(`/cases/${id}`)}
          >
               <CardHeader className="relative">
                    {photos && (
                         <Image
                              src={photos[0]}
                              alt={title}
                              className="aspect-3/2 h-full w-full rounded-[1.875rem] object-cover"
                              width={620}
                              height={420}
                         />
                    )}
                    <div className="absolute top-4 left-4">
                         {categories &&
                              categories.map((tag, indxTag) => (
                                   <div key={`${indxTag}-${tag}`} className="rounded-full bg-[#F6F7FBCC] px-4 py-3">
                                        <div className="flex items-center gap-3">
                                             {/* <Image src={tag.icon} alt={tag} /> */}
                                             <span className="text-xs font-bold text-[#0F0F0F]">{tag}</span>
                                        </div>
                                   </div>
                              ))}
                    </div>
                    <div className="absolute bottom-4 left-0 flex items-center gap-4 lg:left-4">
                         {destinations &&
                              destinations.map(({ name, description }, indxBdg) => (
                                   <div
                                        key={`${indxBdg}-${name}`}
                                        className="w-auto overflow-hidden rounded-full bg-[#000809CC] px-3 py-2.5"
                                   >
                                        <div className="flex items-center gap-3">
                                             <div className="flex items-center justify-center rounded-full bg-white p-1">
                                                  <StarIcon color="#000809CC" size={12} weight="fill" />
                                             </div>
                                             <div className="flex flex-col">
                                                  <h4 className="text-xs font-bold text-white">{name}:</h4>
                                                  <p className="line-clamp-2 text-xs font-normal text-white lg:max-w-80 lg:truncate">
                                                       {description}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                    </div>
               </CardHeader>
               <CardContent className="flex h-full w-full flex-col px-4 py-6">
                    <div className="flex w-full items-start justify-between">
                         <div className="flex flex-col">
                              <CardTitle className="line-clamp-1 text-lg font-extrabold -tracking-[0.075rem] lg:text-3xl">
                                   {title}
                              </CardTitle>
                              <CardDescription className="line-clamp-2 text-xs font-medium text-black lg:text-sm">
                                   {description}
                              </CardDescription>
                         </div>
                         <GradientButton
                              hasIsRoute
                              title="Сайт"
                              classNames="rounded-full lg:py-6"
                              onClick={(e) => {
                                   e.stopPropagation()
                                   window.open(website_link, '_blank')
                              }}
                         />
                    </div>
               </CardContent>
          </Card>
     )
}
