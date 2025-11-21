'use client'

import Chip from '@/shared/global/Chip'

import type { FC } from 'react'

import { CustomSolutionsHeaderProps } from './CustomSolutionsHeader.types'

export interface CreateReviewInput {
     name: string
     company: string
     rating: number
     review_text: string
     agreement_accepted: boolean
}

export const CustomSolutionsHeader: FC<CustomSolutionsHeaderProps> = (props) => {
     const {} = props

     return (
          <div className="flex w-full items-center justify-between lg:px-8">
               <Chip number="4" title="Отзывы" maxW="max-w-42" />
               <h4 className="text-right leading-tight -tracking-[0.1rem] lg:-tracking-[0.2rem]">
                    <span className="text-3xl font-bold text-black md:text-6xl">
                         Что говорят наши <span className="text-[#0085A6]">клиенты</span>
                    </span>
               </h4>
          </div>
     )
}
