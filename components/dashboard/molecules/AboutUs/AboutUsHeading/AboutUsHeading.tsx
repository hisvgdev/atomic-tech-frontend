import Chip from '@/shared/global/Chip'
import React, { FC } from 'react'

import { AboutUsHeadingProps } from './AboutUsHeading.types'

export const AboutUsHeading: FC<AboutUsHeadingProps> = (props) => {
     const {} = props
     return (
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
               <div className="flex flex-col items-center gap-2 lg:max-w-5xl lg:flex-row lg:gap-0">
                    <h1 className="w-full text-6xl font-bold tracking-tighter text-black lg:text-8xl">Кто мы?</h1>
                    <p className="text-md font-normal text-black/70 lg:text-2xl">
                         Команда креативных разработчиков, ориентированных на создание проектов, которыми хочется
                         гордиться.
                    </p>
               </div>
               <Chip number="3" title="О нас" maxW="max-w-42" />
          </div>
     )
}
