'use client'

import { Badge } from '@/components/ui/badge'
import React, { FC } from 'react'

import { cn } from '@/lib/utils'

import { ChipProps } from './Chip.types'

export const Chip: FC<ChipProps> = (props) => {
     const { maxW = 'max-w-64', number, title, isDark = false } = props
     return (
          <div className={`w-full rounded-full px-4 py-2 ring ring-[#CACACA] ${maxW}`}>
               <div className="flex w-full items-center justify-between gap-4">
                    <Badge
                         className={cn('h-7 w-7 rounded-full', {
                              'bg-white text-black': isDark,
                              'bg-black text-white': !isDark,
                         })}
                    >
                         {number}
                    </Badge>
                    <span
                         className={cn('text-base font-medium', {
                              'text-black': !isDark,
                              'text-white': isDark,
                         })}
                    >
                         {title}
                    </span>
               </div>
          </div>
     )
}
