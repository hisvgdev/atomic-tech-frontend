'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EyeIcon, StarIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { articleCardVariants } from '@/lib/cva/article-card-variants'
import { cn } from '@/lib/utils'

import { ArticleCardProps } from './ArticleCard.types'

const RatingStars: FC<{ value?: number }> = ({ value = 0 }) => (
     <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
               <StarIcon key={i} size={16} fill={i < value ? '#51535B' : '#D6D6D6'} weight="fill" />
          ))}
     </div>
)

export const ArticleCard: FC<ArticleCardProps> = (props) => {
     const {
          title,
          date,
          imgCover,
          classNames,
          hasRating = true,
          ratingPosition = 'top',
          rating,
          tag,
          withTag = false,
          views,
          href,
     } = props
     const showTopRating = hasRating && ratingPosition === 'top'
     const showBottomRating = hasRating && ratingPosition === 'bottom'

     return (
          <Card className={cn(articleCardVariants({ withTag }), classNames)}>
               <CardHeader>
                    {imgCover && (
                         <CardTitle>
                              <Image
                                   src={imgCover}
                                   alt={title}
                                   className="aspect-[16/9] w-full rounded-3xl object-cover"
                                   width={320}
                                   height={240}
                              />
                         </CardTitle>
                    )}

                    <CardDescription>
                         <div className="flex flex-wrap items-center gap-x-2">
                              {tag && (
                                   <div className="rounded-full border border-[#E6E6E6] px-5 py-2">
                                        <span className="text-xs font-bold text-[#000809]">{tag}</span>
                                   </div>
                              )}

                              <span className="text-sm font-light">
                                   {new Date(date || '').toLocaleDateString('ru-RU', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit',
                                   }) || '-'}
                              </span>

                              <div className="flex items-center">
                                   <EyeIcon size={18} color="#7D7D7D" />
                                   <span className="text-sm text-[#737373]">{views}</span>
                              </div>

                              {!withTag && showTopRating && <RatingStars value={rating} />}
                         </div>
                    </CardDescription>
               </CardHeader>

               <CardContent className="flex flex-1 flex-col gap-y-3">
                    {href ? (
                         <Link
                              href={href}
                              className="line-clamp-1 text-lg font-semibold text-black transition-all hover:underline"
                         >
                              {title}
                         </Link>
                    ) : (
                         <h4 className="line-clamp-1 text-lg font-semibold text-black">{title}</h4>
                    )}

                    {showBottomRating && <RatingStars value={rating} />}
               </CardContent>
          </Card>
     )
}
