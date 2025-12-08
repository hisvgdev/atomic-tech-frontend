'use client'

import { technologies } from '@/constants/tech.constants'
import { useTaxonomies } from '@/hooks/query/useTaxonimies'
import Image from 'next/image'

import type { FC } from 'react'

import { BlogTechnologyProps } from './BlogTechnology.types'

export const BlogTechnology: FC<BlogTechnologyProps> = () => {
     const { data, isLoading, isError } = useTaxonomies()

     if (!data) return null

     const matchedTechnologies = data.map((technology) => {
          const matchedTech = technologies.find((tech) => tech.name.toLowerCase() === technology.title.toLowerCase())
          return {
               name: technology.title,
               icon: matchedTech?.icon,
          }
     })

     if (matchedTechnologies.length <= 0) return null

     return (
          <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-16">
               <h4 className="max-w-64 text-sm font-medium text-gray-600 lg:max-w-32">
                    Технологии, применяемые в разработке
               </h4>
               <div className="grid grid-cols-3 gap-2 lg:grid-cols-5 lg:gap-4 xl:grid-cols-7">
                    {Array.isArray(matchedTechnologies)
                         ? matchedTechnologies.map((tech, idx) => (
                                <div
                                     key={`${tech?.name}-${idx}`}
                                     className="group flex w-full items-center gap-2 overflow-hidden rounded-full px-4 py-2 ring ring-[#E6E6E6] transition-all hover:bg-black hover:text-white hover:ring-0"
                                >
                                     {tech?.icon ? (
                                          <div className="flex w-full items-center justify-center gap-2">
                                               <Image
                                                    src={tech?.icon}
                                                    alt={`${tech?.name}-icon`}
                                                    width={20}
                                                    height={20}
                                                    className="h-5 w-5 transition-all group-hover:invert-100"
                                               />
                                               <span className={`text-xs font-extrabold`}>{tech?.name}</span>
                                          </div>
                                     ) : (
                                          <span
                                               className={` ${tech.icon ? null : 'w-full text-center'} text-xs font-extrabold`}
                                          >
                                               {tech?.name}
                                          </span>
                                     )}
                                </div>
                           ))
                         : technologies.map((tech, idx) => (
                                <div
                                     key={`${tech.name}-${idx}`}
                                     className="flex items-center gap-x-2 rounded-full border border-[#E6E6E6] px-4 py-2"
                                >
                                     <Image
                                          src={tech.icon}
                                          alt={`${tech.name}-icon`}
                                          width={20}
                                          height={20}
                                          className="transtion-all h-5 w-5 group-hover:invert-100"
                                     />
                                     <span className="text-xs font-extrabold">{tech.name}</span>
                                </div>
                           ))}
               </div>
          </div>
     )
}
