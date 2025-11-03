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
                              className="h-full max-w-2xl rounded-3xl p-3 ring ring-[#E6E6E6]/50 lg:p-6"
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
                                   <h3 className="text-3xl font-bold">Фильтры</h3>
                                   <div className="flex grow flex-col gap-y-8">
                                        {children}
                                        <button
                                             type="button"
                                             className="w-full max-w-64 cursor-pointer rounded-full bg-white py-5 text-sm font-bold ring ring-gray-300 transition-all hover:bg-black hover:text-white hover:ring-black"
                                        >
                                             Сбросить
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
