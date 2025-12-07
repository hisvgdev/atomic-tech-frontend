import Image from 'next/image'
import React, { FC } from 'react'

import { AmenitiesCardProps } from './AmenitiesCard.types'

export const AmenitiesCard: FC<AmenitiesCardProps> = (props) => {
     const { icon, title, description } = props

     return (
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl px-6 py-6">
               {/* Декоративный бордер */}
               <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl">
                    <div className="absolute top-0 left-0 h-16 w-16 rounded-tl-3xl border-t border-l border-white/20" />
                    <div className="absolute top-0 right-0 h-16 w-16 rounded-tr-3xl border-t border-r border-white/20" />
                    <div className="absolute bottom-0 left-0 h-16 w-16 rounded-bl-3xl border-b border-l border-white/20" />
                    <div className="absolute right-0 bottom-0 h-16 w-16 rounded-br-3xl border-r border-b border-white/20" />
               </div>

               {/* Контент */}
               <div className="relative z-10 flex items-center gap-6">
                    <Image src={icon} alt={title} className="h-20 w-20 object-contain" />
                    <div className="flex flex-col gap-2">
                         <h3 className="text-lg leading-snug font-bold -tracking-[0.075rem] text-white lg:text-xl">
                              {title}
                         </h3>
                         <p className="text-xs font-normal text-white/50 lg:text-sm">{description}</p>
                    </div>
               </div>
          </div>
     )
}
