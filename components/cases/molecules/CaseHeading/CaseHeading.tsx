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
    const { servicesData, matchedTechnologies, categoriesData } = props

    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const handleSwitchFilter = () => setIsFilterOpen(!isFilterOpen)
    const filterRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLElement>(null)

    // @ts-ignore
    useOutsideClick([sectionRef, filterRef], () => setIsFilterOpen(false))

    return (
        <section data-dark="false" className="w-full relative" ref={sectionRef}>
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-7xl">Все проекты</h1>
                {!isFilterOpen ? (
                    <Button
                        variant="outline"
                        className="max-w-64 w-full rounded-full cursor-pointer !py-6"
                        onClick={(e) => {
                            e.stopPropagation()
                            handleSwitchFilter()
                        }}
                    >
                        <span className="font-bold text-sm">Настроить фильтры</span>
                        <SlidersHorizontalIcon size={20} color="#1C274C" weight="duotone" />
                    </Button>
                ) : (
                    <Button
                        variant="outline"
                        className="max-w-64 w-full rounded-full cursor-pointer bg-black !py-6 z-30 hover:bg-black"
                        onClick={(e) => {
                            e.stopPropagation()
                            handleSwitchFilter()
                        }}
                    >
                        <span className="font-bold text-sm text-white">Скрыть</span>
                        <XIcon size={20} color="white" />
                    </Button>
                )}
            </div>
            <CaseFilter ref={filterRef} isFilterOpen={isFilterOpen}>
                <FilterGroup title="Услуга" items={servicesData} />
                <FilterGroup title="Категория" items={categoriesData} />
                <TechFilter title="Технология" matchedTechnologies={matchedTechnologies} />
            </CaseFilter>
        </section>
    )
}
