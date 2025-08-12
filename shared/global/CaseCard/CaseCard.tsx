import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import GradientButton from '@/shared/custom/GradientButton'
import { StarIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React, { FC } from 'react'

import { CaseCardProps } from './CaseCard.types'

export const CaseCard: FC<CaseCardProps> = (props) => {
     const { categories, description, destinations, id, photos, subcategories, technologies, title, website_link } =
          props

     return (
          <Card className="h-full w-full border-none shadow-none">
               <CardContent className="flex h-full w-full flex-col px-4">
                    {/* cover image */}
                    <div className="ring-primary-200 relative h-full w-full overflow-hidden rounded-[1.875rem] ring">
                         {photos && (
                              <Image
                                   src={photos[0]}
                                   alt={title}
                                   className="aspect-3/2 h-full w-full rounded-[1.875rem] object-cover"
                                   width={620}
                                   height={420}
                              />
                         )}
                         {/* benefits badge */}
                         <div className="absolute bottom-4 left-0 flex items-center gap-4 lg:left-4">
                              {destinations &&
                                   destinations.map(({ name, description }, indxBdg) => (
                                        <div
                                             key={`${indxBdg}-${name}`}
                                             className="w-auto overflow-hidden rounded-full bg-[#1C274C] px-3 py-2.5"
                                        >
                                             <div className="flex items-center gap-3">
                                                  <div className="flex items-center justify-center rounded-full bg-white p-1">
                                                       <StarIcon color="#1C274C" size={12} weight="fill" />
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
                    </div>

                    {/* content */}
                    <CardHeader className="p-0">
                         <div className="mt-4 flex w-full items-start justify-between">
                              <div className="flex max-w-62 flex-col lg:max-w-lg lg:gap-4">
                                   <CardTitle className="truncate text-lg font-extrabold -tracking-[0.075rem] lg:text-3xl">
                                        {title}
                                   </CardTitle>
                                   <CardDescription className="line-clamp-2 text-xs font-medium text-black lg:text-sm">
                                        {description}
                                   </CardDescription>
                              </div>
                              <GradientButton
                                   hasIsRoute
                                   routePath={`/cases/${id}`}
                                   title="Сайт"
                                   classNames="rounded-full lg:py-6"
                              />
                         </div>
                    </CardHeader>

                    {/* tags */}
                    <CardFooter className="mt-4 flex w-full flex-wrap items-center gap-2 p-0">
                         {categories &&
                              categories.map((tag, indxTag) => (
                                   <div
                                        key={`${indxTag}-${tag}`}
                                        className="ring-primary-100 rounded-full px-4 py-3 ring"
                                   >
                                        <div className="flex items-center gap-3">
                                             {/* <Image src={tag.icon} alt={tag} /> */}
                                             <span className="text-xs font-bold text-[#0F0F0F]">{tag}</span>
                                        </div>
                                   </div>
                              ))}
                    </CardFooter>
               </CardContent>
          </Card>
     )
}
