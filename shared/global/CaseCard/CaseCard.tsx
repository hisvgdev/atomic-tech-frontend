import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import GradientButton from '@/shared/custom/GradientButton'
import Image from 'next/image'
import Link from 'next/link'

import type { FC } from 'react'

import { CaseCardProps } from './CaseCard.types'

export const CaseCard: FC<CaseCardProps> = (props) => {
     const { post } = props
     const { slug, title, covers, excerpt, custom_fields } = post

     return (
          <Link href={`/cases/${slug}`} className="h-full cursor-pointer">
               <Card className="h-full w-full cursor-pointer border-none bg-[#EEEFF5] p-0 shadow-none">
                    <CardHeader className="relative">
                         {covers.length > 0 && (
                              <Image
                                   src={covers?.[0].url}
                                   alt={covers?.[0].filename || title || ''}
                                   className="aspect-[4/3] h-96 w-full rounded-3xl object-cover"
                                   width={620}
                                   height={420}
                                   loading="lazy"
                              />
                         )}
                         <div className="absolute top-4 left-4">
                              {/* {categories &&
                              categories.map((tag, indxTag) => (
                                   <div
                                        key={`${indxTag}-${tag}`}
                                        className="rounded-full bg-[#F6F7FBCC] px-2 py-1 lg:px-4 lg:py-3"
                                   >
                                        <div className="flex items-center gap-3">
                                             <span className="text-[0.5rem] font-bold text-[#0F0F0F] lg:text-xs">
                                                  {tag}
                                             </span>
                                        </div>
                                   </div>
                              ))} */}
                         </div>
                         <div className="absolute bottom-4 left-0 flex items-center gap-4 xl:left-4">
                              {/* {destinations &&
                              [...destinations, ...destinations].map(({ name, description }, indxBdg) => (
                                   <div
                                        key={`${indxBdg}-${name}`}
                                        className="mx-3 w-full overflow-hidden rounded-2xl bg-[#000809CC] px-3 py-2.5 xl:mx-0"
                                   >
                                        <div className="flex items-center gap-3">
                                             <div className="flex items-center justify-center rounded-full bg-white p-1">
                                                  <StarIcon color="#000809CC" size={12} weight="fill" />
                                             </div>
                                             <div className="flex flex-col">
                                                  <h4 className="text-[0.5rem] font-bold text-white lg:text-xs">
                                                       {name}:
                                                  </h4>
                                                  <p className="line-clamp-2 text-[0.5rem] font-normal text-white lg:text-xs xl:max-w-80 xl:truncate">
                                                       {description}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              ))} */}
                         </div>
                    </CardHeader>
                    <CardContent className="flex h-full w-full flex-col px-4 py-6">
                         <div className="flex w-full items-start justify-between">
                              <div className="flex flex-col gap-1">
                                   <CardTitle className="line-clamp-2 text-lg leading-5 font-extrabold tracking-tight lg:text-3xl lg:leading-9">
                                        {title}
                                   </CardTitle>
                                   <CardDescription className="line-clamp-2 text-xs font-medium text-black lg:text-sm">
                                        {excerpt}
                                   </CardDescription>
                              </div>
                              <GradientButton
                                   hasIsRoute
                                   title="Сайт"
                                   classNames="rounded-full lg:py-4"
                                   onClick={(e) => {
                                        e.stopPropagation()
                                        window.open(custom_fields?.link_to_case, '_blank')
                                   }}
                              />
                         </div>
                    </CardContent>
               </Card>
          </Link>
     )
}
