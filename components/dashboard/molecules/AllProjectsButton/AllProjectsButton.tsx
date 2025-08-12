'use client'

import { useIsMobile } from '@/hooks/useMediaQuery'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React, { FC } from 'react'

import { AllProjectsButtonProps } from './AllProjectsButton.types'

export const AllProjectsButton: FC<AllProjectsButtonProps> = (props) => {
     const { title = 'Все проекты', link = '/cases' } = props
     const isMobile = useIsMobile()
     return (
          <section data-dark="false" className="px-3">
               <Link
                    href={link}
                    className="flex items-center justify-center gap-10 rounded-4xl border-2 border-black py-9 lg:gap-4 lg:rounded-2xl lg:border lg:py-12"
               >
                    <span className="text-2xl font-bold -tracking-[0.1rem] lg:text-5xl lg:-tracking-[0.2rem]">
                         {title}
                    </span>
                    <ArrowRightIcon size={!isMobile ? 48 : 24} weight="bold" className="mt-1 lg:mt-2" />
               </Link>
          </section>
     )
}
