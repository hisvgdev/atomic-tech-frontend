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
                            className="object-cover w-full rounded-3xl aspect-[16/9]"
                            width={320}
                            height={240}
                        />
                    </CardTitle>
                )}

                <CardDescription>
                    <div className="flex items-center gap-x-2 flex-wrap">
                        {tag && (
                            <div className="rounded-full border border-[#E6E6E6] py-2 px-5">
                                <span className="font-bold text-xs text-[#000809]">{tag}</span>
                            </div>
                        )}

                        <span className="font-light text-sm">{date || '-'}</span>

                        <div className="flex items-center">
                            <EyeIcon size={18} color="#7D7D7D" />
                            <span className="text-sm text-[#737373]">{views}</span>
                        </div>

                        {!withTag && showTopRating && <RatingStars value={rating} />}
                    </div>
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-y-3 flex-1">
                {href ? (
                    <Link
                        href={href}
                        className="font-semibold text-black text-lg hover:underline transition-all"
                    >
                        {title}
                    </Link>
                ) : (
                    <h4 className="font-semibold text-black text-lg">{title}</h4>
                )}

                {showBottomRating && <RatingStars value={rating} />}
            </CardContent>
        </Card>
    )
}
