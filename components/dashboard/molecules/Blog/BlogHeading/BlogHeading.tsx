import GradientButton from '@/shared/custom/GradientButton'
import React, { FC } from 'react'

import { RoutesEnum } from '@/types/Routes.types'

import { BlogHeadingProps } from './BlogHeading.types'

export const BlogHeading: FC<BlogHeadingProps> = (props) => {
     const {} = props
     return (
          <div className="flex h-full w-full flex-col lg:w-auto lg:gap-24">
               <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold tracking-tighter lg:text-4xl">
                         Все об «атомах» цифровых экосистем
                    </h1>
                    <span className="text-xl font-normal text-[#3C3C3C]">Читайте в нашем блоге.</span>
               </div>

               <div className="mt-auto hidden lg:block">
                    <GradientButton
                         hasIsRoute
                         routePath={RoutesEnum.journal}
                         title="Перейти в журнал"
                         classNames="py-8 rounded-full text-white w-full"
                         secondClassnames="w-full lg:w-auto"
                    />
               </div>
          </div>
     )
}
