'use client'

import { ArrowLeftIcon, EyeIcon } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

import { ReaderHeadingProps } from './ReaderHeading.types'

export const ReaderHeading: FC<ReaderHeadingProps> = (props) => {
     const { title, description, updatedAt, views, category } = props

     const router = useRouter()

     const handleBack = () => {
          router.back()
     }
     return (
          <div className="flex flex-col gap-y-2.5 px-3 lg:px-7">
               <button
                    onClick={handleBack}
                    className="max-w-40 cursor-pointer rounded-full border border-[#676767] bg-transparent py-2 text-black hover:bg-transparent"
               >
                    <div className="flex items-center justify-center gap-x-3">
                         <ArrowLeftIcon />
                         <span>Назад</span>
                    </div>
               </button>
               {/* Additional info */}
               <div className="flex items-center gap-x-5">
                    <span className="leading-5 font-normal text-[#737373]">Обновлено: {updatedAt || '05.06.2025'}</span>
                    <div className="flex items-center">
                         <EyeIcon color="#737373" />
                         <span className="text-base font-normal text-[#737373]">{views || 0}</span>
                    </div>
                    <div className="rounded-full border border-[#E6E6E6] px-5 py-2 text-black">
                         <span className="text-sm font-medium">{category}</span>
                    </div>
               </div>
               {/* Header */}
               <div className="flex max-w-xs flex-col gap-y-2.5 lg:max-w-5xl">
                    <h1 className="text-4xl font-bold lg:text-5xl">
                         {title || 'Как создать сайт на Tilda: гайд для новичков'}
                    </h1>
                    <p className="font-nornal text-base lg:text-xl">
                         {description || 'И тестируем другие возможности конструктора сайта'}
                    </p>
               </div>
          </div>
     )
}
