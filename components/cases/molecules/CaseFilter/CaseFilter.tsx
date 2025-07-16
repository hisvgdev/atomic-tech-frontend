'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, { forwardRef } from 'react'

import { CaseFilterProps } from './CaseFilter.types'

export const CaseFilter = forwardRef<HTMLDivElement, CaseFilterProps>((props, ref) => {
    const { isFilterOpen, children } = props
    return (
        <div className="absolute top-0 right-1 z-20 lg:top-0" ref={ref}>
            <AnimatePresence>
                {isFilterOpen && (
                    <motion.div
                        className="max-w-2xl h-full ring ring-[#E6E6E6]/50 rounded-3xl p-3 lg:p-6"
                        style={{
                            backdropFilter: 'blur(20px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex flex-col gap-y-8">
                            <h3 className="font-bold text-3xl">Фильтры</h3>
                            <div className="flex flex-col gap-y-8 grow">
                                {children}
                                <button
                                    type="button"
                                    className="max-w-64 w-full py-5 font-bold text-sm cursor-pointer ring ring-gray-300 rounded-full hover:bg-black hover:text-white hover:ring-black transition-all"
                                >
                                    Сбросить настройки
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
})

CaseFilter.displayName = 'CaseFilter'
