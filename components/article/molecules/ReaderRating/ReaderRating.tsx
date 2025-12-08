'use client'

import { AtomicClient } from '@/utils/shared/atomic-client/atomic-client'
import { ReviewCreate } from '@/utils/shared/atomic-client/types'
import { StarIcon } from '@phosphor-icons/react/dist/ssr'
import { AxiosError } from 'axios'
import React, { FC, useState } from 'react'
import toast from 'react-hot-toast'

import { ReaderRatingProps } from './ReaderRating.types'

const handleRating = async (body: ReviewCreate) => {
     try {
          const atomicClient = new AtomicClient({
               baseURL: process.env.NEXT_PUBLIC_API_BASE_URL!,
          })
          await atomicClient.ready
          return toast.promise(atomicClient.reviews.create(body), {
               success: 'Спасибо за вашу отметку!',
               loading: 'Подождите немного мы записываем вашу отметку',
               error: 'Произошла ошибка, возможно вы уже оценивали данную статью!',
          })
     } catch (error) {
          if (error instanceof AxiosError) {
               console.error('Axios Error', error.response)
          } else {
               console.error('Default Error:', error)
          }
     }
}

export const ReaderRating: FC<ReaderRatingProps> = (props) => {
     const { id, ratingsCount, content } = props

     const [hoverIndex, setHoverIndex] = useState<number | null>(null)
     const [selectedIndex, setSelectedIndex] = useState<number | null>(ratingsCount || null)

     const handleClick = async (index: number) => {
          setSelectedIndex(index)
          await handleRating({
               content,
               post_id: '',
               rating: ratingsCount,
               title: '',
               user_id: '',
          })
     }
     return (
          <div className="lg:w-fit">
               <div className="flex flex-col items-center justify-center gap-4">
                    <h3 className="text-2xl font-bold lg:text-5xl">Оцените нашу статью</h3>
                    <div className="flex w-full items-center justify-center gap-4 lg:justify-between lg:gap-0">
                         {['ужасно', 'неинтересно', 'не очень', 'хорошо', 'интересно'].map((item, indx) => {
                              const isFilled =
                                   hoverIndex !== null
                                        ? indx <= hoverIndex
                                        : selectedIndex !== null && indx <= selectedIndex

                              return (
                                   <button
                                        type="button"
                                        key={`${item}-${indx}`}
                                        className="flex cursor-pointer flex-col items-center"
                                        onMouseEnter={() => setHoverIndex(indx)}
                                        onMouseLeave={() => setHoverIndex(null)}
                                        // onClick={() => handleClick(indx)}
                                   >
                                        <StarIcon
                                             size={48}
                                             color={isFilled ? '#51535B' : '#51535B'}
                                             weight={isFilled ? 'fill' : 'thin'}
                                        />
                                        <span className="text-center text-xs font-medium whitespace-nowrap lg:text-base">
                                             {item}
                                        </span>
                                   </button>
                              )
                         })}
                    </div>
               </div>
          </div>
     )
}
