import Chip from '@/shared/global/Chip'
import React, { FC } from 'react'

import { AboutUsHeadingProps } from './AboutUsHeading.types'

export const AboutUsHeading: FC<AboutUsHeadingProps> = (props) => {
     const {} = props
     return (
          <div className="flex w-full items-center justify-between">
               <div className="flex max-w-5xl items-center">
                    <h1 className="w-full text-8xl font-bold tracking-tighter text-black">Кто мы?</h1>
                    <p className="text-2xl font-normal text-black/70">
                         Команда креативных разработчиков, ориентированных на создание проектов, которыми хочется
                         гордиться.
                    </p>
               </div>
               <Chip number="4" title="О нас" maxW="w-full lg:max-w-42" />
          </div>
     )
}
