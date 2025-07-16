'use client'

import { ArrowDownUp } from 'lucide-react'
import React, { FC, useState } from 'react'

import { ArticlesFiltersProps } from './ArticlesFilters.types'

export const ArticlesFilters: FC<ArticlesFiltersProps> = (props) => {
    const {} = props
    const [openFilter, setOpenFilter] = useState({
        watches: false,
        rating: false,
        withDate: false,
    })
    const handleOpenFilter = (id: number) => {
        switch (id) {
            case 0:
                setOpenFilter({
                    watches: true,
                    rating: false,
                    withDate: false,
                })
                break
            case 1:
                setOpenFilter({
                    watches: false,
                    rating: true,
                    withDate: false,
                })
                break
            case 2:
                setOpenFilter({
                    watches: false,
                    rating: false,
                    withDate: true,
                })
            default:
            case 0:
                setOpenFilter({
                    watches: false,
                    rating: false,
                    withDate: false,
                })
        }
    }
    return (
        <div className="relative">
            <div className="flex items-center gap-x-1.5">
                {['Просмотры', 'По оценке', 'По дате'].map((item, indx) => {
                    return (
                        <button
                            key={`${item}-${indx}`}
                            type="button"
                            className="flex items-center gap-x-2.5 rounded-full py-2.5 px-4 border border-[#E6E6E6] cursor-pointer lg:px-5"
                            onClick={() => handleOpenFilter(indx)}
                        >
                            <ArrowDownUp size={18} />
                            <span className="font-medium text-sm">{item}</span>
                        </button>
                    )
                })}
            </div>
            {openFilter.watches && (
                <div className="absolute top-12">
                    <div className="max-w-80 border border-[#E6E6E6] rounded-2xl backdrop-blur-2xl p-2">
                        <div className="flex flex-col gap-y-1.5">
                            <button
                                type="button"
                                className="w-full p-4 rounded-2xl text-xs font-medium hover:bg-black hover:text-white transition-all cursor-pointer"
                            >
                                Меньше просмотров
                            </button>
                            <div className="w-20 bg-gray-200 mx-auto h-px" />
                            <button
                                type="button"
                                className="w-full p-4 rounded-2xl text-xs font-medium hover:bg-black hover:text-white transition-all cursor-pointer"
                            >
                                Больше просмотров
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {openFilter.rating && (
                <div className="absolute top-12 left-38">
                    <div className="max-w-80 border border-[#E6E6E6] rounded-2xl backdrop-blur-2xl p-2">
                        <div className="flex flex-col gap-y-1.5">
                            <button
                                type="button"
                                className="w-full p-4 rounded-2xl text-xs font-medium hover:bg-black hover:text-white transition-all cursor-pointer"
                            >
                                Меньше оценок
                            </button>
                            <div className="w-20 bg-gray-200 mx-auto h-px" />
                            <button
                                type="button"
                                className="w-full p-4 rounded-2xl text-xs font-medium hover:bg-black hover:text-white transition-all cursor-pointer"
                            >
                                Больше оценок
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
