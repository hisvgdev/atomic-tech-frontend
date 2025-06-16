import coverImage from '@/public/assets/images/projects/secondProject.png'
import ArticleCard from '@/shared/global/ArticleCard'
import LeaveRequest from '@/shared/global/LeaveRequest'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React, { FC } from 'react'

import ReaderContent from '../../molecules/ReaderContent'
import { ReaderGridProps } from './ReaderGrid.types'

export const ReaderGrid: FC<ReaderGridProps> = (props) => {
    const {} = props
    return (
        <div className="flex flex-col gap-y-20">
            <ReaderContent />
            <div className="flex flex-col gap-y-8">
                <h2 className="text-5xl font-bold">Следующие темы</h2>
                <div className="w-full flex items-center gap-x-3">
                    {Array.from({ length: 4 }).map((_, indx) => (
                        <ArticleCard
                            key={indx}
                            imgCover={coverImage}
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            withTag
                            tag="Бизнес"
                        />
                    ))}
                </div>
                <Link
                    href="/articles"
                    className="w-full rounded-2xl border-2 border-black py-10 flex items-center justify-center"
                >
                    <div className="flex items-center gap-x-10">
                        <span className="font-bold text-5xl">Все статьи</span>
                        <ArrowRightIcon size={28} />
                    </div>
                </Link>
            </div>
            <LeaveRequest />
        </div>
    )
}
