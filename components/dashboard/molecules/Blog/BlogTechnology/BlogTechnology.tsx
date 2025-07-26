import { technologies } from '@/constants/tech.constants'
import { getTechnologies } from '@/utils/api/technologies/technologies'
import Image from 'next/image'
import React, { FC } from 'react'

import { BlogTechnologyProps } from './BlogTechnology.types'

export const BlogTechnology: FC<BlogTechnologyProps> = async () => {
    const data = await getTechnologies()
    if (!data?.success) return null

    const matchedTechnologies = data.data.map((technology) => {
        const matchedTech = technologies.find(
            (tech) => tech.name.toLowerCase() === technology.name.toLowerCase(),
        )
        return {
            name: technology.name,
            icon: matchedTech?.icon,
        }
    })

    if (matchedTechnologies.length <= 0) return null

    return (
        <div className="flex flex-col items-start gap-8 lg:gap-16 lg:flex-row">
            <h4 className="font-medium text-sm max-w-64 text-gray-600 lg:max-w-32">
                Технологии, применяемые в разработке
            </h4>
            <div className="grid grid-cols-3 gap-x-16 gap-y-4 lg:grid-cols-5">
                {Array.isArray(matchedTechnologies)
                    ? matchedTechnologies.map((tech, idx) => (
                          <div
                              key={`${tech?.name}-${idx}`}
                              className="flex items-center gap-x-2 rounded-full border border-[#E6E6E6] p-3.5"
                          >
                              {tech?.icon && (
                                  <Image
                                      src={tech?.icon}
                                      alt={`${tech?.name}-icon`}
                                      width={20}
                                      height={20}
                                      className="w-5 h-5"
                                  />
                              )}
                              <span className="font-extrabold text-xs">{tech?.name}</span>
                          </div>
                      ))
                    : technologies.map((tech, idx) => (
                          <div
                              key={`${tech.name}-${idx}`}
                              className="flex items-center gap-x-2 rounded-full border border-[#E6E6E6] p-3.5"
                          >
                              <Image
                                  src={tech.icon}
                                  alt={`${tech.name}-icon`}
                                  width={20}
                                  height={20}
                                  className="w-5 h-5"
                              />
                              <span className="font-extrabold text-xs">{tech.name}</span>
                          </div>
                      ))}
            </div>
        </div>
    )
}
