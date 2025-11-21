import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { FC } from 'react'

import { CaseIconButtonProps } from './CaseIconButton.types'

export const CaseIconButton: FC<CaseIconButtonProps> = (props) => {
     const { label, icon } = props
     return (
          <Button className="h-10 cursor-pointer rounded-full bg-[#F6F7FB] text-black">
               {icon ? (
                    <Image src={icon} alt={`${label}-icon`} className="h-5 w-5" />
               ) : (
                    <div className="h-3 w-3 rounded-full bg-black" />
               )}
               <span className="text-xs font-bold">{label}</span>
          </Button>
     )
}
