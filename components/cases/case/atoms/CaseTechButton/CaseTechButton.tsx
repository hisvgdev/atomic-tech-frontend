import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { FC } from 'react'

import { CaseTechButtonProps } from './CaseTechButton.types'

export const CaseTechButton: FC<CaseTechButtonProps> = (props) => {
    const { icon, label } = props
    return (
        <Button className="border border-black h-10 rounded-full bg-transparent cursor-pointer text-black hover:bg-transparent">
            <Image src={icon} alt={`${label}-icon`} className="w-5 h-5" />
            <span className="font-bold text-xs">{label}</span>
        </Button>
    )
}
