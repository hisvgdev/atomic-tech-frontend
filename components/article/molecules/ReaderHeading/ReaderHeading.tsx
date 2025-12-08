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
          <div className="flex w-full flex-col gap-y-2.5 lg:max-w-[120rem]">
               <button
                    onClick={handleBack}
                    className="max-w-40 cursor-pointer rounded-full border border-[#676767] bg-transparent py-2 text-black hover:bg-transparent"
               >
                    <div className="flex items-center justify-center gap-x-3">
                         <ArrowLeftIcon />
                         <span>Вернуться</span>
                    </div>
               </button>
               <div className="hidden items-center gap-4 lg:flex">
                    <span className="leading-5 font-normal text-[#737373]">
                         Обновлено:{' '}
                         {new Date(updatedAt || '').toLocaleDateString('ru-RU', {
                              year: 'numeric',
                              month: 'long',
                              day: '2-digit',
                         }) || ''}
                    </span>
                    <div className="flex items-center gap-1">
                         <EyeIcon color="#737373" />
                         <span className="text-base font-normal text-[#737373]">{views || 0}</span>
                    </div>
                    {category.map((c, i) => (
                         <div key={`${c}-${i}`} className="rounded-full border border-[#E6E6E6] px-5 py-2 text-black">
                              <span className="text-sm font-medium">{c}</span>
                         </div>
                    ))}
               </div>
               {/* Header */}
               <div className="flex max-w-lg flex-col gap-y-2.5 lg:max-w-5xl">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{title}</h1>
                    <p className="font-nornal text-base">{description}</p>
               </div>
          </div>
     )
}
