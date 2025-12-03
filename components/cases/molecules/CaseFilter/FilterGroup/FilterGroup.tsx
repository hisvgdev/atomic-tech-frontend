'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import { FilterGroupProps } from './FilterGroup.types'

export const FilterGroup: React.FC<FilterGroupProps> = (props) => {
     const { items, title, type } = props

     const router = useRouter()
     const searchParams = useSearchParams()

     const handleFilterClick = (id: string | number, type: 'usluga' | 'category') => {
          const key = type === 'usluga' ? 'usluga_id' : 'category_id'
          const newSearchParams = new URLSearchParams(searchParams.toString())

          const currentValues = newSearchParams.get(key)?.split(',').filter(Boolean) || []
          const idStr = String(id)

          const isActive = currentValues.includes(idStr)
          const updatedValues = isActive ? currentValues.filter((v) => v !== idStr) : [...currentValues, idStr]

          if (updatedValues.length > 0) {
               newSearchParams.set(key, updatedValues.join(','))
          } else {
               newSearchParams.delete(key)
          }

          router.push(`?${newSearchParams.toString()}`)
     }
     return (
          <div className="flex flex-col gap-y-2">
               <h4 className="text-base font-bold">{title}</h4>
               <div className="flex flex-wrap items-center gap-1.5">
                    {items.map(({ id, title }, idx) => {
                         const key = type === 'usluga' ? 'usluga_id' : 'category_id'
                         const activeValues = searchParams.get(key)?.split(',').filter(Boolean) || []
                         const isActive = activeValues.includes(String(id))
                         return (
                              <button
                                   key={`${id}-${idx}`}
                                   type="button"
                                   value={title}
                                   onClick={() => handleFilterClick(id, type)}
                                   className={`flex cursor-pointer items-center gap-x-2 rounded-full px-7 py-3 text-xs font-bold transition-all ${
                                        isActive
                                             ? 'bg-black text-white ring-1 ring-black'
                                             : 'bg-white text-black ring-1 ring-[#E6E6E6] hover:bg-black hover:text-white hover:ring-black'
                                   } `}
                              >
                                   {title}
                              </button>
                         )
                    })}
               </div>
          </div>
     )
}
