'use client'

import { motion } from 'motion/react'
import React, { FC, useState } from 'react'

import { BenefitsLeftSideProps } from './BenefitsLeftSide.types'

const mockMetrics = [
    {
        id: 'project',
        value: '70',
        content: 'Реализованных проектов',
    },
    {
        id: 'summary',
        value: '1,2',
        additionalValue: 'млрд',
        content: 'Капитализация проектов',
    },
    {
        id: 'client',
        value: '80',
        content: 'Довольных клиентов',
    },
    {
        id: 'experience',
        value: '5+',
        content: 'Лет опыта',
    },
]

const gradientConfig: { [key: string]: string } = {
    project: 'to bottom',
    summary: 'to left',
    client: 'to top',
    experience: 'to bottom right',
}

export const BenefitsLeftSide: FC<BenefitsLeftSideProps> = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number>(0)

    return (
        <div className="grid grid-cols-2 gap-1.5 w-full lg:max-w-2xl">
            {mockMetrics.map((item, index) => {
                const isHovered = hoveredIndex === index
                const gradientAngle = gradientConfig[item.id] || 'to bottom'
                return (
                    <div className="relative" key={`${index}-${item.id}`}>
                        <motion.div
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(index)}
                            style={{
                                transition: 'border-color 0.3s ease',
                                backgroundColor: '#090F10',
                            }}
                            animate={{
                                boxShadow: isHovered ? '0 0 0 1px #676767' : 'none',
                                gap: isHovered ? '2rem' : '1.5rem',
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full border border-white/20 p-8 rounded-[1.875rem] lg:border-none lg:p-12"
                        >
                            <motion.div
                                className="absolute inset-0 z-10 brightness-125 rounded-[1.875rem] pointer-events-none"
                                animate={{ opacity: isHovered ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    background: `linear-gradient(${gradientAngle}, #00636F, #000809)`,
                                }}
                            />
                            <div className="flex flex-col items-start gap-2 relative z-20">
                                <div className="flex items-end">
                                    <motion.h4
                                        className={`font-bold text-6xl -tracking-[0.3rem] transition-colors duration-300 lg:text-9xl ${
                                            isHovered
                                                ? 'text-transparent bg-clip-text bg-gradient-to-b from-white via-[#BEBEBE] to-[#646464] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
                                                : 'text-white/50'
                                        }`}
                                    >
                                        {item.value}
                                    </motion.h4>

                                    {item.additionalValue && (
                                        <span
                                            className={`font-bold ${!isHovered ? 'text-white/50' : 'text-white'} lg:pb-2`}
                                        >
                                            {item.additionalValue.toUpperCase()}
                                        </span>
                                    )}
                                </div>
                                <p
                                    className={`font-normal text-base ${!isHovered ? 'text-white/30' : 'text-white'} lg:whitespace-nowrap lg:text-lg`}
                                >
                                    {item.content}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )
            })}
        </div>
    )
}
