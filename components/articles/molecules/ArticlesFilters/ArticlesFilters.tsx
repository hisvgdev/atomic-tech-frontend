'use client'

import { ArrowDownUp } from 'lucide-react'
import React, { FC, useEffect, useRef, useState } from 'react'

import { ArticlesFiltersProps } from './ArticlesFilters.types'

export const ArticlesFilters: FC<ArticlesFiltersProps> = ({ setSortByRating, setSortWithDate }) => {
     const [openFilter, setOpenFilter] = useState<null | 'watches' | 'rating' | 'withDate'>(null)
     const [activeSort, setActiveSort] = useState<null | {
          type: 'watches' | 'rating' | 'withDate'
          direction: 'asc' | 'desc' | 'created_at' | 'updated_at'
     }>(null)

     const dropdownRef = useRef<HTMLDivElement | null>(null)

     const handleOpenFilter = (type: 'watches' | 'rating' | 'withDate') => {
          setOpenFilter((prev) => (prev === type ? null : type))
     }

     useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
               if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setOpenFilter(null)
               }
          }

          document.addEventListener('mousedown', handleClickOutside)
          return () => {
               document.removeEventListener('mousedown', handleClickOutside)
          }
     }, [])

     const filters = ['Просмотры', 'По оценке', 'По дате']

     const filterKeys: ('watches' | 'rating' | 'withDate')[] = ['watches', 'rating', 'withDate']

     const isActiveButton = (type: 'watches' | 'rating' | 'withDate') => activeSort?.type === type

     const isActiveOption = (
          type: 'watches' | 'rating' | 'withDate',
          direction: 'asc' | 'desc' | 'created_at' | 'updated_at',
     ) => activeSort?.type === type && activeSort?.direction === direction

     return (
          <div className="relative" ref={dropdownRef}>
               <div className="flex items-center gap-x-1.5">
                    {filters.map((label, indx) => {
                         const type = filterKeys[indx]
                         const isActive = isActiveButton(type)
                         return (
                              <button
                                   key={type}
                                   type="button"
                                   className={`flex cursor-pointer items-center gap-x-2.5 rounded-full border border-[#E6E6E6] px-4 py-2.5 transition-colors lg:px-5 ${
                                        isActive ? 'bg-black text-white' : 'bg-white text-black'
                                   }`}
                                   onClick={() => handleOpenFilter(type)}
                              >
                                   <ArrowDownUp size={18} />
                                   <span className="text-sm font-medium">{label}</span>
                              </button>
                         )
                    })}
               </div>

               {/* Просмотры */}
               {openFilter === 'watches' && (
                    <div className="absolute top-12 z-10">
                         <div className="max-w-80 rounded-2xl border border-[#E6E6E6] bg-white p-2 shadow-lg backdrop-blur-2xl">
                              <div className="flex flex-col gap-y-1.5">
                                   {[
                                        { label: 'Меньше просмотров', dir: 'asc' },
                                        { label: 'Больше просмотров', dir: 'desc' },
                                   ].map(({ label, dir }) => (
                                        <button
                                             key={label}
                                             type="button"
                                             className={`w-full cursor-pointer rounded-2xl p-4 text-xs font-medium transition-all hover:bg-black hover:text-white ${
                                                  isActiveOption('watches', dir as 'asc' | 'desc')
                                                       ? 'bg-black text-white'
                                                       : ''
                                             }`}
                                             onClick={() => {
                                                  setActiveSort({
                                                       type: 'watches',
                                                       direction: dir as 'asc' | 'desc',
                                                  })
                                                  setOpenFilter(null)
                                             }}
                                        >
                                             {label}
                                        </button>
                                   ))}
                              </div>
                         </div>
                    </div>
               )}

               {/* Оценки */}
               {openFilter === 'rating' && (
                    <div className="absolute top-12 left-38 z-10">
                         <div className="max-w-80 rounded-2xl border border-[#E6E6E6] bg-white p-2 shadow-lg backdrop-blur-2xl">
                              <div className="flex flex-col gap-y-1.5">
                                   {[
                                        { label: 'Меньше оценок', dir: 'asc' },
                                        { label: 'Больше оценок', dir: 'desc' },
                                   ].map(({ label, dir }) => (
                                        <button
                                             key={label}
                                             type="button"
                                             className={`w-full cursor-pointer rounded-2xl p-4 text-xs font-medium transition-all hover:bg-black hover:text-white ${
                                                  isActiveOption('rating', dir as 'asc' | 'desc')
                                                       ? 'bg-black text-white'
                                                       : ''
                                             }`}
                                             onClick={() => {
                                                  setActiveSort({
                                                       type: 'rating',
                                                       direction: dir as 'asc' | 'desc',
                                                  })
                                                  setSortByRating(dir as 'asc' | 'desc')
                                                  setOpenFilter(null)
                                             }}
                                        >
                                             {label}
                                        </button>
                                   ))}
                              </div>
                         </div>
                    </div>
               )}

               {/* По дате */}
               {openFilter === 'withDate' && (
                    <div className="absolute top-12 left-72 z-10">
                         <div className="max-w-80 rounded-2xl border border-[#E6E6E6] bg-white p-2 shadow-lg backdrop-blur-2xl">
                              <div className="flex flex-col gap-y-1.5">
                                   {[
                                        { label: 'Сначала старые', dir: 'created_at' },
                                        { label: 'Сначала новые', dir: 'updated_at' },
                                   ].map(({ label, dir }) => (
                                        <button
                                             key={label}
                                             type="button"
                                             className={`w-full cursor-pointer rounded-2xl p-4 text-xs font-medium whitespace-nowrap transition-all hover:bg-black hover:text-white ${
                                                  isActiveOption('withDate', dir as 'created_at' | 'updated_at')
                                                       ? 'bg-black text-white'
                                                       : ''
                                             }`}
                                             onClick={() => {
                                                  setActiveSort({
                                                       type: 'withDate',
                                                       direction: dir as 'created_at' | 'updated_at',
                                                  })
                                                  setSortWithDate(dir as 'created_at' | 'updated_at')
                                                  setOpenFilter(null)
                                             }}
                                        >
                                             {label}
                                        </button>
                                   ))}
                              </div>
                         </div>
                    </div>
               )}
          </div>
     )
}
