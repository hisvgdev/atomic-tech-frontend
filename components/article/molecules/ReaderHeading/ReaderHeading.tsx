import { ArrowLeftIcon, EyeIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React, { FC } from 'react'

import { ReaderHeadingProps } from './ReaderHeading.types'

export const ReaderHeading: FC<ReaderHeadingProps> = (props) => {
    const {} = props
    return (
        <div className="flex flex-col gap-y-2.5">
            {/* Back button */}
            <Link
                href="/articles"
                className="bg-transparent border border-[#676767] text-black max-w-40 py-2 cursor-pointer rounded-full hover:bg-transparent"
            >
                <div className="flex items-center justify-center gap-x-3">
                    <ArrowLeftIcon />
                    <span>Назад</span>
                </div>
            </Link>
            {/* Additional info */}
            <div className="flex items-center gap-x-5">
                <span className="font-normal text-[#737373] leading-5">Обновлено: 05.06.2025</span>
                <div className="flex items-center">
                    <EyeIcon color="#737373" />
                    <span className="text-[#737373] font-normal text-base">16K</span>
                </div>
                <div className="rounded-full border border-[#E6E6E6] text-black py-2 px-5">
                    <span className="text-sm font-medium">Гайды</span>
                </div>
            </div>
            {/* Header */}
            <div className="flex flex-col gap-y-2.5 max-w-4xl">
                <h1 className="font-bold text-5xl">Как создать сайт на Tilda: гайд для новичков</h1>
                <p className="font-nornal text-xl">
                    И тестируем другие возможности конструктора сайта
                </p>
            </div>
        </div>
    )
}
