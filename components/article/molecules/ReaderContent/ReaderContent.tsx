import coverImage from '@/public/assets/images/projects/secondProject.png'
import Image from 'next/image'
import React, { FC } from 'react'

import ReaderRating from '../ReaderRating'
import { ReaderContentProps } from './ReaderContent.types'

export const ReaderContent: FC<ReaderContentProps> = (props) => {
    const { caseItems, content, image } = props

    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col w-full gap-6 lg:px-4 lg:flex-row lg:justify-between">
                <div className="w-full flex flex-col gap-y-4 lg:w-1/5">
                    <h4 className="font-semibold text-base">Содержание:</h4>
                    {[
                        'Как устроена Tilda и что здесь можно сделать',
                        'Какие тарифы есть на Tilda',
                        'Как создать сайт на Tilda: пошаговая инструкция',
                        'Что ещё умеет Tilda',
                        'Коротко о главном',
                    ].map((item, indx) => (
                        <span key={`${indx}-${item}`} className="font-normal text-[#737373]">
                            {item}
                        </span>
                    ))}
                </div>

                <div className="w-full flex flex-col gap-y-4 items-center lg:w-3/6">
                    <Image
                        src={image || coverImage}
                        alt="cover-image"
                        width={480}
                        height={480}
                        className="w-full rounded-[1.875rem] object-cover"
                    />
                    <span
                        className="font-medium text-base text-start"
                        dangerouslySetInnerHTML={{ __html: content as string }}
                    />
                    <ReaderRating />
                </div>

                <div className="hidden lg:flex max-w-1/6 flex-col gap-y-2 ">
                    <h4 className="font-semibold text-base">Также по теме:</h4>
                    <ul className="text-base text-[#737373] list-none pl-0.5 flex flex-col gap-y-4">
                        {[
                            '5 лучших конструкторов сайтов для быстрого старта',
                            'Просто текст заголовка',
                            'А это непросто текст заголовка',
                        ].map((itemList, indx) => {
                            return (
                                <li
                                    key={`${indx}-${itemList}`}
                                    className="text-[#737373] underline"
                                >
                                    {itemList}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
