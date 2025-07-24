'use client'

import { blogRating } from '@/utils/actions/blog-rating.action'
import { StarIcon } from '@phosphor-icons/react/dist/ssr'
import React, { FC, useState } from 'react'
import toast from 'react-hot-toast'

import { ReaderRatingProps } from './ReaderRating.types'

const handleRating = async (blog_id: number, rating: number) => {
    const bodyRequest = {
        blog_id,
        rating,
    }

    const res = toast.promise(blogRating(bodyRequest), {
        success: 'Спасибо за вашу отметку!',
        loading: 'Подождите немного мы записываем вашу отметку',
        error: 'Произошла ошибка, возможно вы уже оценивали данную статью!',
    })

    return res
}

export const ReaderRating: FC<ReaderRatingProps> = (props) => {
    const { id } = props

    const [hoverIndex, setHoverIndex] = useState<number | null>(null)
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const handleClick = async (index: number) => {
        setSelectedIndex(index)
        await handleRating(id, index + 1)
    }
    return (
        <div className="p-8 rounded-4xl border border-[#E6E6E6] lg:p-20">
            <div className="flex flex-col items-center justify-center gap-y-9">
                <h3 className="font-bold text-2xl lg:text-5xl">Оцените нашу статью</h3>
                <div className="flex items-center w-full gap-4 lg:gap-0 lg:justify-between">
                    {['ужасно', 'неинтересно', 'не очень', 'хорошо', 'интересно'].map(
                        (item, indx) => {
                            const isFilled =
                                hoverIndex !== null
                                    ? indx <= hoverIndex
                                    : selectedIndex !== null && indx <= selectedIndex

                            return (
                                <button
                                    type="button"
                                    key={`${item}-${indx}`}
                                    className="flex flex-col items-center cursor-pointer"
                                    onMouseEnter={() => setHoverIndex(indx)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                    onClick={() => handleClick(indx)}
                                >
                                    <StarIcon
                                        size={48}
                                        color={isFilled ? '#51535B' : '#51535B'}
                                        weight={isFilled ? 'fill' : 'thin'}
                                    />
                                    <span className="text-center whitespace-nowrap font-medium text-xs lg:text-base">
                                        {item}
                                    </span>
                                </button>
                            )
                        },
                    )}
                </div>
            </div>
        </div>
    )
}
