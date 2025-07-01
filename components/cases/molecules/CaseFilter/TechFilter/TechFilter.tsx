import { technologies } from '@/constants/tech.constants'
import Image from 'next/image'
import React, { FC } from 'react'

import { TechFilterProps } from './TechFilter.types'

export const TechFilter: FC<TechFilterProps> = (props) => {
    const { matchedTechnologies, title } = props
    return (
        <div className="flex flex-col gap-y-2">
            <h4 className="font-bold text-base">{title}</h4>
            <div className="flex items-center flex-wrap gap-1.5">
                {Array.isArray(matchedTechnologies)
                    ? matchedTechnologies.map(({ name, icon }, idx) => (
                          <button
                              key={`${title}-${idx}`}
                              className="rounded-full bg-white ring ring-[#E6E6E6] group transition-all cursor-pointer py-3 px-7 flex items-center gap-x-2 hover:bg-black hover:ring-black"
                              type="button"
                          >
                              <Image
                                  src={icon || ''}
                                  alt={`${title}-icon`}
                                  width={20}
                                  height={20}
                                  className="w-5 h-5 group-hover:fill-red-900"
                              />
                              <span className="font-bold text-xs text-black group-hover:text-white">
                                  {name}
                              </span>
                          </button>
                      ))
                    : technologies.map(({ name, icon }, idx) => (
                          <button
                              key={`${title}-${idx}`}
                              className="rounded-full bg-white ring ring-[#E6E6E6] group transition-all cursor-pointer py-3 px-7 flex items-center gap-x-2 hover:bg-black hover:ring-black"
                              type="button"
                          >
                              <Image
                                  src={icon || ''}
                                  alt={`${title}-icon`}
                                  width={20}
                                  height={20}
                                  className="w-5 h-5 group-hover:fill-red-900"
                              />
                              <span className="font-bold text-xs text-black group-hover:text-white">
                                  {name}
                              </span>
                          </button>
                      ))}
            </div>
        </div>
    )
}
