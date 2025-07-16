'use client'

import { useIsMobile } from '@/hooks/useMediaQuery'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React, { FC } from 'react'

import { AllProjectsButtonProps } from './AllProjectsButton.types'

export const AllProjectsButton: FC<AllProjectsButtonProps> = (props) => {
    const { title = 'Все проекты' } = props
    const isMobile = useIsMobile()
    return (
        <section data-dark="false">
            <Link
                href="#"
                className="flex justify-center items-center gap-10 border-2 py-9 rounded-4xl border-black lg:gap-4 lg:border lg:py-12 lg:rounded-2xl"
            >
                <span className="font-bold text-2xl lg:text-5xl">{title}</span>
                <ArrowRightIcon size={!isMobile ? 48 : 24} weight="bold" className="mt-1 lg:mt-2" />
            </Link>
        </section>
    )
}
