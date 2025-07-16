import { StarIcon } from '@phosphor-icons/react/dist/ssr'
import React, { FC } from 'react'

import { ReaderRatingProps } from './ReaderRating.types'

export const ReaderRating: FC<ReaderRatingProps> = (props) => {
    const {} = props
    return (
        <div className="p-8 rounded-4xl border border-[#E6E6E6] lg:p-20">
            <div className="flex flex-col items-center justify-center gap-y-9">
                <h3 className="font-bold text-2xl lg:text-5xl">Оцените нашу статью</h3>
                <div className="flex items-center  w-full gap-4 lg:gap-0 lg:justify-between">
                    {['ужасно', 'неинтересно', 'не очень', 'хорошо', 'интересно'].map(
                        (item, indx) => (
                            <button
                                type="button"
                                key={`${item}-${indx}`}
                                className="flex flex-col items-center cursor-pointer"
                            >
                                <StarIcon size={48} color="#51535B" weight="fill" />
                                <span className="text-center whitespace-nowrap font-medium text-xs lg:text-base">
                                    {item}
                                </span>
                            </button>
                        ),
                    )}
                </div>
            </div>
        </div>
    )
}
