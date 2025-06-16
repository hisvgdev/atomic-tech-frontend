import { StarIcon } from '@phosphor-icons/react/dist/ssr'
import React, { FC } from 'react'

import { ReaderRatingProps } from './ReaderRating.types'

export const ReaderRating: FC<ReaderRatingProps> = (props) => {
    const {} = props
    return (
        <div className="p-20 rounded-4xl border border-[#E6E6E6]">
            <div className="flex flex-col items-center justify-center gap-y-9">
                <h3 className="font-bold text-5xl">Оцените нашу статью</h3>
                <div className="flex items-center justify-between w-full">
                    {['ужасно', 'неинтересно', 'не очень', 'хорошо', 'интересно'].map(
                        (item, indx) => (
                            <button
                                type="button"
                                key={`${item}-${indx}`}
                                className="flex flex-col items-center cursor-pointer"
                            >
                                <StarIcon size={48} color="#51535B" weight="fill" />
                                <span className="text-center font-bold">{item}</span>
                            </button>
                        ),
                    )}
                </div>
            </div>
        </div>
    )
}
