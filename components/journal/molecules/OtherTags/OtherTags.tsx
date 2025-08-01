'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { getBlogCategories } from '@/utils/api/blogs/blog-categories/blog-categories'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'

import { OtherTagsProps } from './OtherTags.types'

export const OtherTags: FC<OtherTagsProps> = (props) => {
    const {} = props

    const {
        data: categoriesData,
        isLoading: isCategoriesDataLoading,
        isError: isCategoriesError,
    } = useQuery({
        queryKey: ['blog-categories'],
        queryFn: () => getBlogCategories(),
    })

    if (isCategoriesDataLoading) {
        return <Skeleton className="h-80 w-full rounded-3xl" />
    }
    if (isCategoriesError) return null

    return (
        <section data-dark="true" className="w-full bg-[#000809] py-20 lg:py-32">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
                <div className="flex flex-col gap-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {categoriesData?.data.map((cd) => (
                            <button key={cd.id} type="button" className="cursor-pointer">
                                <div className="flex items-center justify-center gap-x-2">
                                    <h4 className="text-white font-bold text-2xl">
                                        <span className="underline">{cd.name}</span>
                                        <sup className="text-white/50">16</sup>
                                    </h4>
                                    <ArrowRightIcon size={18} color="#9A9C9D" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
