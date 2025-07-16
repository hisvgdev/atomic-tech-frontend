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
        <div className="grid grid-cols-3 gap-2.5 pt-20 lg:pt-0 lg:flex lg:items-center lg:justify-center lg:gap-x-20">
            {Array.isArray(dataCategories)
                ? dataCategories.map(({ id, name }, indx) => {
                      return (
                          <React.Fragment key={`${name}-${indx}-${id}`}>
                              <button
                                  type="button"
                                  className="hidden lg:block cursor-pointer hover:text-black/50 transition-all"
                              >
                                  {name}
                              </button>
                              <button
                                  type="button"
                                  className="block bg-[#EBEBEB] py-2.5 rounded-full text-sm lg:hidden"
                              >
                                  {name}
                              </button>
                          </React.Fragment>
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
