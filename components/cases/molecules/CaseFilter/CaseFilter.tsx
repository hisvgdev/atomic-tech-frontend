'use client'

import { motion } from 'motion/react'
import { FC } from 'react'

import { CaseFilterProps } from './CaseFilter.types'

export const CaseFilter: FC<CaseFilterProps> = (props) => {
     const { children } = props
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.2 }}
               className="p-6"
          >
               <h3 className="mb-8 text-3xl font-bold tracking-tight">Фильтры</h3>

               <div className="flex flex-col gap-y-8">
                    {children}

                    <button
                         type="button"
                         className="w-full max-w-64 cursor-pointer rounded-full bg-white py-5 text-sm font-bold ring ring-gray-300 transition-all hover:bg-black hover:text-white hover:ring-black"
                    >
                         Сбросить
                    </button>
               </div>
          </motion.div>
     )
}
