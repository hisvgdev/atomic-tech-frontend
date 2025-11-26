import React, { FC } from 'react'

import { AboutUsProps } from './AboutUs.types'
import AboutUsContent from './AboutUsContent'
import AboutUsHeading from './AboutUsHeading'

export const AboutUs: FC<AboutUsProps> = () => {
     return (
          <div className="flex flex-col gap-6 px-7 lg:gap-0">
               <AboutUsHeading />
               <AboutUsContent />
          </div>
     )
}
