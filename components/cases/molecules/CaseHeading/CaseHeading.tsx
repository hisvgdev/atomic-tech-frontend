'use client'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { SlidersHorizontalIcon, XIcon } from '@phosphor-icons/react'
import React, { FC, Suspense, useRef, useState } from 'react'

import CaseFilter from '../CaseFilter'
import FilterGroup from '../CaseFilter/FilterGroup'
import TechFilter from '../CaseFilter/TechFilter'
import { CaseHeadingProps } from './CaseHeading.types'

export const CaseHeading: FC<CaseHeadingProps> = (props) => {
     const { servicesData, matchedTechnologies, categoriesData, lengthOfCases } = props

     const [isFilterOpen, setIsFilterOpen] = useState(false)

     const handleSwitchFilter = () => setIsFilterOpen(!isFilterOpen)
     const filterRef = useRef<HTMLDivElement>(null)
     const sectionRef = useRef<HTMLElement>(null)

     // @ts-ignore
     useOutsideClick([sectionRef, filterRef], () => setIsFilterOpen(false))

     return (
          <section
               data-dark="false"
               className={`relative w-full ${lengthOfCases > 0 ? null : 'h-dvh'} `}
               ref={sectionRef}
          >
               <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <h1 className="hidden text-7xl font-bold lg:block lg:tracking-tighter">Все проекты</h1>
                    <h1 className="block text-5xl font-bold tracking-tighter lg:hidden">Последние проекты</h1>
                    <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                         <PopoverTrigger asChild>
                              <Button
                                   variant="outline"
                                   className={`w-full max-w-64 cursor-pointer rounded-full !py-6 ${
                                        isFilterOpen ? 'bg-black text-white' : ''
                                   }`}
                                   disabled={lengthOfCases <= 0}
                              >
                                   {!isFilterOpen ? (
                                        <>
                                             <span className="text-sm font-bold">Настроить фильтры</span>
                                             <SlidersHorizontalIcon size={20} color="#1C274C" weight="duotone" />
                                        </>
                                   ) : (
                                        <>
                                             <span className="text-sm font-bold text-white">Скрыть</span>
                                             <XIcon size={20} color="white" />
                                        </>
                                   )}
                              </Button>
                         </PopoverTrigger>

                         <PopoverContent
                              align="end"
                              className="mx-2 min-w-sm rounded-3xl bg-white/70 p-0 ring ring-[#E6E6E6]/50 backdrop-blur-2xl md:min-w-xl"
                         >
                              <CaseFilter>
                                   <Suspense>
                                        <FilterGroup title="Категория" items={categoriesData} type="category" />
                                        <FilterGroup title="Услуга" items={servicesData} type="usluga" />
                                        <TechFilter title="Технология" matchedTechnologies={matchedTechnologies} />
                                   </Suspense>
                              </CaseFilter>
                         </PopoverContent>
                    </Popover>
               </div>
          </section>
     )
}
