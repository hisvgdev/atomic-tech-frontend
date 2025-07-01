import { getCategories } from '@/utils/api/categories/categories'
import React, { FC } from 'react'

import { TAGS_DATA } from './Tags.constants'
import { TagsProps } from './Tags.types'

export const Tags: FC<TagsProps> = async (props) => {
    const {} = props
    const categories = await getCategories()

    if (!categories) return null

    const dataCategories = categories.data

    return (
        <div className="flex items-center justify-center gap-x-20">
            {Array.isArray(dataCategories)
                ? dataCategories.map(({ id, name }, indx) => {
                      return (
                          <button
                              type="button"
                              key={`${name}-${indx}-${id}`}
                              className="cursor-pointer hover:text-black/50 transition-all"
                          >
                              {name}
                          </button>
                      )
                  })
                : TAGS_DATA.map(({ id, title }, indx) => {
                      return (
                          <button
                              type="button"
                              key={`${indx}-${id}`}
                              className="cursor-pointer hover:text-black/50 transition-all"
                          >
                              {title}
                          </button>
                      )
                  })}
        </div>
    )
}
