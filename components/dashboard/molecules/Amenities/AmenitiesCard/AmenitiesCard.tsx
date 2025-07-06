import Image from 'next/image'
import React, { FC } from 'react'

import { AmenitiesCardProps } from './AmenitiesCard.types'

export const AmenitiesCard: FC<AmenitiesCardProps> = (props) => {
    const { icon, title, description } = props

    return (
        <div className="relative max-w-lg flex items-center justify-center px-14 py-8 xl:h-56 rounded-2xl overflow-hidden">
            {/* Декоративный бордер */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl z-0">
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/20 rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-white/20 rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/20 rounded-br-3xl" />
            </div>

            {/* Контент */}
            <div className="relative z-10 flex items-center gap-10 lg:flex-row">
                <Image src={icon} alt={title} />
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl text-white font-bold leading-7">{title}</h3>
                    <p className="font-normal text-sm text-white/50">{description}</p>
                </div>
            </div>
        </div>
    )
}
