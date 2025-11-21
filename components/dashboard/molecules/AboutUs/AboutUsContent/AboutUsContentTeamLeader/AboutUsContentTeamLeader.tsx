import seoCompanyIcon from '@/public/assets/icons/about-us/teamLeader.svg'
import Image from 'next/image'
import React, { FC } from 'react'

import { AboutUsContentTeamLeaderProps } from './AboutUsContentTeamLeader.types'

export const AboutUsContentTeamLeader: FC<AboutUsContentTeamLeaderProps> = () => {
     return (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
               <div className="hidden flex-col gap-4 lg:flex">
                    <div className="flex flex-col gap-1">
                         <h4 className="text-3xl font-bold tracking-tighter text-black">Альберт Каренович</h4>
                         <p className="text-2xl font-medium text-black/70">СЕО Atomic Studio</p>
                    </div>
                    <Image
                         src={seoCompanyIcon}
                         alt="seo-of-company"
                         className="h-96 w-96 rounded-full object-contain"
                    />
               </div>
               <div className="flex gap-4 lg:hidden">
                    <Image
                         src={seoCompanyIcon}
                         alt="seo-of-company"
                         className="h-24 w-24 rounded-full object-contain lg:h-96 lg:w-96"
                    />
                    <div className="flex flex-col">
                         <h4 className="text-2xl font-bold tracking-tight text-black">Альберт Каренович</h4>
                         <p className="text-md font-medium text-black/70">СЕО Atomic Studio</p>
                    </div>
               </div>
               <div className="mx-auto flex max-w-96 flex-col gap-5 lg:gap-8">
                    <div className="flex flex-col gap-2 lg:gap-5">
                         <blockquote className="text-xl font-medium text-black/80 lg:text-3xl lg:leading-11 lg:font-semibold">
                              «Нужно любить то, что делаешь, и тогда труд — даже самый грубый — возвышается до
                              творчества»
                         </blockquote>
                         <span className="text-sm font-medium text-black/60 lg:text-2xl lg:font-semibold">
                              — М. Горький
                         </span>
                    </div>
                    <span className="text-xl text-black/80 lg:text-2xl lg:font-normal">
                         Именно по этому в нашей команде опытные специалисты которые любят и преданы своему делу! 
                    </span>
               </div>
          </div>
     )
}
