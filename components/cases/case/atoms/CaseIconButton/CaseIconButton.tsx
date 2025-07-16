import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { FC } from 'react'

import { CaseIconButtonProps } from './CaseIconButton.types'

export const CaseIconButton: FC<CaseIconButtonProps> = (props) => {
    const { label, icon } = props
    return (
        <Button className="border border-black h-10 rounded-full bg-transparent cursor-pointer text-black hover:bg-transparent">
            {icon ? (
                <Image src={icon} alt={`${label}-icon`} className="w-5 h-5" />
            ) : (
                <div className="w-3 h-3 bg-black rounded-full" />
            )}
            <span className="font-bold text-xs">{label}</span>
        </Button>
    )
}
