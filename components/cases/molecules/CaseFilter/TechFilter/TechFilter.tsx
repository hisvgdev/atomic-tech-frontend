import { technologies } from '@/constants/tech.constants'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { FC } from 'react'

import { TechFilterProps } from './TechFilter.types'

export const TechFilter: FC<TechFilterProps> = (props) => {
     const { matchedTechnologies, title } = props
     const router = useRouter()
     const searchParams = useSearchParams()

     const handleTechClick = (techId: string) => {
          const key = 'technology_id'
          const newSearchParams = new URLSearchParams(searchParams.toString())

          const currentValues = newSearchParams.get(key)?.split(',').filter(Boolean) || []
          const techIdStr = String(techId)

          const isActive = currentValues.includes(techIdStr)
          const updatedValues = isActive ? currentValues.filter((v) => v !== techIdStr) : [...currentValues, techIdStr]

          if (updatedValues.length > 0) {
               newSearchParams.set(key, updatedValues.join(','))
          } else {
               newSearchParams.delete(key)
          }

          router.push(`?${newSearchParams.toString()}`)
     }

     const techList = Array.isArray(matchedTechnologies) ? matchedTechnologies : []

     const activeValues = searchParams.get('technology_id')?.split(',').filter(Boolean) || []

     return (
          <div className="flex flex-col gap-y-2">
               <h4 className="text-base font-bold">{title}</h4>
               <div className="flex flex-wrap items-center gap-1.5">
                    {techList.map(({ title, id }, idx) => {
                         const isActive = activeValues.includes(id)
                         return (
                              <button
                                   key={`${title}-${idx}`}
                                   className={`group flex cursor-pointer items-center gap-x-2 rounded-full px-7 py-3 text-xs font-bold transition-all ${
                                        isActive
                                             ? 'bg-black text-white ring-1 ring-black'
                                             : 'bg-white text-black ring-1 ring-[#E6E6E6] hover:bg-black hover:text-white hover:ring-black'
                                   } `}
                                   type="button"
                                   onClick={() => handleTechClick(id)}
                              >
                                   {/* {icon && (
                                <Image
                                    src={icon}
                                    alt={`${title}-icon`}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5"
                                />
                            )} */}
                                   <span className="group-hover:text-white">{title}</span>
                              </button>
                         )
                    })}
               </div>
          </div>
     )
}
