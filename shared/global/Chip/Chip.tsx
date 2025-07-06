'use client'

import { Badge } from '@/components/ui/badge'
import React, { FC } from 'react'

import { cn } from '@/lib/utils'

import { ChipProps } from './Chip.types'

export const Chip: FC<ChipProps> = (props) => {
    const { maxW = 'max-w-64', number, title, isDark = false } = props
    return (
        <div className={`w-full rounded-full ring ring-[#CACACA] py-3.5 px-4 ${maxW}`}>
            <div className="w-full flex items-center justify-between">
                <Badge
                    className={cn('w-9 h-9 rounded-full', {
                        'bg-white text-black': isDark,
                        'bg-black text-white': !isDark,
                    })}
                >
                    {number}
                </Badge>
                <span
                    className={cn('font-medium text-base', {
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
