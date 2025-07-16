import Image from 'next/image'
import React, { FC } from 'react'

import { AmenitiesCardProps } from './AmenitiesCard.types'

export const AmenitiesCard: FC<AmenitiesCardProps> = (props) => {
    const { icon, title, description } = props

    return (
        <div className="relative w-full h-full flex items-center justify-center px-6 py-6 rounded-2xl overflow-hidden">
            {/* Декоративный бордер */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl z-0">
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/20 rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-white/20 rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/20 rounded-br-3xl" />
            </div>

            {/* Контент */}
            <div className="relative z-10 flex items-center gap-6">
                <Image src={icon} alt={title} className="w-20 h-20 object-contain" />
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg text-white font-bold leading-snug lg:text-xl">
                        {title}
                    </h3>
                    <p className="font-normal text-xs text-white/50 lg:text-sm">{description}</p>
                </div>
            </div>
        </div>
    )
}
