'use client'

import { motion } from 'motion/react'
import React, { FC, useState } from 'react'

import { BenefitsLeftSideProps } from './BenefitsLeftSide.types'

const mockMetrics = [
     {
          id: 'project',
          value: '100+',
          content: 'Реализованных проектов',
     },
     {
          id: 'summary',
          value: '200M',
          additionalValue: '',
          content: 'Общая капитализация проектов',
     },
     {
          id: 'experience',
          value: '5',
          content: 'Лет на рынке',
     },
     {
          id: 'client',
          value: '86',
          content: 'Довольных клиентов',
     },
]

const gradientConfig: { [key: string]: string } = {
     project: '210.77% 210.77% at 49.9% 200%',
     summary: '210.77% 210.77% at 49.9% 200%',
     client: '210.77% 210.77% at 49.9% -110.77%',
     experience: '210.77% 210.77% at 49.9% -110.77%',
}

export const BenefitsLeftSide: FC<BenefitsLeftSideProps> = () => {
     const [hoveredIndex, setHoveredIndex] = useState<number>(0)

     return (
          <div className="grid w-full grid-cols-2 gap-4 lg:max-w-2xl">
               {mockMetrics.map((item, index) => {
                    const isHovered = hoveredIndex === index
                    const gradientAngle = gradientConfig[item.id] || 'to bottom'
                    return (
                         <div className="relative" key={`${index}-${item.id}`}>
                              <motion.div
                                   onMouseEnter={() => setHoveredIndex(index)}
                                   onMouseLeave={() => setHoveredIndex(index)}
                                   style={{
                                        backgroundColor: '#090F10',
                                   }}
                                   animate={{
                                        boxShadow: isHovered ? '0 0 0 1px #676767' : 'none',
                                   }}
                                   transition={{ duration: 0.3 }}
                                   className="relative h-48 w-full max-w-60 overflow-hidden rounded-[1.875rem] p-4"
                              >
                                   <motion.div
                                        className="pointer-events-none absolute inset-0 z-10 rounded-[1.875rem] brightness-125"
                                        animate={{ opacity: isHovered ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                             background: `radial-gradient(${gradientAngle}, #00080A 74.04%, #006A74 89.42%, #C2FFF9 100%)`,
                                        }}
                                   />

                                   <div className="relative z-30 flex flex-col items-start gap-2">
                                        <div className="flex items-end">
                                             <motion.h4
                                                  className={`text-6xl font-bold -tracking-[0.1rem] transition-colors duration-300 lg:text-7xl lg:-tracking-[0.3rem] ${
                                                       isHovered
                                                            ? 'bg-gradient-to-b from-white via-[#BEBEBE] to-[#646464] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
                                                            : 'text-white/50'
                                                  }`}
                                             >
                                                  {item.value}
                                             </motion.h4>

                                             {/* {item.additionalValue && (
                                                  <span
                                                       className={`font-bold ${!isHovered ? 'text-white/50' : 'text-white'} lg:pb-2 lg:text-2xl ${
                                                            isHovered
                                                                 ? 'bg-gradient-to-b from-white via-[#BEBEBE] to-[#646464] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
                                                                 : 'text-white/50'
                                                       }`}
                                                  >
                                                       {item.additionalValue.toUpperCase()}
                                                  </span>
                                             )} */}
                                        </div>
                                        <p
                                             className={`text-base font-normal ${!isHovered ? 'text-white/30' : 'text-white'} lg:text-lg`}
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
