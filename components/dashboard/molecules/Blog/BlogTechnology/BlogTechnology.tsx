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
    return (
        <div className="flex items-start gap-x-16">
            <h4 className="font-medium text-sm max-w-32 text-gray-600">
                Технологии, применяемые в разработке
            </h4>
            <div className="grid grid-cols-5 gap-x-16 gap-y-4">
                {Array.isArray(matchedTechnologies)
                    ? matchedTechnologies.map((tech, idx) => (
                          <div
                              key={`${tech?.name}-${idx}`}
                              className="flex items-center gap-x-2 rounded-full border border-[#E6E6E6] p-3.5"
                          >
                              <Image
                                  src={tech?.icon || ''}
                                  alt={`${tech?.name}-icon`}
                                  width={20}
                                  height={20}
                                  className="w-5 h-5"
                              />
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
