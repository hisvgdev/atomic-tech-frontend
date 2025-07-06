'use client'

import { useIsMobile } from '@/hooks/useMediaQuery'
import { ArrowRightIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'

import { cn } from '@/lib/utils'

import { MotionButton } from '../motion/MotionButton'
import { GradientButtonProps } from './GradientButton.types'

export const GradientButton: FC<GradientButtonProps> = (props) => {
    const {
        children,
        title,
        titleSize = 'text-lg',
        hasIsRoute,
        routePath,
        classNames,
        secondClassnames,
        iconSize = 24,
        isWhite,
    } = props
    const [isHover, setIsHover] = useState(false)
    const router = useRouter()
    const isMobile = useIsMobile()

    const handleRoute = () => {
        if (!hasIsRoute && !routePath) return
        router.push(routePath ? routePath : '')
    }

    return (
        <MotionButton
            className={cn('relative flex items-center cursor-pointer overflow-hidden', classNames)}
            style={{
                transition: 'border-color 0.3s ease',
                boxShadow: !isHover ? '0 0 0 1px #676767' : '',
                backgroundColor: 'transparent',
            }}
            animate={{
                gap: isHover ? '2rem' : '1.5rem',
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
                e.preventDefault()
                handleRoute()
            }}
        >
            <motion.div
                className={cn(
                    'absolute inset-0 rounded-full pointer-events-none',
                    secondClassnames,
                )}
                animate={{ opacity: isHover ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    background:
                        'linear-gradient(4.32deg, #9FE4F3 0.31%, #3FBFD9 34.32%, #157CAB 68.34%, #114B71 102.36%, #051824 136.38%)',
                }}
            />
            {children ? (
                children
            ) : (
                <div className="flex items-center gap-4">
                    <span
                        className={cn(`relative font-medium ${!isMobile ? titleSize : 'text-sm'}`, {
                            'text-black': !isHover,
                            'text-white': isHover || isWhite,
                        })}
                        style={{ zIndex: 10 }}
                    >
                        {title}
                    </span>
                    <ArrowRightIcon
                        size={iconSize}
                        color={isHover || isWhite ? 'white' : 'black'}
                        className="relative z-10"
                    />
                </div>
            )}
        </MotionButton>
    )
}
