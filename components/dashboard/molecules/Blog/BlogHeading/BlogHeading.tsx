import GradientButton from '@/shared/custom/GradientButton'
import React, { FC } from 'react'

import { BlogHeadingProps } from './BlogHeading.types'

export const BlogHeading: FC<BlogHeadingProps> = (props) => {
     const {} = props
     return (
          <div className="flex w-full flex-col gap-8 lg:w-auto lg:gap-y-20">
               <div className="flex flex-col gap-2">
                    <h1 className="text-6xl font-bold -tracking-[0.2rem] lg:text-7xl">Все об IT</h1>
                    <span className="text-2xl font-normal">Уже в нашем журнале</span>
               </div>
               <div className="hidden lg:block">
                    <GradientButton
                         hasIsRoute
                         routePath="/journal"
                         title="Перейти в журнал"
                         classNames="py-8 rounded-full text-white w-full"
                         secondClassnames="w-full lg:w-auto"
                    />
               </div>
          </div>
     )
}
