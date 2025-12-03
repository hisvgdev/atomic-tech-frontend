'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { usePostsQuery } from '@/hooks/query/usePostsQuery'
import { useFilteredTaxonomies } from '@/hooks/useFilteredTaxonomies'
import { DotsThreeOutlineIcon, XIcon } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { FC, useState } from 'react'

import { TagsProps } from './Tags.types'

// export const useBlogCategories = () => {
//      return useQuery({
//           queryKey: ['blog-categories'],
//           queryFn: async () => getBlogCategories(),
//      })
// }

export const Tags: FC<TagsProps> = () => {
     const [showAll, setShowAll] = useState(false)
     const pathname = usePathname()
     const searchParams = useSearchParams()
     const {
          data: articlesData,
          isLoading: isArticlesDataLoading,
          isError: isArticlesDataError,
     } = usePostsQuery('articles', 'articles')
     const getActiveItem = searchParams.get('blog_category_id') || ''
     const uniqueTaxonomies = useFilteredTaxonomies(articlesData ?? [])

     if (isArticlesDataError || isArticlesDataLoading) {
          return (
               <div className="grid grid-cols-3 gap-2.5 pt-20 lg:flex lg:items-center lg:justify-center lg:gap-x-20 lg:pt-0">
                    {Array.from({ length: 8 }).map((_, indx) => (
                         <Skeleton key={`${indx}`} className="h-10 w-full rounded-full" />
                    ))}
               </div>
          )
     }

     const cateogires = uniqueTaxonomies.filter((f) => f.type.title === 'Категории')
     const visibleCategories = showAll ? cateogires : cateogires.slice(0, 6)

     return (
          <div className="grid grid-cols-3 gap-4 px-4 lg:mx-auto lg:flex lg:max-w-full lg:flex-wrap lg:items-center lg:justify-center lg:gap-5 lg:pt-0">
               {visibleCategories.map((t, indx) => {
                    // const isActive = getActiveItem === name
                    // const activeClasses = isActive ? 'text-black font-semibold' : 'hover:text-black/50'

                    return (
                         <React.Fragment key={`${t}-${indx}-${indx}`}>
                              <Link
                                   href={
                                        pathname === '/articles'
                                             ? `/articles?blog_category_id=${t}`
                                             : `/journal?blog_category_id=${t}`
                                   }
                                   className={`hidden cursor-pointer font-medium transition-all hover:bg-black hover:text-white lg:block lg:rounded-full lg:border lg:border-[#20202033] lg:px-5 lg:py-2.5`}
                              >
                                   {t.title}
                              </Link>
                              <Link
                                   href={
                                        pathname === '/articles'
                                             ? `/articles?category_id=${t}`
                                             : `/journal?blog_category_id=${t}`
                                   }
                                   className={`flex items-center justify-center rounded-full border border-[#20202033] px-5 py-2.5 text-center text-sm transition-all hover:bg-black hover:text-white lg:hidden`} // ${isActive ? 'ring-2 ring-black' : ''}
                              >
                                   {t.title}
                              </Link>
                         </React.Fragment>
                    )
               })}

               {cateogires.length > 4 && (
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
               {cateogires.length > 4 && (
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
