'use client'

import { motion } from 'motion/react'
import React, { FC, useState } from 'react'

import { BenefitsLeftSideProps } from './BenefitsLeftSide.types'

const mockMetrics = [
     {
          id: 'project',
          value: '>70',
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
     project: '210.77% 210.77% at 49.9% 200%',
     summary: '210.77% 210.77% at 49.9% 200%',
     client: '210.77% 210.77% at 49.9% -110.77%',
     experience: '210.77% 210.77% at 49.9% -110.77%',
}

export const BenefitsLeftSide: FC<BenefitsLeftSideProps> = () => {
     const [hoveredIndex, setHoveredIndex] = useState<number>(0)

     return (
          <div className="grid w-full grid-cols-2 gap-1.5 lg:max-w-2xl">
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
                                   className="relative h-full w-full overflow-hidden rounded-[1.875rem] p-8 lg:p-12"
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
                                                  className={`text-6xl font-bold -tracking-[0.1rem] transition-colors duration-300 lg:text-9xl lg:-tracking-[0.3rem] ${
                                                       isHovered
                                                            ? 'bg-gradient-to-b from-white via-[#BEBEBE] to-[#646464] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
                                                            : 'text-white/50'
                                                  }`}
                                             >
                                                  {item.value}
                                             </motion.h4>

                                             {item.additionalValue && (
                                                  <span
                                                       className={`font-bold ${!isHovered ? 'text-white/50' : 'text-white'} lg:pb-2 lg:text-2xl ${
                                                            isHovered
                                                                 ? 'bg-gradient-to-b from-white via-[#BEBEBE] to-[#646464] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
                                                                 : 'text-white/50'
                                                       }`}
                                                  >
                                                       {item.additionalValue.toUpperCase()}
                                                  </span>
                                             )}
                                        </div>
                                        <p
                                             className={`text-base font-normal ${!isHovered ? 'text-white/30' : 'text-white'} lg:text-lg lg:whitespace-nowrap`}
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
