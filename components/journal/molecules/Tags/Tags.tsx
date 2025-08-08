'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { getBlogCategories } from '@/utils/api/blogs/blog-categories/blog-categories'
import { DotsThreeOutlineIcon, XIcon } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { FC, useState } from 'react'

import { TagsProps } from './Tags.types'

export const useBlogCategories = () => {
     return useQuery({
          queryKey: ['blog-categories'],
          queryFn: async () => getBlogCategories(),
     })
}

export const Tags: FC<TagsProps> = () => {
     const { data, isLoading, isError } = useBlogCategories()
     const pathname = usePathname()
     const searchParams = useSearchParams()
     const getActiveItem = searchParams.get('blog_category_id') || ''
     const [showAll, setShowAll] = useState(false)

     if (isLoading || isError || !data?.data) {
          return (
               <div className="grid grid-cols-3 gap-2.5 pt-20 lg:flex lg:items-center lg:justify-center lg:gap-x-20 lg:pt-0">
                    {Array.from({ length: 8 }).map((_, indx) => (
                         <Skeleton key={`${indx}`} className="h-10 w-full rounded-full" />
                    ))}
               </div>
          )
     }

     const dataCategories = data.data
     const visibleCategories = showAll ? dataCategories : dataCategories.slice(0, 6)

     return (
          <div className="grid grid-cols-3 gap-4 px-4 pt-20 lg:mx-auto lg:flex lg:max-w-7xl lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-12 lg:gap-y-6 lg:pt-0">
               {visibleCategories.map(({ id, name }, indx) => {
                    const isActive = getActiveItem === name
                    const baseClasses = 'transition-all cursor-pointer'
                    const activeClasses = isActive ? 'text-black font-semibold' : 'hover:text-black/50'

                    return (
                         <React.Fragment key={`${name}-${indx}-${id}`}>
                              <Link
                                   href={
                                        pathname === '/articles'
                                             ? `/articles?blog_category_id=${name}`
                                             : `/journal?blog_category_id=${name}`
                                   }
                                   className={`hidden lg:block ${baseClasses} ${activeClasses}`}
                              >
                                   {name}
                              </Link>
                              <Link
                                   href={
                                        pathname === '/articles'
                                             ? `/articles?category_id=${name}`
                                             : `/journal?blog_category_id=${name}`
                                   }
                                   className={`flex items-center justify-center rounded-full bg-[#EBEBEB] py-2.5 text-center text-sm lg:hidden ${isActive ? 'ring-2 ring-black' : ''}`}
                              >
                                   {name}
                              </Link>
                         </React.Fragment>
                    )
               })}

               {dataCategories.length > 4 && (
                    <button
                         onClick={() => setShowAll((prev) => !prev)}
                         className="hidden cursor-pointer items-center justify-center rounded-full text-center lg:flex"
                    >
                         {showAll ? (
                              <XIcon size={18} color="#000000" weight="regular" />
                         ) : (
                              <DotsThreeOutlineIcon size={24} color="#000000" weight="fill" />
                         )}
                    </button>
               )}
               {dataCategories.length > 4 && (
                    <button
                         onClick={() => setShowAll((prev) => !prev)}
                         className="flex cursor-pointer items-center justify-center rounded-full text-center lg:hidden"
                    >
                         {showAll ? (
                              <button type="button" className="flex items-center gap-2.5">
                                   <span className="text-xs leading-3.5 whitespace-nowrap text-[#000809]">Скрыть</span>
                                   <ChevronUp size={18} />
                              </button>
                         ) : (
                              <button type="button" className="flex items-center gap-2.5">
                                   <span className="text-xs leading-3.5 whitespace-nowrap text-[#000809]">
                                        Открыть больше
                                   </span>
                                   <ChevronDown size={18} />
                              </button>
                         )}
                    </button>
               )}
          </div>
     )
}
