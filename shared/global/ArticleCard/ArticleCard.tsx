'use client'

import { Card } from '@/components/ui/card'
import { StarIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { articleCardVariants } from '@/lib/cva/article-card-variants'
import { cn } from '@/lib/utils'

import { ArticleCardProps } from './ArticleCard.types'

const RatingStars: FC<{ value?: number }> = ({ value = 0 }) => (
     <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
               <StarIcon key={i} size={16} fill={i < value ? '#E9E9E9' : '#767676'} weight="fill" />
          ))}
     </div>
)

export const ArticleCard: FC<ArticleCardProps> = (props) => {
     const { title, imgCover, classNames, hasRating = true, ratingPosition = 'bottom', rating, href } = props

     const showBottomRating = hasRating && ratingPosition === 'bottom'

     return (
          <Card
               className={cn(
                    'group relative h-80 cursor-pointer overflow-hidden rounded-4xl',
                    articleCardVariants({ withTag: false }),
                    classNames,
               )}
          >
               {imgCover && (
                    <Image
                         src={imgCover}
                         alt={title}
                         fill
                         className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
               )}

               <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />

               <div className="relative z-10 flex h-full flex-col justify-between p-4 text-white">
                    <div className="flex justify-between">
                         <div className="rounded-full bg-[#252A2B] p-2 px-3 text-xs font-semibold backdrop-blur-sm">
                              Бизнес
                         </div>
                         {showBottomRating && <RatingStars value={rating} />}
                    </div>

                    <div className="flex flex-col items-start gap-3">
                         {href ? (
                              <Link href={href} className="text-lg leading-tight font-semibold hover:underline">
                                   {title}
                              </Link>
                         ) : (
                              <h4 className="text-lg leading-tight font-semibold">{title}</h4>
                         )}
                    </div>
               </div>
          </Card>
     )
}
