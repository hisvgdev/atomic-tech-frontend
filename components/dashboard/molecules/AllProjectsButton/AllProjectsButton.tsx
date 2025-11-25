'use client'

import { useIsMobile } from '@/hooks/useMediaQuery'
import { MotionLink } from '@/shared/custom/motion/MotionLink'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { motion } from 'framer-motion'
import React, { FC, useState } from 'react'

import { RoutesEnum } from '@/types/Routes.types'

import { AllProjectsButtonProps } from './AllProjectsButton.types'

export const AllProjectsButton: FC<AllProjectsButtonProps> = (props) => {
     const { title = 'Все проекты', link = RoutesEnum.cases } = props
     const isMobile = useIsMobile()
     const [isHover, setIsHover] = useState(false)

     return (
          <section data-dark="false">
               <MotionLink
                    href={link}
                    className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-4xl border-2 border-black py-9 transition-all lg:rounded-2xl lg:border lg:py-12"
                    style={{ backgroundColor: isHover ? '#000' : 'transparent' }}
                    animate={{
                         gap: isHover ? '2.5rem' : '1.5rem',
                         boxShadow: isHover ? '0 0 0 1px #676767' : 'none',
                    }}
                    transition={{ duration: 0.05 }}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
               >
                    <span
                         className="text-2xl font-bold tracking-tight transition-colors lg:text-5xl"
                         style={{ color: isHover ? '#fff' : '#000' }}
                    >
                         {title}
                    </span>

                    <ArrowRightIcon
                         size={!isMobile ? 48 : 24}
                         weight="bold"
                         className="mt-1 lg:mt-2"
                         color={isHover ? 'white' : 'black'}
                    />
               </MotionLink>
          </section>
     )
}
