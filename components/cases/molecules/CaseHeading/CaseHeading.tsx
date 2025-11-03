'use client'

import { Button } from '@/components/ui/button'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { SlidersHorizontalIcon, XIcon } from '@phosphor-icons/react'
import React, { FC, useRef, useState } from 'react'

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
               className={`relative w-full ${lengthOfCases > 0 ? '' : 'h-dvh'} px-4`}
               ref={sectionRef}
          >
               <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <h1 className="hidden text-7xl font-bold lg:block">Все проекты</h1>
                    <h1 className="block text-5xl font-bold lg:hidden">Последние проекты</h1>
                    {!isFilterOpen ? (
                         <Button
                              variant="outline"
                              className="w-full max-w-64 cursor-pointer rounded-full !py-6"
                              onClick={(e) => {
                                   e.stopPropagation()
                                   handleSwitchFilter()
                              }}
                              disabled={lengthOfCases <= 0}
                         >
                              <span className="text-sm font-bold">Настроить фильтры</span>
                              <SlidersHorizontalIcon size={20} color="#1C274C" weight="duotone" />
                         </Button>
                    ) : (
                         <Button
                              variant="outline"
                              className="z-30 w-full max-w-64 cursor-pointer rounded-full bg-black !py-6 hover:bg-black"
                              onClick={(e) => {
                                   e.stopPropagation()
                                   handleSwitchFilter()
                              }}
                         >
                              <span className="text-sm font-bold text-white">Скрыть</span>
                              <XIcon size={20} color="white" />
                         </Button>
                    )}
               </div>
               {lengthOfCases > 0 ? (
                    <CaseFilter ref={filterRef} isFilterOpen={isFilterOpen}>
                         <FilterGroup title="Категория" items={categoriesData} type="category" />
                         <FilterGroup title="Услуга" items={servicesData} type="usluga" />
                         <TechFilter title="Технология" matchedTechnologies={matchedTechnologies} />
                    </CaseFilter>
               ) : null}
          </section>
     )
}
